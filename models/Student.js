var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Course = require("./Course.js");

//定义Student的schema
var studentSchema = new Schema({
	"xuehao" : Number,
	"xingming" : String,
	"kecheng" : [Number]
});

studentSchema.methods.listMyCourse = function(callback){
	var jieguo = [];
	var count = 0;

	var self = this;
	for(var i = 0 ; i < this.kecheng.length ; i++){
		(function(i){
			Course.find({"bianhao" : self.kecheng[i]},function(err,results){
				jieguo.push(results[0]);
				count ++;

				if(count == self.kecheng.length){
					callback(jieguo);
				}
			});
		})(i);
			
	}
}

// studentSchema.methods.xuanke = function(kechengbianhao,callback){
// 	console.log(this.xuehao , kechengbianhao);
// 	//自己的数组里面加上这个课程号码
// 	this.kecheng.push(kechengbianhao);
// 	this.save();
// 	var self = this;
// 	//在那个课程的数组里面加上自己的学号
// 	Course.find({"bianhao" : kechengbianhao} , function(err,results){
// 		console.log(results[0]);
// 		results[0].xuesheng.push(self.xuehao);
// 		results[0].save();
// 		callback(err);
// 	});
// }
//创建一个类
var Student = mongoose.model("student",studentSchema);
//向外暴露
module.exports = Student;