// src/student/student.module.ts

import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from '../core/application/student.service';
import { PersistanceStudentRepository } from '../infrastructure/persistance.student.repository';

@Module({
  controllers: [StudentController],
  providers: [
    StudentService,
    { provide: 'StudentRepository', useClass: PersistanceStudentRepository },
  ],
})
export class StudentModule {}
