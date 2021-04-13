//property:value
let obj ={ 
    name:"shaily",
    addr:"neemuch",
    mob_no:"770098090",
    getmobno:function() {
        return this.mob_no;
        
    }
};
console.log(obj.name);
console.log(obj.addr);
console.log(obj.getmobno());