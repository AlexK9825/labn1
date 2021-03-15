import { contentMock } from "../components/moc/content";

export function SetInitialStateToLocalStorage() {
    localStorage.setItem('initialState', JSON.stringify(contentMock))
}

export function getStateByKey(key) {
    return JSON.parse(localStorage.getItem(key))
}