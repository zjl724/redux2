import React from 'react';
import './index.css'
import { Button,Modal,Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,//控制弹框显示隐藏分
            currentTaskId:0,//当前点击的id
            currentTaskText:'',//点前点击的任务内容
        }
    }

    /**
     *显示该条任务对应的编辑框,设置默认任务
     *
     * @memberof Content
     */
    showEditDialog = (index,text) => {
        this.setState({
            visible: true,
            currentTaskId: index,
            currentTaskText: text
        });
    }

    /**
     *修改任务
     *
     * @memberof Content
     */
    handleOk(){
        const {currentTaskId,currentTaskText} = this.state
        this.props.actions.changeTask(currentTaskId,currentTaskText)
        this.setState({
            visible: false,
        });
    };

    /**
     *关闭弹框,设置弹框隐藏
     *
     * @memberof Content
     */
    handleCancel = e => {
        this.setState({
          visible: false,
        });
    };

    /**
     *监听文本框的改变
     *
     * @memberof Content
     */
    inputChange = e => this.setState({currentTaskText:e.target.value})

    /**
     *删除任务
     *
     * @date 2020-06-05
     * @param {*} index 删除的id
     * @memberof Content
     */
    deleteItemTask(index) {
        this.props.actions.deleteTask(index)
    }

    /**
     *修改状态变为已完成
     *
     * @date 2020-06-05
     * @param {*} index 修要的id
     * @memberof Content 
     */
    onFinish(index,text,finish) {
        if(finish === 0){
            finish = 1
            this.props.actions.changeTask(index,text,finish)
            console.log('未完成')
        }
    }

    render() {
        const {list} = this.props.taskList
        return (
            <div>
                {
                    list.length === 0?<div className="list">无需要完成的任务</div>:
                    <ul className="list">
                        {
                            list.map(item =>{
                                const {index, finish, text} = item
                                return <li key={index}>
                                    <p className={finish === 0 ? '' : 'finish'}>{text}</p>
                                    <Button type="primary" onClick={() => this.onFinish(index,text,finish)} disabled={finish === 0? false:true}>已完成</Button>
                                    <Button type="primary" onClick={() => this.showEditDialog(index,text)} disabled={finish === 0? false:true}>修改</Button>
                                    <Button type="primary" onClick={() => this.deleteItemTask(index)}>删除</Button>
                                </li>
                            })
                        }
                        
                    </ul>
                }
                 <Modal title="修改任务" visible={this.state.visible} onOk={()=>this.handleOk()} onCancel={this.handleCancel}>
                    <Input value={this.state.currentTaskText} onChange={this.inputChange}/>
                </Modal>
            </div>
        )
    }
}

export default connect (
    state =>state,
    dispatch => ({actions:bindActionCreators(actions,dispatch)})
)(Content);