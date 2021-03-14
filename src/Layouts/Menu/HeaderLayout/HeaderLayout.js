import React from 'react'
import { Layout, Menu } from 'antd';


const { Header } = Layout

export const HeaderLayout = () => {

    return(
        <Layout>
        <Header className="header">
      <div className="site-layout-background" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} 
      title="Daily News">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    </Layout>
    )
}
