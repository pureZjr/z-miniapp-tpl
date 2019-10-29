import { observable, action } from 'mobx'

export class TestStore {
    /**
     * 用户信息
     */
    @observable
    num: number = 0

    @action
    setNum = (num: number) => {
        this.num = num
    }
}

export default new TestStore()
