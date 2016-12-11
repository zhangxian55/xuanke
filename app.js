//不要每个包里面都connect，在头部connect一次即可
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/xuankexitong');

var Student = require("./models/Student.js");
var Course = require("./models/Course.js");
// 选课逻辑1（推荐）
// tool.xuanke(1001,301);

//选课逻辑2
// Student.find({"xuehao":1001},function(err,results){
// 	results[0].xuanke(301,function(){

// 	});
// });

// 现在有一个新的任务，列出杨颖同学的所有课程
Student.find({"xuehao":1001},function(err,results){
	var stu = results[0];
	//找到的student就是Studnet类的实例！就能够调用实例方法！
	stu.listMyCourse(function(courses){
		for(var i = 0 ; i < courses.length ; i++){
			console.log(courses[i].mingcheng);
		}
	});
});