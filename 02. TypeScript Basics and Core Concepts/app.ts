let userName: string = "Stewart";
let age: number = 35;
let isValid: boolean = true;
let userId: string | number = "abc123";

type User = {
    id: string | number;
    name: string;
    age: number;
    isAdmin: boolean;
    hobbies?: Array<string>;
    metadata?: metadata;
}

interface metadata {
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;
    isVerified: boolean;
}


let people: User[] = [
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
]


function log(message: any): void {
    console.log(message);
}

function add(a: number, b: number): number {
    return a + b;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
    return calcFn(a, b);
}


let calculatedResult: number = calculate(2, 2, add);

console.log(calculatedResult);

log(add(5, 2));

log(people);


interface Credentials {
    Username: string;
    Password: string;
    Roles: Role[];
}

class AuthenticationCredentials implements Credentials {
    Username: string;
    Password: string;
    Roles: Role[];

    constructor(username: string, password: string, roles: Role[]) {
        this.Username = username;
        this.Password = password;
        this.Roles = roles;
    }
}

function login(credentials: Credentials): void {
    console.log("Logging in with username: " + credentials.Username + " and roles: " + credentials.Roles.join(", "));
}

let authenticationCredentials = new AuthenticationCredentials("stewart", "password", ["Admin", "User"]);
login(authenticationCredentials);

type Role = "Admin" | "User" | "Guest";

let role: Role;
role = "Admin";
role = "User";
role = "Guest";


function PerformAction(action: string | number, role: Role) {
    if (role === "Admin" && typeof action === "string") {
        console.log("Performing action: " + action);
    }
}

let myRoles: Array<Role> = [];
myRoles.push("Admin");

type DataStorage<T> = {
    storage: Array<T>;
    add: (data: T) => void;
};

let stringStorage: DataStorage<string> = {
    storage: [],
    add: function (data: string): void {
        this.storage.push(data);
    }
};

stringStorage.add("Stewart");
stringStorage.add("John");

log(stringStorage.storage);

let userStorage: DataStorage<User> = {
    storage: [],
    add: function (data: User): void {
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

function merge<T, U>(a: T, b: U): T & U {
    return {
        ...a,
        ...b
    };
}

let mergedObj = merge<{ name: string }, { age: number }>({name: "Stewart"}, {age: 35});
log(mergedObj);