var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义Student的schema
var courseSchema = new Schema({
	"bianhao" : Number,
	"mingcheng" : String,
	"laoshi" : String,
	"xuesheng" : [Number]
});

//创建一个类
var Course = mongoose.model("course",courseSchema);
//向外暴露
module.exports = Course;