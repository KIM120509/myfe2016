require(["carousel"],function(Carousel){
    var imgArray1=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
    var setting1={
        selector:"#carousel",
        img:imgArray1,
        buttonStyle:"circle",//square��ʾ����
        arrowPos:"bottom",//center��ʾ���м�
        speed:1000
    };
    var carousel1=new Carousel();
    carousel1.init(setting1);
});