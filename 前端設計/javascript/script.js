
// 變數名稱 開頭不得為數字 必須全英文  開頭可為$或_的組合
// 可用布林值進行條件判斷
var my_gg = "輸出GG"
var boolean_number = true
var number = 13


// 進行文字輸出 都是同一行 要使用分行語法
document.write("引入成功")
document.write("<hr>")
document.write(boolean_number)
document.write("<hr>")
// 變數加進字串語法示範
document.write(my_gg + " 引入成功")
document.write("<hr>")
// 變數名稱中途改變示範
my_gg = "不一樣english test"
document.write(my_gg + " 引入成功")
document.write("<hr>")
// .length 字串長度語法
document.write("字串長度回傳測試" + my_gg.length)
document.write("<hr>")
// .toUpperCase 字母變成大寫語法 記得要在加小括號 
// .toLowerCase 是小寫
document.write(my_gg.toUpperCase())
document.write(my_gg.toLowerCase())
document.write("<hr>")
// 字串語法使用
document.write(my_gg.charAt(0)) //字串第幾位的輸出 0開始計算
document.write(my_gg.indexOf("一")) //選擇的數值在 字串第幾位的輸出 
document.write(my_gg.substring(0, 5)) //回傳字串的內容 
document.write("<hr>")
//數字用法 先乘除後加減
document.write((1 + 2) * number)
document.write("<hr>")
document.write(8 % 5) // % 百分比符號是取 餘數的意思
document.write("<hr>")
document.write(Math.abs(-8)) // Math.abs() 是取 絕對值
document.write("<hr>")
document.write(Math.max(1, 5, 16, 3))// Math.max() 是取 最大值
document.write("<hr>")
document.write(Math.min(9, 6, 45, 12, number))// Math.min() 是取 最小值
document.write("<hr>")
document.write(Math.pow(2, 4))// Math.pow() 是取 乘次方後值
document.write("<hr>")
document.write(Math.round(3.1234))// Math.round() 是取 四捨五入值  Math.ceil() 最小整數 Math.floor() 最大整數
document.write("<hr>")
document.write(Math.sqrt(2)) // Math.sqrt() 是取 開根號後值
document.write("<hr>")
document.write(Math.random()) // Math.random() 是取 0~1之間隨機數
document.write("<hr>")
//運算示範
var number01 = 123.5
document.write(Math.floor(Math.pow(number01, 3)))
document.write("<hr>")

//簡單計算機 BMI計算
var HH = prompt("請輸入身高")
var WW = prompt("請輸入體重")
HH = parseFloat(HH)  //預設輸入值為字串 使用paresFloat 轉換為數值
WW = parseFloat(WW)
HH = HH / 100
HH = Math.pow(HH, 2)
document.write("你的BMI等於" + Math.round(WW / HH * 10) / 10)
document.write("<hr>")
//陣列
var array = [10, 60, 50, 70, 20, 30, 60]
var arraytest = [10, "測試", true]
document.write("陣列" + array)
document.write(array[0]) //陣列 指定值 輸出
document.write("<hr>")
arraytest[1] = '陣陣'
document.write(arraytest)
document.write(arraytest.length)
document.write("<hr>")
//函式
function add(num1, num2) {
    document.write(num1 + num2)
}
add(10, 20);
document.write("<hr>")
//函式return return以下程式碼不會被執行
function fun01(fnum01, fnum02) {
    document.write(fnum01 + fnum02)
    document.write("<br></br>")
    return fnum01 + 20;
}
value = fun01(20, 50);
document.write(value);
document.write("<hr>")
//IF條件寫法
var rainy = true
var score = 102
if (score == 100) {
    document.write("坐飛機")

}
else if (score >= 80 && score < 100) {
    document.write("走路")
}
// && 是AND的語法
else if (score <= 80 && score >= 50) {
    document.write("回家")
}
// || 是or的語法 shift+ \\ (按鍵 鎮)
else if (score > 100 || score < 0) {
    document.write("太扯了")
}
else {
    document.write("開車")
}
document.write("<hr>")
// 驚嘆號(!) 是相反的意思
if (!rainy) {
    document.write("沒有相反")
}
else {
    document.write("有相反")
}
//測驗
function max_num(mm1, mm2, mm3) {
    if (mm1 > mm2 && mm1 > 3) {
        return mm1
    }
    else if (mm2 > mm1 && mm2 > mm3) {
        return mm2
    }
    else {
        return mm3
    }
}
document.write(max_num(10, 70, 50))
document.write("<hr>")
//物件
var GGobject = {
    name: "電池",
    age: 23,
    is_male: true,
    print_name: function () {
        document.write(this.name); //this 代表的是這個物件裡的值
    }
}
GGobject.print_name();
document.write("<hr>")
//物件應用

var movie = {
    title: "流麻溝十五號",
    maker: "湠臺灣電影股份有限公司",
    duration: 113,
    actors: [
        {
            name: "連俞涵",
            age: 35,
            is_male: false,
        },
        {
            name: "徐麗雯",
            age: 38,
            is_male: false
        }
    ]
};
document.write(movie.actors[0].is_male);
document.write("<hr>")
//迴圈
var i = 1
while (i <= 3) {
    document.write(i)
    document.write("<br>")
    i = i + 1;
}
document.write("<hr>")

//先執行後判斷
do {
    document.write(i)
    document.write("<br>")
    i = i + 1;
}
while (i <= 5)
document.write("<hr>")
//密碼測驗
var password = 123456
var input;
var counter = 0
var limit = 3
var out_of_limit = false
//注意驚嘆號語法 != 與 ! 使用 
while (password != input && !out_of_limit) {
    counter = counter + 1;
    if (counter <= limit) {
        input = prompt("密碼輸入")
    }
    else {
        out_of_limit = true
    }
}
if (out_of_limit) {
    alert("輸入超過")
}
else {
    alert("輸入成功")
}
//for 迴圈
//基礎示範
for (var i = 0; i < 10; i++) {
    document.write(i)
    document.write("<br>");
}
document.write("<hr>");

//陣列結合迴圈
var friends = ['小黑', '小白', '小黃'];
for (var q = 0; q < friends.length; q++) {
    document.write(friends[q]);
    document.write("<br>");
}
//迴圈問答練習
var questions = [
    {
        prompt: "蘋果是甚麼顏色?\n(A)紅色\n(B)黃色\n(C)綠色",// \n 是換行的意思
        answer: "A"
    },
    {
        prompt: "西瓜是甚麼顏色?\n(A)紅色\n(B)黃色\n(C)綠色",
        answer: "C"
    },
    {
        prompt: "香蕉是甚麼顏色?\n(A)紅色\n(B)黃色\n(C)綠色",
        answer: "B"
    }
]
var score = 0;
for (var i = 0; i < questions.length; i++) {
    var input = prompt(questions[i].prompt)
    if (input == questions[i].answer) {
        score++
        alert("答對了")
    }
    else {
        alert("答錯了")
    }
}
alert("你答對了" + score + "題")
document.write("<hr>");
//二維陣列
var number = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]];

document.write(number[0][2])
document.write("<hr>");
//巢狀迴圈
var number = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]];

for (var i = 0; i < number.length; i++) {
    for (var j = 0; j < number[i].length; j++) {
        document.write(number[i][j])
        document.write("<br>")

    }

}
document.write("<hr>")

//class 物件模板創立
class Phone { //通常物件名稱開頭大寫
    constructor(number, year, is_waterproof) {
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof
    }
    phone_age() {
        return 2022 - this.year;
    }
}
var phone1 = new Phone("123", 2021, false);
var phone2 = new Phone("456", 2020, true);
document.write(phone2.phone_age())
document.write("<hr>")
//取得HTML元素
console.log(Phone) //除錯語法 使用後會該物體會顯示在控制台
var h1 = document.getElementById("header");
h1.innerText = "123456"
h1.style.backgroundColor = "red";
//事件監聽器
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    alert("按了真爽");
    this.style.backgroundColor = "red"
    this.style.fontSize = "30px"
    this.innerText = "按了真爽"
})
//圖片滑過變化與復原
var img = document.getElementById("img");
img.addEventListener("mouseover", function () {
    this.src = "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/090/79/0010907980.jpg&v=618264bfk&w=348&h=348"
})
img.addEventListener("mouseout", function () {
    this.src = "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/088/61/0010886126.jpg&v=6045fcb7k&w=250&h=250"
})
//按鈕變化與復原
btn.addEventListener("click", function () {
    alert("按了真爽");
    this.style.backgroundColor = "red"
    this.style.fontSize = "30px"
    this.innerText = "按了真爽"
        setTimeout(() => {
            this.style.backgroundColor = "transparent"
            this.style.fontSize = "14px"
            this.innerText = "按下去"
        }, 500);

})
