// //primitive 
// let firstName = "mohammad";
// let isAdmin = false;
// let age = 20 ;

// let duties = ["write code " , "fix bugs"];
// let car = null ;
// let bicycle = undefined ;

// let work = ()=>{
// console.log("working...");

// };

// // let salary = 50n ;

// let logo = Symbol("emerald");


// let all = [firstName , isAdmin , age , car , bicycle , duties , work ,  , logo];

// for(let item of all){
//     console.log(String (item ) +    "is"   +    typeof item);
    
// }

// // array 
// const tasks:(string |number)[] = ["write code"];

// tasks.push("50");
// tasks.map(task =>{
//     console.log(task.toString().toUpperCase());
    
// });


// // tuple

// let employeeLockerCode:[string , number] = ["mohammd " , 50];
// employeeLockerCode = ["6",6];
// employeeLockerCode.push(12); // tuple bug
// console.log(employeeLockerCode);


// // object 
// const person :{
//     name:string;
//     age:number;

// } = {
//     name:"mohammad",
//     age: 20
// }

// person.age=20


// // functions 

// function greet(name:string){
//     return ("hello" + name)
// }
// const johnGreet = greet("john");


// function consoleGreetJohn(name = "john"){
//        console.log(`Hello ` + name.toUpperCase())

// } // name?: its mean it is optional 

// consoleGreetJohn();
// consoleGreetJohn("mohammad");



// const greetToConsole = (name:string[])=>{
// console.log('HELLO' + name);

// }


// const greetToConsole2 = (...names:string[])=>{
// names.forEach(name =>{
//     greetToConsole2(name)
// })
// }
 
// greetToConsole2("mamad");
// greetToConsole2("mamad","ali")   



// // any and unknown 

// let val : any ;

// // val = true ; ok
// // val = 25 ; ok 
// // val = "hi"; ok
// // val = [];  ok 
// // val ={};  ok
// // val = Math.random; ok
// // val = null;  ok
// // val = undefined;   ok
// // val = ()=>{console.log("hello")};  ok

// // console.log(val.trim()); ok



// // unknown 


// // val = true ; ok
// // val = 25 ; ok 
// // val = "hi"; ok
// // val = [];  ok 
// // val ={};  ok
// // val = Math.random; ok
// // val = null;  ok
// // val = undefined;   ok
// // val = ()=>{console.log("hello")};  ok


// val.foo.bar; // error
// val.trim()//error
// val(); //error
// val[0][1]; //error


// // if(typeof val === "string"){
// //     console.log(val);
    
// // }else{
// //     console.log(Error);
    
// // }



// const a: any = "a";
// const b:unknown = "b";

// const v1:string = a // ok
// const v2: string = b // error
// const v3:string = b as string // ok

// a.trim()//ok
// b.trim()//error


// //void 

// const printInfo1 =():void=>{

// }

// const printInfo2 = ()=>{
//     return undefined
// }

// // const printInfo3 = ():void=>{
// //     return null
// // }  error 


// // never 
// // const check = (value:string | number)=>{
// //     if(typeof value === "string"){
// //         //do somthing 
// //     }else if (typeof value === 'number'){
// //         // do somthings
// //     }else{
// //         value
// //     }
   
// // }





// // type Color = "red" | "green" | "blue";

// // const getColor = (color:Color):string =>{
// // switch(color){
// //     case "red":
// //         return "#F00"
// //         case "green":
// //             return "0F0"
// //             case "blue":
// //                 return "00F"
// //             //@ts-ignore
// //             case "gray":
// //                 return "bbb"
// //                 default :
// //                     const otherColor:never = color;
// //                     return otherColor

// // }
// // }
   









// const books = ["1322" , "brave new world " , "farenhan 451"];


// let foundBook ;

// for(let book of books){
//     if (book=== "1322") {
//         foundBook = book;
//         break;
//     }
// }

// console.log(foundBook);


// type MyType = string | number ;

// let firsName : MyType ;
// firsName = 30;




//////////////////////////////////////// type alias

// type Experienc = {
//     jobTitle : string;
//     duration:number;
// }

 


// type Position = 'Programmer'| 'Manager';

// // const myPosition:Position = "Programmer";

// type Colleague = {
//     name:string;
//     age:number;
//     position:Position;
//     birthDate?: Date;
//     tasks?:string[];
//     greet?: Function ;
//     getResume?:(experienc:Experienc) => string
//     address?: {
//         city : string,
//         street:string,
//         no:string|number
//     }
// }


// const myColleague:Colleague = {
//     name : "mohammad",
//     age: 20 ,
//     position:"Programmer"
// }

// const myManager : Colleague ={
//     name:"john",
//     age:35,
//     position:"Manager",
//     greet:()=>{
//         console.log("Cheers...");
//     },
//    getResume(experienc) {
//        `working an a ${experienc.jobTitle} for ${experienc.duration} m`
//    },
// }

// function greetColleague (colleague:Colleague){
//     console.log("Hi " + colleague.name);
//     if(colleague.greet){
//         colleague.greet();
//     } else{
//         console.log("great function does not exist");
        
//     }   
// }
// greetColleague(myColleague)

// myManager.getResume!({jobTitle:"cto",duration:22})




/////////////////// type literal

// type Programmer = "Programmer";
// type Manager = " Manager"

// let bestProgrammer:Programmer="Programmer"

// type PositionType = Programmer| Manager ;

// type position = 
// | "Programmer"
// | "Manager"





/////////// type narrowing 



// function getSalary(position:position):number|undefined{
//     if(position === "Programmer"){
//         bestProgrammer = position
//         return 10000
//     }else if(position==="Manager"){
//         return 15000
//     }
//     console.warn(`We dont have a salary for ${position}`)
// }
// getSalary("Manager");




// class CompanySponsor{
//     makeMoney(){

//     }
// }

// class CompanyBoss{
//     manage(){

//     }
// }




// type CompanyPerson = CompanyBoss| CompanySponsor



// function giveLongSpeech(person: CompanyPerson){
//     if(person instanceof CompanySponsor){
//         person.makeMoney()
//     }else if (person instanceof CompanyBoss){
//         person.manage()
//     }
// }
// giveLongSpeech(new CompanyBoss());
// giveLongSpeech(new CompanySponsor());





// type Salary ={
//     amount:number
// }

// function isSalary(arg:any):arg is Salary{
//     return(('amount' in arg ) && (typeof arg.amount === "number"))
// }



// ///////// assention

// type SimpleJOb ={
//     codingLanguage:string,
//     sourceControl : string
// }

// type ComplicatedJob ={
//     codingLanguage:string,
//     sourceControl:string,
//     hasManyMeetings:true,
//     reportsToBeCompleted:string[]
// }

// let simplejob : SimpleJOb ={
//     codingLanguage: "ts" , sourceControl:"git"
// }

// let compicatedjob:ComplicatedJob ={
//     codingLanguage:"js" , sourceControl:"git",hasManyMeetings:true , reportsToBeCompleted:["any"]
// }


// simplejob = compicatedjob ;
// // compicatedjob = simplejob ;  Error

// compicatedjob = simplejob as ComplicatedJob
// //same meaning =>                compicatedjob = <ComplicatedJob>simplejob;



// type Birds = {
//     fly():void
//     layEgg():void
// }

// type Fish = {
//     swim():void;
//     layEgg():void;
// }

// let animal:Birds | Fish ={
//     layEgg() {
//         //some code
//     },
//     swim() {
//         //somecode
//     },
//     fly() {
//         //somecode
//     },
// }
// // animal.layEgg  just have this .



// type Capitan ={
//     name:string,
//     age:number,
//     tactic:string
// }

// type Players ={
//     name:string,
//     age:number,
//     position:string,
//     action:Function
// }

// type NewPlayers = Capitan & Players 

// let ali:NewPlayers;
// // ali.   =>  access all property 


////////////////////////////////// enums 


// enum CompanyPosition {
//     Programmer,
//     Desiger,
//     Manager,
//     Boss
// }

// type Employee ={
//     name:string,
//     age:number,
//     salary:number,
//     position:CompanyPosition
// }


// function payBonus(Employee:Employee){
//     if (Employee.position === CompanyPosition.Programmer){
//         //somthing for programmer
//     }else if(Employee.position === CompanyPosition.Desiger){
//         //some code for desiger
//     }else if(Employee.position === CompanyPosition.Manager){
//         //some code  for manager
//     }
// }


//////////////////////////// oop 


// interface Employee{
//     name:string,
//     age : number ;
//     baseSalary : number;
//     introduction:()=>string
// }


// class employee implements employee {
//     public name :string;
//     public age : number ;
//     public baseSalary : number;

//     constructor(name:string , age : number ,baseSalary:number){
//         this.name = name ,
//         this.age = age ,
//         this.baseSalary = baseSalary
//     }

//     public introduction ():string{
//         return `My name is ${this.name} and i have ${this.age} years old`
//     }


// }



// type Employee = {
//     name :string,
//     role : string
// }
 

// async function getEmployees (arg:string){
//  const result = await fetch("something")
//  const parsedResult  = await result.json()
//  return parsedResult;
// }


// async function wrapper() {
//     const employee = await getEmployees("fetch employees url")
//     const firsEmployee = employee[0];
// }


// type SchoolProgrammer<T extends "ts" | "js"> = {
//     language:T,
//     name : string
// }

// const myFriends : SchoolProgrammer<"js"> ={
//     language : "js",
//     name:"mamad"
// }



///////////// generics 



// const managerRole ={
//     holdsMeetings: false,
//     teams:["Team1","Team2"]
// }
// const DeveloperRole = {
//     holdsMeetings:true,
//     reportsTo:"upperManager"
// }

// function mergeRole<T extends object , M extends object>(role1:T , role2:M){
// return {...role1 , ...role2}
// }

// const allRoles = mergeRole(managerRole , DeveloperRole);
// console.log(allRoles);





// class Todo <T> {
//     items = new Array<T>();

//     public addItem(item:T){
//         this.items.push(item)
//     }

//     public getItenByIndex(index: number): T | undefined {
//         return this.items[index]
//     }
// }


// type TodoCompleted = {
//     name:string
//     commpleted:boolean
// }

// const namesData = new Todo<TodoCompleted>();
// namesData.addItem({name:"do somethings" , commpleted: false})
// const firs = namesData.getItenByIndex(0);





// interface Allemployees<T , M> {
//     managers:Array<T>,
//     developers:Array<M>,
// }
// type Manager = {
//     name : string
//     grade:"c Level"
// }

// type Developer = {
//     name :string,
//     lang:string
// }

// const allEmployees : Allemployees<Manager , Developer>={
//     developers:[{name:"mamad" , lang:"JS"}],
//     managers:[{name:"john" , grade:"c Level"}]
// }



////////////////////// conditional - infer 


// type FileTypes = "mp3" | "mp4" | "pdf";
// type FileTypesFilters <T> = T extends "mp3" | "mp4" ? T : never;


// type MediaTypes = FileTypesFilters<FileTypes>;
// const mediaFile:MediaTypes = "zip";                   ///////// error




/// utility types 

// type NonNull <T> = T extends null | undefined ? never : T;
// type isNull = NonNull<null>
// type isNotNull = NonNull<string>



// type ToArray<T> = T extends any ? T[] : never;
// type StrArrorNmbArr = ToArray<string|number>;




// type NumnerFromType <T> = T extends number[] ? number : never



// type AnyFromType <T> = T extends (infer M)[] ? M : never 