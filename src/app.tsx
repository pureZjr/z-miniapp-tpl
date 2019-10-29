import '@minapp/wx'
import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/mobx'
import 'taro-ui/dist/style/index.scss'

import store from '@store/index'
import './styles/icon/iconfont.css'
import Home from './container/pages/home'
import './app.scss'

class App extends Component {
    config: Taro.Config = {
        pages: ['container/pages/home/index'],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black',
        },
        permission: {
            'scope.userLocation': {
                desc: '你的位置信息将用于地图展示',
            },
        },
    }

    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
