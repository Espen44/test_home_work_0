function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

}
  let stud1 = new Student('Anton', 'male', 40);
  let stud2 = new Student('Andrey', 'male', 39);
  let stud3 = new Student('Olga', 'female', 40);
  
  console.log(stud1, stud2, stud3);

Student.prototype.setSubject = function (subjectName) {
   Student.setSubject = 'Название предмета';
  };
stud1.setSubject = 'Algebra';
stud2.setSubject = 'Russian Language';
stud3.setSubject = 'Izo';

console.log(stud1, stud2, stud3);



Student.prototype.addMark = function (mark) {
  Student.addMark = 'оценка';
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

stud1.addMark(4);




// ваш код для остальных методов