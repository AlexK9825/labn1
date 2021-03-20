import React from 'react'
import { Card } from 'antd'

const { Meta } = Card;

export const ContentStory = ({img, title, description, index}) => {

    return(
        <Card
    hoverable
    style={{ width: 240, margin: '20px' }}
    cover={<img alt="example" src={ img } />}
    onClick={(param)=> console.log('>>clicked', param)}
  >
    <Meta title={title} description={description} />
  </Card>
    )
}