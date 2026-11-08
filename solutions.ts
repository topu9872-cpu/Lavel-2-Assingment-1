/**
 * ! PROBLEM 1
 */

const multiplyValue = (value: number, multiplier?: number) => {
  return value * (multiplier ?? 2);
};

// console.log(multiplyValue(10, 0));
// console.log(multiplyValue(10));

/**
 * ! PROBLEM 2
 */

const processInput = (value: unknown) => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (value === true) {
    return "Active";
  } else if (value === false) {
    return "Inactive";
  }
};

// console.log(processInput("            TYPESCRIPT "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

/**
 * ! PROBLEM 3
 */

const formatCoordinate = ([latitude, longitude, locationName]: [
  number,
  number,
  string,
]) => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

/**
 * ! PROBLEM 4
 */

const concatenateArrays = <T>(...arr: T[]) => {
  return arr.flat();
};

// console.log(
//   concatenateArrays(["a", "b"], ["c", "d"]),
//   concatenateArrays([1, 2], [3, 4], [5],[234]),
// );

/**
 * ! PROBLEM 5
 */

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses:Course[], minStudents: number) => {
  return courses.filter(course=>
    course.isPublished === true &&
    course.students >= minStudents,
  );

};
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

console.log(getPopularCourses(courses,80));
