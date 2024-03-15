"use strict";
let userName = "Stewart";
let age = 35;
let isValid = true;
let userId = "abc123";
let people = [
    {
        id: "123",
        name: "Stewart",
        age: 35,
        isAdmin: true
    },
    {
        id: 456,
        name: "John",
        age: 25,
        isAdmin: false,
        hobbies: ["Sports", "Cooking"]
    }
];
function log(message) {
    console.log(message);
}
function add(a, b) {
    return a + b;
}
function calculate(a, b, calcFn) {
    return calcFn(a, b);
}
let calculatedResult = calculate(2, 2, add);
console.log(calculatedResult);
log(add(5, 2));
log(people);
class AuthenticationCredentials {
    constructor(username, password, roles) {
        this.Username = username;
        this.Password = password;
        this.Roles = roles;
    }
}
function login(credentials) {
    console.log("Logging in with username: " + credentials.Username + " and roles: " + credentials.Roles.join(", "));
}
let authenticationCredentials = new AuthenticationCredentials("stewart", "password", ["Admin", "User"]);
login(authenticationCredentials);
let role;
role = "Admin";
role = "User";
role = "Guest";
function PerformAction(action, role) {
    if (role === "Admin" && typeof action === "string") {
        console.log("Performing action: " + action);
    }
}
let myRoles = [];
myRoles.push("Admin");
let stringStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    }
};
stringStorage.add("Stewart");
stringStorage.add("John");
log(stringStorage.storage);
let userStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    }
};
userStorage.add({
    id: "123",
    name: "Stewart",
    age: 35,
    isAdmin: true
});
userStorage.add({
    id: 456,
    name: "John",
    age: 25,
    isAdmin: false,
    hobbies: ["Sports", "Cooking"]
});
log(userStorage.storage);
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
let mergedObj = merge({ name: "Stewart" }, { age: 35 });
log(mergedObj);
//# sourceMappingURL=app.js.map