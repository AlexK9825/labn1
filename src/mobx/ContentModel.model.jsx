import { types, getParentOfType } from 'mobx-state-tree'
import { RootStore$ } from "d:/curs3/TW/labs/labn1/labn1/src/mobx/RootStore$";

export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    title: types.string,
    description: types.string,
    img: types.string
})
    .actions((self) => ({
        removeCard(id) {
            const { content$, setUpdateContent } = getParentOfType(self, RootStore$)
            const newContent = content$.filter((item) => item.id !== id)
            setUpdateContent(newContent)
            console.log('>>content$', content$)
        }
    }))
    