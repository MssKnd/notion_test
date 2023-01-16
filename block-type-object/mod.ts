import { richTextStack } from "../rich-text-stack/mod.ts";
import { BlockTypeObject, Color } from "../types/mod.ts";

function createParagraphBlockTypeObject(): BlockTypeObject {
  return {
    paragraph: {
      rich_text: richTextStack.popAll(),
      color: "default",
    },
  };
}

function createHeadingBlockTypeObject(
  level: number,
): BlockTypeObject {
  const blockTypeObject = {
    rich_text: richTextStack.popAll(),
    color: "default" as Color,
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

function createBulletedListBlockTypeObject(): BlockTypeObject {
  return {
    bulleted_list_item: {
      rich_text: richTextStack.popAll(),
      color: "default",
    },
  };
}

function createNumberedListBlockTypeObject(): BlockTypeObject {
  return {
    numbered_list_item: {
      rich_text: richTextStack.popAll(),
      color: "default",
    },
  };
}

export {
  createBulletedListBlockTypeObject,
  createHeadingBlockTypeObject,
  createNumberedListBlockTypeObject,
  createParagraphBlockTypeObject,
};
