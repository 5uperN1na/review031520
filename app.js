
//encapsulation example 
class person{ 
    constructor(name,id){ 
        this.name = name; 
        this.id = id; 
    } 
    add_Address(add){ 
        this.add = add; 
    } 
    getDetails(){ 
        console.log(`Name is ${this.name},Address is: ${this.add}`); 
    } 
} 
  
let person1 = new person('vivi',21); 
person1.add_Address('dallas'); 
person1.getDetails(); 

// Abstraction example 
function person3(fname,lname){ 
    let firstname = fname; 
    let lastname = lname; 
  
    let getDetails_noaccess = function(){ 
        return (`First name is: ${firstname} Last  
            name is: ${lastname}`); 
    } 
  
    this.getDetails_access = function(){ 
        return (`First name is: ${firstname}, Last  
            name is: ${lastname}`); 
    } 
} 
let person2 = new person3('julien','suarez'); 
console.log(person2.firstname); 
console.log(person2.getDetails_noaccess); 
console.log(person2.getDetails_access()); 