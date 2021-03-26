/*
*  fs.readFile(path[, options], callback)
*     --path：要读取文件的路径+文件名+后缀
*     --options：配置对象（可选）
*     --callback：回调
*         --err：错误对象
*         --data：读取出来的数据
* */
// 简单文件写入和简单文件读取,都是一次性把所有要读取的或写入的文件全部操作，容易造成内部泄露
let fs = require('fs');

fs.readFile(__dirname + '/demo.txt',(err,data)=>{
    if (err) console.log(err)
    // 为什么读取的是Buffer?用户存储的不一定是纯文本
    else console.log(data.toString())

    fs.writeFile('../haha.txt',data, (err)=>{
        if (err) console.log(err)
        else console.log('文件写入成功');

    })



})