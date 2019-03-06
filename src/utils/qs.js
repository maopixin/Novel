export default (data) => {
    let s = "";
    for (const key in data) {
        s += `${key}=${data[key]}&`
    };
    return s.substring(0,s.length-1);
};