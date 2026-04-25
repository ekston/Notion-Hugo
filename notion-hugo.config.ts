import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    base_url: "https://ekston.github.io/Notion-Hugo/",
    mount: {
        manual: true,
        page_url: '',
        pages: [],
        databases: [
            {
                database_id: '36e5484b5bd783849a838178dc874e79',
                target_folder: 'posts'
            }
        ],
    }
}

export default userConfig;
