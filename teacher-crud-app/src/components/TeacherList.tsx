import React, { useMemo, useCallback } from 'react';
import type { Teacher } from '../types/Teacher';

interface TeacherListProps {
  teachers: Teacher[];
  onEdit: (teacher: Teacher) => void;
  onDelete: (id: string) => void;
  searchTerm?: string;
}

const TeacherList: React.FC<TeacherListProps> = ({ teachers, onEdit, onDelete, searchTerm = '' }) => {
  const filteredTeachers = useMemo(() => {
    if (!searchTerm.trim()) {
      return teachers;
    }
    
    const term = searchTerm.toLowerCase();
    return teachers.filter(teacher => 
      teacher.name.toLowerCase().includes(term) ||
      teacher.address.toLowerCase().includes(term) ||
      teacher.phone.includes(term)
    );
  }, [teachers, searchTerm]);

  const sortedTeachers = useMemo(() => {
    return [...filteredTeachers].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredTeachers]);

  const totalSalary = useMemo(() => {
    return filteredTeachers.reduce((sum, teacher) => sum + teacher.salary, 0);
  }, [filteredTeachers]);

  const averageAge = useMemo(() => {
    if (filteredTeachers.length === 0) return 0;
    const totalAge = filteredTeachers.reduce((sum, teacher) => sum + teacher.age, 0);
    return Math.round(totalAge / filteredTeachers.length);
  }, [filteredTeachers]);

  const handleEdit = useCallback((teacher: Teacher) => {
    onEdit(teacher);
  }, [onEdit]);

  const handleDelete = useCallback((id: string, name: string) => {
    if (window.confirm(`Haqiqatan ham "${name}" ni o'chirmoqchimisiz?`)) {
      onDelete(id);
    }
  }, [onDelete]);

  const formatSalary = useCallback((salary: number) => {
    return new Intl.NumberFormat('uz-UZ').format(salary) + ' so\'m';
  }, []);

  if (sortedTeachers.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">O'qituvchilar ro'yxati</h2>
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            {searchTerm ? 'Qidiruv natijasi topilmadi' : 'Hozircha o\'qituvchilar mavjud emas'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">O'qituvchilar ro'yxati</h2>
          <div className="text-sm text-gray-600">
            Jami: {filteredTeachers.length} ta o'qituvchi
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600">Jami maosh</p>
            <p className="text-lg font-semibold text-blue-600">{formatSalary(totalSalary)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">O'rtacha yosh</p>
            <p className="text-lg font-semibold text-green-600">{averageAge} yosh</p>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedTeachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              onEdit={handleEdit}
              onDelete={handleDelete}
              formatSalary={formatSalary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TeacherCardProps {
  teacher: Teacher;
  onEdit: (teacher: Teacher) => void;
  onDelete: (id: string, name: string) => void;
  formatSalary: (salary: number) => string;
}

const TeacherCard: React.FC<TeacherCardProps> = React.memo(({ teacher, onEdit, onDelete, formatSalary }) => {
  const handleEdit = useCallback(() => {
    onEdit(teacher);
  }, [onEdit, teacher]);

  const handleDelete = useCallback(() => {
    onDelete(teacher.id, teacher.name);
  }, [onDelete, teacher.id, teacher.name]);

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{teacher.name}</h3>
        <p className="text-sm text-gray-600">{teacher.age} yosh</p>
      </div>
      
      <div className="space-y-2 mb-4">
        <div>
          <p className="text-xs text-gray-500">Manzil:</p>
          <p className="text-sm text-gray-700">{teacher.address}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Telefon:</p>
          <p className="text-sm text-gray-700">{teacher.phone}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Maosh:</p>
          <p className="text-sm font-medium text-green-600">{formatSalary(teacher.salary)}</p>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded transition-colors duration-200"
        >
          Tahrirlash
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded transition-colors duration-200"
        >
          O'chirish
        </button>
      </div>
    </div>
  );
});

export default TeacherList;