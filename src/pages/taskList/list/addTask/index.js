import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions'
import './index.css'
import { Input,Button } from 'antd';

class AddTask extends React.Component {
    constructor(props){
        super(props)
        this.state={
             addValue:'',//文本框
        }
    }

    /**
     *添加任务
     *
     * @memberof AddTask
     */
    addBtnClick = () =>{
        const list = [this.state.addValue]
        this.props.actions.setTask(list)
    }
    /**
     *绑定文本框
     *
     * @memberof AddTask
     */
    addValueChange = (e) =>{
        this.setState({addValue: e.target.value})
    }

    render() {
        return (
            <div>
                <Input placeholder="请输入需要完成的任务" value={this.state.addValue} onChange={this.addValueChange}/>
                <Button type="primary" onClick={this.addBtnClick}>添加</Button>
            </div>
        )
    }
}
export default connect (
    state =>state,
    dispatch => ({actions:bindActionCreators(actions,dispatch)})
)(AddTask);