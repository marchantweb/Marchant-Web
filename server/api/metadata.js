import {Client} from '@notionhq/client';

/**
 * Returns the website metadata from Notion, pre-parsing it and securing the environment variable.
 */
export default defineEventHandler(async (event) => {
    const notion = new Client({auth: process.env.NOTION_API_KEY});
    const response = await notion.databases.query({
        database_id: 'c0db00f357b342e8b7c7b35c5556856c'
    });
    return {
        location: response["results"][0]["properties"]["Current Location"]["rich_text"][0]["plain_text"]
    }
});
