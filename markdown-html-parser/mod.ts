import {
  html,
  tokens
} from "https://deno.land/x/rusty_markdown@v0.4.1/mod.ts";

function markdownHtmlParser(markdown: string) {
  const tokenized = tokens(markdown, { strikethrough: true })
  return html(tokenized)
}

export { markdownHtmlParser }
