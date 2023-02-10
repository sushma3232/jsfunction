var arr=[1,2,3,4,5,6,7,8]
var res=arr.find(function(ele){
    if (ele%2==0){
        return ele
    }
})
console.log(res)