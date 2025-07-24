# User CRUD Application

React Vite ilovasi Tailwind CSS, React Hooks, useState va useRef dan foydalanib yaratilgan. Bu loyihada foydalanuvchilarni qo'shish, tahrirlash va o'chirish (CRUD) imkoniyatlari mavjud.

## Texnologiyalar

- **React 18** - Asosiy frontend framework
- **Vite** - Tez ishlaydigan build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - useState, useEffect, useRef

## Xususiyatlar

### ✅ Amalga oshirilgan funksiyalar:
- **Create (Qo'shish)** - Yangi foydalanuvchi qo'shish
- **Read (Ko'rish)** - Foydalanuvchilar ro'yxatini ko'rish
- **Update (Tahrirlash)** - Mavjud foydalanuvchi ma'lumotlarini tahrirlash
- **Delete (O'chirish)** - Foydalanuvchini o'chirish

### 🎨 Interfeys:
- **Chap tomon** - Signup Form (Ro'yxatdan o'tish formasi)
- **O'ng tomon** - Users Table (Foydalanuvchilar jadvali)
- **Responsive dizayn** - Mobil va desktop qurilmalar uchun moslashgan

### 📝 Form maydonlari:
- **Full Name** - To'liq ism (majburiy)
- **Email Address** - Email manzil (majburiy)
- **Password** - Parol (ko'rsatish/yashirish funksiyasi bilan)
- **Birth Date** - Tug'ilgan sana
- **Gender** - Jins (tanlash ro'yxati)

### 📊 Jadval funksiyalari:
- **Rank** - Avtomatik reyting
- **Sorting** - Ustunlar bo'yicha saralash
- **Team badges** - Jamoa belgilari rangli dizayn bilan
- **Action buttons** - Tahrirlash va o'chirish tugmalari

## O'rnatish va ishga tushirish

### 1. Loyihani yuklab olish
```bash
cd user-crud-app
```

### 2. Paketlarni o'rnatish
```bash
npm install
```

### 3. Ishga tushirish
```bash
npm run dev
```

Loyiha `http://localhost:5173` manzilida ishga tushadi.

### 4. Build qilish (production uchun)
```bash
npm run build
```

## Foydalanish

### Yangi foydalanuvchi qo'shish:
1. Chap tomondagi formani to'ldiring
2. "Submit" tugmasini bosing
3. Foydalanuvchi avtomatik jadvalga qo'shiladi

### Foydalanuvchini tahrirlash:
1. Jadvaldagi "Edit" tugmasini bosing
2. Form tahrirlash rejimiga o'tadi
3. Ma'lumotlarni o'zgartiring va "Update" tugmasini bosing

### Foydalanuvchini o'chirish:
1. Jadvaldagi "Delete" tugmasini bosing
2. Tasdiqlash oynasida "OK" ni bosing

### Saralash:
- Ustun sarlavhalarini bosib saralash yo'nalishini o'zgartirishingiz mumkin
- Standart holatda "Points" bo'yicha kamayish tartibida saralangan

## React Hooks foydalanilishi

### useState:
- `formData` - form ma'lumotlarini saqlash
- `users` - foydalanuvchilar ro'yxati
- `editingUser` - tahrirlash rejimi
- `sortField` va `sortDirection` - saralash holati

### useRef:
- `nameInputRef` - form yuklanganda name inputiga focus qo'yish
- `nextIdRef` - yangi foydalanuvchilar uchun ID yaratish

### useEffect:
- Tahrirlash rejimida formani to'ldirish
- Form yuklanganda input elementiga focus qo'yish

## Komponentlar tuzilishi

```
src/
├── components/
│   ├── UserForm.jsx      # Foydalanuvchi formasi
│   └── UserTable.jsx     # Foydalanuvchilar jadvali
├── App.jsx               # Asosiy komponent
├── index.css             # Tailwind CSS
└── main.jsx              # Kirish nuqtasi
```

## Loyiha maqsadi

Bu loyiha quyidagi mavzularni o'rganish uchun yaratilgan:
- React functional components
- React Hooks (useState, useEffect, useRef)
- CRUD operatsiyalari
- Tailwind CSS bilan dizayn
- Vite build tool
- Form validation
- Component communication

## Kelajakda qo'shilishi mumkin:

- [ ] LocalStorage orqali ma'lumotlarni saqlash
- [ ] Qidiruv funksiyasi
- [ ] Pagination
- [ ] Form validation improvements
- [ ] API integration
- [ ] User avatars
- [ ] Export to CSV/JSON

---

**Muallif:** AI Assistant  
**Sana:** 2025  
**Versiya:** 1.0.0
