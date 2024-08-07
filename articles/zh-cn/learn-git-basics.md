---
title: 学习 Git 基础知识 – 日常开发任务手册
date: 2024-04-03T03:57:39.000Z
author: Samyak Jain
authorURL: https://www.freecodecamp.org/news/author/samyak/
originalURL: https://www.freecodecamp.org/news/learn-git-basics/
translator: ""
reviewer: ""
---

/ [#Git][1]

<!-- more -->

# 学习 Git 基础知识 – 日常开发任务手册

![Samyak Jain](https://www.freecodecamp.org/news/content/images/size/w60/2024/02/profilepic.png)

[Samyak Jain][2]

![学习 Git 基础知识 – 日常开发任务手册](https://www.freecodecamp.org/news/content/images/size/w2000/2024/04/Learn-Git-Basics-Cover-3--1-.png)

欢迎阅读我关于 Git 的全面指南，这是一种分布式版本控制系统，已在软件开发中彻底改变了协作和代码管理。

无论你是一名经验丰富的开发人员，还是刚开始编程旅程的初学者，了解 Git 都是获得代码控制、有效管理项目和与他人协作的必备技能。

在本教程中，我将带你了解 Git 的基本原理，涵盖从其基本工作流程到高级分支策略和变基技术的所有内容。

在本指南结束时，你将对 Git 的核心概念有一个扎实的理解，并具备使用它有效进行开发工作的信心和技能。

## 前提条件：

你只需带着一颗好奇心和热爱学习的心态来参加。本指南旨在考虑初学者，因此无需预先了解版本控制系统或编程知识。无论你是一名完全的初学者，还是有一些编程经验，都会发现本教程易于理解和跟随。

## **目录：**

1. [什么是 Git？][3]  
    – [与其他版本控制系统的区别][4]  
    – [三种状态和基本 Git 工作流][5]
2. [首次 Git 设置][6]
3. [在 Git 中获取帮助][7]
4. [如何获取 Git 仓库][8]  
    – [在现有目录中初始化仓库][9]  
    – [在 Git 中克隆现有仓库][10]
5. [如何记录对仓库的更改][11]
6. [在 Git 中查看提交历史][12]
7. [在 Git 中撤销操作][13]
8. [Git 中的远程仓库][14]
9. [Git 中的标记][15]
10. [Git 别名][16]
11. [Git 分支][17]  
    – [在 Git 中创建一个新分支][18]  
    – [理解分支][19]  
    – [在 Git 中切换到另一个分支][20]  
    – [可视化 Git 中的分支][21]
12. [如何在 Git 中管理分支][22]  
    – [管理已合并的分支][23]  
    – [重命名分支][24]  
    – [更改默认分支名称][25]
13. [分支工作流程][26]
14. [在 Git 中变基][27]
15. [结论][28]

## 什么是 Git？

Git 是一种分布式版本控制系统，帮助你和你的团队有效合作，同时保护项目的历史记录。它就像你的代码的时间机器！

### Git 与其他版本控制系统有何不同？

#### 概念差异：

Git 与其他工具的最大不同在于如何看待数据。Git 不存储文件的更改，而是将其数据视为项目的快照序列，这意味着每次你进行更改并保存（提交）时，Git 都会拍摄你所有文件的快照。如果文件没有更改，Git 只是保留到以前相同文件的链接。

#### 本地操作：

使用 Git，大多数操作不需要连接到服务器。因为你拥有整个项目历史记录，所以操作非常快。你可以浏览项目历史记录或查看不同版本之间的更改，而无需等待服务器。

#### 数据完整性：

Git 确保不会丢失或损坏任何文件。每个文件和目录都经过校验，Git 知道是否有任何更改。

Git 使用 SHA-1 哈希，为每个版本的文件生成唯一代码。如果内容有任何变化，哪怕是一个字符，也会生成不同的 SHA-1 哈希。

#### 追加模式：

在 Git 中，几乎所有操作都是向项目添加数据，这使得意外丢失信息变得困难。一旦提交更改，它们就被安全存储。使用 Git 进行实验风险较低。

### 三种状态和基本 Git 工作流

理解 Git 的三种状态——修改、暂存和提交，对于有效的版本控制至关重要：

- **修改**：在 **工作目录** 中对文件所做的更改尚未提交。
- **暂存**：已标记为下次提交的修改，将包含在 **暂存区** 中的下次提交中。
- **提交**：永久存储在本地 **Git 目录** 中的更改。

**基本 Git 工作流**：

1. **修改** 你工作目录中的文件。
2. **暂存** 你想在下次提交中包含的更改。
3. **提交** 更改，即将快照永久保存到 Git 目录。

## 首次 Git 设置

首次设置 Git 涉及自定义你的 Git 环境，以符合个人偏好。但首先，你需要从 [Git - 下载][29] 下载 Git 或者使用 Chocolatey 包。然后只需按照安装说明进行操作，你就可以开始了。

我们使用 `git config` 工具来自定义我们的 Git 环境。这个工具允许我们检索和设置配置变量，这些变量决定了 Git 如何工作。这些变量可以存储在三个不同的位置：

1.  **系统范围的配置：**  
    存储在 `/etc/gitconfig` 文件中，这些设置适用于系统上的所有用户和所有仓库。我们可以使用 `git config` 的 `--system` 选项与这个文件互动。
2.  **用户特定的配置：**  
    存储在 `~/.gitconfig` 或 `~/.config/git/config`，这些值是针对您作为用户的。我们可以使用 `git config` 的 `--global` 选项与这个文件互动，影响您在系统上处理的所有仓库。
3.  **仓库特定的配置：**  
    存储在特定仓库内的 `.git/config` 文件中，这些设置会覆盖全局配置，仅适用于该仓库。

每一级配置都会覆盖前一级的值。例如，`.git/config` 中的值会覆盖 `~/.gitconfig` 中的那些值。

要查看所有配置设置及其来源：

```bash
$ git config --list --show-origin
```

#### 如何在 Git 中配置您的身份：

Git 中的身份用于正确归属提交。让我们设置您的用户名和电子邮件地址。

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "your.email@example.com"
```

如果您需要为特定项目覆盖这些设置，可以在设定时省略 `--global` 选项，这样这些设置仅适用于那个特定仓库。

#### 如何配置您的默认文本编辑器

在配置您的身份之后，重要的是设置 Git 中的默认文本编辑器。这个文本编辑器将在 Git 需要您输入消息（如编写提交消息或解决合并冲突时）时使用。

默认情况下，Git 使用系统的默认文本编辑器。然而，如果您更喜欢使用其他文本编辑器，比如 Emacs，您可以这样设置：

```bash
$ git config --global core.editor "emacs"
```

在 Windows 系统上，设置其他文本编辑器需要指定其可执行文件的完整路径。例如，如果您想使用 Notepad++，您可能会使用这样的命令：

```bash
$ git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```

确保您提供了文本编辑器可执行文件的正确路径。

顺便说一下，这些选项 – `"-multiInst -notabbar -nosession -noPlugin"` – 是用于定制 Notepad++ 在 Git 启动时的行为的。

#### 如何更改 Git 中的默认分支名称（可选）：

默认情况下，当您使用 `git init` 初始化一个新的仓库时，Git 会创建一个名为 `master` 的分支。但从 Git 版本 2.28 开始，您可以设置初始分支的不同名称。

```bash
$ git config --global init.defaultBranch main
```

将全局默认分支名称更改为 'main'

#### 如何检查 Git 中的配置/设置：

您可以使用以下命令查看您的 Git 配置：

```bash
$ git config --list
$ git config user.name  # 检查特定设置（如用户名）
```

`git config --list` 命令将列出 Git 此时可以找到的所有配置设置。

## 如何获得 Git 帮助

有三种等效的方法可以获取任何 Git 命令的详细帮助：

1.  Git 帮助命令：`$ git help <verb>`
2.  使用 `--help` 选项：`$ git <verb> --help`
3.  手册页（manpages）：`$ man git-<verb>`

将 `<verb>` 替换为您需要帮助的命令。例如，要获取 `config` 命令的帮助，您可以输入：

```bash
$ git help config
或
$ man git-config
```

这些命令也可以离线工作，这很方便。

如果您需要某个 Git 命令的可用选项的简洁信息，可以使用 `-h` 选项：

```bash
$ git add -h    # 这将显示 add 命令的可用选项
```

## 如何获取一个 Git 仓库

要开始使用 Git，您通常需要获取一个 Git 仓库。基本上有两种主要方式可以开始：

### 1\. 如何在现有目录中初始化一个 Git 仓库

打开终端或命令提示符。使用 `cd` 命令将目录更改到您的项目位置：`cd /path/to/your/project`。

一旦进入项目目录，运行以下命令来初始化一个 Git 仓库：

```bash
$ git init
```

这个命令会创建一个名为 `.git` 的新子目录，Git 会在其中存储所有 Git 仓库所需的文件。这时，您的项目文件还没有被跟踪。

现在，假设您有一些文件想要 Git 开始跟踪：

```bash
$ git add *.py        # 添加所有 Python 文件
$ git add README.md   # 添加 README 文件
$ git commit -m 'Initial commit'
```

`git add` 将文件添加到暂存区，表示您希望在下一次提交中包含这些文件，然后提交更改。`-m` 标志允许您添加提交的描述性信息。

### 2\. 如何克隆一个现有的 Git 仓库：

获取 Git 仓库的第二种方法是克隆一个现有的仓库。当您想要处理一个已经存在于其他地方的项目（例如，您想要贡献的项目）时，这非常有用。

要克隆一个仓库，使用 `git clone` 命令并跟上你想克隆的仓库的 URL。例如，要克隆 grok-1 仓库，可以使用：

```bash
$ git clone https://github.com/xai-org/grok-1.git
```

这会创建一个名为 grok-1 的目录，在其内部初始化一个 `.git` 目录，并拉取该仓库的所有数据。

顺便提一下，`.git` 只是一个约定，表示 URL 指向一个 Git 仓库。你可以使用也可以不使用，这无关紧要。

如果你想克隆到一个不同名称的目录中，可以指定它。要将 grok-1 仓库克隆到一个名为 "chatgpt" 而不是 "grok-1" 的目录中，请这样做：

```bash
$ git clone https://github.com/xai-org/grok-1.git chatgpt
```

Git 提供了各种可以用于克隆仓库的传输协议。上面的示例使用 `https://` 协议，但你也可能看到 `git://` 或 `user@server:path/to/repo.git`，这使用 SSH 传输协议。

## 如何记录对仓库的更改

现在你已经设置好了一个 Git 仓库，你将经常需要进行更改并将这些更改记录在你的仓库中。这个过程包括跟踪文件、暂存更改和提交快照。让我们探讨涉及的步骤：

![lifecycle](https://www.freecodecamp.org/news/content/images/2024/03/lifecycle.png)

图像来源 - https://git-scm.com/

### 1\. 如何检查 Git 中文件的状态：

在处理 Git 仓库时，了解文件的状态至关重要。

Git 将文件分为两类：已跟踪和未跟踪。已跟踪文件是指 Git 识别的文件，它们要么是上一个快照（提交）的一部分，要么已被暂存。未跟踪文件是所有其他文件——Git 当前未监控的文件。要检查你的仓库的状态：

```bash
$ git status
```

此命令提供有关当前分支、其同步状态以及文件状态的全面信息。

`git status` 还会建议你可以采取的操作。例如，当文件已修改但未暂存以提交时，`git status` 会建议使用 `git add <file>` 来暂存它们。它还建议使用 `git checkout -- <file>` 来丢弃工作目录中的更改。这些建议通过提供快速访问相关 Git 命令来简化你的工作流程。

此外，`git status` 提供简短状态模式（`git status -s`），它使用 M（已修改）、A（已添加）和 ??（未跟踪）之类的符号以更简洁的视图展示你的更改。

### 2\. 如何在 Git 中跟踪新文件

当你在项目中创建一个新文件时，Git 最初会将其视为未跟踪。要开始跟踪一个新文件，你需要使用 `git add` 命令将其添加到暂存区。

例如，让我们为我们的项目创建一个名为 `index.html` 的新文件并将其添加到暂存区：

```bash
$ touch index.html
$ git add index.html
```

添加后，再次运行 `git status`，你会看到 `index.html` 文件现在已被跟踪并暂存以提交。

### 3\. 如何在 Git 中暂存修改文件

如果你修改了一个已有的已跟踪文件，你需要使用 `git add` 来暂存这些更改。假设我们修改了一个名为 `styles.css` 的现有文件：

```bash
$ vim styles.css
```

进行更改后，暂存该文件：

```bash
$ git add styles.css
```

现在，当你检查状态时，你会看到修改过的文件和新文件都已经暂存以提交。

### 4\. 如何在 Git 中忽略文件

通常，项目中有些文件或目录不打算被 Git 跟踪。这些可能包括日志文件、构建工件或本地环境设置（如 \*.env 或 config.json）等敏感信息。你可以使用 `.gitignore` 文件指定要忽略的这些文件。

创建一个 `.gitignore` 文件：

```bash
$ nano .gitignore
```

列出你想要忽略的文件或目录模式：

```bash
$ echo '*.log' >> .gitignore
$ echo 'build/' >> .gitignore
```

这里，我们告诉 Git 忽略所有以 `.log` 结尾的文件和 `build/` 目录。

****注意：**** 在将文件添加到 `.gitignore` 文件之前，已被 Git 跟踪的文件将继续被跟踪。要移除它们，你需要手动使用 Git 命令取消跟踪它们。

这里有一些你可以用来更有效地使用 Git 的模式。

-   ****精确地针对单个文件或文件扩展名：**** 例如，`test.txt` 仅忽略特定的那个文件，而 `*.log` 忽略所有以 `.log` 结尾的文件。
-   ****使用通配符进行更广泛的匹配：**** 星号（`*`）通配符匹配任意数量的字符。例如，`*.doc` 忽略所有具有 `.doc` 扩展名的文件，不管它们的名称是什么。

### 5\. 如何查看 Git 中的更改：

如果你想在提交之前查看你对文件所做的确切更改，可以使用 `git diff` 命令。

查看未暂存的更改：

```bash
$ git diff 
```

查看已暂存的更改：

```bash
$ git diff --cached README.md
```

`git diff` 提供了实际修改的详细视图。使用 `git diff <filename>` 来专注于特定文件中的更改。

### 6\. 如何提交更改：


一旦你已经暂存了你想要包含在提交中的更改，你可以使用 `git commit` 提交它们

```bash
$ git commit -m "Your commit message here"
```

### 7\. 如何在 Git 中移除文件：

如果你需要从 Git 的追踪中移除一个文件，你可以使用 `git rm`。它会将文件从仓库和工作目录中同时移除。假设你想移除一个名为 `temp.txt` 的文件：

```bash
$ git rm temp.txt
```

如果你只想将其从仓库中移除，而保留在工作目录中，请使用 `--cached` 选项：

```bash
$ git rm --cached temp.txt
```

### 8\. 如何在 Git 中移动（或重命名）文件：

Git 不会显式地追踪文件的移动。但你可以使用 `git mv` 在你的仓库中重命名或移动文件。例如，将 `old_file.txt` 重命名为 `new_file.txt`：

```bash
$ git mv old_file.txt new_file.txt
```

这个命令会暂存重命名，并在下一次提交中反映出来。

它相当于手动移动文件，然后使用 `git rm` 移除旧文件，再使用 `git add` 添加新文件。`git mv` 基本上将这些步骤合并为一个命令。

这些命令形成了进行更改、暂存更改并将其提交到你的 Git 仓库的基本工作流程。

## 如何查看 Git 中的提交历史

在创建多个提交或克隆仓库之后，`git log` 命令允许你检查提交历史。

默认情况下，它按逆时间顺序列出提交，每个提交显示其 SHA-1 校验和、作者姓名和电子邮件、日期和提交消息。  
现在让我们看看如何增强这个输出：

### 如何查看 Git 中的提交差异：

要查看每个提交引入的差异，可以使用 `-p` 或 `--patch` 选项：

```bash
$ git log -p -2    # -2 用于查看最后两个提交中引入的差异
```

### 如何显示 Git 中的统计信息：

`--stat` 选项提供每个提交的摘要统计信息，包括修改的文件、添加/删除的行和总结。

```bash
$ git log --stat
```

### 如何自定义 Git 日志输出格式：

`--pretty` 选项允许你改变日志的输出格式。各种选项可用于不同的格式：

- `oneline`：简洁的单行摘要。
- `short`：默认格式，包含作者、日期和消息。
- `full`：详细格式，包含提交哈希、作者、日期、消息和差异。
- `fuller`：更详细的格式，包括完整的文件路径。
- `format`：使用格式说明符自定义输出。

```bash
$ git log --pretty=oneline
```

**用于** `--pretty=format` **的有用格式说明符**：

- `%h`：缩写的提交哈希
- `%an`：作者姓名
- `%ae`：作者电子邮件
- `%ad`：作者日期
- `%s`：主题（提交消息）

```bash
$ git log --pretty=format:"%h %an %ad %s"
```

**ASCII 图表**：

使用 `--graph`，你还可以可视化分支和合并历史。

```bash
$ git log --pretty=format:"%h %s" --graph
```

### 如何限制 Git 日志输出：

除了格式选项，`git log` 提供了各种限制选项来优化显示的提交历史。

- `-<n>`：只显示最后 n 个提交。
- `--since, --until`：限制在指定日期之后/之前的提交。
- `--author`：仅显示特定作者的提交。
- `--grep`：按提交消息中的关键词过滤提交。
- `-S`：显示更改了指定内容的提交。

****示例用法****：查看自某个日期以来作者 Abbey 的最后 3 个提交，包含补丁详情：

```bash
$ git log --author="Abbey" --since="2024-01-01" -p -3
```

## 如何在 Git 中撤销操作

在 Git 中撤销更改是一个常见的需求，有多种选项可用于此目的。

### 如何在 Git 中撤销提交

如果你提交得太早或需要对最后的提交进行额外的更改，使用此命令：

```bash
$ git commit --amend
```

这将打开提交消息编辑器，允许你修改消息。如果自上次提交以来没有进行任何更改，它只允许你编辑提交消息。

****注意****：仅修订仍然是本地的且尚未推送的提交，以避免给协作者带来问题。

### 如何使用 `git reset` 取消暂存一个已暂存的文件

要取消暂存一个意外包含的文件，可以使用 `git reset HEAD <file>` 命令。例如：

```bash
$ git reset HEAD CONTRIBUTING.md
```

该文件已取消暂存，允许你在不提交意外更改的情况下进行进一步修改。

### 如何使用 `git checkout` 取消修改的文件

假设你对文件进行了修改，后来意识到你不希望保留这些修改。使用 `git checkout -- <file>` 可以放弃对文件所做的更改，并将其恢复到以前的状态。

```bash
$ git checkout -- CONTRIBUTING.md
```

这将用最后一个已暂存或已提交的版本替换修改后的文件。

### 使用 `git restore` 撤销操作

让我们探索 Git 2.23.0 版本引入的替代方法，`git restore`，它作为许多撤销操作的 `git reset` 替代方案。

#### 如何使用 `git restore` 取消暂存一个已暂存的文件



```bash
$ git restore --staged CONTRIBUTING.md   
```

文件被取消暂存，类似于 `git reset HEAD <file>`，这使您可以在不提交无意更改的情况下进行进一步更改。

#### 如何使用 `git restore` 取消修改的文件

要丢弃工作目录中对文件所做的更改，使用 `git restore <file>`:

```bash
$ git restore CONTRIBUTING.md
```

与 `git checkout -- <file>` 类似，此命令丢弃对指定文件所做的更改，将其恢复到上次提交时的状态。

****重要提示:**** 请谨慎使用 `git reset`、`git checkout --`、`git restore` 等命令，因为它们可以永久丢弃本地更改。仅当您确定这些更改不需要且没有未保存的本地更改时才使用这些命令。

**替代方法:** 储藏和分支是临时搁置更改而不过分丢弃的替代方法。如果您不确定是否要丢弃更改，这些方法更安全。

## 如何在 Git 中处理远程仓库

远程仓库是托管在互联网或网络上的项目版本。与他人协作涉及管理这些远程仓库，包括添加、删除和检查它们。让我们学习如何有效地管理它们。

### 如何显示 Git 中的远程仓库

首先，让我们看看为我们的项目配置了哪些远程服务器：

```bash
$ git remote
```

此命令列出我们指定的所有远程处理程序的简称。例如，如果我们克隆了一个仓库，我们通常会看到 `origin`，这是 Git 为我们克隆的服务器分配的默认名称。

添加 `-v` 选项会提供额外的详细信息，例如与每个远程仓库关联的 URL。

```bash
$ git remote -v
```

这会显示每个远程仓库的获取和推送 URL，使我们了解项目托管的位置以及如何与之交互。

### 如何在 Git 中添加远程仓库

要显式添加新的远程仓库，请使用 `git remote add <简称> <url>`：

```bash
$ git remote add example https://github.com/example/example.git
```

在这里，我们添加了一个名为 `example` 的远程仓库，并指定了 URL。这允许我们在命令中使用简称 `example` 来引用此远程仓库。

### 如何从远程仓库获取和拉取

要从远程仓库获取数据，我们使用 `git fetch` 命令，后跟远程仓库名称：

```bash
$ git fetch origin // 这里我们没有指定任何特定分支。
```

它会下载任何来自 `origin` 远程仓库的新更改到我们的本地仓库，让我们保持最新的开发进度。

或者，如果我们希望在一个步骤中从远程分支获取并合并更改，则使用 `git pull` 命令：

```bash
$ git pull origin master
```

在这里，我们特定地将来自 `origin` 远程仓库的 `master` 分支中的更改拉取到当前分支。

### 如何将更改推送到远程仓库

要与他人分享我们的工作，我们将更改推送到远程仓库：

```bash
$ git push origin main
```

在此示例中，我们将本地更改推送到 `origin` 远程仓库的 `main` 分支。

### 如何检查 Git 中的远程仓库

最后，我们可以检查远程仓库以获取更多信息：

```bash
$ git remote show origin
```

此命令显示获取和推送 URL、跟踪的分支以及与 `origin` 远程仓库关联的本地分支配置的详细信息。

### 如何在 Git 中重命名远程仓库

现在假设我们想将远程处理程序的简称从 `example` 重命名为 `new-example`:

```bash
$ git remote rename example new-example
```

### 如何删除远程仓库

如果由于某种原因我们不再需要远程仓库并希望将其从项目中删除：

```bash
$ git remote remove new-example
或者
$ git remote rm new-example
```

删除后，远程跟踪分支和相关配置设置也会被删除。

## 在 Git 中打标签

在 Git 中打标签是一项基本功能，允许开发人员将仓库历史中的特定点标记为重要。通常，标签用于表示发布点，例如 v1.0，v2.0 等。

### 如何列出现有标签

假设您正在处理一个具有多个发布版本的项目。要列出现有标签：

```bash
$ git tag
```

此外，您可以使用 `-l` 或 `--list` 选项搜索匹配特定模式的标签。例如：

```bash
$ git tag -l "v2.0*"
```

该命令将列出类似 `v2.0`、`v2.0-beta` 等匹配指定模式的标签。

### 如何在 Git 中创建标签

Git 支持两种类型的标签：轻量标签和附注标签。

#### 轻量标签

当您想在不添加任何额外信息的情况下标记特定提交时，使用轻量标签。例如：

```bash
$ git tag v1.1-lw
```

要查看与此标签关联的提交信息，请使用：

```bash
$ git show v1.1-lw
```

轻量标签仅显示提交校验和 

#### 附注标签

另一方面，附注标签包含额外的信息，例如标记者信息、日期和标签消息。
```

```bash
$ git tag -a v2.0 -m "Release version 2.0"
```

要查看关于该标签的详细信息，包括它指向的提交和标记信息，请使用：

```bash
$ git show v2.0
```

### 如何在 Git 中标记较早的提交

有时候，你可能会忘记给特定的提交打标签。别担心，你可以通过指定提交校验和稍后添加标签。

示例：假设你忘记给 ID 为 `abcdefg` 的提交打标签。你可以按如下方式添加标签：

```bash
$ git tag -a v1.2 abcdefg
```

这个命令将指定的提交标记为 `v1.2`

#### 如何将标签推送到远程仓库

要将特定标签推送到远程服务器，你可以使用：

```bash
$ git push origin <tagname>
```

如果你有多个标签并且想一次性推送它们，你可以使用 `--tags` 选项：

```bash
$ git push origin --tags
```

#### 如何删除 Git 中的标签

要在本地删除标签（从本地仓库中移除）：

```bash
$ git tag -d <tagname>
```

例如，要删除名为 `v1.4-lw` 的轻量标签：

```bash
$ git tag -d v1.4-lw
```

另一方面，你可以通过两种方式从远程服务器删除标签：

1.  使用带有 refspec 的 `git push` 命令：

```bash
$ git push origin :refs/tags/v1.1-lw
```

这个命令将空内容（`:`）推送到远程标签 `v1.1-lw`，从而有效地删除它。

2.  使用 `git push` 的 `--delete` 选项：

```bash
$ git push origin --delete v1.1-lw
```

这个方法直接从远程服务器删除标签 `v1.1-lw`。

#### 如何检出 Git 标签

要查看特定标签下文件的状态，你可以检出该标签：

```bash
$ git checkout v2.0
```

此命令将你的仓库置于“分离的 HEAD”状态，在此状态下你可以查看文件，但不能直接进行更改。

如果你需要在该标签下工作，最好创建一个新分支：

```bash
$ git checkout -b v2.0-branch v2.0
```

现在你可以进行更改和提交，而不会改变原始标签。

## Git 别名

Git 别名是你可以创建的简写或自定义命令，以简化和优化你的 Git 工作流程。

要创建一个 Git 别名，你可以使用 `git config` 命令，并加上 `--global` 标志，使该别名在所有 Git 仓库中可用。

### 常用命令的基本别名

你可以为频繁使用的 Git 命令创建别名，使它们更容易记住和输入。例如：

```bash
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
```

现在，你可以使用简短的别名，如 `git co`、`git br` 和 `git ci` 分别代替完整的命令。

你还可以**为你经常执行的操作或提高命令可读性创建自定义别名**。例如：

```bash
$ git config --global alias.unstage 'reset HEAD --'
```

现在，你可以使用 `git unstage <file>` 代替 `git reset HEAD -- <file>` 来取消暂存一个文件。

#### 如何在 Git 中组合多个命令

别名还可以用于组合多个 Git 命令到一个别名中。例如，让我们创建一个别名来暂存所有更改并一次性提交它们：

```bash
$ git config --global alias.commitall '!git add -A && git commit'
```

现在，运行 `git commitall` 将暂存所有更改（`git add -A`），然后提交它们，节省你时间和击键次数。

## Git 分支

Git 中的分支提供了一种强大的方式来管理你的项目代码库，允许并行开发和试验而不会影响主代码库。

Git 分支允许你偏离主开发线，工作在不同的功能或修复上，然后将你的更改合并回来。与许多其他版本控制系统不同，Git 的分支模型是轻量级且高效的，使分支操作几乎是瞬时完成的。

### 什么是 Git 中的分支？

分支是指向提交的一个轻量级、可移动的指针。默认的分支名称通常是“master”，但它没有特殊之处——它就像其他任何分支一样。

创建和切换分支允许你同时处理不同的功能。

### 如何在 Git 中创建新分支：

当你想开始一个新功能或试验一个想法时，你可以在 Git 中创建一个新分支。这个新分支作为一个独立的开发线，允许你进行更改而不影响主分支。

```bash
$ git branch new_feature
```

这个命令创建一个指向当前分支相同提交的新分支 'new-feature'。分支可以共存，Git 保持一个称为 `HEAD` 的特殊指针来表示当前分支。

### 理解分支

首先，让我们掌握 Git 中分支的基础知识。当你初始化一个 Git 仓库时，你从一个默认分支开始，通常命名为 'master' 或 'main'。分支本质上是指向提交的指针，使你能够独立地处理不同的功能或修复。

要查看你仓库中的所有分支，请使用以下命令：

```bash
$ git branch
```

这将显示一个分支列表，其中星号 (\*) 表示当前检出的分支。如要额外获取每个分支上的最后一次提交的信息，请使用：
```

### 如何在 Git 中切换到另一个分支：

要切换到已有的不同分支，可以使用 `git checkout`。

```bash
$ git checkout new_feature
```

此命令将 'HEAD' 指针切换到 'new-feature' 分支，使其成为当前活动的分支。

要在一次操作中创建并切换到一个新分支：

```bash
$ git checkout -b <newbranchname>
```

在 Git 2.23 版本及以后，你可以使用 `git switch` 代替 `git checkout`。

-   切换到现有分支：`git switch existing-branch`。
-   创建并切换到新分支：`git switch -c new-branch`。

### 如何在 Git 中可视化分支：

创建并切换分支后，你可以使用以下命令来可视化分支结构：

```bash
$ git log --oneline --decorate --graph --all
```

此命令以精简和图形化的方式显示提交历史和分支指针，让你能够看到分支如何随时间分叉和合并。

## 如何管理 Git 中的分支

### 如何管理已合并的分支

随着项目的发展，你将在更改完成后将分支合并回主分支。要识别已合并的分支，可以执行：

```bash
$ git branch --merged
```

此命令列出已成功合并到当前分支的分支。一般情况下，这些分支可以安全删除，使用以下命令：

```bash
$ git branch -d branch_name
```

然而，对于包含未合并工作的分支，使用：

```bash
$ git branch --no-merged
```

删除这些分支需要使用 '-D' 标志：

```bash
$ git branch -D branch_name
```

这确保你不会不小心丢失任何未合并的更改。

### 如何重命名分支

要重命名本地分支：

```bash
$ git branch --move old_branch_name new_branch_name
```

此命令在本地更新分支名称。要在远程仓库中反映更改，推送重命名后的分支：

```bash
$ git push --set-upstream origin new_branch_name
```

使用以下命令验证更改：

```bash
$ git branch --all
```

确保删除远程上的旧分支：

```bash
$ git push origin --delete old_branch_name
```

这确保本地和远程仓库的一致性。

### 如何更改默认分支名称

重命名默认分支（通常是 'master'）需要谨慎和协调，因为这会影响项目集成和协作者。

```bash
$ git branch --move master main
```

重命名后，将更新后的分支推送到远程仓库：

```bash
$ git push --set-upstream origin main
```

确保你记得在依赖项、测试、脚本和仓库主机中更新引用和配置。完成后，删除远程上的旧 master 分支：

```bash
$ git push origin --delete master
```

这与我们在配置部分讨论的 `$ git config --global init.defaultBranch main` 不同：

-   `$ git branch --move master main`：此命令在当前仓库中将现有的 "master" 分支重命名为 "main"。这是一种本地操作，仅影响该仓库。
-   `$ git config --global init.defaultBranch main`：此命令全局设置新仓库的默认分支名称。它不会重命名现有分支，但确保之后创建的任何新仓库将使用 "main" 作为默认分支名称，而不是 "master"。

**附加资源**：考虑查看这个官方 Git [资源][30]，其信息丰富的可视化和图表可以为你提供更多关于远程分支和分支管理概念的清晰理解。

## 分支工作流

让我们更详细地了解分支，并看看大型项目中常用的常见分支工作流。

### 长期运行的分支：

在 Git 中，长期运行的分支是指在较长时间内保持开放的分支。

### 主题分支：

`主题`/`功能`分支是为特定功能或工作创建的短期分支。与长期运行的分支不同，主题分支在工作完成后通常会被删除。

**示例：** 假设一个团队维护两个长期运行的分支：`master` 和 `develop`。

-   `master` 分支只包含稳定的代码，可能是已经发布或即将发布的代码。
-   `develop` 分支作为正在进行的开发的中转站。虽然它可能不总是稳定的，但它充当新功能的测试场所。

开发人员将功能分支的更改合并到 `develop` 分支中进行测试。一旦功能经过彻底测试并稳定，它们会被合并到 `master` 分支。

请注意，变化是如何通过不同稳定性层次的，从最不稳定(功能分支)到较稳定(如 develop 分支)，经过测试和改进后，最终合并到最稳定的 main/master 分支。

这确保了稳定代码和开发代码的明确分离，只有经过彻底测试的功能才会进入稳定版本。

### 分支最佳实践

1.  **创建描述性分支名称**：使用有意义的分支名称，反映正在开发的目的或功能。
2.  **删除未使用的分支**：一旦分支完成了其任务并且更改已合并到主分支，考虑删除它以保持仓库的整洁和可管理。

