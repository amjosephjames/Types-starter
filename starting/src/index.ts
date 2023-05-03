// let names = "joseph";

// console.log(names);

// let newName :string = "joseph"
// let isAdmin :boolean = true
// isAdmin = false

// const fruit : {
//     name:string,
//     color:string,
//     ripe:false,
//     qty:number,
// }={
//     name:"joseph",
//     color:"orange",
//     ripe:false,
//     qty:1,
// }
// console.log(fruit)

// let arr: (string | number | boolean)[] = [true, "me", 10, "see"];
// //orange
// let am: string[] = ["see", "joseph", "cute"];

// //to insert/change an item in an an array
// am[1] = "joseph";
// console.log(am);
// am.push("james"); //pushes item into the array

// //turple
// let arr2: [number, number, string] = [125, "104"];

// arr2.push(34);

// console.log(arr2[2]);
// console.log(arr2[3])

//declaring a global or reusable data type
//to make it optional, you use the ?

// type myData = {
//   name: string;
//   qty: number;
//   isReady: boolean;
// };

// let stuck: myData = {
//   name: "orange",
//   qty: 15,
//   isReady: true,
//   product
// };

//using the pagination or | allows you choose a data type
//e.g pagination : string | number .......to the user can either input a string or number

//to extend a data

// interface joseph extends myData{
//     user:any[]
// }
// interface james extends daniel{
//     user:any[]
// }
// let stuck: james = {
//     name:"joseph",
//     qty:15,
//     isReady:true,
//     user:["lulu"],
//     product:[10]
// }

//a function that reverse a number a string

// console.log(stuck)
// let names = "joseph"
// let newName = names.split("")
// let reverse = newName.reverse().join("")

// console.log(reverse)

// const newName = (s: string) => {
//   return s.split("").reverse().join("");
// };
// console.log("codelab");

// const newName = (x: string) => {
//   let xx: string[] = x.split("");
//   let xxx: string = xx.reverse().join("");
//   return xxx;
// };
// // console.log("joseph");
// console.log(xxx,("joseph"))

// const newSchool = (x: string): number => {
//   let xx: string[] = x.split("");

//   let newFile: string = xx.reverse().join("");
//   return parseInt(newFile);
// };
// console.log(newSchool("123456"));

//a fuction that returns a random number from 1-7

// const getData = (x: any[]) => {
//   let index = Math.floor(Math.random() * x.length);
//   let d = x[index];
//   console.log(d);
// };
// getData([1, 2, 3, 4, 5, 6, 7]);

// const getData2 = <Arr>(x: Arr[]): void => {
//   let index2 = Math.floor(Math.random() * x.length);
//   let b = x[index2];
//   console.log(b);
// };
// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr3 = ["james", "joseph", "daniel"];

// getData2(arr3);

//class with typescript

// class TheName {
//   name: string;
//   color: string;
//   ripe: boolean;
//   qty: number;

//   constructor(name: string, color: string, ripe: boolean, qty: number) {
//     this.name = name;
//     this.color = color;
//     this.ripe = ripe;
//     this.qty = qty;
//   }
//   review() {
//     console.log(
//       `this boy ${this.name} has a color of ${this.color} and that is ${this.ripe}`
//     );
//   }
// }

// const newBuild = new TheName("joseph", "blue", false, 18);

// console.log(newBuild);
// newBuild.review();
// console.log(newBuild.name);

//for game
// enum Game{
//     joseph,
//     james,
//     joe,
//     jim
// }
// console.log(Game)

//create a class that takes a fuction that calculate the score of individual student results
//and another that calculate average class results

// class StudentResult {
//     name:string
//    score:number[]

//      constructor(name: string, score:number[]){
//           this.name = name;
//            this.score = score;
//      }
//      addResult(){
//         let x = this.score.reduce((a,b) => a+b)
//         return x;

//      }
//      average(){
//         let sum = this.addResult();
//         let avr = sum / this.score.length;
//         return avr;
//      }

// }

//create a class inside create a function to register a new student

class Student {
  public names: string;
  public age: number;
  public height: number;
  constructor(names: string, age: number, height: number) {
    this.names = names;
    this.age = age;
    this.height = height;
  }
  //   proflle(){
  //      const students = []

  //   }
}
const myarr = new Student("joseph", 18, 4.5);

console.log(myarr);
