require(['jquery','carousel','news','works'],function($,Carouse,News,Works){
///////////搜索框
    var $searchIpt=$("#search-ipt");
    $("#search span").on("click",function(){
        alert($searchIpt.val());
    });
    $searchIpt.on("keypress", function(e){
        if(e.which == 13){//表示点击的是回车
            alert($searchIpt.val());
        }
    });

///////////轮播图
    var imgArray=["img/banner01.png","img/banner02.png","img/banner03.png","img/banner04.png"];
    var setting={
        selector:"#banner .wrapper",
        width: 868,
        height: 400,
        img:imgArray,
        buttonStyle:"square",//square表示方形
        //arrowPos:"center",//center表示在中间
        speed:500
    };
    var carousel=new Carouse;
    carousel.init(setting);

//////////news部分
    var setting1={
        selector:"#news .wrapper",
        title:"Web Design",
        icon:['img/icon-web-design.png'],
        content:"aaaaaaaaaaaa"
    };
    var news=new News;
    news.configuration(setting1);
    var setting2={
        selector:"#news .wrapper",
        title:"Social Media",
        icon:['img/icon-social-media.png'],
        content:"aaaaaaaaaaaa"
    };
    var news=new News;
    news.configuration(setting2);
    var setting3={
        selector:"#news .wrapper",
        title:"Mobile App",
        icon:['img/icon-mobile-app.png'],
        content:"aaaaaaaaaaaa"
    };
    var news=new News;
    news.configuration(setting3);


/////////////////works
    var set={
        selector:"#works .wrapper",
        img:['img/work1.png','img/work2.png','img/work3.png','img/work4.png','img/work5.png','img/work6.png','img/work7.png','img/work8.png'],
        position:5 -14
    };
    var works=new Works;
    works.pic(set);
////////////////////wrapper
//    var set1={
//        selector:"#clients .wrapper",
//        website-img:['website-img/clients1.png','website-img/clients2.png','website-img/clients3.png','website-img/clients4.png'],
//        //repeat:'repeat'
//    };
//    var works=new Works;
//    works.pic(set1);

});