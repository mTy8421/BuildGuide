# AccountMobile — Android Setup & Build Guide

เอกสารคู่มือการติดตั้ง สภาพแวดล้อม และขั้นตอนการ Build แอปพลิเคชัน Android สำหรับโปรเจกต์ **AccountMobile** ในรูปแบบหน้าเว็บ Interactive Documentation

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
Tools/
├── index.html     # โครงสร้างหน้าเว็บและเนื้อหาเอกสารคู่มือทั้งหมด
├── style.css      # สไตล์การตกแต่ง (Responsive, Dark/Light Theme, Layout)
├── script.js      # ฟังก์ชันการทำงาน Interactive ต่าง ๆ
└── README.md      # เอกสารแนะนำโปรเจกต์
```

---

## ✨ ฟีเจอร์ของหน้าเว็บ (Key Features)

- 🌗 **รองรับ Dark / Light Mode:** สลับโหมดมืดและโหมดสว่างได้ พร้อมจำค่าที่ผู้ใช้เลือกลงใน `localStorage` และรองรับ System Color Scheme
- 📋 **คัดลอกโค้ดได้ในคลิกเดียว (Copy to Clipboard):** มีปุ่ม "คัดลอก" บนทุก Code Block พร้อมแสดงสถานะยืนยันการคัดลอก
- 📱 **รองรับทุกขนาดหน้าจอ (Responsive Design):** ปรับการแสดงผลอัตโนมัติตามหน้าจอ Desktop, Tablet และ Mobile พร้อมแถบเมนูด้านข้าง (Sidebar Drawer) บนมือถือ
- 🧭 **ระบบนำทางและ Scrollspy:** ไฮไลต์หัวข้อในสารบัญตามตำแหน่งการอ่านหน้าจอแบบ Real-time
- ⬆️ **ปุ่ม Back to Top:** ปุ่มเลื่อนกลับขึ้นด้านบนแบบ Smooth Scroll ปรากฏอัตโนมัติเมื่อเลื่อนลงมา

---

## 📖 สารบัญเนื้อหาในคู่มือ

1. **ความต้องการของระบบ (Prerequisites)** — ข้อมูลเวอร์ชัน Node.js, OpenJDK 17 LTS, Android Studio, SDK, NDK และ CMake
2. **การตั้งค่า Environment Variables** — การตั้งค่า `JAVA_HOME`, `ANDROID_HOME` และ `Path` บน Windows
3. **การตั้งค่าไฟล์ Config สำหรับ Android** — รายละเอียดสำหรับ `android/local.properties` และ `android/gradle.properties`
4. **การติดตั้ง Dependencies** — การใช้งาน `npm install` และข้อควรระวังสำหรับแพ็กเกจ Expo
5. **การรันแอปพลิเคชัน (Development Mode)** — การเปิด Metro Dev Server และคำสั่งรันบน Emulator / เครื่องจริง
6. **การ Build ไฟล์ APK ด้วย Gradle (`gradlew`)** — เปรียบเทียบ Debug APK vs Release APK พร้อมคำสั่ง Assemble และติดตั้งผ่าน `adb`
7. **การตรวจสอบคุณภาพโค้ด (Lint & Typecheck)** — คำสั่งรัน TypeScript และ ESLint
8. **การแก้ไขปัญหาที่พบบ่อย (Troubleshooting)** — รวบรวม Error ที่พบบ่อย เช่น Java Version mismatch, SDK location not found, Gradle Daemon ค้าง

---

## 🚀 วิธีการเปิดใช้งาน (How to Use)

เปิดใช้งานได้ทันทีโดยไม่ต้องติดตั้ง runtime หรือ dependency เพิ่มเติม:

### วิธีที่ 1: เปิดผ่าน Web Browser โดยตรง
- ดับเบิลคลิกที่ไฟล์ `index.html` หรือคลิกขวาแล้วเลือกเปิดด้วยเบราว์เซอร์ที่ต้องการ (Google Chrome, Microsoft Edge, Firefox, Safari)

### วิธีที่ 2: รันผ่าน Local Web Server (แนะนำ)
หากใช้งานบนโปรแกรม Editor เช่น Visual Studio Code สามารถเปิดผ่าน Live Server หรือรันคำสั่ง:

```bash
# ใช้งานผ่าน npx serve
npx serve .

# หรือใช้งานผ่าน Python HTTP Server
python -m http.server 8000
```
จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:8000` (หรือพอร์ตที่เครื่องมือกำหนด)
