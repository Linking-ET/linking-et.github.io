---
title: Content Edit Rule
lang: en-US
layout: doc
outline: [2,3]
copyright: true
BV: BV1GJ411x7h7
---

# Content Writing Guidelines
**Please read these guidelines and [《Markdown Extensions》](https://vitepress.dev/en/guide/markdown) before writing content**<br>
**Additionally, you need to be proficient in standard Markdown**

> [!tip] This page is not well translated. Our Translator is pretty tried dealing every little, little, little difference between Chinese and English. :(

## 1. Frontmatter Related
Frontmatter is the header of the entire markdown file. This page's parameters are as follows:
```md
---
title: Content Edit Rule
lang: en_US
layout: doc
outline: [2,3]
copyright: true
BV: BV1GJ411x7h7
---
```
Most Frontmatter parameters can be referenced from the [VitePress Official Documentation](https://vitepress.dev/zh/guide/frontmatter)

The Frontmatter parameters supported by our website are as follows:

```md
---
<!--Enables copyright statement for the current page, refer to the bottom of this page-->
copyright: true

<!--Used with <BVideo /> to insert Bilibili videos at specified locations, effect as shown below-->
BV: BV1GJ411x7h7
---
```

<BVideo />

## 2. Main Content Related
### 2.1 Formatting
#### General Rules
1. Non-Chinese characters such as English letters and Arabic numerals should not be separated from Chinese text by spaces

   - Does not apply to proper nouns with special regulations

   - Example: `此命令对Minecraft来说太长了，必须在服务端上安装JEI才能处理。`

2. Full-width punctuation marks do not need spaces between them and other characters

   - Example: `然而这只是理论。说起来容易做起来难：当时我使用的简易网络完全不适合拿来为这个仪式供应魔力，不仅挤压熔岩需要的压力巨大（需要20000LP启动仪式），抽取熔岩的开支也不小（每产生一格熔岩需要500LP）。`

3. No space is needed between Arabic numerals and English units

   - Example: `理想的装饰建材，能存储50mB的流体。被破坏时仍能保留其中的液体。`

#### Detailed Rules
1. Image aspect ratios in articles should preferably maintain 16:9, and refer to the image parameters in the [In the Hub](../guide/hub) article when setting image parameters for other articles.

2. Do not overuse H1 and H2 tags as it can make the page bloated

3. For sequential lists, use ordered lists instead of unordered lists

   - Example: [Join Server](../guide) is a typical example of incorrect usage

4. After updating an article, please clear residual information from the previous version to avoid leaving outdated content

5. Should not overuse or misuse custom containers
