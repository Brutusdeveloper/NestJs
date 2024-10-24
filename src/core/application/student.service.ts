// src/core/application/student.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { StudentRepository } from '../domain/studentrepository.interface';
import { Student } from '../domain/studentEntity.interface';
import { CreateStudentDto, UpdateStudentDto } from '../domain/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @Inject('StudentRepository')
    private readonly studentRepository: StudentRepository,
  ) {}

  create(createStudentDto: CreateStudentDto): Student {
    return this.studentRepository.create(createStudentDto);
  }

  findAll(): Student[] {
    return this.studentRepository.findAll();
  }

  findById(id: number): Student | undefined {
    return this.studentRepository.findById(id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto): Student | undefined {
    return this.studentRepository.update(id, updateStudentDto);
  }

  remove(id: number): boolean {
    return this.studentRepository.remove(id);
  }
}
