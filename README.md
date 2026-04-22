# Noimul Islam Jishan — Portfolio

React + Vite দিয়ে বানানো পোর্টফোলিও।

## Local এ চালানোর নিয়ম

```bash
# ১. ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# ২. Dev server চালু করুন
npm run dev

# ৩. Build করুন (Vercel deploy এর আগে)
npm run build
```

## Vercel এ Deploy করার নিয়ম

১. [vercel.com](https://vercel.com) এ যান
২. GitHub account দিয়ে লগইন করুন
৩. `New Project` ক্লিক করুন
৪. এই রিপোজিটরি import করুন
৫. Framework: **Vite** সিলেক্ট করুন
৬. `Deploy` ক্লিক করুন — ব্যস!

## ফাইল স্ট্রাকচার

```
jishan-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── data.js        ← সব তথ্য এখানে আছে
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## তথ্য আপডেট করতে চাইলে

শুধু `src/data.js` ফাইল এডিট করুন — নাম, স্কিল, প্রজেক্ট, অভিজ্ঞতা সব ওখানে আছে।
