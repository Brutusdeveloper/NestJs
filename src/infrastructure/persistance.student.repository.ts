// src/infrastructure/persistence/in-memory.student.repository.ts

import { Injectable } from '@nestjs/common';
import { StudentRepository } from '../core/domain/studentrepository.interface';
import { Student } from '../core/domain/studentEntity.interface';
import { CreateStudentDto, UpdateStudentDto } from '../core/domain/student.dto';

@Injectable()
export class PersistanceStudentRepository implements StudentRepository {
  private students: Student[] = [];
  private currentId = 1;

  create(studentDto: CreateStudentDto): Student {
    const newStudent: Student = {
      id: this.currentId++,
      ...studentDto,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  findAll(): Student[] {
    return this.students;
  }

  findById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  update(id: number, studentDto: UpdateStudentDto): Student | undefined {
    const studentIndex = this.students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      const updatedStudent = {
        ...this.students[studentIndex],
        ...studentDto,
      };
      this.students[studentIndex] = updatedStudent;
      return updatedStudent;
    }
    return undefined;
  }

  remove(id: number): boolean {
    const studentIndex = this.students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      this.students.splice(studentIndex, 1);
      return true;
    }
    return false;
  }
}
