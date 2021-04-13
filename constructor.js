//class declare
class MyClass{
    //1.property
    name =` `;
    //2.constructor
    constructor(){
        this.name="shaily";
        this.b();
    }
    //3.method
    a(n){
        console.log(`hello ${n} `);
    }
    b(){
        console.log(`hello ${this.name}`);
    }
}//end of class
// create an external obj
let obj = new MyClass();
obj.a("anshi");
