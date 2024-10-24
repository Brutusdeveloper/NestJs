// src/core/domain/student.dto.ts

export class CreateStudentDto {
    name: string;
    age: number;
    email: string;
  }
  
  export class UpdateStudentDto {
    name?: string;
    age?: number;
    email?: string;
  }
  