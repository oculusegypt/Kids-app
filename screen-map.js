function screenZone(screen, label, x, y, width, height) {
  return { screen, label, x, y, width, height };
}

function actionZone(action, label, x, y, width, height) {
  return { action, label, x, y, width, height };
}

const screenReferenceMap = {
  home: {
    image: "1.png",
    title: "الرئيسية",
    section: "الرئيسية",
    parent: null,
    hotspots: [
      screenZone("profile", "الملف الشخصي", 0.04, 0.02, 0.18, 0.09),
      screenZone("math", "حصتي القادمة", 0.04, 0.28, 0.92, 0.14),
      screenZone("books", "كتبي", 0.04, 0.43, 0.44, 0.15),
      screenZone("games", "أنشطة التعلّم", 0.52, 0.43, 0.44, 0.15),
      screenZone("achievements", "إنجازاتي", 0.06, 0.75, 0.88, 0.13),
    ],
  },
  books: {
    image: "2.png",
    title: "كتبي",
    section: "المكتبة",
    parent: "home",
    hotspots: [
      screenZone("reader", "افتحي كتابًا للقراءة", 0.05, 0.18, 0.9, 0.67),
      screenZone("letterBook", "كتاب الحروف", 0.05, 0.18, 0.43, 0.3),
      screenZone("stories", "الحكايات", 0.52, 0.18, 0.43, 0.3),
    ],
  },
  reader: {
    image: "3.png",
    title: "قارئ الكتاب",
    section: "المكتبة",
    parent: "books",
    hotspots: [
      screenZone("letterBook", "كتاب الحروف", 0.05, 0.18, 0.9, 0.67),
    ],
  },
  math: {
    image: "4.png",
    title: "الرياضيات",
    section: "أنشطتي",
    parent: "home",
    hotspots: [
      screenZone("mathGames", "ألعاب الرياضيات", 0.04, 0.27, 0.92, 0.61),
      screenZone("mathCatalog", "استكشفي فروع الرياضيات", 0.05, 0.48, 0.9, 0.32),
    ],
  },
  letterBook: {
    image: "6.png",
    title: "كتاب الحروف",
    section: "كتبي",
    parent: "books",
    hotspots: [
      screenZone("reader", "ابدئي قراءة الحروف", 0.05, 0.2, 0.9, 0.62),
      actionZone("live-letters", "ابدئي نشاط الحروف التفاعلي", 0.15, 0.7, 0.7, 0.12),
    ],
  },
  stories: {
    image: "7.png",
    title: "الحكايات",
    section: "كتبي",
    parent: "books",
    hotspots: [
      screenZone("reader", "اختاري حكاية", 0.04, 0.27, 0.92, 0.57),
    ],
  },
  profile: {
    image: "8.png",
    title: "الملف الشخصي",
    section: "الملف الشخصي",
    parent: "home",
    hotspots: [
      screenZone("reports", "تقارير التقدم", 0.06, 0.34, 0.88, 0.18),
    ],
  },
  achievements: {
    image: "9.png",
    title: "إنجازاتي",
    section: "إنجازاتي",
    parent: "home",
    hotspots: [
      screenZone("reports", "عرض تقارير التقدم", 0.05, 0.18, 0.9, 0.17),
    ],
  },
  games: {
    image: "10.png",
    title: "الألعاب التعليمية",
    section: "أنشطتي",
    parent: "home",
    hotspots: [
      screenZone("language", "ألعاب اللغة العربية", 0.04, 0.56, 0.44, 0.15),
      screenZone("mathGames", "ألعاب الرياضيات", 0.52, 0.56, 0.44, 0.15),
      screenZone("puzzles", "ألعاب الألغاز", 0.04, 0.72, 0.44, 0.15),
      screenZone("puzzles", "ألعاب المنطق", 0.52, 0.72, 0.44, 0.15),
    ],
  },
  words: {
    image: "11-.png",
    title: "الكلمات",
    section: "اللغة العربية",
    parent: "language",
    hotspots: [
      actionZone("live-letters", "ابدئي التمرين", 0.05, 0.2, 0.9, 0.66),
    ],
  },
  reports: {
    image: "11.png",
    title: "تقارير التقدم",
    section: "إنجازاتي",
    parent: "home",
    hotspots: [],
  },
  coloringIntro: {
    image: "12.png",
    title: "التلوين",
    section: "أنشطتي",
    parent: "games",
    hotspots: [
      screenZone("coloringCanvas", "ابدئي التلوين", 0.12, 0.77, 0.76, 0.12),
    ],
  },
  coloringCanvas: {
    image: "13.png",
    title: "لوحة التلوين",
    section: "التلوين",
    parent: "coloringIntro",
    showTabs: false,
    hotspots: [
      actionZone("live-coloring", "افتحي لوحة الرسم التفاعلية", 0.04, 0.14, 0.92, 0.72),
    ],
  },
  numbers: {
    image: "14.png",
    title: "الأرقام",
    section: "الرياضيات",
    parent: "mathGames",
    showTabs: false,
    hotspots: [
      actionZone("live-counting", "ابدئي نشاط الأرقام", 0.06, 0.15, 0.88, 0.72),
    ],
  },
  counting: {
    image: "15.png",
    title: "العدّ",
    section: "الرياضيات",
    parent: "mathGames",
    hotspots: [
      actionZone("live-counting", "ابدئي العدّ التفاعلي", 0.08, 0.2, 0.84, 0.65),
    ],
  },
  patternExercise: {
    image: "16-.png",
    title: "نشاط الأنماط",
    section: "الأنماط",
    parent: "patterns",
    showTabs: false,
    hotspots: [
      actionZone("live-patterns", "ابدئي حلّ النمط", 0.06, 0.14, 0.88, 0.74),
    ],
  },
  patterns: {
    image: "16.png",
    title: "الأنماط",
    section: "الرياضيات",
    parent: "mathGames",
    hotspots: [
      screenZone("patternExercise", "أكملي النمط", 0.05, 0.25, 0.9, 0.58),
      actionZone("live-patterns", "ابدئي نشاط الأنماط", 0.1, 0.7, 0.8, 0.13),
    ],
  },
  language: {
    image: "17.png",
    title: "ألعاب اللغة العربية",
    section: "أنشطتي",
    parent: "games",
    hotspots: [
      screenZone("words", "تعلّم الكلمات", 0.52, 0.48, 0.44, 0.13),
      screenZone("letterBook", "مطابقة الحروف وترتيبها", 0.04, 0.48, 0.44, 0.13),
      screenZone("letterBook", "مسابقة الحروف", 0.52, 0.64, 0.44, 0.16),
      actionZone("live-letters", "تدرّبي على الحروف", 0.04, 0.64, 0.44, 0.16),
    ],
  },
  mathGames: {
    image: "18.png",
    title: "ألعاب الحساب",
    section: "الرياضيات",
    parent: "games",
    hotspots: [
      screenZone("numbers", "الأرقام", 0.52, 0.48, 0.44, 0.13),
      screenZone("counting", "العدّ", 0.04, 0.48, 0.44, 0.13),
      screenZone("patterns", "الأنماط والأشكال", 0.52, 0.62, 0.44, 0.14),
      screenZone("mathCatalog", "فروع الرياضيات", 0.04, 0.62, 0.44, 0.14),
      screenZone("mathExercise", "مسائل حسابية", 0.52, 0.77, 0.44, 0.1),
      actionZone("live-counting", "ابدئي لعبة حسابية", 0.04, 0.77, 0.44, 0.1),
    ],
  },
  mathExercise: {
    image: "19.png",
    title: "نشاط حسابي",
    section: "الرياضيات",
    parent: "mathGames",
    showTabs: false,
    hotspots: [
      actionZone("live-counting", "ابدئي التمرين الحسابي", 0.06, 0.16, 0.88, 0.7),
    ],
  },
  puzzles: {
    image: "20.png",
    title: "ألعاب الألغاز",
    section: "أنشطتي",
    parent: "games",
    hotspots: [
      actionZone("live-puzzles", "ساعدي الفأر للوصول إلى الجبن", 0.52, 0.5, 0.44, 0.13),
      screenZone("coloringIntro", "أكملي الصورة", 0.04, 0.5, 0.44, 0.13),
      actionZone("live-puzzles", "أوجدي المختلف", 0.52, 0.66, 0.44, 0.15),
      screenZone("shapePatterns", "أوجدي الشكل المناسب", 0.04, 0.66, 0.44, 0.15),
    ],
  },
  shapePatterns: {
    image: "261d828d-abbc-4e68-ad84-4e6b8c6c172c.png",
    title: "الأنماط والأشكال",
    section: "الرياضيات",
    parent: "mathGames",
    hotspots: [
      screenZone("patterns", "الأنماط", 0.52, 0.46, 0.44, 0.22),
      screenZone("patterns", "الأشكال", 0.04, 0.46, 0.44, 0.22),
    ],
  },
  mathCatalog: {
    image: "ccd9351c-62f0-4513-a366-42ae305a6ea2.png",
    title: "أنشطة الرياضيات",
    section: "الرياضيات",
    parent: "math",
    hotspots: [
      screenZone("mathGames", "استكشفي ألعاب الحساب", 0.04, 0.2, 0.92, 0.68),
    ],
  },
};
