/*
p: prepare class record summary of students based on weighted scores of exams and exercises
- 4 exams, each weighted .65
  - max score is 100
- exercises weighted .35
  - max possible of all exercises is always 100

determin grade: done
  - get average score of 4 exams * weight
  - sum of exericse scores * weight
  - sum of above for percent grade, rounded to nearest integer
  - map percent grade to letter equivalent
  - return "percent grade (letter grade)" formatted string

ds:
- student scores is object containing student data
- student data is an object with props: id, scores obj
  - scores obj contains two arrays with exam grade and exercise grades
output:
object with two properties:
- studentGrades : array of string formatted grades
- exams: array of exam statistics for each exam (4 statistic objects)
  - statistic obj { average (rounded 1 dec place), minimum, maximum }

algo for exams property:
- create an array of scores for each exam...exam1 arr...
  - on each exam arr, getStatistics() to get average, min, max ==> factor each metric out
*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};
const EXAMS_WEIGHT = .65;
const EXERCISES_WEIGHT = .35;
const NUMBER_OF_EXAMS = 4;

function generateClassRecordSummary(scores) {
  let students = Object.values(scores);

  let studentGrades = students.map(student => calculateStudentGrade(student));
  let allStudentExams = students.map(student => student.scores.exams); // array of student exam arrays

  let scoresByExam = organizeExamScores(allStudentExams);
  let exams = scoresByExam.map(scoresArrayb => getExamStats(scoresArray));

  return {studentGrades, exams };
}

function organizeExamScores(studentScores) {
  let scoresByExam = [];

  for (let i = 0; i < NUMBER_OF_EXAMS; i++) {
    let gradesPerExam = studentScores.map(scoreArray => scoreArray[i]);
    scoresByExam.push(gradesPerExam);
  }
  return scoresByExam;
}

function getExamStats(scores) {
  let average = averageExamScores(scores).toFixed(1);
  let minimum = lowestScore(scores);
  let maximum = highestScore(scores);
  return { average, minimum, maximum };
}

function lowestScore(scores) {
  return scores.reduce((min, currentValue) => Math.min(min, currentValue));
}

function highestScore(scores) {
  return scores.reduce((max, currentValue) => Math.max(max, currentValue));
}

function calculateStudentGrade(student) {
  let examAverage = averageExamScores(student.scores.exams);
  let exerciseScore = sumScores(student.scores.exercises);
  let percGrade = weightScores(examAverage, exerciseScore, EXAMS_WEIGHT, EXERCISES_WEIGHT);
  let letterGrade = getLetterGrade(percGrade);
  return `${percGrade} (${letterGrade})`;
}

function getLetterGrade(percGrade) {
  if (percGrade >= 93) return 'A';
  if (percGrade >= 85) return 'B';
  if (percGrade >= 77) return 'C';
  if (percGrade >= 69) return 'D';
  if (percGrade >= 60) return 'E';
  return 'F';

}

function weightScores(score1, score2, weight1, weight2) {
  return Math.round((score1 * weight1) + (score2 * weight2));
}

function averageExamScores(scores) {
  return sumScores(scores) / scores.length;
}g;

function sumScores(scores) {
  return scores.reduce((total, currentValue) => total + currentValue);
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
