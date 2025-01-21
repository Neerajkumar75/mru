let a =function(){
    return "hello"
}
console.log(a);
console.log(a())

let main = function(){
    let a= Number(prompt("enter a : "))
    let b= Number(prompt("enter b : "))
    let c= Number(prompt("enter c : "))
    let d = a+b+c
    console.log(d)
    let e =a-b-c
    console.log(e)
    let f=a*b*c
    console.log(f)

    if(a>=b && a>=c){
        console.log("a is greater")
    }else if(b>=c && b>=a){
        console.log("b is greater")
    }else{
        console.log("c is greater")
    }

}
console.log(main)

let b= function(a){
    console.log(a)
    console.log(argumnets[1])
    console.log(argumnets[2])
}
b(10,20,30)