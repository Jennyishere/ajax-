//? 用jq的方法时：
/*$.ajax ( {
    url: '',
    type:' ',
    data: {

    },
    success: function(res) {
        if(res.code === 200) {
			alert(res.msg)
    }
})
*/

let kits = {};

// function ajax(url,type,data,success) {
     kits.ajax = function(obj) {
        obj = obj || {}
        // url,type,data,success
        obj.url = obj.url ||'',
        obj.type = obj.type ||'get',
        obj.data = obj.data || {}
        
    //创建
    // let xhr = new XMLHttpRequest();
    // //s设置方式和地址
    // xhr.open(type,url);
    // //发送请求
    // xhr.send()
    // //监听
    // xhr.onreadystatechange = function() {
    //     if(xhr.readyState === 4 && xhr.status ===200) {
    //         success(xhr.responseText)
    //     }
    // }

    // //!继续完善
    // let xhr = new XMLHttpRequest();
    // //如果有数据传入呢？？
    // if(type == 'get') {
    //     url += '?' + data;
    // }
    // //s设置方式和地址
    // xhr.open(type,url);
    // //发送请求
    // xhr.send()
    // //监听
    // xhr.onreadystatechange = function() {
    //     if(xhr.readyState === 4 && xhr.status ===200) {
    //         success(xhr.responseText)
    //     }
    // }

    // //!继续完善
    // let xhr = new XMLHttpRequest();
    // //如果有数据传入呢？？
    // if(type == 'get') {
    //     url += '?' + data;
    // }
    // //s设置方式和地址
    // xhr.open(type,url);
    // //发送请求
    // if (type == 'post') {
    //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    //     xhr.send(data)
    // }
    // //监听
    // xhr.onreadystatechange = function() {
    //     if(xhr.readyState === 4 && xhr.status ===200) {
    //         success(xhr.responseText)
    //     }
    // }

    // //!继续完善
    // let xhr = new XMLHttpRequest();
    // //如果有数据传入呢？？
    // if(type == 'get') {
    //     url += '?' + data;
    // }
    // //s设置方式和地址
    // xhr.open(type,url);
    // //发送请求
    // if (type == 'post') {
    //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    //     xhr.send(data)
    // }else {
    //     xhr.send()         //把get的还原
    // }
    // //监听
    // xhr.onreadystatechange = function() {
    //     if(xhr.readyState === 4 && xhr.status ===200) {
    //         success(xhr.responseText)
    //     }
    // }

    //!继续完善
        //先把传入的data转成键=值&
        let arr = [];
        for(let key in obj.data) {
            arr.push(key+'='+obj.data[key])
        }
        obj.data = arr.join('&');
    let xhr = new XMLHttpRequest();
    //如果有数据传入呢？？
    if(obj.type == 'get') {
        obj.url += '?' + obj.data;
    }
    //s设置方式和地址
    xhr.open(obj.type,obj.url);
    //发送请求
    if (obj.type == 'post') {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(obj.data)
    }else {
        xhr.send()         //把get的还原
    }
    //监听
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status ===200) {
            //转换成对象  得到的responseText是个json格式的
            let response = xhr.responseText;
            if(xhr.getAllResponseHeaders('Content-Type').indexOf('json') !== -1) {
                response = JSON.parse(response);
            }

            obj.success && obj.success(response)
        }
    }
}

kits.tip = function (content) { 
    $('p').text(content);
    $('p').css('display','block');
    let timer = setTimeout(() => {
    $('p').css('display','');
}, 2000);

 }