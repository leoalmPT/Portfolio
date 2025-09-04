declare module "*.md" {
  import type { Component } from "svelte";
  export default class MarkdownComponent extends Component {}
}

declare module "*.svx" {
  import type { Component } from "svelte";
  export default class SVXComponent extends Component {}
}