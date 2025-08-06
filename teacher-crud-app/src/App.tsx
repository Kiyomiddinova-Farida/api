import React, { useState, useCallback, useMemo } from 'react';
import type { Teacher } from './types/Teacher';
import TeacherForm from './components/TeacherForm';
import TeacherList from './components/TeacherList';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Generate unique ID
  const generateId = useCallback(() => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }, []);

  // Add new teacher
  const handleAddTeacher = useCallback((teacherData: Omit<Teacher, 'id'>) => {
    const newTeacher: Teacher = {
      ...teacherData,
      id: generateId(),
    };
    
    setTeachers(prev => [...prev, newTeacher]);
    setShowForm(false);
  }, [generateId]);

  // Update existing teacher
  const handleUpdateTeacher = useCallback((teacherData: Omit<Teacher, 'id'>) => {
    if (!editingTeacher) return;
    
    const updatedTeacher: Teacher = {
      ...teacherData,
      id: editingTeacher.id,
    };
    
    setTeachers(prev => 
      prev.map(teacher => 
        teacher.id === editingTeacher.id ? updatedTeacher : teacher
      )
    );
    setEditingTeacher(null);
  }, [editingTeacher]);

  // Handle form submission (add or update)
  const handleFormSubmit = useCallback((teacherData: Omit<Teacher, 'id'>) => {
    if (editingTeacher) {
      handleUpdateTeacher(teacherData);
    } else {
      handleAddTeacher(teacherData);
    }
  }, [editingTeacher, handleUpdateTeacher, handleAddTeacher]);

  // Start editing a teacher
  const handleEditTeacher = useCallback((teacher: Teacher) => {
    setEditingTeacher(teacher);
    setShowForm(false);
  }, []);

  // Delete a teacher
  const handleDeleteTeacher = useCallback((id: string) => {
    setTeachers(prev => prev.filter(teacher => teacher.id !== id));
  }, []);

  // Cancel editing
  const handleCancelEdit = useCallback(() => {
    setEditingTeacher(null);
  }, []);

  // Toggle form visibility
  const handleToggleForm = useCallback(() => {
    setShowForm(prev => !prev);
    if (editingTeacher) {
      setEditingTeacher(null);
    }
  }, [editingTeacher]);

  // Handle search
  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  // Memoized values
  const isFormVisible = useMemo(() => {
    return showForm || editingTeacher !== null;
  }, [showForm, editingTeacher]);

  const formButtonText = useMemo(() => {
    if (editingTeacher) return 'Bekor qilish';
    return showForm ? 'Formani yashirish' : 'Yangi o\'qituvchi qo\'shish';
  }, [editingTeacher, showForm]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            O'qituvchilar boshqaruvi
          </h1>
          <p className="text-gray-600">
            O'qituvchilar ma'lumotlarini qo'shish, tahrirlash va o'chirish
          </p>
        </div>

        {/* Action Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleToggleForm}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
              editingTeacher
                ? 'bg-gray-500 hover:bg-gray-600'
                : showForm
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            } text-white`}
          >
            {formButtonText}
          </button>
        </div>

        {/* Form Section */}
        {isFormVisible && (
          <div className="mb-8">
            <TeacherForm
              onSubmit={handleFormSubmit}
              editingTeacher={editingTeacher}
              onCancel={editingTeacher ? handleCancelEdit : undefined}
            />
          </div>
        )}

        {/* Search Bar */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />

        {/* Teachers List */}
        <TeacherList
          teachers={teachers}
          onEdit={handleEditTeacher}
          onDelete={handleDeleteTeacher}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default App;
