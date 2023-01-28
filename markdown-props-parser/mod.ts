import { parse } from "https://deno.land/std@0.171.0/encoding/yaml.ts";

function extructYamlHeader(markdown: string) {
  const headerRegex = /^---$\n(?<props>[\s\S]*?)\n^---$(?<body>[\s\S]*)/m;
  const matchResult = markdown.match(headerRegex);
  if (!matchResult) {
    throw new Error('no yaml header')
  }
  return {
    header: matchResult.groups?.props,
    body: matchResult.groups?.body,
  }
}

async function markdownPropsParser(filePath: string) {
  const markdown = await Deno.readTextFile(filePath);
  
  const {header, body} = extructYamlHeader(markdown)

  // TODO: validat props
  return {props: parse(header ?? ''), body: body ?? ''}
}


export {markdownPropsParser}
