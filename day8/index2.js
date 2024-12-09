let student_id_card = {
    // key : value 
    name : "rohan",
    rollnumber : 232637,
    address : "abc....",
    section: "C",
    course : "B-Tech",
    branch : "CSE",

};
const address = student_id_card.address;
const course = student_id_card.course;
const section = student_id_card.section ;
const name  = student_id_card.name;
const branch = student_id_card.branch;
const rollnumber = student_id_card.rollnumber;
const result = student_id_card.result;
console.log(address,course,name,rollnumber,section,branch);
student_id_card.result = "pass";
student_id_card.section = "B";
delete student_id_card.name;

console.log(student_id_card);