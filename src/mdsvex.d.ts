declare module "*.md" {
  import type { Component } from "svelte";
  export default class MarkdownComponent extends Component {}
}