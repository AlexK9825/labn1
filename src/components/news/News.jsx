import { observer } from 'mobx-react-lite'
import React from 'react'
import { useRootStore } from "d:/curs3/TW/labs/labn1/labn1/src/mobx/ProviderRootStore";
import { ContentStory } from "d:/curs3/TW/labs/labn1/labn1/src/components/ContentStory/ContentStory";

export const News = observer(() => {

        const { news$ } = useRootStore()

        return (
            <div className="content" style={ { padding: 24, textAlign: 'center' } }>
                { news$.map((card) => (
                    <ContentStory key={ card.id } id={ card.id } title={ card.title } description={ card.description }
                                  img={ card.img } removeCard={ card.removeData }/>
                )) }
            </div>
        )
    }
)