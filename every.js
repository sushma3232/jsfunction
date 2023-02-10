var arr=[23,45,34,56,76,87]
var res=arr.every(function(ele){
    if (ele>10){
        return ele
    }
})
console.log(res)