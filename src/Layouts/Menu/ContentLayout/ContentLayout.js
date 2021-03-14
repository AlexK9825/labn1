import React from 'react'
import { Layout } from "antd";
import { contentMock } from "../../../components/moc/content";
import { ContentStory } from '../../../components/ContentStory/ContentStory';

import './style.css'

const { Content } = Layout

export const ContentLayout = () => {
      
    return(
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background content" style={{ padding: 100,
              textAlign: 'center'}}>
          { contentMock.map(({description, img, title}) => {
              return (
              <ContentStory description={description} title={title} 
              img={img}/>
              )
              })  }
        </div>
      </Content>
    )
}