import { StudentService } from './student.service';
import { StudentRepository } from '../domain/studentrepository.interface';
import { CreateStudentDto, UpdateStudentDto } from '../domain/student.dto';
import { Student } from '../domain/studentEntity.interface';

describe('StudentService', () => {
  let studentService: StudentService;
  let studentRepository: StudentRepository;

  beforeEach(() => {
    studentRepository = {
      create: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };
    studentService = new StudentService(studentRepository);
  });

  it('should create a student', () => {
    const createStudentDto: CreateStudentDto = { name: 'John', age: 22, email: 'vijay@example.com' };
    const createdStudent: Student = { id: 1, ...createStudentDto };
    
    jest.spyOn(studentRepository, 'create').mockReturnValue(createdStudent);

    expect(studentService.create(createStudentDto)).toEqual(createdStudent);
    expect(studentRepository.create).toHaveBeenCalledWith(createStudentDto);
  });

  it('should find all students', () => {
    const students: Student[] = [{ id: 1, name: 'vijay', age: 22, email: 'vijay@example.com' }];
    
    jest.spyOn(studentRepository, 'findAll').mockReturnValue(students);

    expect(studentService.findAll()).toEqual(students);
    expect(studentRepository.findAll).toHaveBeenCalled();
  });

  it('should find a student by ID', () => {
    const student: Student = { id: 1, name: 'vijay', age: 22, email: 'vijay@example.com' };
    
    jest.spyOn(studentRepository, 'findById').mockReturnValue(student);

    expect(studentService.findById(1)).toEqual(student);
    expect(studentRepository.findById).toHaveBeenCalledWith(1);
  });

  it('should update a student', () => {
    const updateStudentDto: UpdateStudentDto = { name: 'John Updated', age: 23 };
    const updatedStudent: Student = { id: 1, name: 'vijay Updated', age: 23, email: 'vijay@example.com' };
    
    jest.spyOn(studentRepository, 'update').mockReturnValue(updatedStudent);

    expect(studentService.update(1, updateStudentDto)).toEqual(updatedStudent);
    expect(studentRepository.update).toHaveBeenCalledWith(1, updateStudentDto);
  });

  it('should delete a student', () => {
    jest.spyOn(studentRepository, 'remove').mockReturnValue(true);

    expect(studentService.remove(1)).toEqual(true);
    expect(studentRepository.remove).toHaveBeenCalledWith(1);
  });
});
