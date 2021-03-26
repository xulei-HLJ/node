/*
* mongoDB:一个数据库品牌的名字
* mongod:启动数据库
* mongo:连接数据库的命令
* mongoose:在Node平台下,一个知名的连接数据库的包
* */

// 为什么要用mongoose? 想在node平台下,更加简单\高效\方便\安全\稳定的操作mongoDB
// 当引入第三方库的时候,如果在本文件夹内,=没有找到node_modules,找外层文件夹,直到根目录
/*
* 1.连接数据库
*
*
* 2.操作数据库
*
* */

// 引入
let mongoose = require('mongoose')
// 1.连接数据库
mongoose.connect('mongodb://localhost:27017/demo',{
    useNewUrlParser: true,// 使用一个新的url解析器,用于解析一些安全问题
    useUnifiedTopology: true // 使用一个统一拓扑结构
})

//2.绑定监听
mongoose.connection.on('open',(err)=>{
    if (err){
        console.log('数据库连接失败',err);
    }else{
        console.log('数据库连接成功');
        //3.操作数据库

    }
})

