import { Annotations, RichTextObjectText } from "./types/mod.ts";

// function create(type: RichTextType, ...args: TextObjectProps): RichTextObject {
//   switch (type) {
//     case "text":
//       return createTextObject();
//     default:
//       break;
//   }
// }

type TextObjectProps = {
  content: string;
  link: string | null;
  annotations: Annotations;
  plain_text: string;
  href: string | null;
};

function createTextObject(
  { content, link = null, annotations, plain_text, href }: TextObjectProps,
): RichTextObjectText {
  return {
    type: "text",
    text: {
      content,
      link,
    },
    annotations,
    plain_text,
    href,
  };
}

export { createTextObject };
