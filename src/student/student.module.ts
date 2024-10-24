// src/student/student.module.ts

import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from '../core/application/student.service';
import { InMemoryStudentRepository } from '../infrastructure/persistance.student.repository';

@Module({
  controllers: [StudentController],
  providers: [
    StudentService,
    { provide: 'StudentRepository', useClass: InMemoryStudentRepository },
  ],
})
export class StudentModule {}
