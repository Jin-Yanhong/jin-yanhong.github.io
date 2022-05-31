//接口请求函数

// 获取多张 Bing 壁纸
function BingPapers(callback) {
    // jsonp 方式 调用
    ajax_jsonp(
        {
            url: 'https://api.asilu.com/bg/',
        },
        res => {
            callback(res);
        }
    );
}

// 获取 markdown 文章
function getMarkdownFileNameList(callback) {
    ajax(
        {
            url: '../../json/markdownFileName.json',
        },
        res => {
            callback(res);
        }
    );
}

// 获取 markdown 笔记内容
function getPieceThoughtsContent(fileName = null, callback) {
    ajax(
        {
            url: `../../markdown/pieceThoughts/${fileName}`,
        },
        res => {
            if (fileName) {
                fileName = '' ? (res = '') : '';
                callback(res);
            }
        }
    );
}

// 获取 markdown 文章内容
function getArticleContent(fileName = null, callback) {
    ajax(
        {
            url: `../../markdown/articles/${fileName}`,
        },
        res => {
            if (fileName) {
                fileName = '' ? (res = '') : '';
                callback(res);
            }
        }
    );
}

function epidemicMap(callback) {
    ajax_jsonp(
        {
            url: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',
        },
        res => {
            callback(res);
        }
    );
}
// 新冠肺炎疫情数据可视化
// https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427
