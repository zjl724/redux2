import React from 'react';
import './index.css'
import { Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions'
const { Search } = Input;

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    /**
     *查询
     *
     * @date 2020-06-05
     * @param {*} value 查询的内容
     * @memberof SearchInput
     */
    onSearchTask(value){
        this.props.actions.searchTask(value)
    }
    
    render() {
        return (
            <div>
                <Search placeholder="请输入要查询的任务" onSearch={(value) => this.onSearchTask(value)} enterButton />
            </div>
        )
    }
}

export default connect (
    state =>state,
    dispatch => ({actions:bindActionCreators(actions,dispatch)})
)(SearchInput);