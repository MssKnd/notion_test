import { Client } from "https://deno.land/x/notion_sdk@v1.0.4/src/mod.ts";
import { BlockTypeObject } from "../types/mod.ts";

function NotionClient(auth: string) {
  const notion = new Client({
    auth
  });
  return {
    updatePage: async (pageId: string, blockTypeObjects: BlockTypeObject[]) => {
      await notion.blocks.children.append({
        block_id: pageId,
        children: blockTypeObjects as any,
      });
    }
  }
}

export { NotionClient }
