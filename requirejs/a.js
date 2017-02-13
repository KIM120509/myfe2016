define(["b"],function(isArray){
    function arrsort(arr){
        if(isArray(arr)){
           return arr.sort(function(a,b){
                return a-b;
            });
        }else{
            return "传入的不是数组";
        }
    }
    return arrsort;
});