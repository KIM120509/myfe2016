//require.js
require(["a"],function(arrsort){
    var arr=[5,8,5,9,4,7,12];
    //var arr="sdfgh";
    console.log(arrsort(arr));
});


//sea.js
define(function(require){
    //var arr=[5,8,5,9,4,7,12];
    var arr="sdfgh";
    var arrsort=require("a");
    console.log(arrsort(arr));
});