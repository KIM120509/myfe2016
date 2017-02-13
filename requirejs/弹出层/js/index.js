//引用jQuery文件，使用代码用jquery替代jquery-1.12.4，引用jquery
//或者将jQuery文件的名字改为jquery，然后引用jquery
require.config({
    paths:{
        "jquery":"jquery-1.12.4"
    }
});
require(["jquery","dialog"],function($,Dialog){
    $("#open").on("click",function(){
        var settings={
            width:500,
            height:400,
            title:"我的弹出层",
            content:"login.html"

        }
    var dialog=new Dialog;
        dialog.open(settings);
    });
});