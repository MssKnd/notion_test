type BlockType =
  | "paragraph"
  | "heading_1"
  | "heading_2"
  | "heading_3"
  | "bulleted_list_item"
  | "numbered_list_item"
  | "to_do"
  | "toggle"
  | "child_page"
  | "child_database"
  | "embed"
  | "image"
  | "video"
  | "file"
  | "pdf"
  | "bookmark"
  | "callout"
  | "quote"
  | "equation"
  | "divider"
  | "table_of_contents"
  | "column"
  | "column_list"
  | "link_preview"
  | "synced_block"
  | "template"
  | "link_to_page"
  | "table"
  | "table_row"
  | "unsupported";

type Color =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red"
  | "gray_background"
  | "brown_background"
  | "orange_background"
  | "yellow_background"
  | "green_background"
  | "blue_background"
  | "purple_background"
  | "pink_background"
  | "red_background";

type RichTextType = "text" | "mention" | "equation";

type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: Color;
};
type RichTextObjectBase = {
  type: RichTextType;
  annotations: Annotations;
  plain_text: string;
  href: string | null;
};

type RichTextObjectText =
  & RichTextObjectBase
  & {
    text: {
      content: string;
      link: string | null;
    };
  };
type RichTextObjectMention = RichTextObjectBase;
type RichTextObjectEquation = RichTextObjectBase;
type RichTextObject =
  | RichTextObjectText
  | RichTextObjectMention
  | RichTextObjectEquation;

type BlockTypeObject<T extends BlockType> = {
  [key in T]: {
    rich_text: RichTextObject[];
    color: Color;
    is_toggleable: boolean;
  };
};

export type {
  Annotations,
  BlockType,
  BlockTypeObject,
  Color,
  RichTextObject,
  RichTextObjectEquation,
  RichTextObjectMention,
  RichTextObjectText,
  RichTextType,
};
