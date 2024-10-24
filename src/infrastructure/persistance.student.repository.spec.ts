import { PersistanceStudentRepository } from './persistance.student.repository';
import { CreateStudentDto, UpdateStudentDto } from '../core/domain/student.dto';
import { Student } from '../core/domain/studentEntity.interface';

describe('PersistanceStudentRepository', () => {
  let inMemoryStudentRepository: PersistanceStudentRepository;

  beforeEach(() => {
    inMemoryStudentRepository = new PersistanceStudentRepository();
  });

  it('should create a student', () => {
    const createStudentDto: CreateStudentDto = { name: 'John', age: 22, email: 'john@example.com' };
    const createdStudent: Student = inMemoryStudentRepository.create(createStudentDto);

    expect(createdStudent).toEqual({ id: 1, ...createStudentDto });
    expect(inMemoryStudentRepository.findAll()).toHaveLength(1);
  });

  it('should return all students', () => {
    const createStudentDto: CreateStudentDto = { name: 'John', age: 22, email: 'john@example.com' };
    inMemoryStudentRepository.create(createStudentDto);

    expect(inMemoryStudentRepository.findAll()).toHaveLength(1);
  });

  it('should return a student by ID', () => {
    const createStudentDto: CreateStudentDto = { name: 'John', age: 22, email: 'john@example.com' };
    const createdStudent = inMemoryStudentRepository.create(createStudentDto);

    expect(inMemoryStudentRepository.findById(createdStudent.id)).toEqual(createdStudent);
  });

  it('should update a student', () => {
    const createStudentDto: CreateStudentDto = { name: 'vijay', age: 27, email: 'vijay@example.com' };
    const createdStudent = inMemoryStudentRepository.create(createStudentDto);

    const updateStudentDto: UpdateStudentDto = { name: 'vijay Updated', age: 27 };
    const updatedStudent = inMemoryStudentRepository.update(createdStudent.id, updateStudentDto);

    expect(updatedStudent).toEqual({ id: createdStudent.id, ...createStudentDto, ...updateStudentDto });
  });

  it('should delete a student', () => {
    const createStudentDto: CreateStudentDto = { name: 'vijay', age: 27, email: 'vijay@example.com' };
    const createdStudent = inMemoryStudentRepository.create(createStudentDto);

    expect(inMemoryStudentRepository.remove(createdStudent.id)).toBe(true);
    expect(inMemoryStudentRepository.findAll()).toHaveLength(0);
  });
});
