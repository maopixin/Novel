import qs from './qs';
export default {
    post: (data)=>{
        return fetch(data.url, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data.data),
        }).then((response)=>{
            return response.json();
        })
    },
    get: (data)=>{
        var queryString = "";
        if(data.data){
            queryString = "?" + qs(data.data)
        }
        return fetch(data.url + queryString).then((response)=>{
            return response.json();
        })
    }
}