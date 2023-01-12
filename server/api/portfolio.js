import {Client} from '@notionhq/client';

/**
 * Takes a Notion page record and converts it to the correct JSON API output format for the website.
 * @param item - A single portfolio page record in Notion format.
 * @returns {{id, video: *, title: *, type: *}}
 */
function formatPortfolioData(item, pageContent){
    return {
        id: item["id"],
        title: item["properties"]["Name"]["title"][0]["plain_text"],
        type: item["properties"]["Project Type"]["rich_text"][0]["plain_text"],
        video: item["properties"]["Hero Video"]["files"][0]["file"]["url"],
        client: item["properties"]["Client"]["rich_text"].length ? item["properties"]["Client"]["rich_text"][0]["plain_text"] : null,
        clientLogo: item["properties"]["Client Logo"]["files"].length ? item["properties"]["Client Logo"]["files"][0]["file"]["url"] : null,
        partner: item["properties"]["Partner"]["rich_text"].length ? item["properties"]["Partner"]["rich_text"][0]["plain_text"] : null,
        completed: item["properties"]["Completed"]["number"],
        stack: item["properties"]["Stack"]["multi_select"],
        role: item["properties"]["Role"]["rich_text"][0]["plain_text"],
        lead: item["properties"]["Lead Text"]["rich_text"][0]["text"]["content"],
        pageContent: pageContent
    }
}

/**
 * Returns the portfolio data from Notion, pre-parsing it and securing the environment variable.
 * @returns {Promise<*>}
 */
export default defineEventHandler(async (event) => {
    const notion = new Client({auth: process.env.NOTION_API_KEY});
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_PORTFOLIO,
        filter: {
            "property": "Visibility",
            "select": {
                "equals": "Published"
            }
        },
        page_size: 100
    });
    const output = [];
    for (const item of response["results"]) {
        const pageID = item["id"];
        const pageContent = await notion.blocks.children.list({
            block_id: pageID,
        });
        output.push(formatPortfolioData(item, pageContent["results"]));
        output.push(formatPortfolioData(item, pageContent["results"]));
        output.push(formatPortfolioData(item, pageContent["results"]));
        output.push(formatPortfolioData(item, pageContent["results"]));
    }
    //return response;
    return output;
});
