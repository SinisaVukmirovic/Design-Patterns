// Builder pattern is incredibly useful when you need to create objects that have many interlinking parts or many optional or required fields. 
// Useful when you need to create objects that have many different working parts that need to all come together to create one single object.

// There are two ways to do the Builder Pattern
// 1. The traditional way 
// 2. Modern JS focused way, more advanced and cleaner (better for JS)

// ==========================================================================================

// ========================
// without builder pattern
// ========================

// class Address {
//     constructor(zip, street) {
//         this.zip = zip;
//         this.street = street;
//     }
// }
  
// class User {
//     constructor(name, age, phone, address) {
//         this.name = name;
//         this.age = age;
//         this.phone = phone;
//         this.address = address;
//     }
// }

// const user = new User('Bob', undefined, undefined, new Address('12345', 'Main St.'));
// console.log(user);

// ========================================================================================

// ====================================
// The traditional way Builder Pattern
// ====================================

// class Address {
//     constructor(zip, street) {
//         this.zip = zip;
//         this.street = street;
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class UserBuilder {
//     constructor(name) {
//         this.user = new User(name);
//     }

//     setAge(age) {
//         this.user.age = age;
//         // returning the builder back. 
//         // this will allow us to chain these methonds together
//         return this;
//     }

//     setPhone(phone) {
//         this.user.phone = phone;
//         return this;
//     }

//     setAddress(address) {
//         this.user.address = address;
//         return this;
//     }

//     build() {
//         return this.user;
//     }
// }

// let user = new UserBuilder('Bob').setAge(33).setPhone('123345').build();
// console.log(user);

// =========================================================================================

// ===========================================
// The modern, JS focused way Builder Pattern
// ===========================================

class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

// easy way to create optional parametern in JS is to pass them as JSON object or a JS object  
  
class User {
    constructor(name, { age, phone = '22334455', address } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user = new User('Bob', {age: 22, phone: '1234', address: new Address('1', 'Main street')});
console.log(user);