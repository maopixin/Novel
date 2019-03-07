import http from '../utils/http';
// 筛选 排行榜用
export function getRank(data){
    return http.get(data);
}
// 获取书籍详情 by id
export function getBookInfo(id){
    return http.get({
        url:`https://shuapi.jiaston.com/info/${id}.html`
    });
}
