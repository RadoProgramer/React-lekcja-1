"use strict";
function logNumber(num) {
    console.log(num);
}
// logNumber("42");
logNumber(42);
class X {
    constructor(name, phone, email) {
        this.university = "GoIT University";
        this.subjects = ["Math", "Computer Science", "Physical Education"];
        this.friends = [
            { name: "JS", phone: 777, email: "ts@js.esm" }
        ];
        this.sleep = () => console.log("ZZzzz..");
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    learn() {
        console.log("Learning...");
    }
}
// const logUserDetails = (someUser: User) => {
const logUserDetails = ({ name, email, phone }) => {
    // console.log(someUser.name);
    // console.log(someUser.email);
    // console.log(someUser.phone);
    // // console.log(someUser.dupa);
    console.log(name);
    console.log(email);
    console.log(phone);
};
logUserDetails({ email: "abc@abc.com", name: "Abc", phone: 321 });
const user = { email: "abc@abc.com", name: "xyz", phone: 123 };
const anotherUser = { email: "xyz@abc.com", name: "dsa", phone: 521 };
logUserDetails(user);
logUserDetails(anotherUser);
