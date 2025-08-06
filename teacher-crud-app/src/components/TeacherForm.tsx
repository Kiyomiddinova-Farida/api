import React, { useState, useCallback } from 'react';
import type { Teacher, TeacherFormData } from '../types/Teacher';

interface TeacherFormProps {
  onSubmit: (teacher: Omit<Teacher, 'id'>) => void;
  editingTeacher?: Teacher | null;
  onCancel?: () => void;
}

const TeacherForm: React.FC<TeacherFormProps> = ({ onSubmit, editingTeacher, onCancel }) => {
  const [formData, setFormData] = useState<TeacherFormData>({
    name: editingTeacher?.name || '',
    age: editingTeacher?.age?.toString() || '',
    address: editingTeacher?.address || '',
    salary: editingTeacher?.salary?.toString() || '',
    phone: editingTeacher?.phone || '',
  });

  const handleInputChange = useCallback((field: keyof TeacherFormData) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.age || !formData.address.trim() || 
        !formData.salary || !formData.phone.trim()) {
      alert('Iltimos, barcha maydonlarni to\'ldiring!');
      return;
    }

    const teacher = {
      name: formData.name.trim(),
      age: parseInt(formData.age),
      address: formData.address.trim(),
      salary: parseFloat(formData.salary),
      phone: formData.phone.trim(),
    };

    onSubmit(teacher);
    
    if (!editingTeacher) {
      setFormData({
        name: '',
        age: '',
        address: '',
        salary: '',
        phone: '',
      });
    }
  }, [formData, onSubmit, editingTeacher]);

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
    }
    setFormData({
      name: '',
      age: '',
      address: '',
      salary: '',
      phone: '',
    });
  }, [onCancel]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {editingTeacher ? 'O\'qituvchini tahrirlash' : 'Yangi o\'qituvchi qo\'shish'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Ism
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange('name')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="O'qituvchi ismini kiriting"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Yosh
          </label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleInputChange('age')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Yoshni kiriting"
            min="18"
            max="80"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Manzil
          </label>
          <textarea
            id="address"
            value={formData.address}
            onChange={handleInputChange('address')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Manzilni kiriting"
            rows={3}
          />
        </div>

        <div>
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
            Maosh
          </label>
          <input
            type="number"
            id="salary"
            value={formData.salary}
            onChange={handleInputChange('salary')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Maoshni kiriting"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+998 90 123 45 67"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            {editingTeacher ? 'Yangilash' : 'Qo\'shish'}
          </button>
          
          {(editingTeacher || onCancel) && (
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Bekor qilish
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;