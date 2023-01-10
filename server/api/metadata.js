import {Client} from '@notionhq/client';

/**
 * Returns the website metadata from Notion, pre-parsing it and securing the environment variable.
 */
export default defineEventHandler(async (event) => {
    const notion = new Client({auth: process.env.NOTION_API_KEY});
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_METADATA
    });
    return {
        status: response["results"][0]["properties"]["Status Message"]["rich_text"][0]["plain_text"]
    }
});
