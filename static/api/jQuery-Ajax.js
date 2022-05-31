// Ajax 封装

function ajax_jsonp(params, callBack) {
    return $.ajax({
        type: 'get',
        url: params.url,
        dataType: 'jsonp',
        success: function (res) {
            callBack(res);
        },
    });
}

function ajax(params, callBack) {
    $.ajax({
        type: 'get',
        url: params.url,
        success: function (res) {
            callBack(res);
        },
    });
}
