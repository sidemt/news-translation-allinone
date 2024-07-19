```Bash
ls $the_path
```

`echo` コマンドを使用してターミナルにメッセージを表示し、`read` コマンドでユーザーから入力を受け取ります。そして、最後に `ls` コマンドを使用して入力されたパスのディレクトリ内容を一覧表示します。

### スクリプトを実行可能にする

スクリプトを作成したら、次にそのスクリプトを実行可能にする必要があります。これを行うには、`chmod` コマンドを使用してファイルに実行可能権限を付与します：

```Bash
chmod +x run_all.sh
```

### スクリプトを実行する

スクリプトを実行可能にしたら、次のようにしてスクリプトを実行できます：

```Bash
./run_all.sh
```

スクリプトを実行すると、以下のような出力が表示されます：

```
Today is Tue Mar 14 13:08:57 PKT 2023

enter the path to directory
/home/zaira/shell-tutorial
check_plaindrome.sh  count_odd.sh  env  log  temp
```

## Bash スクリプトの基本

### Bash スクリプトでのコメント

Bash スクリプト内でコメントを追加することで、スクリプトの説明やメモを挿入することができます。コメントは `#` で始まり、行の残りの部分は無視されます。以下に例を示します：

```Bash
#!/bin/bash

# 一行コメント
echo "This is a comment example"
```

複数行のコメントを追加する場合は、`:` と `<<` を使用して `EOF` ブロックを作成します：

```Bash
#!/bin/bash

: << 'EOF'
これは
複数行の
コメントです
EOF
```

### Bash における変数とデータ型

Bash スクリプトで変数を定義するには、次の構文を使用します：

```Bash
variable_name=value
```

変数の値を取得するには `$` 記号を使用します：

```Bash
echo $variable_name
```

Bash では、変数のデータ型を明示的に宣言する必要はありません。以下は変数使用の例です：

```Bash
#!/bin/bash

# 変数の宣言と代入
name="Zaira"

# 変数の値を表示
echo "Hello, $name"
```

### 入力と出力に関する Bash スクリプト

ユーザーからの入力を受け取るには `read` コマンドを使用し、ターミナルに出力するには `echo` コマンドを使用します：

```Bash
#!/bin/bash

echo "Enter your name:"
read name
echo "Hello, $name"
```

### 基本的な Bash コマンド (echo、read など)

ここでは、基本的な Bash コマンドをいくつか紹介します：

- `echo`: メッセージをターミナルに表示します。

```Bash
echo "Hello, World!"
```

- `read`: ユーザーからの入力を受け取ります。

```Bash
read input_variable
```

- `date`: 現在の日付と時刻を表示します。

```Bash
date
```

- `pwd`: 現在の作業ディレクトリを表示します。

```Bash
pwd
```

- `ls`: ディレクトリの内容を一覧表示します。

```Bash
ls
```

### 条件文 (if / else)

条件分岐を使用して、スクリプト内で異なるアクションを実行することができます。以下に `if / else` 文の例を示します：

```Bash
#!/bin/bash

echo "Enter a number:"
read num

if [ $num -gt 10 ]; then
    echo "$num is greater than 10"
else
    echo "$num is less than or equal to 10"
fi
```

`if` 文の中で `[]` スクエアブラケットを使用します。また、様々な比較演算子が使用可能です。例えば、`-gt` は "greater than" (より大きい) を意味します。

## Bash におけるループと分岐

### While ループ

`while` ループを使用して、条件が真の間スクリプトの一部を繰り返し実行できます：

```Bash
#!/bin/bash

counter=1

while [ $counter -le 5 ]
do
    echo "Counter: $counter"
    ((counter++))
done
```

### For ループ

`for` ループを使用して、特定の範囲やリスト内の各アイテムを反復処理することができます：

```Bash
#!/bin/bash

for i in {1..5}
do
    echo "Number: $i"
done
```

### Case 文

`case` 文を使用して、変数の値に応じて異なるアクションを実行することができます：

```Bash
#!/bin/bash

echo "Enter a number between 1 and 3:"
read num

case $num in
    1)
        echo "You entered one."
        ;;
    2)
        echo "You entered two."
        ;;
    3)
        echo "You entered three."
        ;;
    *)
        echo "Invalid input."
        ;;
esac
```

## cron を使用したスクリプトのスケジュール設定方法

`cron` ジョブを使用して、特定の時間にスクリプトを自動実行することができます。`crontab` ファイルを編集するには次のコマンドを使用します：

```Bash
crontab -e
```

以下に例を示します。毎日午前 2 時にスクリプトを実行します：

```Bash
0 2 * * * /path/to/your/script.sh
```

## Bash スクリプトのデバッグとトラブルシューティング方法

スクリプトのデバッグには、`-x` オプションを使用してシェルスクリプトを実行します。これにより、各コマンドが実行される前に表示されます：

```Bash
bash -x script.sh
```

また、エラーを表示するために `-e` オプションを使用することもできます：

```Bash
#!/bin/bash -e
```

## 結論

### Bash スクリプトに関するさらなる学習リソース

Bash スクリプトの学習を進めるために、以下のリソースを参考にしてください：

- [The Linux Command Line](http://linuxcommand.org/tlcl.php) - コマンドラインと Bash スクリプトに関する無料の本。
- [Bash Guide for Beginners](http://tldp.org/LDP/Bash-Beginners-Guide/html/) - 初心者向けの Bash スクリプトガイド。

まずは基本をしっかりと学び、実際に自分でスクリプトを書いて試してみてください。練習に勝るものはありません。Happy scripting! 🚀

[1]: https://www.freecodecamp.org/japanese/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/
[2]: #事前準備
[3]: #はじめに
[4]: #bash-スクリプトの定義
[5]: #bash-スクリプトの利点
[6]: #bash-シェルとコマンドラインインターフェースの概要
[7]: #bash-スクリプトの始め方
[8]: #コマンドラインから-bash-コマンドを実行する方法
[9]: #bash-スクリプトの作成と実行方法
[10]: #bash-スクリプトの基本
[11]: #bash-スクリプトでのコメント
[12]: #bash-における変数とデータ型
[13]: #入力と出力に関する-bash-スクリプト
[14]: #基本的な-bash-コマンド-echo-read-など
[15]: #条件文-if-else
[16]: #bash-におけるループと分岐
[17]: #while-ループ
[18]: #for-ループ
[19]: #case-文
[20]: #cron-を使用したスクリプトのスケジュール設定方法
[21]: #bash-スクリプトのデバッグとトラブルシューティング方法
[22]: #結論
[23]: #bash-スクリプトに関するさらなる学習リソース
[24]: https://replit.com/
[25]: https://learn.microsoft.com/en-us/windows/wsl/install
```

ユーザーが指定したディレクトリの内容を表示するスクリプト

スクリプトを行ごとに詳しく見てみましょう。同じスクリプトを、行番号付きで以下に示します。

```Bash
  1 #!/bin/bash
  2 echo "今日は " `date`
  3
  4 echo -e "\nディレクトリのパスを入力してください"
  5 read the_path
  6
  7 echo -e "\n指定されたパスには次のファイルとフォルダがあります: "
  8 ls $the_path
```

-   1 行目: シバン (`#!/bin/bash`) は Bash シェルのパスを指します。
-   2 行目: `echo` コマンドはバッククォートで囲まれた `date` を使用して、現在の日付と時刻をターミナルに表示します。
-   4 行目: ユーザーに有効なパスを入力してもらいます。
-   5 行目: `read` コマンドは入力を読み取り、変数 `the_path` に格納します。
-   8 行目: `ls` コマンドは変数に格納されたパスを取り、現在のファイルやフォルダを表示します。

### Bash スクリプトを実行する

スクリプトを実行可能にするために、次のコマンドでユーザーに実行権限を付与します:

```Bash
chmod u+x run_all.sh
```

ここでは、

-   `chmod` は現在のユーザー `u` のファイルの所有権を変更します。
-   `+x` は現在のユーザーに実行権限を追加します。これにより、ファイルの所有者であるユーザーがスクリプトを実行できるようになります。
-   `run_all.sh` は実行可能にしたいファイルです。

以下の方法でスクリプトを実行できます:

-   `sh run_all.sh`
-   `bash run_all.sh`
-   `./run_all.sh`

それでは実際に動作する様子を見てみましょう🚀

![run-script-bash-2](https://www.freecodecamp.org/japanese/news/content/images/2024/06/run-script-bash-2.gif)

## Bash スクリプトの基本

### Bash スクリプトでのコメント

Bash スクリプトのコメントは `#` から始まります。つまり、`#` で始まる行はコメントであり、インタープリターに無視されます。

コメントはコードのドキュメント化に非常に役立ち、他の人がコードを理解しやすくするためにも、コメントを追加するのは良い習慣です。

以下はコメントの例です:

```bash
# これは例のコメントです
# これらの行はインタープリターによって無視されます
```

### Bash における変数とデータ型

変数を使用するとデータを保存できます。変数を使ってスクリプトのあらゆる場所でデータを読み取り、アクセスし、操作することができます。

Bash にはデータ型がありません。Bash では、変数は数値、個々の文字、または文字列を保存することができます。

Bash では、変数の値を以下のように使用および設定できます:

1.  直接値を割り当てる例:

```bash
country=Pakistan
```

2.  コマンド置換を使用して、プログラムやコマンドの出力に基づいて値を割り当てる例。既存の変数の値にアクセスするには `$` が必要です。

```bash
same_country=$country
```

`country` の値を新しい変数 `same_country` に割り当てる

変数の値にアクセスするには、変数名の頭に `$` を付け加えます。

```bash
zaira@Zaira:~$ country=Pakistan
zaira@Zaira:~$ echo $country
Pakistan
zaira@Zaira:~$ new_country=$country
zaira@Zaira:~$ echo $new_country
Pakistan
```

変数に値を割り当てて値を表示する

### 変数の命名規則

Bash スクリプティングにおける変数の命名規則は以下の通りです:

1.  変数名は文字またはアンダースコア (`_`) で始める必要があります。
2.  変数名には文字、数字、アンダースコア (`_`) を含めることができます。
3.  変数名は大文字と小文字を区別します。
4.  変数名にはスペースや特殊文字を含めることはできません。
5.  変数の目的を反映した説明的な名前を使用します。
6.  `if`、`then`、`else`、`fi` などの予約キーワードを変数名として使用することは避けます。

以下は Bash で有効な変数名の例です:

```bash
name
count
_var
myVar
MY_VAR
```

以下は Bash で無効な変数名の例です:

```bash
2ndvar (変数名が数字で始まる)
my var (変数名にスペースが含まれる)
my-var (変数名にハイフンが含まれる)
```

これらの命名規則に従うことは、Bash スクリプトをより読みやすく、メンテナンスしやすくするのに役立ちます。

### 入力と出力に関する Bash スクリプト

### 入力の収集

このセクションでは、スクリプトに入力を提供するいくつかの方法について説明します。

1.  ユーザーの入力を読み取り、変数に格納する方法

`read` コマンドを使用してユーザーの入力を読み取ることができます。

```bash
#!/bin/bash 

echo "お名前は何ですか？" 

read entered_name 

echo -e "\nBash チュートリアルへようこそ、" $entered_name
```

![name-sh](https://www.freecodecamp.org/japanese/news/content/images/2024/07/name-sh.gif)

2.  ファイルから読み取る方法

このコードは、`input.txt` という名前のファイルから各行を読み取り、それをターミナルに出力します。while ループについては後ほど学びます。

```bash
while read line
do
  echo $line
done < input.txt
```

3.  コマンドライン引数を使う方法

Bash スクリプトや関数では、`$1` は渡された最初の引数、`$2` は 2 番目の引数を表します。その後の数字も同様です。

下記のスクリプトは、コマンドライン引数として名前を受け取り、個別の挨拶メッセージを表示します。

```bash
echo "Hello, $1!"
```

スクリプトに引数として `Zaira` を渡してみます。

```bash
#!/bin/bash
echo "Hello, $1!"
```

スクリプト `greeting.sh` のコード

**出力:**

![name-sh-1](https://www.freecodecamp.org/japanese/news/content/images/2024/07/name-sh-1.gif)

### 出力の表示

ここでは、スクリプトから出力を受け取るいくつかの方法について説明します。

1.  ターミナルへの出力:

```bash
echo "Hello, World!"
```

これは、ターミナルに「Hello, World!」というテキストを表示します。

2.  ファイルへの書き込み:

```bash
echo "これはテキストです。" > output.txt
```

これは、「これはテキストです。」というテキストを `output.txt` という名前のファイルに書き込みます。なお、`>` 演算子はファイルに既に内容がある場合、それを上書きします。

3.  ファイルへの追記:

```bash
echo "追加のテキスト。" >> output.txt
```

これは、「追加のテキスト。」というテキストを `output.txt` ファイルの末尾に追記します。

4.  出力のリダイレクト:

```bash
ls > files.txt
```

これは、現在のディレクトリ内のファイルを一覧表示し、その出力を `files.txt` という名前のファイルに書き込みます。この方法で任意のコマンドの出力をファイルにリダイレクトできます。

### 基本的な Bash コマンド (echo、read など)

以下は、最もよく使われる Bash コマンドのリストです:

1.  `cd`: ディレクトリを別の場所に変更します。
2.  `ls`: 現在のディレクトリの内容を一覧表示します。
3.  `mkdir`: 新しいディレクトリを作成します。
4.  `touch`: 新しいファイルを作成します。
5.  `rm`: ファイルまたはディレクトリを削除します。
6.  `cp`: ファイルまたはディレクトリをコピーします。
7.  `mv`: ファイルまたはディレクトリを移動または名前を変更します。
8.  `echo`: テキストをターミナルに表示します。
9.  `cat`: ファイルの内容を連結して表示します。
10.  `grep`: ファイル内のパターンを検索します。
11.  `chmod`: ファイルまたはディレクトリの権限を変更します。
12.  `sudo`: 管理者権限でコマンドを実行します。
13.  `df`: 使用可能なディスク容量を表示します。
14.  `history`: 以前に実行したコマンドのリストを表示します。
15.  `ps`: 実行中のプロセスに関する情報を表示します。

### 条件文 (if / else)

条件を評価してブール値 (true または false) を返す式は、条件と呼ばれます。条件を評価する方法には、`if`、`if-else`、`if-elif-else`、およびネストした条件分岐があります。

**構文:**

```bash
if [[ condition ]];
then
	statement
elif [[ condition ]]; then
	statement 
else
	do this by default
fi
```

Bash の条件文の構文

論理演算子、AND `-a` および OR `-o`、を使用して、より詳細な比較を行うことができます。

```bash
if [ $a -gt 60 -a $b -lt 100 ]
```

この文は、「a が 60 より大きい」かつ「b が 100 未満」という両方の条件が `true` であるかどうかをチェックします。

ここでは、ユーザーが入力した数値が正、負、またはゼロのいずれかを判定するために、`if`、`if-else`、および `if-elif-else` 文を使用する Bash スクリプトの例を見てみましょう。

```bash
#!/bin/bash

echo "数値を入力してください: "
read num

if [ $num -gt 0 ]; then
  echo "$num は正の数です"
elif [ $num -lt 0 ]; then
  echo "$num は負の数です"
else
  echo "$num はゼロです"
fi
```

最初に、スクリプトはユーザーに数値の入力を促します。次に、その数値が 0 より大きいかどうかを `if` 文でチェックします。もし数値が 0 より大きければ、スクリプトは数値が正であると出力します。当てはまらない場合、スクリプトは次の `if-elif` 文に進みます。ここで、スクリプトは数値が 0 より小さいかどうかをチェックします。もし数値が 0 より小さければ、スクリプトは数値が負であると出力します。最後に、もし数値が 0 より大きくも小さくもなければ、スクリプトは `else` 文を使用して数値がゼロであることを出力します。

実際に動作を見てみましょう🚀

![test-odd](https://www.freecodecamp.org/japanese/news/content/images/2024/07/test-odd.gif)

## Bash におけるループと分岐

### While ループ

While ループは条件を確認し、条件が `true` の間ループします。ループの実行を制御するために、カウンター文を提供する必要があります。

以下の例では、`(( i += 1 ))` がカウンター文であり、`i` の値を増やします。このループはちょうど 10 回実行されます。

```bash
#!/bin/bash
i=1
while [[ $i -le 10 ]] ; do
   echo "$i"
  (( i += 1 ))
done
```

10 回繰り返す While ループ

![image-187](https://www.freecodecamp.org/japanese/news/content/images/2024/07/image-187.png)

### For ループ

`for` ループも、`while` ループと同様に、特定の回数だけステートメントを実行することができます。それぞれのループは構文と使用方法が異なります。

以下の例では、ループは 5 回繰り返されます。

```bash
#!/bin/bash

for i in {1..5}
do
    echo $i
done
```

5 回繰り返す For ループ

![image-186](https://www.freecodecamp.org/japanese/news/content/images/2024/07/image-186.png)

### Case 文

Bash では、case 文を使用して、与えられた値をパターンのリストと比較し、最初にマッチしたパターンに基づいてコードブロックを実行することができます。Bash における case 文の構文は以下の通りです:

```bash
case expression in
    pattern1)
        # code to execute if expression matches pattern1
        ;;
    pattern2)
        # code to execute if expression matches pattern2
        ;;
    pattern3)
        # code to execute if expression matches pattern3
        ;;
    *)
        # code to execute if none of the above patterns match expression
        ;;
esac
```

case 文の構文

ここでは、「expression」は比較したい値であり、「pattern1」、「pattern2」、「pattern3」などが比較対象にしたいパターンです。

二重のセミコロン ";;" は、各パターンに対して実行するコードブロックを区切ります。アスタリスク "\*" はデフォルトのケースを表し、指定されたパターンのどれも一致しない場合に実行されます。

例を見てみましょう。

```bash
fruit="apple"

case $fruit in
    "apple")
        echo "This is a red fruit."
        ;;
    "banana")
        echo "This is a yellow fruit."
        ;;
    "orange")
        echo "This is an orange fruit."
        ;;
    *)
        echo "Unknown fruit."
        ;;
esac
```

case 文の例

この例では、「fruit」の値が「apple」であるため、最初のパターンが一致し、「This is a red fruit.」と出力するコードブロックが実行されます。もし "fruit" の値が代わりに "banana" であれば、2 番目のパターンが一致し、「This is a yellow fruit.」と出力するコードブロックが実行されます。そして、「fruit」の値が指定されたどのパターンにも一致しない場合は、デフォルトのケースが実行され、「Unknown fruit.」と出力されます。

## cron を使用したスクリプトのスケジュール設定方法

Cron は、Unix 系オペレーティングシステムで利用可能なジョブスケジューリングの強力なユーティリティです。cron を設定することで、日次、週次、月次、または特定の時間ベースで自動ジョブを設定することができます。cron が提供する自動化機能は、Linux システム管理において重要な役割を果たします。

以下は cron をスケジュールするための構文です:

```bash
# Cron job example
* * * * * sh /path/to/script.sh
```

この `*` は、それぞれ分、時、日、月、曜日を表します。

以下は cron ジョブをスケジュールするいくつかの例です。

| スケジュール | 説明 | 例 |
| --- | --- | --- |
| `0 0 * * *` | 毎日真夜中にスクリプトを実行する | `0 0 * * * /path/to/script.sh` |
| `*/5 * * * *` | 5 分ごとにスクリプトを実行する | `*/5 * * * * /path/to/script.sh` |
| `0 6 * * 1-5` | 月曜日から金曜日の朝 6 時にスクリプトを実行する | `0 6 * * 1-5 /path/to/script.sh` |
| `0 0 1-7 * *` | 毎月最初の 7 日間にスクリプトを実行する | `0 0 1-7 * * /path/to/script.sh` |
| `0 12 1 * *` | 毎月 1 日の正午にスクリプトを実行する | `0 12 1 * * /path/to/script.sh` |

### crontab を使用する

`crontab` ユーティリティは、cron ジョブを追加および編集するために使用されます。

`crontab -l` は特定のユーザーに予定されているスクリプトのリストを表示します。

`crontab -e` を使用して cron を追加および編集できます。

[他の記事で cron ジョブについて詳しく読む][26]ことができます。

## Bash スクリプトのデバッグとトラブルシューティング方法

デバッグとトラブルシューティングは、どんな Bash スクリプトの作成者にとっても重要なスキルです。Bash スクリプトは非常にパワフルですが、エラーや予期しない動作が発生することもあります。このセクションでは、Bash スクリプトのデバッグとトラブルシューティングのためのいくつかのヒントやテクニックについて説明します。

### `set -x` オプションを設定する

Bash スクリプトをデバッグするための最も有用なテクニックの 1 つは、スクリプトの先頭で `set -x` オプションを設定することです。このオプションを設定すると、Bash はデバッグモードが有効になり、実行する各コマンドの先頭に `+` 記号を付けて端末に出力します。これは、スクリプト内でどこでエラーが発生しているかを特定するのに非常に役立ちます。

```bash
#!/bin/bash

set -x

# Your script goes here
```

### 終了コードを確認する

Bash がエラーに遭遇すると、そのエラーの性質を示す終了コードが設定されます。直近で実行したコマンドの終了コードは、`$?` 変数を使用して確認できます。値が `0` の場合、成功を示し、それ以外の値はエラーを示します。

```bash
#!/bin/bash

# Your script goes here

if [ $? -ne 0 ]; then
    echo "Error occurred."
fi
```

### `echo` 文を使用する

Bash スクリプトをデバッグする別の有用なテクニックは、コード全体に `echo` 文を挿入することです。これにより、どこでエラーが発生しているかや変数に渡されている値を特定するのに役立ちます。

```bash
#!/bin/bash

# Your script goes here

echo "Value of variable x is: $x"

# More code goes here
```

`set -e` オプションを使用する

スクリプト内の任意のコマンドが失敗した場合にスクリプトを直ちに終了させたい場合は、`set -e` オプションを使用できます。このオプションにより、スクリプト内のどのコマンドが失敗しても Bash はエラーで終了し、スクリプト内のエラーを特定して修正することが容易になります。

```bash
#!/bin/bash

set -e

# Your script goes here
```

### ログを確認して cron のトラブルシューティングを行う

ログファイルを使用して cron のトラブルシューティングを行うことができます。スケジュールされたすべてのジョブについて、ログが保持されています。特定のジョブが意図通りに実行されたかどうか、ログを確認して検証することができます。

Ubuntu や Debian の場合、`cron` ログは次の場所にあります:

```bash
/var/log/syslog
```

他のディストリビューションでは場所が異なる場合があります。

cron ジョブのログファイルは次のようになっているでしょう:

```bash
2022-03-11 00:00:01 Task started
2022-03-11 00:00:02 Running script /path/to/script.sh
2022-03-11 00:00:03 Script completed successfully
2022-03-11 00:05:01 Task started
2022-03-11 00:05:02 Running script /path/to/script.sh
2022-03-11 00:05:03 Error: unable to connect to database
2022-03-11 00:05:03 Script exited with error code 1
2022-03-11 00:10:01 Task started
2022-03-11 00:10:02 Running script /path/to/script.sh
2022-03-11 00:10:03 Script completed successfully
```

## Conclusion

In this article, we first explained how to access the terminal and how to run some basic Bash commands. We also learned about the Bash shell in general. We briefly looked at branching code using loops and conditional statements. Lastly, we discussed script automation using cron and some troubleshooting techniques.

### Further Learning Resources on Bash Scripting

If you want to dive deeper into the world of Bash scripting, we recommend a 6-hour video course on Linux by freeCodeCamp.

<iframe width="200" height="113" src="https://www.youtube.com/embed/sWbUDq4S6Y8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="Introduction to Linux – Full Course for Beginners" name="fitvid0"></iframe>

What was your favorite thing you learned in this tutorial? Also, you can connect with me on this [platform][27]. 📧

See you in the next tutorial. Enjoy coding 😁

Credit for the banner image: Image by [Freepik][28]

[1]: https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/
[2]: #pre-requisites
[3]: #introduction
[4]: #definition-of-bash-scripting
[5]: #advantages-of-bash-scripting
[6]: #overview-of-bash-shell-and-command-line-interface
[7]: #how-to-get-started-with-bash-scripting
[8]: #how-to-run-bash-commands-from-the-command-line
[9]: #how-to-create-and-execute-bash-scripts
[10]: #bash-scripting-basics
[11]: #comments-in-bash-scripting
[12]: #variables-and-data-types-in-bash
[13]: #input-and-output-in-bash-scripts
[14]: #basic-bash-commands-echo-read-etc-
[15]: #conditional-statements-if-else-
[16]: #looping-and-branching-in-bash
[17]: #while-loop
[18]: #for-loop
[19]: #case-statements
[20]: #how-to-schedule-scripts-using-cron
[21]: #how-to-debug-and-troubleshoot-bash-scripts
[22]: #conclusion
[23]: #resources-for-learning-more-about-bash-scripting
[24]: https://replit.com/~
[25]: https://www.freecodecamp.org/news/how-to-install-wsl2-windows-subsystem-for-linux-2-on-windows-10/
[26]: https://www.freecodecamp.org/news/cron-jobs-in-linux/
[27]: https://zaira_.bio.link/
[28]: https://www.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_25726540.htm#query=programmer%20linux&position=4&from_view=search&track=ais
