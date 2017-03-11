require(["carousel"],function(Carousel){
    var imgArray1=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
    var setting1={
        selector:"#container1",
        img:imgArray1,
        buttonStyle:"circle",//square表示方形
        arrowPos:"bottom",//center表示在中间
        speed:500
    };

    var carousel1=new Carousel();
    carousel1.init(setting1);
    var imgArray2=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
    var setting2={
        selector:"#container2",
        img:imgArray2,
        buttonStyle:"square",
        arrowPos:"center",
        speed:1000
    };


    var carousel2=new Carousel();
    carousel2.init(setting2);
});