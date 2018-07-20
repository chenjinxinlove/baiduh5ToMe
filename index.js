const fs  = require('fs');
const http = require('http');
const download = require('download');
const needle = require('needle');
const config = require('./src/config.js');

const {url, port, paths} = config;

const BAIDU_IMG = /https\:\/\/imgsa.+jpg/g;
const BAIDU_CSS = /http\:\/\/.+css/g;
const BAIDU_JS =  /https\:\/\/.+js/g;



(function() {
    const allArr = readHtmlMergeUrl('./src/club.html');
    Promise.all(allArr.forEach(arr => {
        downFile(arr);
    })).then(() => {
        console.log('files downloaded!')
    })
})()

// 读取的在html中的文件url

function readHtmlMergeUrl (path) {
    const str = fs.readFileSync(path, 'utf8');
    const imgArr = str.match(BAIDU_IMG);
    const cssArr = str.match(BAIDU_CSS);
    const jsArr = str.match(BAIDU_JS);
    return [imgArr, cssArr, jsArr];
}

// 下载文件

function downFile (fileArr) {
    return new Promise((resolve, reject) => {
        Promise.all(fileArr.map(x => download(x, 'clubdist'))).then(() => {
            resolve('com')
        }).catch(err => reject(err))
    })    
}

// // 上传到自己的cdn  有问题
// function upload(filePath) {
//     var data = {
//         file: __dirname + filePath,
//         content_type: 'image/jpg'
//       };
      
//       // the callback is optional, and needle returns a `readableStream` object
//       // that triggers a 'done' event when the request/response process is complete.
//       console.log(data)
//       needle
//         .post('http://fe.neibu.koolearn.com:3000/tool/uploader', data, {timeout: 5000, multipart: true })
//         .on('readable', function() { console.log('ddd') })
//         .on('done', function(err, resp) {
//           console.log('Ready-o!', resp, err);
//         })


// }

// upload('/dist/0824ab18972bd4076737650077899e510eb3095e.jpg')

// 替换页面中的

