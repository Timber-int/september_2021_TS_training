// const func = (str: string): number | null | string => {
//     return str + 54;
// };
//
// console.log(func('Hello'));

// const user1: { name: string, age: number, status: boolean } = {age: 34, name: 'Vasya',status:true};

// для визначення необовязковості поля викорисажмо елвіс ?:
// const user: { name: string, age: number, status?: boolean } = {age: 34, name: 'Vasya'};


//З використанням інтерфейсу
// import {IUser} from "./interfaces/user.interface";
//
// const user: IUser = {age: 34, name: 'Vasya', status: true};


// Partial <> для пердачі вибіркових даних (робить поля не обовязковими для вказуванян) (заміняє елвіс)
// const userCount = (user: Partial<IUser>): Partial<IUser> => {
//     return {age: 34, status: true};
// }
//
// userCount(user);

// Взаємодія з сервером;

// import {userService} from "./services/user.service";
//
// userService.getAll().then(value => value.data).then(users=>{
//     for (let user of users){
//         console.log(user.name);
//     }
// });

// Class
//
// class User {
//      name: string;
//     private age: number;
//     private status: boolean;
//
//     constructor(name: string, age: number, status: boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
//
//     protected getName(): string {
//         return this.name
//     }
// }
//
// const user = new User('Kokos', 22, false);
//
// class userChildren extends User {
//     constructor(name: string, age: number, status: boolean) {
//         super(name, age, status);
//     }
//     getParentName():string{
//         return  this.name
//     }
//
//     protected getName(): string {
//         return super.getName();
//     }
// }
//
// const userChild = new userChildren('vasya',22,true);
// userChild.getParentName()

// import {IShapesActions} from "./interfaces/shapes.Actions.Interface";
//
// class Rectangle implements IShapesActions {
//     constructor(private a: number, private b: number) {
//
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return this.a + this.b;
//     }
// }
//
// class Triangle implements IShapesActions {
//     constructor(private a: number, private b: number, private c: number) {
//
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
// }
//
//
// const shapes: IShapesActions[] = [new Rectangle(1, 2), new Triangle(1, 2, 3)];
//
// for (let shape of shapes) {
//     console.log("area", shape.area());
//     console.log("perimeter", shape.area());
// }

import {MyEnum} from "./enum";

console.log(MyEnum.MON);