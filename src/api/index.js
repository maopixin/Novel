import http from '../utils/http';
export function getRank(data){
    return http.get(data);
}
