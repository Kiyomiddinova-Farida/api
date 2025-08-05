import { useState } from 'react';
import FormControl from './components/FormControl';
import StudentView from './components/StudentView';
import type { Student, StudentFormData } from './types/Student';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  // Create operation
  const handleAddStudent = (studentData: StudentFormData) => {
    const newStudent: Student = {
      id: nextId,
      name: studentData.name,
      email: studentData.email,
      age: parseInt(studentData.age)
    };
    setStudents([...students, newStudent]);
    setNextId(nextId + 1);
  };

  // Update operation
  const handleUpdateStudent = (studentData: StudentFormData) => {
    if (editingStudent) {
      const updatedStudent: Student = {
        ...editingStudent,
        name: studentData.name,
        email: studentData.email,
        age: parseInt(studentData.age)
      };
      setStudents(students.map(student => 
        student.id === editingStudent.id ? updatedStudent : student
      ));
      setEditingStudent(null);
    }
  };

  // Handle form submission (Create or Update)
  const handleFormSubmit = (studentData: StudentFormData) => {
    if (editingStudent) {
      handleUpdateStudent(studentData);
    } else {
      handleAddStudent(studentData);
    }
  };

  // Edit operation
  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
  };

  // Cancel edit operation
  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  // Delete operation
  const handleDeleteStudent = (id: number) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== id));
      if (editingStudent && editingStudent.id === id) {
        setEditingStudent(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Student Management System
        </h1>
        
        <FormControl
          onSubmit={handleFormSubmit}
          editingStudent={editingStudent}
          onCancelEdit={handleCancelEdit}
        />
        
        <StudentView
          students={students}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
        />
      </div>
    </div>
  );
}

export default App;
