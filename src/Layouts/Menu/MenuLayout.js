import React from 'react'
import { Layout, Menu } from 'antd'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { MenuRoot } from "../../helpers/constants"

import './menustyle.css'

const { Sider } =  Layout

export const MenuLayout = () => {

    return(
        <Sider
        style={{
          color: 'black',
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
          {
            MenuRoot.map((menu, index) => {
            return(
              <Menu.Item key={menu.id} icon= {menu.icon}>
                {menu.name}
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
    )
}