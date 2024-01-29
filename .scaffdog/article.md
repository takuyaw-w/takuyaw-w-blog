---
name: "article"
root: "."
output: "src/content/**/*"
ignore: []
---

# `{{ date "YYYY" }}/{{ date "MMDD"}}.md`

```markdown
---
title: "TITLE"
tags: []
publishedAt: ""
createdAt: "{{ date "YYYY-MM-DD HH:mm:ss"}}"
---

## TITLE
```
