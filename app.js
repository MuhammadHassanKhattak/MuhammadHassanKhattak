// var newArray = [
//     {name : "juice", price : 50, quantity : 3},
//     {name : "cookie", price : 30, quantity : 9},
//     {name : "shirt", price : 880, quantity : 1},
//     {name : "pen", price : 100, quantity : 2}
// ]
// var price = ""
// ttlPrice = 0
// for(i = 0 ; i < newArray.length ; i++){
// price += "price of "  + newArray[i].name + " : " + newArray[i].price * newArray[i].quantity + "\n"
// ttlPrice += +newArray[i].price * +newArray[i].quantity
// }
// console.log(price)
// console.log("total price is : " + ttlPrice)



// var newObj = {
//     name: "Hassan",
//     email: "hassankh2@gmail.com",
//     password: "hahaha",
//     age: "18",
//     gender: "Male",
//     city: "Karachi",
//     country: "Pakistan"
// }
// var userInp = prompt("Enter a property")
// var toCheck = newObj.hasOwnProperty(userInp)
// if(toCheck){
//     console.log(userInp + " property found!")
// }
// else{console.log(userInp + " property not found!")}







var name1 = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("pswrd")
var age = document.getElementById("age")
var btn = document.getElementById("submit")

function Obj(name, email, password, age){
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
}
var erray = []
btn.addEventListener("click", function (){
    var newObj = new Obj (name1.value, email.value, password.value, age.value)
    erray.push(newObj)
    console.log(erray)
})






































// function Userdata(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
// }

// var InputUser = prompt("inout your name")
// var InputEmail =prompt("inout your name")
// var InputPassword1 = prompt("inout your name")


// var objArr = []


//     var userdata1 = new Userdata(InputUser, InputEmail, InputPassword1)

//     console.log(userdata1);




















