import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    base_url: "https://ekston.github.io/Notion-Hugo/",
    mount: {
        manual: true,
        page_url: 'https://google.com',
        pages: [
            {
                page_id: '45eb121158b9489480ec000fd25c812b',
                target_folder: '.'
            }
        ],
        databases: [
            {
                database_id: 'b7b1816c05ec464391c8c111fa242985',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
