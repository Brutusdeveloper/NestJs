## STRUCTURE ##
src/
|-- core/
| |-- domain/
| | |-- student.interface.ts
| | |-- student.dto.ts
| |-- application/
| |-- student.service.ts
|
|-- infrastructure/
| |-- persistence/
| |-- in-memory.student.repository.ts
|
|-- student/
| |-- student.module.ts
| |-- student.controller.ts
|
|-- app.module.ts

## API END POINT ##

POST -- http://localhost:3000/students
      {
        "name": "VIJAY",
        "age": 27,
        "email": "VIJAY@example.com"
      }
PUT -- http://localhost:3000/students/1     
      {
        "name": "VIJAY001",
      }
DELETE -- http://localhost:3000/students/1

GET -- http://localhost:3000/students 



// ADDED THE INMEMORY OPTION TO AVOID THE CONNECTION IN DATABASE
