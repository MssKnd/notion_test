import { richTextStack } from "../rich-text-stack/mod.ts";
import { Color, MetaBlockTypeObject, RichTextObject } from "../types/mod.ts";

function createMetaParagraphBlockTypeObject(
  children?: MetaBlockTypeObject[],
): MetaBlockTypeObject {
  return {
    type: "paragraph",
    paragraph: {
      rich_text: richTextStack.popAll(),
      color: "default",
      children,
    },
  };
}

function createMetaHeadingBlockTypeObject(
  level: number,
  children?: MetaBlockTypeObject[],
): MetaBlockTypeObject {
  const blockTypeObject = {
    rich_text: richTextStack.popAll(),
    color: "default" as Color,
    children,
    is_toggleable: false,
  };
  switch (level) {
    case 1:
      return {
        type: "heading_1",
        heading_1: blockTypeObject,
      };
    case 2:
      return {
        type: "heading_2",
        heading_2: blockTypeObject,
      };
    default:
      return {
        type: "heading_3",
        heading_3: blockTypeObject,
      };
  }
}

// function createMetaBlockTypeObject(blockTypeObject: BlockTypeObject): MetaBlockTypeObject {
//   const a = 'paragraph' in blockTypeObject ? blockTypeObject.paragraph : 'test'
//   return {

//   }
// }

function createMetaBulletedListBlockTypeObject(
  richTexts: RichTextObject[],
  children?: MetaBlockTypeObject[],
): MetaBlockTypeObject {
  return {
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: richTexts,
      color: "default",
      children,
    },
  };
}

function createMetaNumberedListBlockTypeObject(
  richTexts: RichTextObject[],
  children?: MetaBlockTypeObject[],
): MetaBlockTypeObject {
  return {
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: richTexts,
      color: "default",
      children,
    },
  };
}

export {
  createMetaBulletedListBlockTypeObject,
  createMetaHeadingBlockTypeObject,
  createMetaNumberedListBlockTypeObject,
  createMetaParagraphBlockTypeObject,
};
