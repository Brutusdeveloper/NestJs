// src/core/domain/student.repository.ts

import { Student } from './studentEntity.interface';
import { CreateStudentDto, UpdateStudentDto } from './student.dto';

export interface StudentRepository {
  create(studentDto: CreateStudentDto): Student;
  findAll(): Student[];
  findById(id: number): Student | undefined;
  update(id: number, studentDto: UpdateStudentDto): Student | undefined;
  remove(id: number): boolean;
}
