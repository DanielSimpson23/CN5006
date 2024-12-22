// defination of the function EmployeeInfo 
function EmployeeInfo(name,Salary)
{
console.log("Wellcome " + name+ " Your monthly Salary is "+ Salary)
}
console.log ("This is my first progame") 
var EmpName="John"
var EmpSalary= 50000
// calling of the function EmployeeInfo 
EmployeeInfo(EmpName,EmpSalary)

// exercise 2
const EmpSkills= (skills)=> {
    console.log("Expert in "+ skills)
   }
   EmpSkills("java")

   //calling StudentInfo
const Student= require('./StudentInfo')
const Person = require('./person') // because getName is the function so we use ()
console.log("Student Name:" +Student.getName())
console.log(Student.Location())
console.log(Student.dob) // because dob is a variable so we do not use ()
console.log(Student.Studentgrade())
console.log("grade is "+Student.Studentgrade(55) )

const os = require("os");
const util = require("util");

console.log("Temporary directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + " Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Memory: " + os.totalmem() / 1000000000 + " Gigabyte");
console.log("Free: " + os.freemem() / 1000000000 + " Gigabyte");
console.log("CPU: " + util.inspect(os.cpus()));
console.log("Network: " + util.inspect(os.networkInterfaces()));
console.log("Program end");



   
