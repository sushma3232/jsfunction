function name(){
    console.log("hello")
    return function s(){
        console.log("missing something")
    }
}
name()()