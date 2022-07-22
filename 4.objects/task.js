function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};
  let stud1 = new Student('Anton', 'male', 40);
  let stud2 = new Student('Andrey', 'male', 39);
  let stud3 = new Student('Olga', 'female', 40);
  
  console.log(stud1, stud2, stud3);

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
  };

stud1.subject = 'Algebra';
stud2.subject= 'Russian Language';
stud3.subject = 'Izo';

console.log(stud1, stud2, stud3);

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
};

stud1.addMark(3);
stud1.addMark(4);
stud1.addMark(5);

Student.prototype.addMarks = function(...marks) {
  if(this.marks === undefined){ 
    this.marks = [...marks];
    } else {
        this.marks.push(...marks);
    }
};

stud1.addMarks(3,3,3);
stud2.addMarks(4,4,4);
stud3.addMarks(5,5,5);

Student.prototype.getAverage = function (){
  let result = 0;
    for(let i = 0; i < this.marks.length; i++){
      result  += this.marks[i];
    }
    return result / this.marks.length;
};

console.log(stud1.getAverage());

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
  return this;
}

stud1.exclude('плохо учился');
stud2.exclude('долго спит');

console.log(stud1, stud2);

