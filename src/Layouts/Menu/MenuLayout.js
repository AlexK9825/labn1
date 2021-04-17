import React from 'react'
import { Layout, Menu } from 'antd'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
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
            MenuRoot.map((menu) => {
            return(
              <Menu.Item key={menu.id} icon= {menu.icon}>
                <Link to={ menu.path }>{ menu.name }</Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
    )
}