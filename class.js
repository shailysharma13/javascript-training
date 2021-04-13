//class
//class defination

class MyClass{
    //1.properties


    //2.constructor

    //3.method
    a(c){//formal arg
        console.log(`hello ${c} from a `  );
        this.b();
    }

    b(){
        console.log("hello from b");
    }
}//end of class
//createan obj of the class
let obj = new MyClass();
//access the member using obj
obj.a("shaily");// dot . is a member selection operator 
