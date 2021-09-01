// Q1. make a string out of an array
// join은 구분자를 변경할 수 있음
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);
  
  // Q2. make an array out of a string
  // split은 구분자를 반드시 전달해야 함!
  // 파라미터는 구분자, 가져올 갯수 순으로 씀.
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 4);
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
  }
  
  // Q4. make new array without the first two elements
  // splice는 배열 자체 내에서 삭제한 값을 리턴해 주므로 사용할 수 없음
  // slice는 새로운 배열을 생성해 줌(파라미터: strat, end)
  // slice는 마지막 인덱스 번호를 넣으면 배제됨. 따라서 +1한 인덱스를 넣어야함
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result); // 3,4,5
    console.log(array); // 1,2,3,4,5
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // find 함수는 불리언 타입으로 리턴됨
  {
      const result =
      students.find((student) => student.score === 90);
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  // filter는 true를 리턴함. 즉, 수업에 등록된 학생들(TRUE)만 리턴함.
  {
      const result = 
      students.filter((student) => student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // map: fn를 수행하고 만들어진 결과로 새로운 배열을 생성함
  {
      const result =
      students.map((student) => student.score);
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      const result = 
      students.some((student) => student.score < 50);
      console.log(result);

      const result2 = 
      students.some((student) => students.score >= 50);
      // 모든 학생의 점수를 검사
      console.log(result2);
  }
  
  // Q9. compute students' average score
  {
    const sum =
    students.reduce((prev, curr) => prev + curr.score, 0);
    // 이니셜 값이 0부터 시작함
    console.log(sum / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    // 점수 배열 만들기 -> 새로운 배열이 생성됨
    // join을 이용해서 String으로 변환
    const result =
    students.map((student) => student.score)
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result =
    students
    .map((student) => student.score)
    .sort((a, b) => a-b)
    .join();
    console.log(result);
  }