import React from 'react';
import './index.css'
import Add from './add'
import List from './list'


class TackList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { tabName: "任务列表", id: 1 },
                { tabName: "添加任务", id: 2 },
            ],
            currentIndex: 1,
        };
    }

    tabChoiced = (id) => {
        this.setState({
            currentIndex: id
        });
    }

    render() {
        const {currentIndex,tabs} = this.state
        var tabList = tabs.map((res, index) => {
            var tabStyle = res.id == currentIndex ? 'subCtrl active' : 'subCtrl';
            return <li key={index} onClick={() => this.tabChoiced(res.id)} className={tabStyle}>{res.tabName}</li>

        });
        return (
            <div className="container">
                <ul className="subNavWrap">
                    {tabList}
                </ul>
                <div className="newsList">
                    <div style={{ "display": currentIndex === 1 ? 'block' : 'none' }}>
                        <List></List>
                    </div>
                    <div style={{ "display": currentIndex === 2 ? 'block' : 'none' }}>
                        <Add></Add>
                    </div>
                </div>
            </div>
        )
    }
}
export default TackList;