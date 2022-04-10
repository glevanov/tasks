---
inject: true
to: components/index.ts
append: true
unless_exists: true
---
export { <%= h.changeCase.pascal(name) %> } from './<%= name %>/<%= name %>'