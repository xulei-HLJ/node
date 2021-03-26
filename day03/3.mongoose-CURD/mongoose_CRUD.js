/*
* mongoDB:一个数据库品牌的名字
* mongod:启动数据库
* mongo:连接数据库的命令
* mongoose:在Node平台下,一个知名的连接数据库的包
* */

// 为什么要用mongoose? 想在node平台下,更加简单\高效\方便\安全\稳定的操作mongoDB
// 当引入第三方库的时候,如果在本文件夹内,=没有找到node_modules,找外层文件夹,直到根目录

// 引入
let mongoose = require('mongoose')

// 1.连接数据库
mongoose.connect('mongodb://localhost:27017/test',{
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
        // 数据库当成一个别墅
        //1.找一个帮你看门的保安 ----- 对进入的数据进行校验
        let Schema = mongoose.Schema
        //2.制定进入你家的规则 -----
        let studentsRule = new Schema({
            stu_id:{
                type:String,//限制学号为字符串
                required:true,//限制学号必须填项
                unique:true// 限制学号唯一
            },
            name:{
                type:String,//限制姓名为字符串
                required:true,//限制姓名必须填项

            },
            age:{
                type:Number,//限制年龄为字符串
                required:true,//限制年龄必须填项
            },
            sex:{
                type:String,//限制性别为字符串
                required:true,//限制性别必须填项
            },
            hobby:[String],//限制爱好只能为数组,数组中每一项必须字符串
            info:Schema.Types.Mixed,//接受所有类型
            date:{
                type:Date,
                default:Date.now()
            },
            enbale_flag:{
                type:String,
                default:'Y'
            }
        })
        //3.告诉保安你的规则 -----
        let stuModel = mongoose.model('students',studentsRule)// 用于生成某个集合所对应的模型对象

    }
})

