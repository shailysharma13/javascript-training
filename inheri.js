// inheritance
//class declaration
//A is a parent class 
class A{
    //1.property
    //2.constructor
        constructor(){

        }
    //3.method
        fuctionA(){
            console.log("hello from funtionA from class A")
        }
}//end of class
//  B is a child class
class B extends A{
    //1.property
    //2.constructor
        constructor(){
            super();
        }
    //3.method
    fuctionB(){
        console.log("hello from funtionB from class B")
    }
}//end of class
// lets create an external obj
    let obj = new B();//always create an obj of child class
    obj.fuctionB();
    obj.fuctionA();