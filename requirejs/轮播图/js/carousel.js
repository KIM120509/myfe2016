define(["jquery"],function($){
    function Carousel(){
        this.defaultSettings={
            selector:"body",
            img:[],
            buttonStyle:"circle",//square表示方形
            arrowPos:"bottom",//center表示在中间
            speed:500
        }
        this.container=$('<div class="carousel-container"></div>');
        this.tab=$('<ul class="carousel-tab"></ul>');
        this.img=$('<div class="carousel-img"></div>');
        this.arrow=$('<div class="carousel-arrow"></div>');
        this.prev=$('<span id="prev">&lt;</span>');
        this.next=$('<span id="next">&gt;</span>');
    }
    Carousel.prototype.init = function(options){
        $.extend(this.defaultSettings, options);
        $(this.defaultSettings.selector).append(this.container);
        this.container.append(this.tab).append(this.img).append(this.arrow);
        this.arrow.append(this.prev).append(this.next);
        for(var i = 0;i < this.defaultSettings.img.length;i++){
            var $img=$("<img src='"+this.defaultSettings.img[i]+"'>");
            this.img.append($img);
            var $li=$("<li></li>");
            if(this.defaultSettings.buttonStyle=="square"){
                $li.html(i+1);
            }else{
                $li.addClass("circle");
            }
            this.tab.append($li);
        }
        $("img", this.img).eq(0).addClass("selected");
        $("li", this.tab).eq(0).addClass("selected");
        this.arrow.addClass(this.defaultSettings.arrowPos);

    //    变换、、、、///////////////////////////////////////////////

        var nowIdx = 0;
        var that = this;
        this.tab.on("mouseover", "li", function(){
            nowIdx = $(this).index();
            changeImg();
        });
        this.prev.on("click", function(){
            nowIdx--;
            if(nowIdx == -1){
                nowIdx = that.defaultSettings.img.length - 1;
            }
            changeImg();
        });
        this.next.on("click", function(){
            nowIdx++;
            if(nowIdx == that.defaultSettings.img.length){
                nowIdx = 0;
            }
            changeImg();
        });
        this.container.hover(function(){
            clearInterval(that.timer);
        }, function(){
            play();
        });
        play();

        function play(){
            that.timer = setInterval(function(){
                that.next.trigger("click");
            }, that.defaultSettings.speed);
        }

        function changeImg(){//私有方法
            $("li", that.tab).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
            $("img", that.img).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
        }
    }
    return Carousel;
});