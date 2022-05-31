// 从 URL 获取参数
function UrlSearch(url) {
    let str = url || location.href; //取得整个地址栏
    let num = str.indexOf('?');
    if (num !== -1) {
        str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
        let arr = str.split('&'); //各个参数放到数组里
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            num = arr[i].split('=');
            obj[num[0]] = num[1];
        }
        console.log('获取到的参数如下:');
        console.log(obj);
        return obj;
    } else {
        console.log('当前页面没有参数');
        return {}; //返回空对象，不至于出现红色的错误信息！
    }
}
