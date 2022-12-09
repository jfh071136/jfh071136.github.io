var start = document.getElementById("start");
var stopp = document.getElementById("stopp");
var timer = null //準備一個無效變量
var s = 0
var m = 0


start.addEventListener("click", function begin() {
    clearInterval(timer) // 記得要先清除前一個計時，否則clearInterval只會停止最後一個計時，造成無法停止
    timer = setInterval(() => {
        if (s >= 60) {
            m = m + 1
            s = 0
        }else {
            s = s + 1
            second.innerHTML = m + "分" + s + "秒"
        }
    }, 1000 );
    
})

stopp.addEventListener("click", function begin() {
    clearInterval(timer) //須將setinterval定義變量，才能停止計算迴圈
})










