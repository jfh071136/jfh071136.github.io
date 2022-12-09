var testinput = document.getElementById("testinput") ;
var ouput =  document.getElementById("ouput") ;
var submit =  document.getElementById("submit") ;

submit.addEventListener("click",function(){
    var degree = testinput.value;
    GG = (degree * 9/5)+32
    ouput.innerHTML = GG + "度"
})
reset.addEventListener("click",function(){
    testinput.value = ""
    ouput.innerHTML = ""
})

