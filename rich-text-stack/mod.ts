import { RichTextObject } from "../types/mod.ts";

let _stack: RichTextObject[] = [];

const richTextStack = {
  push: function (richTextObject: RichTextObject) {
    _stack.push(richTextObject);
  },
  popAll: function () {
    const copy = [..._stack];
    _stack = [];
    return copy;
  },
};

export { richTextStack };
