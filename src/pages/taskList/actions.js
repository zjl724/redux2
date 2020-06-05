const SET_TASK = "SETTASK"
const CHANGE_TASK = "CHANGETASK"
const DELETE_TASK = "DELETETASK"
const SEARCH_TASK = "SEARCHTASK"
/**
 * 添加任务
 * @param {*} content 需要添加的数组
 */
export const setTask = (content) =>{
    return (dispatch,getState) => {
        let {list , index} = getState().taskList
        content.forEach(item => {
            index = ++index
            list.unshift({
                index: index,
                text: item,
                finish:0
            })
        })
        dispatch({
            type: SET_TASK,
            list,
            index,
        })
    }
}

/**
 * 修改任务
 * @param {*} index 要修改的id
 * @param {*} text 要修改的文本
 * @param {*} finish 是否完成
 */
export const changeTask = (index,text,finish=0) =>{
    return (dispatch,getState) => {
        let {list} = getState().taskList
        list.some(item => {
            if(item.index === index){
                item.text = text
                item.finish = finish
                return true
            }
            return false
        })
        dispatch({
            type:CHANGE_TASK,
            changeList: list,
        })
    }
}
/**
 * 删除任务
 * @param {*} index 要删除的id
 */
export const deleteTask = (index) => {
    return (dispatch,getState) => {
        let {list} = getState().taskList
        const result = list.filter(item =>{
            return item.index !== index
        })
        dispatch({
            type: DELETE_TASK,
            deleteList: result
        })
    }
}
/**
 * 查询任务
 * @param {*} text 要查询的内容
 */
export const searchTask = (text) =>{
    return (dispatch,getState) => {
        let {allList} = getState().taskList
        const result = allList.filter(item => item.text.indexOf(text) > -1)
        dispatch({
            type: SEARCH_TASK,
            searchList:result
        })
    }
}