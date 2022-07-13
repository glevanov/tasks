---
inject: true
to: <%= target %>/index.ts
append: true
unless_exists: true
---
export { <%= h.changeCase.pascal(name) %> } from './<%= name %>/<%= name %>'