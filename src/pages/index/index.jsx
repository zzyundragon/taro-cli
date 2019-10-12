import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import { AtInput, AtButton, AtTabBar } from 'taro-ui'
import './index.styl'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      current: 0,
      todos: [
        { title: 'aa', id: 0 },
        { title: 'bb', id: 1 },
        { title: 'cc', id: 2 }
      ]
    }
  }

  config = {
    navigationBarTitleText: 'taro-ecu'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  async addTodo(e) {
    await this.setState({
      todos: [...this.state.todos, { title: this.state.value, id: this.state.todos[this.state.todos.length - 1].id + 1 }],
      value: ''
    }, () => {
      console.log(this.state)
    })
    setTimeout(() => {
      console.log(e, this.state)
    })

  }
  inputChange(val) {
    // console.log('e =', e)
    this.setState({
      value: val
    })
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    return (
      <View className='index'>
        <Text className='center flex flex-center'>Hello ecu</Text>
        {/* <AtInput value={this.state.value} onChange={this.inputChange}></AtInput> */}
        {/* <Input value={this.state.value} onChange={this.inputChange.bind(this)} /> */}
        <AtInput name='value' title='请输入' type='text' placeholder='请输入' value={this.state.value} onChange={this.inputChange.bind(this)} />
        <View>
          {
            this.state.todos.map((v) => {
              return <View key={v.id}>{v.title}</View>
            })
          }
        </View>
        <AtButton type='primary' onClick={this.addTodo.bind(this)}>添加</AtButton>
        {/* <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home', text: '' },
            {
              title: '订单', iconType: 'bullet-list', text: '100'
            },
            { title: '我的', iconType: 'user'}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        /> */}
      </View>

    )
  }
}
