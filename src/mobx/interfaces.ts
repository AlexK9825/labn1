import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'
import { ContentModel } from './ContentModel.model'
import { NewsModel } from './NewsModel.model'
import { RootStore$ } from './RootStore$'

export interface IRoot$ extends Instance<typeof RootStore$> {
}

export interface IContentModel extends Instance<typeof ContentModel> {
}
export interface ISnapshotContentModelIn extends SnapshotIn<typeof ContentModel> {
}
export interface ISnapshotContentModelOut extends SnapshotOut<typeof ContentModel> {
}
export interface INewsModel extends Instance<typeof NewsModel> {
}
export interface ISnapshotNewsModelIn extends SnapshotIn<typeof NewsModel> {
}
export interface ISnapshotNewsModelOut extends SnapshotOut<typeof NewsModel> {
}


export interface IRequestData {
    breeds: [],
    height: number,
    id: string,
    url: string,
    width: number
}
