var clock = document.getElementById("c1").getContext("2d");
 
// var clock = $("#huabu").get(0).getContext("2d"); //$中使用画布
 
 function play() {
 clock.clearRect(0, 0, 400, 400);
 clock.save();
 clock.translate(200, 200); //把画布中心转移到canvas中间
 biaopan();
 run();
 clock.restore();
 }
 setInterval(function() {
 play();
 }, 1000);
 
 function biaopan() {
 //绘制表盘
 clock.strokeStyle = " #9932CC";
 clock.lineWidth = 5;
 clock.beginPath();
 clock.arc(0, 0, 195, 0, 2 * Math.PI);
 clock.stroke();
 
 //刻度(小时)
 clock.strokeStyle = "#9932CC";
 clock.lineWidth = 5;
 for(var i = 0; i < 12; i++) {
  clock.beginPath();
  clock.moveTo(0, -190);
  clock.lineTo(0, -170);
  clock.stroke();
  clock.rotate(2 * Math.PI / 12);
 }
 //刻度(分钟)
 clock.strokeStyle = "#9932CC";
 clock.lineWidth = 3;
 for(var i = 0; i < 60; i++) {
  clock.beginPath();
  clock.moveTo(0, -190);
  clock.lineTo(0, -180);
  clock.stroke();
  clock.rotate(2 * Math.PI / 60);
 }
 //绘制文字
 clock.textAlign = "center";
 clock.textBaseline = "middle";
 clock.fillStyle = "#6495ED";
 clock.font = "20px 微软雅黑"
 for(var i = 1; i < 13; i++) {
  clock.fillText(i,Math.sin(2*Math.PI /12*i)*150,Math.cos(2*Math.PI/12*i)*-150);
 }
 }
 
 function run() {
 var date = new Date();
 var h = date.getHours();
 var m = date.getMinutes();
 var s = date.getSeconds();
// if(h > 12) {
//  h = h - 12;
// }
 //日期
 var week = date.getDay();
 var month = date.getMonth() + 1;
 var day = date.getDate();
 switch (week){
  case 1: week = "星期一";
  break;
  case 2: week = "星期二";
  break;
  case 3: week = "星期三";
  break;
  case 4: week = "星期四";
  break;
  case 5: week = "星期五";
  break;
  case 6: week = "星期六";
  break;
  default: week = "星期天";
  break;
 }
 clock.save();
 clock.textAlign = "center";
 clock.textBaseline = "middle";
 clock.fillStyle = "black";
 clock.font = "16px"
 clock.fillText(week,-2,-118);
 clock.fillText(month+" 月",-90,2);
 clock.fillText(day+" 日",90,0);
 clock.stroke();
 clock.restore();
 
 //时针
 //分针60格 分针5格 
 clock.save();
 clock.rotate(2 * Math.PI / 12 * h + (2 * Math.PI / 60 * m + 2 * Math.PI / 60 * s / 60) / 12);
 clock.strokeStyle = "black";
 clock.lineWidth = 7;
 clock.beginPath();
 clock.moveTo(0, 0);
 clock.lineTo(0, -80);
 clock.lineCap = "round";
 clock.stroke();
 clock.restore();
 //分针
 //秒针60格 分针一格
 clock.save();
 clock.beginPath();
 clock.strokeStyle = "#D2691E";
 clock.lineWidth = 5;
 clock.rotate(2 * Math.PI / 60 * m + 2 * Math.PI / 60 * s / 60);
 clock.moveTo(0, 0);
 clock.lineTo(0, -110);
 clock.lineCap = "round";
 clock.stroke();
 clock.restore();
 //秒针
 clock.strokeStyle = "red";
 clock.rotate(2 * Math.PI / 60 * s);
 clock.lineWidth = 4;
 clock.beginPath();
 clock.moveTo(0, 0);
 clock.lineTo(0, -120);
 clock.lineCap = "round";
 clock.stroke();
 //中心
 clock.fillStyle = " #CCFFFF";
 clock.lineWidth = 5;
 clock.beginPath();
 clock.arc(0, 0, 10, 0, 2 * Math.PI);
 clock.fill();
 clock.strokeStyle = "cadetblue";
 clock.stroke();
 
 }