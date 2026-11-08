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

const getPopularCourses = (courses: Course[], minStudents: number) => {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
};
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

// console.log(getPopularCourses(courses,80));

/**
 * ! PROBLEM 6
 */

const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
  return items.map((i) => i[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// console.log(pluckValues(users, "name"), pluckValues(users, "id"));

/**
 * ! PROBLEM 7
 */

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  get BaseSalary(): number {
    return this.baseSalary;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getDetails(): string {
    return `Employee:${this.name}, Base Salary:${this.BaseSalary}`;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Topu", 300, "Engineer");
const manager2 = new Manager("Mehedi", 300, "Engineer");

// console.log(manager.getRoleInfo());
// console.log(manager.getDetails());
// console.log(manager2.getRoleInfo());
// console.log(manager2.getDetails());
