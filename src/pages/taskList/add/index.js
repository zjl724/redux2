import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'
import { Input,Button } from 'antd';
const { TextArea } = Input;

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value1:'',//第一个文本框的值
            value2:'',//第二个文本框的值
            value3:'',//第三个文本框的值
        }
    }
    /**
     *绑定文本框
     *
     * @memberof Add
     */
    addValue1Change = e => this.setState({value1: e.target.value})
    addValue2Change = e => this.setState({value2: e.target.value})
    addValue3Change = e => this.setState({value3: e.target.value})

    /**
     *添加多条任务
     *
     * @memberof Add
     */
    addListBtnClick = () =>{
        const {value1,value2,value3} = this.state;
        let list = [value1,value2,value3];
        const result = list.filter(item =>{
            return item !== ''
        })
        if(result.length === 0){
            alert('请添加任务')
            return
        }
        this.props.actions.setTask(result)
    }
    render() {
        const {value1,value2,value3} = this.state;
        return (
            <div>
                <h2>添加多条任务</h2>
                <TextArea rows={2} placeholder="请输入需要完成的任务" value={value1} onChange={this.addValue1Change}/>
                <TextArea rows={2} placeholder="请输入需要完成的任务" value={value2} onChange={this.addValue2Change}/>
                <TextArea rows={2} placeholder="请输入需要完成的任务" value={value3} onChange={this.addValue3Change}/>
                <Button type="primary" onClick={this.addListBtnClick}>添加</Button>
            </div>
        )
    }
}

export default connect (
    state =>state,
    dispatch => ({actions:bindActionCreators(actions,dispatch)})
)(Add);