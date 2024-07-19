---
title: 子网备忘单 – 24 子网掩码, 30, 26, 27, 29 及其他 IP 地址 CIDR 网络参考
date: 2021-02-12T19:06:00.000Z
author: Kris Koishigawa
authorURL: https://www.freecodecamp.org/news/author/kris/
originalURL: https://www.freecodecamp.org/news/subnet-cheat-sheet-24-subnet-mask-30-26-27-29-and-other-ip-address-cidr-network-references/
translator: ""
reviewer: ""
---

/ [#网络工程][1]

<!-- more -->

# 子网备忘单 – 24 子网掩码, 30, 26, 27, 29 及其他 IP 地址 CIDR 网络参考

![Kris Koishigawa](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/kris-author-image-cropped-2022.jpeg)

[Kris Koishigawa][2]

  ![子网备忘单 – 24 子网掩码, 30, 26, 27, 29 及其他 IP 地址 CIDR 网络参考](https://cdn-media-2.freecodecamp.org/w1280/5f9c9647740569d1a4ca10a9.jpg)

作为开发人员或网络工程师，您可能需要时不时查阅子网掩码值并弄清其含义。

为了让您的生活更轻松，freeCodeCamp 社区制作了这个简单的备忘单。只需滚动或使用 Ctrl/Cmd + F 查找您要查找的值即可。

| CIDR | 子网掩码 | 通配符掩码 | IP 地址数量 | 可用 IP 地址数量 |
| --- | --- | --- | --- | --- |
| /32 | 255.255.255.255 | 0.0.0.0 | 1 | 1 |
| /31 | 255.255.255.254 | 0.0.0.1 | 2 | 2\* |
| /30 | 255.255.255.252 | 0.0.0.3 | 4 | 2 |
| /29 | 255.255.255.248 | 0.0.0.7 | 8 | 6 |
| /28 | 255.255.255.240 | 0.0.0.15 | 16 | 14 |
| /27 | 255.255.255.224 | 0.0.0.31 | 32 | 30 |
| /26 | 255.255.255.192 | 0.0.0.63 | 64 | 62 |
| /25 | 255.255.255.128 | 0.0.0.127 | 128 | 126 |
| /24 | 255.255.255.0 | 0.0.0.255 | 256 | 254 |
| /23 | 255.255.254.0 | 0.0.1.255 | 512 | 510 |
| /22 | 255.255.252.0 | 0.0.3.255 | 1,024 | 1,022 |
| /21 | 255.255.248.0 | 0.0.7.255 | 2,048 | 2,046 |
| /20 | 255.255.240.0 | 0.0.15.255 | 4,096 | 4,094 |
| /19 | 255.255.224.0 | 0.0.31.255 | 8,192 | 8,190 |
| /18 | 255.255.192.0 | 0.0.63.255 | 16,384 | 16,382 |
| /17 | 255.255.128.0 | 0.0.127.255 | 32,768 | 32,766 |
| /16 | 255.255.0.0 | 0.0.255.255 | 65,536 | 65,534 |
| /15 | 255.254.0.0 | 0.1.255.255 | 131,072 | 131,070 |
| /14 | 255.252.0.0 | 0.3.255.255 | 262,144 | 262,142 |
| /13 | 255.248.0.0 | 0.7.255.255 | 524,288 | 524,286 |
| /12 | 255.240.0.0 | 0.15.255.255 | 1,048,576 | 1,048,574 |
| /11 | 255.224.0.0 | 0.31.255.255 | 2,097,152 | 2,097,150 |
| /10 | 255.192.0.0 | 0.63.255.255 | 4,194,304 | 4,194,302 |
| /9 | 255.128.0.0 | 0.127.255.255 | 8,388,608 | 8,388,606 |
| /8 | 255.0.0.0 | 0.255.255.255 | 16,777,216 | 16,777,214 |
| /7 | 254.0.0.0 | 1.255.255.255 | 33,554,432 | 33,554,430 |
| /6 | 252.0.0.0 | 3.255.255.255 | 67,108,864 | 67,108,862 |
| /5 | 248.0.0.0 | 7.255.255.255 | 134,217,728 | 134,217,726 |
| /4 | 240.0.0.0 | 15.255.255.255 | 268,435,456 | 268,435,454 |
| /3 | 224.0.0.0 | 31.255.255.255 | 536,870,912 | 536,870,910 |
| /2 | 192.0.0.0 | 63.255.255.255 | 1,073,741,824 | 1,073,741,822 |
| /1 | 128.0.0.0 | 127.255.255.255 | 2,147,483,648 | 2,147,483,646 |
| /0 | 0.0.0.0 | 255.255.255.255 | 4,294,967,296 | 4,294,967,294 |

以下是子网掩码和通配符的十进制到二进制的转换表：

|  | 子网掩码 |  | 通配符 |
| --- | --- | --- | --- |
| 0 | 00000000 | 255 | 11111111 |
| 128 | 10000000 | 127 | 01111111 |
| 192 | 11000000 | 63 | 00111111 |
| 224 | 11100000 | 31 | 00011111 |
| 240 | 11110000 | 15 | 00001111 |
| 248 | 11111000 | 7 | 00000111 |
| 252 | 11111100 | 3 | 00000011 |
| 254 | 11111110 | 1 | 00000001 |
| 255 | 11111111 | 0 | 00000000 |

注意，通配符只是子网掩码的反码。

如果您是网络工程的新手，您可以[在这里更好地了解计算机网络的工作原理][4]。

最后，这张速查表和本文的其余部分重点介绍的是 IPv4 地址，而不是较新的 IPv6 协议。如果您想了解更多关于 IPv6 的信息，请查看上面关于计算机网络的文章。

## IP 地址块如何工作？

像 `192.168.0.1` 这样的 IPv4 地址实际上只是四个二进制块的十进制表示。

每个块是 8 位，表示从 0-255 的数字。由于这些块是 8 位的组，每个块被称为一个**八位**。由于有四个 8 位的块，每个 IPv4 地址共有 32 位。

![1125px-Ipv4_address](https://www.freecodecamp.org/news/content/images/2021/03/1125px-Ipv4_address.png)

来源: [IPv4][5]

要将 IP 地址在十进制和二进制形式之间转换，可以使用下图：

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | x | x | x | x | x | x |

上图表示一个 8 位的八位字节。

现在假设你要转换 IP 地址 `168.210.225.206`。你只需要将地址分成四块（`168`、`210`、`225` 和 `206`），并且使用上图将每一块转换为二进制。

记住在二进制中，1 等同于“开”，0 等同于“关”。所以要将第一个块 `168` 转换为二进制，只需从图表的开头开始，在单元格中放置 1 或 0，直到总和为 `168`。

例如：

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 1 | 0 | 1 | 0 | 0 | 0 |

128 + 32 + 8 = 168，在二进制中是 `10101000`。

如果对其余的块进行同样的操作，你会得到 `10101000.11010010.11100001.11001110`。

如果你看上面的表格，可能会觉得 IP 地址的数量几乎是无限的。毕竟，IPv4 地址有将近 42 亿个可用地址。

但是，考虑到互联网的发展，以及如今有多少设备连接到网络，你可能不会惊讶地听到已经存在[IPv4 地址短缺][6]的问题。

因为多年前就已经意识到了短缺问题，开发人员想出了一个方法，将一个 IP 地址拆分成更小的网络，称为子网。

这个过程称为子网划分，使用 IP 地址的主机部分将其分解成这些更小的网络或子网。

通常，IP 地址由网络位和主机位组成：

![network-and-host-bits](https://www.freecodecamp.org/news/content/images/2021/03/network-and-host-bits.png)

来源：[什么是 IPv4][7]

所以，一般来说，子网划分有两个作用：它为我们提供了一种将网络拆分成子网的方法，并允许设备确定另一个设备/IP 地址是否在同一个本地网络上。

在没有子网划分的情况下，每个连接到互联网的设备都需要一个独特的 IP 地址。

但由于你有一个无线路由器，你只需要一个为你的路由器分配的 IP 地址。这个公共或外部 IP 地址通常是自动处理的，并由你的互联网服务提供商（ISP）分配。

然后每个连接到该路由器的设备都有其自己的私有或内部 IP 地址：

![home-network-diagram](https://www.freecodecamp.org/news/content/images/2021/03/home-network-diagram.png)

来源: [我的 IP 地址是什么？][8]

现在如果内部 IP 地址为 `192.168.1.101` 的设备想要与另一台设备通信，它将使用另一台设备的 IP 地址和子网掩码。

IP 地址和子网掩码的组合使得 `192.168.1.101` 设备能够判断其他设备是否在同一个网络中（例如 `192.168.1.103` 设备），或者是在互联网上其他地方的完全不同的网络中。

有趣的是，你的 ISP 为你的路由器分配的外部 IP 地址可能是某个子网的一部分，该子网可能包括附近家庭或企业的许多其他 IP 地址。和内部 IP 地址一样，它也需要一个子网掩码才能工作。

子网掩码可以视为 IP 地址的一种过滤器。通过子网掩码，设备可以查看 IP 地址，并弄清楚哪些部分是网络位，哪些部分是主机位。

然后利用这些信息，设备可以确定最佳的通信方式。

如果你曾浏览过路由器或计算机上的网络设置，你可能见过这个数字：`255.255.255.0`。

如果见过，你已经看到了一个非常常见的适用于简单家庭网络的子网掩码。

像 IPv4 地址一样，子网掩码也是 32 位。就像将 IP 地址转换为二进制一样，你也可以对子网掩码进行相同的转换。

例如，这里是我们之前的图表：

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| x | x | x | x | x | x | x | x |

现在让我们转换第一个八位位组，255：

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

很简单，对吧？所以任何一个八位位组中的 `255` 在二进制中就是 `11111111`。这意味着 `255.255.255.0` 在二进制中实际上是 `11111111.11111111.11111111.00000000`。

以下是这两者的十进制和二进制表示：

| 类型 | 十进制 | 二进制 |
| --- | --- | --- |
| IP 地址 | 192.168.0.101 | 11000000.10101000.00000000.01100101 |
| 子网掩码 | 255.255.255.0 | 11111111.11111111.11111111.00000000 |

这样排列后，很容易将 `192.168.0.101` 分成网络位和主机位。

每当二进制子网掩码中的一位是 1 时，二进制 IP 地址中相同的一位就是网络的一部分，而不是主机的一部分。

由于八位字节 `255` 是二进制的 `11111111`，所以 IP 地址中整个这一字节是网络的一部分。因此，前三个八位字节 `192.168.0` 是 IP 地址的网络部分，而 `101` 是主机部分。

换句话说，如果设备 `192.168.0.101` 想与另一个设备进行通信，使用子网掩码它知道任何 IP 地址为 `192.168.0.xxx` 的设备都在同一个本地网络上。

另一种表达方式是使用网络 ID，它只是 IP 地址的网络部分。所以 IP 地址 `192.168.0.101` 的网络 ID，子网掩码为 `255.255.255.0`，即 `192.168.0.0`。

### CIDR 是什么及 CIDR 表示法？

**CIDR** 是无类域间路由的缩写，使用于 IPv4，最近也用于 IPv6 路由。

![1920px-IP_Address_Match.svg](https://www.freecodecamp.org/news/content/images/2020/05/1920px-IP_Address_Match.svg.png)

来源: [Classless Inter-Domain Routing][9]

CIDR 于 1993 年引入，作为缓解 IPv4 地址消耗的一种方式。在此之前，互联网使用的是旧有的分类 IP 地址系统，该系统导致 IPv4 地址迅速枯竭。

CIDR 涵盖了几个主要概念。

第一个是可变长度子网掩码（VLSM），这基本上允许网络工程师在子网内创建子网。那些子网可以有不同的大小，从而减少了未使用的 IP 地址数量。

CIDR 引入的第二个主要概念是 CIDR 表示法。

CIDR 表示法实际上只是子网掩码的简写，表示 IP 地址可用的位数。例如，`192.168.0.101/24` 中的 `/24` 相当于 IP 地址 `192.168.0.101` 和子网掩码 `255.255.255.0`。

要计算子网掩码的 CIDR 表示法，只需将子网掩码转换为二进制，然后计算其中的 1 的数量即可。例如：

| 类型 | 十进制 | 二进制 |
| --- | --- | --- |
| 子网掩码 | 255.255.255.0 | 11111111.11111111.11111111.00000000 |

由于有三个八位组是 1，所以有 24 个 "on" 位，这意味着 CIDR 表示法为 `/24`。

你可以用任何一种方式书写，但我相信你会同意用 `/24` 比写 `255.255.255.0` 要简单很多。

这通常是在使用 IP 地址时进行的，所以让我们看看带有 IP 地址的相同子网掩码：

| 类型 | 十进制 | 二进制 |
| --- | --- | --- |
| IP 地址 | 192.168.0.101 | 11000000.10101000.00000000.01100101 |
| 子网掩码 | 255.255.255.0 | 11111111.11111111.11111111.00000000 |

子网掩码的前三个八位组全是 "on" 位，这意味着 IP 地址的前三个八位组全是网络位。

让我们更详细地看看最后的第四个八位组：

| 类型 | 十进制 | 二进制 |
| --- | --- | --- |
| IP 地址 | 101 | 01100101 |
| 子网掩码 | 0 | 00000000 |

当您使用 CIDR 表示法时，通常会使用网络 ID。因此，IP 地址 `192.168.0.101` 和子网掩码 `255.255.255.0` 的 CIDR 表示法是 `192.168.0.0/24`。

若要查看更多关于如何计算给定 IP 地址和子网掩码的 CIDR 表示法和网络 ID 的示例，请观看以下视频：

<iframe width="356" height="200" src="https://www.youtube.com/embed/XQ3T14SIlV4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid0"></iframe>

## 有类 IP 地址

现在我们已经了解了一些子网划分和 CIDR 的基本示例，让我们放大来看一下所谓的有类 IP 地址。

在开发子网划分之前，所有的 IP 地址都属于特定的类别：

![subnetting](https://www.freecodecamp.org/news/content/images/2021/03/subnetting.png)

来源：[简单子网划分教程][10]

注意，这里还有 D 类和 E 类 IP 地址，但我们将在稍后详细介绍这些内容。



这个方法有很多问题，最终导致了子网划分的出现。但在我们深入探讨这些问题之前，让我们先仔细看看不同的 IP 地址类别。

### A 类 IP 地址

对于 A 类 IP 地址，前八位（8 位 / 1 字节）表示网络 ID，其余三段（24 位 / 3 字节）表示主机 ID。

A 类 IP 地址范围从 `1.0.0.0` 到 `127.255.255.255`，默认子网掩码为 `255.0.0.0`（或 CIDR 的 `/8`）。

这意味着 A 类地址可以有 128 (2^7) 个网络，每个网络有 16,777,214 (2^24-2) 个可用地址。

另外，请注意，在 A 类地址范围内，`127.0.0.0` 到 `127.255.255.255` 这一范围被保留用于主机循环地址（参见 [RFC5735][11]）。

### B 类 IP 地址

对于 B 类 IP 地址，前两段（16 位 / 2 字节）表示网络 ID，其余两段（16 位 / 2 字节）表示主机 ID。

B 类 IP 地址范围从 `128.0.0.0` 到 `191.255.255.255`，默认子网掩码为 `255.255.0.0`（或 CIDR 的 `/16`）。

### C 类 IP 地址

对于 C 类 IP 地址，前三个八位字节（24 位 / 3 字节）代表网络 ID，最后一个八位字节（8 位 / 1 字节）是主机 ID。

C 类 IP 地址的范围是从 `192.0.0.0` 到 `223.255.255.255`，默认子网掩码为 `255.255.255.0`（或 CIDR 记法中的 `/24`）。

C 类 IP 地址对应 2,097,152（2^21）个网络，每个网络有 254（2^8 - 2）个可用地址。

### D 类和 E 类 IP 地址

最后两类是 D 类和 E 类。

D 类 IP 地址保留用于多播。它们的范围是从 `224.0.0.0` 到 `239.255.255.255`。

E 类 IP 地址是实验性的，范围是 `240.0.0.0` 以上。

### 类划分 IP 地址的问题

类划分 IP 地址的主要问题是不高效，会导致大量 IP 地址的浪费。

例如，设想你当时是一个大型组织的一部分。你的公司有 1,000 名员工，这意味着它属于 B 类。

但如果你往上看，你会发现 B 类网络可以支持多达 65,534 个可用地址。这远远超过了你的组织可能需要的数量，即使每个员工有多个带唯一地址的设备。

因此，当 IPv4 地址变得普及时，使用类 IP 地址的那段时间里，很快就清楚需要一个更好的系统来确保我们不会用光所有约 42 亿个可用地址。

自从类 IP 地址在 1993 年被 CIDR 取代后，就不再使用了，现在主要被研究用来理解早期互联网架构，以及为什么子网划分很重要。

## 希望这个速查表对你有所帮助

如果你觉得这有帮助，请与朋友分享，让更多人从中受益。

此外，欢迎在 [Twitter][12] 上联系我，告诉我你的想法。

---

![Kris Koishigawa](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/kris-author-image-cropped-2022.jpeg)

[Kris Koishigawa][13]

阅读 [更多文章][14]。

---

如果你读到这里，请感谢作者，表达你的关心。说声谢谢。

免费学习编程。freeCodeCamp 的开源课程已经帮助超过 40,000 人找到开发者工作。[开始学习][15]
