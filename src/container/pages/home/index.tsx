import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import '@tarojs/async-await'
import { observer, inject } from '@tarojs/mobx'

import { ComponentBENHelper } from '@utils/reactBemHelper'
import { getLocation } from '@utils/common'
import './index.scss'

const classes = ComponentBENHelper('home')

interface IStoresProps {
    TestStore?: {
        num: number
        setNum: (num: number) => void
    }
}

@inject('TestStore')
@observer
export default class Home extends Component<IStoresProps> {
    config: Taro.Config = {
        navigationBarTitleText: '主页',
    }

    plus = () => {
        this.props.TestStore.setNum(this.props.TestStore.num + 1)
    }
    minu = () => {
        this.props.TestStore.setNum(this.props.TestStore.num - 1)
    }

    async componentDidMount() {
        const args = await getLocation()
        console.log(args)
    }

    render() {
        const { num } = this.props.TestStore
        return (
            <View className={classes()}>
                <div>num:{num}</div>
                <Button onClick={this.plus}>加</Button>
                <Button onClick={this.minu}>减</Button>
            </View>
        )
    }
}
