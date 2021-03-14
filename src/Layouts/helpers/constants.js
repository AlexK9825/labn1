import { UserOutlined } from "@ant-design/icons";
import { CloudOutlined } from "@ant-design/icons";
import { TeamOutlined } from "@ant-design/icons";
import { QuestionOutlined } from "@ant-design/icons";

export const MenuRoot = [
    {
        id: 0,
        name: "Домашняя страница",
        icon: <UserOutlined/>,
        path: '/'
    },
    {
        id: 1,
        name: "Новости",
        icon: <CloudOutlined/>,
        path: '/'
    },
    {
        id: 2,
        name: "Сообщество",
        icon: <TeamOutlined/>,
        path: '/'
    },
    {
        id: 3,
        name: "Техподдержка",
        icon: <QuestionOutlined/>,
        path: '/'
    },
]