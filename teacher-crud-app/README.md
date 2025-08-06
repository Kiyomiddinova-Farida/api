# O'qituvchilar boshqaruvi / Teacher CRUD Application

React TypeScript + Vite + Tailwind CSS bilan yaratilgan o'qituvchilar ma'lumotlarini boshqarish tizimi.

## Loyiha xususiyatlari

- **React 18** + **TypeScript** + **Vite** 
- **Tailwind CSS** bilan zamonaviy dizayn
- **React Hooks** optimizatsiyasi:
  - `useCallback` - funksiyalarni optimallashtirish uchun
  - `useMemo` - obyektlar va hisob-kitoblarni optimallashtirish uchun
  - `React.memo` - komponentlarni optimallashtirish uchun

## Komponentlar

### 1. **TeacherForm** - Forma komponenti
- Yangi o'qituvchi qo'shish
- Mavjud o'qituvchini tahrirlash
- Form validatsiyasi
- `useCallback` bilan optimizatsiya

### 2. **TeacherList** - Ro'yxat komponenti
- O'qituvchilar ro'yxatini ko'rsatish
- Qidiruv funksiyasi
- Statistika (jami maosh, o'rtacha yosh)
- `useMemo` bilan optimizatsiya

### 3. **SearchBar** - Qidiruv komponenti
- Ism, manzil va telefon bo'yicha qidiruv
- Real-time qidiruv

## O'qituvchi ma'lumotlari

Har bir o'qituvchi quyidagi ma'lumotlarga ega:

- **Ism** (name) - matn
- **Yosh** (age) - raqam
- **Manzil** (address) - matn
- **Maosh** (salary) - raqam
- **Telefon** (phone) - matn

## CRUD operatsiyalar

- ✅ **CREATE** - Yangi o'qituvchi qo'shish
- ✅ **READ** - O'qituvchilar ro'yxatini ko'rish
- ✅ **UPDATE** - O'qituvchi ma'lumotlarini tahrirlash  
- ✅ **DELETE** - O'qituvchini o'chirish

## Ishga tushirish

### 1. Dependencies o'rnatish
```bash
npm install
```

### 2. Development serverini ishga tushirish
```bash
npm run dev
```

### 3. Production build
```bash
npm run build
```

### 4. Build preview
```bash
npm run preview
```

## Loyiha tuzilishi

```
src/
├── components/
│   ├── TeacherForm.tsx      # Forma komponenti
│   ├── TeacherList.tsx      # Ro'yxat komponenti
│   └── SearchBar.tsx        # Qidiruv komponenti
├── types/
│   └── Teacher.ts           # TypeScript interfeyslari
├── App.tsx                  # Asosiy komponent
├── main.tsx                 # Entry point
└── index.css                # Tailwind CSS
```

## Texnologiyalar

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - CSS framework
- **React Hooks** - State management va optimizatsiya

## Optimizatsiya xususiyatlari

### useCallback da qo'llaniladigan funksiyalar:
- Form input change handlers
- CRUD operation handlers
- Event handlers

### useMemo da qo'llaniladigan qiymatlar:
- Filtrlangan o'qituvchilar ro'yxati
- Saralangan ro'yxat
- Jami maosh hisob-kitobi
- O'rtacha yosh hisob-kitobi

### React.memo:
- TeacherCard komponenti unnecessary re-renderlarni oldini olish uchun

## UI xususiyatlari

- **Responsive design** - mobil va desktop uchun moslashgan
- **Zamonaviy dizayn** - Tailwind CSS bilan
- **Interaktiv elementlar** - hover effektlari va animatsiyalar
- **User-friendly** - tushunarli interfeys

Bu loyiha React optimizatsiya usullarini o'rganish va amalda qo'llash uchun yaratilgan.
