var Course = require("./Course.js");
var Student = require("./Student.js");

exports.xuanke = function(xueshengxuehao,kechengbianhao){
	//寻找指定编号的课程，然后把这个课程的学生数组加入学生
	Course.find({"bianhao" : kechengbianhao} , function(err,results){
		//0表示这唯一的课程
		results[0].xuesheng.push(xueshengxuehao);
		results[0].save();
	});

	Student.find({"xuehao" : xueshengxuehao},function(err,results){
		results[0].kecheng.push(kechengbianhao);
		results[0].save();
	});
}