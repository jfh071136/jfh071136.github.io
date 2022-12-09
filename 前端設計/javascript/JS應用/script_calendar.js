var year = document.querySelector("#year")
var month = document.querySelector("#month")
var day = document.querySelector("#day")
var week = document.querySelector("#week")

var today = new Date();
var thisyear = today.getFullYear()
var thismonth = today.getMonth()
var thisweek = today.getDay()
var thisday = today.getDate()


var week_ch =[0,1,2,3,4,5,6];
    week_ch[1] = "星期一";
    week_ch[2] = "星期二";
    week_ch[3] = "星期三";
    week_ch[4] = "星期四";
    week_ch[5] = "星期五";
    week_ch[6] = "星期六";
    week_ch[0] = "星期日";
 
console.log(thisweek)

// if(thisweek == 1){
//     thisweek = "星期一";
// }
// else if(thisweek == 2) {
//     thisweek = "星期二";
// }
// else if(thisweek == 3) {
//     thisweek = "星期三";
// }
// else if(thisweek == 4) {
//     thisweek = "星期四";
// }
// else if(thisweek == 5) {
//     thisweek = "星期五";
// }
// else if(thisweek == 6) {
//     thisweek = "星期六";
// }
// else if(thisweek == 0) {
//     thisweek = "星期日";
// }



year.innerHTML = thisyear + "年"
month.innerHTML = thismonth+1 + "月"
day.innerHTML = thisday +"日"
week.innerHTML = week_ch[thisweek]; 