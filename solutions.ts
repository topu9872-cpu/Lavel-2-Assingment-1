

const multiplyValue = (value: number, multiplier?: number) => {
  return value * (multiplier ?? 2);
};



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



const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]) => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};



const concatenateArrays = <T>(...arr: T[]) => {
  return arr.flat();
};



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



const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
  return items.map((i) => i[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];




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








const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => resolve("Access Granted"), 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};

