//class defination
class MyClass{
    //1.property
    contacts={ };//blank obj
    //2.constructor
    constructor(y){//formal arg
        console.log("hello");
        this.contacts=y;
        this.getcontacts();//internal obj
    }//constructor is called immediately whn we create the obj of the class
    //3.method
    getcontacts(){
        console.log(this.contacts);
    }
}//end of class 
//create an obj of the class
let x={
    name:"shaily",
    mobile:"79848478089",
    addr:"neemuch",
}
let obj = new MyClass(x);//actual arg
obj.getcontacts();
