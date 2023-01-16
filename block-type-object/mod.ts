import { richTextStack } from "../rich-text-stack/mod.ts";
import { BlockTypeObject, Color, MetaBlockTypeObject } from "../types/mod.ts";

function createParagraphBlockTypeObject(
  children?: MetaBlockTypeObject[],
): BlockTypeObject {
  return {
    paragraph: {
      rich_text: richTextStack.popAll(),
      color: "default",
      children,
    },
  };
}

function createHeadingBlockTypeObject(
  level: number,
  children?: MetaBlockTypeObject[],
): BlockTypeObject {
  const blockTypeObject = {
    rich_text: richTextStack.popAll(),
    color: "default" as Color,
    children,
    is_toggleable: false,
  };
  switch (level) {
    case 1:
      return {
        heading_1: blockTypeObject,
      };
    case 2:
      return {
        heading_2: blockTypeObject,
      };
    default:
      return {
        heading_3: blockTypeObject,
      };
  }
}

function createBulletedListBlockTypeObject(
  children?: MetaBlockTypeObject[],
): BlockTypeObject {
  return {
    bulleted_list_item: {
      rich_text: richTextStack.popAll(),
      color: "default",
      children,
    },
  };
}

function createNumberedListBlockTypeObject(
  children?: MetaBlockTypeObject[],
): BlockTypeObject {
  return {
    numbered_list_item: {
      rich_text: richTextStack.popAll(),
      color: "default",
      children,
    },
  };
}

export {
  createBulletedListBlockTypeObject,
  createHeadingBlockTypeObject,
  createNumberedListBlockTypeObject,
  createParagraphBlockTypeObject,
};
