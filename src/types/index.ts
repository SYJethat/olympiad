export interface ClassItem {
  id: number;
  name: string;
  subjects: string[];
  notesCount: number;
  practicePapersCount: number;
  mockTestsCount: number;
  videoLecturesCount: number;
}

export interface Exam {
  id: number;
  title: string;
  class: number;
  subject: string;
  difficulty: "Easy" | "Medium" | "Hard";
  duration: string;
  questions: number;
  image: string;
}

export interface MockTest {
  id: number;
  title: string;
  subject: string;
  questions: number;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  type: string;
}

export interface StudyMaterial {
  id: number;
  title: string;
  subject: string;
  class: string;
  type: string;
  fileSize: string;
  downloads: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface PlatformStats {
  studentsCount: number;
  testsAttempted: number;
  coursesCount: number;
  expertTeachers: number;
}
