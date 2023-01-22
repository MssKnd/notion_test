import { RichTextObject } from "../types/mod.ts";

const _stack: {
  richTextObjects: RichTextObject[];
}[] = [{ richTextObjects: [] }];

const richTextStack = {
  pushLevel: () => {
    _stack.push({ richTextObjects: [] });
  },
  push: (richTextObject: RichTextObject) => {
    _stack.at(-1)?.richTextObjects.push(richTextObject);
  },
  popAll: function () {
    const current = _stack.pop();
    if (_stack.length === 0) {
      this.pushLevel();
    }
    return current?.richTextObjects ?? [];
  },
};

export { richTextStack };
