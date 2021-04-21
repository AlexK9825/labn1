import React, { useEffect, useState } from 'react'
import { Layout } from "antd";
import { contentMock } from "../../../components/moc/content";
import { ContentStory } from '../../../components/ContentStory/ContentStory';
import { getStateByKey } from "d:/curs3/TW/labs/labn1/labn1/src/helpers/functions";

import './style.css';

const { Content } = Layout

export const ContentLayout = ({ initialState, setInitialState }) => {
      
    // const [ content, setContent ] = useState(getInitialState())

     // useEffect(() => {
    //     setContent(getStateByKey('initialState'))
    // }, [])

    return(
         <Content>
            <div className="content" style={ { padding: 24, textAlign: 'center' } }>
                { !initialState.length ? (
                    <div>No Content</div>
                ) : (
                initialState.map(({ description, img, title }, index) => {
              return (
              <ContentStory initialState={ initialState } setInitialState={ setInitialState }
                                          key={ index } description={ description }
                                          title={ title } img={ img }
                                          index={ index }/>
                        )
                    })
                ) }
            </div>
        </Content>
    )
}

