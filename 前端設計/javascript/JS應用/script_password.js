const toggle_password = document.querySelector("#toggle_password")
const change_password = document.querySelector("#change_password")
const tt_password = document.querySelector("#tt_password")
const cc_password = document.querySelector("#cc_password")

toggle_password.addEventListener("click", function(){

    if (change_password.type === "password"){
        // change_password.type = "Text";
        change_password.setAttribute("type","Text"); //與上面語法一致
        //可以拿來改CSS，例如 setAttribute("class名","要更改的class名")
        toggle_password.name = "eye-off-outline";
        }
    else{
        change_password.type = "password";
        toggle_password.name = "eye-outline";
    }
   
    console.log(change_password.type)
})

tt_password.addEventListener("click", function(){
    cc_password.type = cc_password.getAttribute("type")=="password"?"text":"password";
    //IF ELSE 的簡寫 ? : 記得寫在物件裡
   
    console.log(cc_password.type)
})

