type Grades= "1"|"2"|"3"|"4"|"5"|"6"|"A"|"B"|"C"|"D"|"E"|"F"|"*"

type Student={
    firstName: string
    lastName: string
    age: number
    grades: Grades[]
}
let student1:Student = {
    firstName: "Dean",
    lastName: "Specht",
    age: 36,
    grades: ["*","1","3","2","A"]
}
let student2:Student = {
    firstName: "IngeMitLangemNamen",
    lastName: "Karl",
    age: 12,
    grades: ["6","6","F","*","*"]
}
let student3:Student = {
    firstName: "bla",
    lastName: "ne",
    age: 91,
    grades: ["1","2","A","*","2"]
}

function printStudents(printStudent:Student){
    console.log(
    printStudent.firstName +
    printStudent.lastName +
    "("+ printStudent.age +")"+
    "\n"+calcUnderline(printStudent).join('')+
    "\nGrades: " + printStudent.grades +
        "\n"
    )}

function calcUnderline(printStudent:Student):String[]{
    let underline:string[]=[];
    const varLength:number=printStudent.firstName.length+printStudent.lastName.length+4
    for(let i:number=0;i<varLength;i++){
        underline.push("=")
    }
    return underline
}

printStudents(student1)
printStudents(student2)
printStudents(student3)