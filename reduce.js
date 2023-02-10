var arr=[23,45,65,45,76]
var res=arr.reduce(function (acc,ele){
    if (acc>ele){
        return acc
    }
    else{
        return ele
    }
})
console.log(res)