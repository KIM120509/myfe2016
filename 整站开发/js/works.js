define(['jquery'],function($){
    function Works(){
        this.defaultSettings={
            selector:"#works .wrapper",
            img:[],
            position:0,
            repeat: "no-repeat"
        }
        this.imgBox=$('<div class="website-img-box"></div>');
    }
    Works.prototype.pic=function(options){
        $.extend(this.defaultSettings, options);
        $(this.defaultSettings.selector).append(this.imgBox);
        for(var i = 0;i <this.defaultSettings.img.length;i++){
            var $img=$('<div class="website-img"><a href=""></a></div>');
            this.imgBox.append($img);
            $img.css({
                backgroundImage:"url("+this.defaultSettings.img[i]+")",
                backgroundRepeat: this.defaultSettings.repeat,
                backgroundPosition: this.defaultSettings.position
            });
        }
}
    return Works;
});