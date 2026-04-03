// 1. 必须先加载 dotenv，这行必须在最前面！
require('dotenv').config();

const mongoose = require('mongoose');

// 2. 从 process.env 中读取变量
const uri = process.env.MONGO_URI;

console.log("正在尝试连接地址:", uri); // 调试用：看看现在是不是已经不是 undefined 了

mongoose.connect(uri)
    .then(() => console.log('✅ 数据库连接成功！'))
    .catch(err => console.error('❌ 连接失败:', err));