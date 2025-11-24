---
title: 内容编写准则
lang: zh-CN
layout: doc
outline: [2,3]
copyright: true
BV: BV1GJ411x7h7
---

# 内容编写准则
**在你编写内容前请阅读此准则与[《Markdown 扩展》](https://vitepress.dev/zh/guide/markdown)**<br>
**另外需要你熟练掌握原版Markdown**

## 1. Frontmatter相关
Frontmatter是整个md的头，本页参数如下：
```md
---
title: 内容编写准则
lang: zh-CN
layout: doc
outline: [2,3]
copyright: true
BV: BV1GJ411x7h7
---
```
大部分Frontmatter参数都可参考 [VitePress 官方文档](https://vitepress.dev/zh/guide/frontmatter)

我们网站所支持的Frontmatter参数如下：
```md
---
<!--可开启当前页面的版权声明，参考本页底部-->
copyright: true

<!--配合<BVideo />可在指定位置插入B站视频，效果如下-->
BV: BV1GJ411x7h7
---
```
<BVideo />

## 2. 正文相关
### 2.1 排版
#### 通用规则
1. 英文字母、阿拉伯数字等非中文字符，不应加空格与中文文本分开
   - 不适用于有特殊规定的专有名词
   - 例如：`此命令对Minecraft来说太长了，必须在服务端上安装JEI才能处理。`
2. 全角标点与其他字符之间不必留空格
   - 例如：`然而这只是理论。说起来容易做起来难：当时我使用的简易网络完全不适合拿来为这个仪式供应魔力，不仅挤压熔岩需要的压力巨大（需要20000LP启动仪式），抽取熔岩的开支也不小（每产生一格熔岩需要500LP）。`
3. 阿拉伯数字与英文单位之间不必添加空格
   - 例如：`理想的装饰建材，能存储50mB的流体。被破坏时仍能保留其中的液体。`
#### 详细规则
1. 文章内图片比列尽量保持在16:9，并参考[进入大厅](/docs/guide/hub)文章的图片参数，设置其他文章的图片参数。
2. 不要过度使用H1、H2标签否则会导致页面臃肿
3. 对于有顺序性的列表请使用有序列表而不是无序列表
    - 例如：[入服教学#进服步骤](/docs/guide/#%E8%BF%9B%E6%9C%8D%E6%AD%A5%E9%AA%A4)，这就是典型的错误使用
4. 在文章更新后请清除页面残留信息，避免留下上一版的信息
5. 不应过度或错误使用自定义容器