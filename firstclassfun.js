function first(a){
    console.log("hello iam first")
    a()
}
function second(){
    console.log("hello i am second")
}
first(second)