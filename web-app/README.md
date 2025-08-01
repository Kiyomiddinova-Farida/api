# JSONPlaceholder API Web App

Bu loyiha React, Vite va Tailwind CSS yordamida yaratilgan zamonaviy web ilovasi bo'lib, JSONPlaceholder API dan ma'lumotlarni olib ko'rsatadi.

## 🚀 Xususiyatlar

- **React 18** va **Vite** asosida tez va zamonaviy development
- **Tailwind CSS** bilan chiroyli va responsive UI
- **Custom useFetch Hook** orqali API bilan ishlash
- **React Router** bilan sahifalar orasida navigatsiya
- **4 ta asosiy sahifa**:
  - **Home** - Umumiy statistikalar va app haqida ma'lumot
  - **Users** - Foydalanuvchilar ma'lumotlari (Card UI)
  - **Posts** - Postlar ro'yxati (Card UI)
  - **Todos** - Vazifalar jadvali (Table UI)

## 📁 Folder Strukturasi

```
src/
├── components/     # Umumiy komponentlar
├── hooks/         # Custom hooklar (useFetch)
├── layout/        # Layout komponentlari
├── pages/         # Sahifa komponentlari
│   ├── Home.jsx
│   ├── Users.jsx
│   ├── Posts.jsx
│   └── Todos.jsx
└── App.jsx        # Asosiy App komponenti
```

## 🛠️ Texnologiyalar

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com)
- **State Management**: React Hooks (useState, useEffect)

## 📋 API Endpoints

Loyiha quyidagi JSONPlaceholder API endpointlarini ishlatadi:

- `GET /users` - Foydalanuvchilar ro'yxati
- `GET /posts` - Postlar ro'yxati
- `GET /todos` - Vazifalar ro'yxati

## 🚀 Ishga tushirish

### Talablar
- Node.js (16+ versiya)
- npm yoki yarn

### O'rnatish

1. Loyihani klonlash:
```bash
git clone <repository-url>
cd web-app
```

2. Dependencies o'rnatish:
```bash
npm install
```

3. Loyihani ishga tushirish:
```bash
npm run dev
```

4. Brauzerda ochish:
```
http://localhost:5173
```

## 📱 Sahifalar

### 🏠 Home
- Umumiy statistikalar
- API haqida ma'lumot
- Bo'limlar tavsifi

### 👥 Users
- Foydalanuvchilar ma'lumotlari Card formatida
- Kontakt ma'lumotlari
- Kompaniya ma'lumotlari

### 📝 Posts
- Postlar Card formatida
- Muallif ma'lumotlari
- Like, Comment, Share funksiyalari

### ✅ Todos
- Vazifalar Table formatida
- Filtrlash imkoniyati (Barchasi, Bajarilgan, Kutilmoqda)
- Bajarilish statistikasi
- Progress bar

## 🎨 UI/UX Xususiyatlari

- **Responsive Design** - Barcha qurilmalarda ishlaydi
- **Loading States** - Ma'lumot yuklanayotganda loading animation
- **Error Handling** - Xatoliklar uchun user-friendly xabarlar
- **Interactive Elements** - Hover effektlari va transition animatsiyalar
- **Clean Design** - Zamonaviy va minimalist dizayn

## 🔧 Custom Hook

### useFetch
```javascript
const { data, loading, error } = useFetch(url);
```

- **data**: API dan kelgan ma'lumotlar
- **loading**: Yuklanish holati
- **error**: Xatolik xabari

## 📊 Loyiha Statistikasi

- ✅ 4 ta sahifa
- ✅ 1 ta custom hook
- ✅ 1 ta layout komponenti
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states

## 📞 Aloqa

Agar loyiha haqida savollaringiz bo'lsa, GitHub orqali murojaat qilishingiz mumkin.

---

**JSONPlaceholder API**: https://jsonplaceholder.typicode.com
