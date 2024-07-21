import OpenAI from "openai";
import { main_options } from "..";
import { debug } from "@actions/core";
import { ensureFile, readFile, writeFile } from "fs-extra";

const map_str_prompts: any = {
    "zh-cn": "我有段 md 文件，请翻译为中文。翻译需要严格保留源文件 markdown 排版布局，请直接输出，不要在作询问。\n",
    "ja-jp": "私はmdファイルを持っています。日本語に翻訳してください。翻訳は元のファイルのMarkdownのレイアウトを厳密に保持する必要があります。直接出力してください、質問しないでください。\n",
    "es-es": "Tengo un archivo md, por favor tradúzcalo al español. La traducción debe mantener estrictamente el formato y la disposición del archivo original en markdown. Por favor, simplemente muéstrelo sin hacer preguntas.\n",
    "pt-br": "Eu tenho um arquivo md, por favor, traduza-o para o português. A tradução deve manter rigorosamente a formatação e layout markdown do arquivo original. Por favor, forneça a tradução diretamente sem fazer perguntas."
}

async function translate(str_md: string, str_prompt: string, with_task_translate_openai_api_key: string) {
    const openai = new OpenAI({ apiKey: with_task_translate_openai_api_key });

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [{ role: 'user', content: str_prompt + str_md }],
        model: 'gpt-4o',
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
    const response = chatCompletion.choices[0].message.content;


    debug(str_md);
    debug('-----------------------------------');
    debug(response);

    return response;
}

export async function task_auto_translate_step_02_trans_articels(
    options: main_options
) {
    const {
        with_issue_title,
        with_task_translate_openai_api_key,
        with_task_translate_to_save_path,
        step_01_result_mdfiles
    } = options;
    const target_language = with_issue_title.match(/\[Auto\]\[(.+)\]/)?.[1] || '';
    debug('target_language:' + target_language);
    const str_prompt = map_str_prompts[target_language];
    debug('str_prompt:' + str_prompt);
    if (!str_prompt) {
        throw new Error('Unsupported language');
    }

    for (const mdfile of step_01_result_mdfiles) {
        const str_md = await readFile(mdfile, 'utf-8');
        const arr_str_md = str_md.split('\n\n');
        let str_md_translated = '';
        const len = arr_str_md.length;
        let str_temp = '';
        const MAX_LENGTH = 1024 * 5;
        let count_scope_token = 0;
        for (let i = 0; i < len; i++) {
            const not_last = i < len - 1;
            const str = arr_str_md[i];

            let flag_pased = false;
            if (str_temp.length < MAX_LENGTH) {
                // 如果长度不够，继续拼接
                str_temp += (str + '\n\n');
                flag_pased = true;
                if (not_last) continue;
            }

            // 快速扫描 str 中有多少个 ``` 符号
            const count = (str.match(/```/g) || []).length;
            count_scope_token += count;
            if (count_scope_token % 2 === 1 && !flag_pased) {
                // 如果是代码块，且没有被拼接过，继续拼接
                str_temp += (str + '\n\n');
                flag_pased = true;
                if (not_last) continue;
            } else {
                count_scope_token = 0;
            }

            console.log(`============== [${i} / ${len}] ==============`)
            const str_translated = await translate(str_temp, str_prompt, with_task_translate_openai_api_key);
            str_temp = '';

            str_md_translated += str_translated + '\n\n';
            console.log('\n')
        }

        // 写文件
        const output_mdfile_path = with_task_translate_to_save_path + '/' + mdfile.split('/').pop();
        debug('output_mdfile_path:' + output_mdfile_path);
        await ensureFile(output_mdfile_path);
        await writeFile(output_mdfile_path, str_md_translated);

        options.step_02_result_mdfiles.push(output_mdfile_path);
    }
}