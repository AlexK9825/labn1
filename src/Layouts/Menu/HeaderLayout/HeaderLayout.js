import React from 'react'
import { Layout, Menu } from 'antd';


const { Header } = Layout

export const HeaderLayout = () => {

    return(
        <Layout>
        <Header className="header">
      <Menu theme="dark" mode="horizontal"/>
      <div className="site-layout-background" 
      style={{ padding: 0, textAlign: 'center', color: 'white',
       fontSize: '32px' }}>
        Daily News
        </div>
    </Header>
    </Layout>
    )
}
