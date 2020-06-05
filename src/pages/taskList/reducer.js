let obj ={
    list:[],//页面显示的内容
    allList:[],//全部内容
    index:0,//唯一索引
}
export default function taskList(state = obj,action){
    switch(action.type){
        case "SETTASK":
            const {list,index} = action
            return {
                ...state,
                list,
                allList:list,
                index
            }
        case "CHANGETASK":
            return {
                ...state,
                list:action.changeList
            }
        case "DELETETASK":
            return {
                ...state,
                list:action.deleteList
            }
        case "SEARCHTASK":
            return {
                ...state,
                list: action.searchList
            }
        default:
            return state;
    }
}