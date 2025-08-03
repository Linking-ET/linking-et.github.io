---
title: 内容编写准则
lang: zh-CN
layout: doc
outline: [2,3]
copyright: true
BV: BV1GJ411x7h7
---

# 内容编写准则
**在你编写内容前请阅读此准则。**


## 1. Frontmatter
Frontmatter 是整个 md 的头，本页参数如下：

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
大部分 Frontmatter 参数都可参考 [VitePress 官方文档](https://vitepress.dev/zh/guide/frontmatter)。

我们网站所支持的 Frontmatter 参数如下：
```md
---
# 可开启当前页面的版权声明，参考本页底部
copyright: true
---
```
```md
---
# 配合 <BVideo /> 可在指定位置插入B站视频，效果如下
BV: BV1GJ411x7h7
---
```
<BVideo />

