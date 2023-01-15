type ListType = "bulleted" | "numbered";

const _stack: {
  type: ListType;
}[] = [];

const listStack = {
  push: function (listType: ListType) {
    _stack.push({ type: listType });
  },
  pop: function () {
    return { ..._stack };
  },
  currentType: function () {
    return _stack.at(-1)?.type;
  },
};

export { listStack };
