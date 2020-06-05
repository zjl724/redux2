import React from 'react';
import Content from './content'
import AddTask from './addTask'
import SearchInput from './searchInput'

class List extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <AddTask></AddTask>
                <SearchInput></SearchInput>
                <Content></Content>
            </div>
        )
    }
}
export default List;