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
    firstName: "Inge",
    lastName: "Karl",
    age: 12,
    grades: ["6","6","F","*","*"]
}

let student3:Student = {
    firstName: "bla",
    lastName: "nerv",
    age: 91,
    grades: ["1","2","A","*","2"]
}

function printStudents(printStudent:Student,){
    let underline:string[]=[];
    for(let i:number=0;i<30;i++){
        underline.push("=")
    }
    console.log(
    printStudent.firstName +
    printStudent.lastName +
    "("+ printStudent.age +")"+
    "\n"+underline.join('')+
    "\nGrades: " + printStudent.grades +
        "\n"
    )}

printStudents(student1)
printStudents(student2)
printStudents(student3)