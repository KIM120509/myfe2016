define (["jquery"],function($){
    function News(){
        this.defaultSettings={
           selector:"#news",
            title:"TITLE",
            icon:[],
            content:""
        }
        //this.wrapper=$('<div class="wrapper"></div>');
        this.new=$('<div class="new"></div>');
        this.title=$('<span class="title"></span>');
        this.icon=$('<div class="icon"></div>');
        this.content=$('<div class="content"><span></span></div>');
        this.readMore=$('<span class="read-more"><a href="">READ MORE</a></span>');
    }
    News.prototype.configuration=function(options){
        $.extend(this.defaultSettings, options);
        $(this.defaultSettings.selector).append(this.new);
        //this.wrapper.append(this.new);
        this.new.append(this.title).append(this.icon).append(this.readMore).append(this.content);
        this.title.html(this.defaultSettings.title);
        var $iconImg=$("<img src='"+this.defaultSettings.icon+"'>");
        this.icon.append($iconImg);
        this.content.html(this.defaultSettings.content);
    }
    return News;
});