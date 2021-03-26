/*
* fs.createReadStream(path[, options])
*     --path:要读取的文件路径+文件名+后缀
*     --options:
*         --flags
*         --encoding
*         --fd
*         --mode
*         --autoClose
*         --emitClose
*         --start ：起始偏移量
*         --end : 结束偏移量
*         --highWaterMark：每次读取数据的大小，默认值是64 * 1024
* */

let {createReadStream,createWriteStream} = require('fs')

let rs = createReadStream(__dirname + '/Leave The Door Open.mp3',{
    highWaterMark:5*1024*1024,
    // start:60000,
    // end:900000
})

// 创建一个可写流
let ws = createWriteStream('../bruno mars.mp3')

rs.on('open',()=>{
    console.log('可读流打开了');
})
rs.on('close',()=>{
    console.log('可读流关闭了');
    ws.close();
})

// 只要用到了流,就必须检测流的事件
ws.on('open',()=>{
    console.log('可写流开启了');
})
ws.on('close',()=>{
    console.log('可写流关闭了');
})


// 给可读流绑定一个data事件,就会触发可读流自动读取内容
let result = rs.on('data', (data)=>{
    // buffer 实例的 length 属性,时表示Buffer 实例占用内存的大小
    console.log(data.length); // 输出的是65534,每次读取的 64kb 的内容
    ws.write(data)
    // ws.close(); //在此处会丢失数据
})

// ws.close(); // 若在此处关闭,导致无法写入