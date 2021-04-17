import React, { useEffect, useState } from 'react'
import { Layout } from "antd";
import { contentMock } from "../../../components/moc/content";
import { ContentStory } from '../../../components/ContentStory/ContentStory';
import { getStateByKey } from "d:/curs3/TW/labs/labn1/labn1/src/helpers/functions";

import './style.css';


const { Content } = Layout

export const ContentLayout = () => {
      
    const[content, setContent] = useState([])

    useEffect(() => {
        setContent(getStateByKey('initialState'))
    }, [])

    return(
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background content" style={{ padding: 100,
              textAlign: 'center'}}>
                  {!content.length ? (
                      <div>No Content</div>
                  ) : (
           content.map(({description, img, title}, index) => {
              return (
              <ContentStory key={index} description={description} title={title} 
              img={img}/>
              )
              }) ) }
        </div>
      </Content>
    )
}

