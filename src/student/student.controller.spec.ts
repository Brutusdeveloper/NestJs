import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from '../core/application/student.service';
import { CreateStudentDto, UpdateStudentDto } from '../core/domain/student.dto';
import { Student } from '../core/domain/studentEntity.interface';

describe('StudentController', () => {
  let studentController: StudentController;
  let studentService: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        {
          provide: StudentService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    studentController = module.get<StudentController>(StudentController);
    studentService = module.get<StudentService>(StudentService);
  });

  it('should create a student', () => {
    const createStudentDto: CreateStudentDto = { name: 'John', age: 22, email: 'john@example.com' };
    const createdStudent: Student = { id: 1, ...createStudentDto };

    jest.spyOn(studentService, 'create').mockReturnValue(createdStudent);

    expect(studentController.create(createStudentDto)).toEqual(createdStudent);
    expect(studentService.create).toHaveBeenCalledWith(createStudentDto);
  });

  it('should return all students', () => {
    const students: Student[] = [{ id: 1, name: 'John', age: 22, email: 'john@example.com' }];

    jest.spyOn(studentService, 'findAll').mockReturnValue(students);

    expect(studentController.findAll()).toEqual(students);
    expect(studentService.findAll).toHaveBeenCalled();
  });

  it('should return a student by ID', () => {
    const student: Student = { id: 1, name: 'John', age: 22, email: 'john@example.com' };

    jest.spyOn(studentService, 'findById').mockReturnValue(student);

    expect(studentController.findOne(1)).toEqual(student);
    expect(studentService.findById).toHaveBeenCalledWith(1);
  });

  it('should update a student', () => {
    const updateStudentDto: UpdateStudentDto = { name: 'vijay Updated', age: 23 };
    const updatedStudent: Student = { id: 1, name: 'vijay Updated', age: 23, email: 'vijay@example.com' };

    jest.spyOn(studentService, 'update').mockReturnValue(updatedStudent);

    expect(studentController.update(1, updateStudentDto)).toEqual(updatedStudent);
    expect(studentService.update).toHaveBeenCalledWith(1, updateStudentDto);
  });

  it('should delete a student', () => {
    jest.spyOn(studentService, 'remove').mockReturnValue(true);

    expect(studentController.remove(1)).toEqual("Removed is : true");
    expect(studentService.remove).toHaveBeenCalledWith(1);
  });
});
