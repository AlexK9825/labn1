import { UserOutlined } from "@ant-design/icons";
import { CloudOutlined } from "@ant-design/icons";
import { TeamOutlined } from "@ant-design/icons";
import { QuestionOutlined } from "@ant-design/icons";

export const HOME_PATH = '/'
export const NEWS_PATH = '/news'
export const COMMUNITY_PATH = '/community'
export const SUPPORT_PATH = '/support'


export const MenuRoot = [
    {
        id: 0,
        name:  "Домашняя страница",
        icon: <UserOutlined/>,
        path: HOME_PATH
    },
    {
        id: 1,
        name: "Новости",
        icon: <CloudOutlined/>,
        path: NEWS_PATH
    },
    {
        id: 2,
        name: "Сообщество",
        icon: <TeamOutlined/>,
        path: COMMUNITY_PATH
    },
    {
        id: 3,
        name: "Техподдержка",
        icon: <QuestionOutlined/>,
        path: SUPPORT_PATH
    },
]