// src/student/student.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from '../core/application/student.service';
import { CreateStudentDto, UpdateStudentDto } from '../core/domain/student.dto';
import { Student } from '../core/domain/studentEntity.interface';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Student {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll(): Student[] {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Student | undefined {
    return this.studentService.findById(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Student | undefined {
    return this.studentService.update(Number(id), updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): string {
    return "Removed is : " + this.studentService.remove(Number(id));
  }
}
