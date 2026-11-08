const ASSET_DIR = "./Untitled%20(5)/";
const app = document.querySelector("#app");
const toast = document.querySelector("#toast");

const letters = [
  ["أ", "أسد", "01 — أ — أسد.png"],
  ["ب", "بطة", "02 — ب — بطة.png"],
  ["ت", "تفاحة", "03 — ت — تفاحة.png"],
  ["ث", "ثعلب", "04 — ث — ثعلب.png"],
  ["ج", "جمل", "05 — ج — جمل.png"],
  ["ح", "حصان", "06 — ح — حصان.png"],
  ["خ", "خروف", "07 — خ — خروف.png"],
  ["د", "دب", "08 — د — دب.png"],
  ["ذ", "ذرة", "09 — ذ — ذرة.png"],
  ["ر", "رمان", "10 — ر — رمان.png"],
  ["ز", "زرافة", "11 — ز — زرافة.png"],
  ["س", "سمكة", "12 — س — سمكة.png"],
  ["ش", "شمس", "13 — ش — شمس.png"],
  ["ص", "صقر", "14 — ص — صقر.png"],
  ["ض", "ضفدع", "15 — ض — ضفدع.png"],
  ["ط", "طائرة", "16 — ط — طائرة.png"],
  ["ظ", "ظرف", "17 — ظ — ظرف.png"],
  ["ع", "عنب", "18 — ع — عنب.png"],
  ["غ", "غزال", "19 — غ — غزال.png"],
  ["ف", "فيل", "20 — ف — فيل.png"],
  ["ق", "قمر", "21 — ق — قمر.png"],
  ["ك", "كتاب", "22 — ك — كتاب.png"],
  ["ل", "ليمون", "23 — ل — ليمون.png"],
  ["م", "موز", "24 — م — موز.png"],
  ["ن", "نحلة", "25 — ن — نحلة.png"],
  ["ه", "هدهد", "26 — ه — هدهد.png"],
  ["و", "وردة", "27 — و — وردة.png"],
  ["ي", "يمامة", "28 — ي — يمامة.png"],
];

const activities = [
  { id: "letters", title: "الحروف", description: "نتعرّف على الحروف العربية", icon: "Illustrated letter and subject.png", count: "٢٨ حرفًا", category: "اللغة" },
  { id: "counting", title: "العدّ والأرقام", description: "نعدّ الأشياء ونتعلّم الأرقام", icon: "Counting group.png", count: "٨ أنشطة", category: "الرياضيات" },
  { id: "patterns", title: "أكمل النمط", description: "اكتشف ما يأتي بعد ذلك", icon: "Pattern exercise.png", count: "٦ أنشطة", category: "التفكير" },
  { id: "shapes", title: "الأشكال والألوان", description: "تعرّف على الأشكال حولك", icon: "Color palette.png", count: "٥ أنشطة", category: "الإبداع" },
  { id: "stories", title: "حكايات سارة", description: "قصص قصيرة وممتعة", icon: "Story scene.png", count: "٤ حكايات", category: "القصص" },
  { id: "puzzles", title: "الألغاز", description: "فكّر واكتشف الحل", icon: "Puzzle activity.png", count: "٧ ألغاز", category: "التفكير" },
  { id: "reading", title: "اقرأ واستمع", description: "استمع للكلمات وردّدها", icon: "Reading prompt.png", count: "١٠ كلمات", category: "اللغة" },
  { id: "coloring", title: "مرسم الألوان", description: "لوّن وارسم بطريقتك", icon: "Paintbrush illustration.png", count: "ابدأ الرسم", category: "الإبداع" },
];

const quizSets = {
  letters: [
    { prompt: "أيّ صورة تبدأ بحرف الألف؟", answer: "أ", choices: ["ب", "أ", "ت"], image: "01 — أ — أسد.png", word: "أسد" },
    { prompt: "اختر الحرف الذي تبدأ به كلمة بطة", answer: "ب", choices: ["ب", "ج", "م"], image: "02 — ب — بطة.png", word: "بطة" },
    { prompt: "أيّ حرف تبدأ به كلمة تفاحة؟", answer: "ت", choices: ["ث", "ت", "د"], image: "03 — ت — تفاحة.png", word: "تفاحة" },
    { prompt: "اختر الحرف الذي تبدأ به كلمة حصان", answer: "ح", choices: ["خ", "ح", "ج"], image: "06 — ح — حصان.png", word: "حصان" },
    { prompt: "أيّ حرف نسمعه في بداية كلمة سمكة؟", answer: "س", choices: ["ش", "س", "ص"], image: "12 — س — سمكة.png", word: "سمكة" },
  ],
  counting: [
    { prompt: "كم تفاحة في الصورة؟", answer: "٣", choices: ["٢", "٣", "٤"], image: "Counting group.png", word: "ثلاث تفاحات" },
    { prompt: "أيّ رقم يأتي بعد الرقم ٤؟", answer: "٥", choices: ["٣", "٥", "٦"], image: "Number card.png", word: "الأرقام" },
    { prompt: "اختر المجموعة الأكبر", answer: "٥", choices: ["٢", "٥", "٣"], image: "Counting group-1.png", word: "مجموعة" },
  ],
  patterns: [
    { prompt: "ما الشكل الذي يُكمل النمط؟", answer: "قلب", choices: ["قلب", "نجمة", "دائرة"], image: "Girl demonstrating a heart pattern.png", word: "النمط" },
    { prompt: "ما الذي يأتي بعد الدائرة؟", answer: "مربع", choices: ["نجمة", "مربع", "قلب"], image: "Pattern exercise.png", word: "أشكال" },
  ],
  shapes: [
    { prompt: "ما لون الشمس؟", answer: "أصفر", choices: ["أزرق", "أصفر", "أخضر"], image: "13 — ش — شمس.png", word: "الشمس" },
    { prompt: "اختر الشكل الدائري", answer: "دائرة", choices: ["مربع", "مثلث", "دائرة"], image: "Color palette.png", word: "الأشكال" },
  ],
  stories: [
    { prompt: "أيّ صورة تبدأ بحرف الجيم؟", answer: "جمل", choices: ["جمل", "فيل", "دب"], image: "05 — ج — جمل.png", word: "جمل" },
    { prompt: "أيّ حيوان له رقبة طويلة؟", answer: "زرافة", choices: ["زرافة", "قطة", "سمكة"], image: "11 — ز — زرافة.png", word: "زرافة" },
  ],
  puzzles: [
    { prompt: "أيّ حيوان يعيش في الماء؟", answer: "سمكة", choices: ["أسد", "سمكة", "زرافة"], image: "12 — س — سمكة.png", word: "سمكة" },
    { prompt: "أيّ صورة مختلفة عن الفواكه؟", answer: "كتاب", choices: ["موز", "عنب", "كتاب"], image: "22 — ك — كتاب.png", word: "كتاب" },
  ],
  reading: [
    { prompt: "استمع للكلمة، ثم اختر حرفها الأول", answer: "ف", choices: ["ف", "ق", "م"], image: "20 — ف — فيل.png", word: "فيل" },
    { prompt: "ما أول حرف في كلمة قمر؟", answer: "ق", choices: ["ك", "ل", "ق"], image: "21 — ق — قمر.png", word: "قمر" },
  ],
};

const filters = ["الكل", "اللغة", "الرياضيات", "التفكير", "الإبداع", "القصص"];
const paletteColors = ["#e76f51", "#f2b544", "#6ea77a", "#63a6b1", "#8776b5", "#e68ba4", "#293f52", "#d9c9a4"];
const state = {
  screen: "home",
  referenceScreen: "home",
  useReferenceScreens: true,
  category: "letters",
  questionIndex: 0,
  answered: false,
  correctInRound: 0,
  filter: "الكل",
  toastTimer: null,
};

function asset(name) {
  return ASSET_DIR + encodeURIComponent(name);
}

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("sara-learning-progress") || "{}");
    return {
      stars: Number(saved.stars) || 0,
      completed: Number(saved.completed) || 0,
      currentStreak: Number(saved.currentStreak) || 0,
      sound: saved.sound !== false,
      lastCategory: typeof saved.lastCategory === "string" ? saved.lastCategory : "",
    };
  } catch (error) {
    console.error("Could not read saved learning progress.", error);
    return { stars: 0, completed: 0, currentStreak: 0, sound: true, lastCategory: "" };
  }
}

const progress = readProgress();

function saveProgress() {
  try {
    localStorage.setItem("sara-learning-progress", JSON.stringify(progress));
  } catch (error) {
    console.error("Could not save learning progress.", error);
    showToast("تعذّر حفظ التقدّم على هذا الجهاز");
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function updateNavigation() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    const isActive = item.dataset.screen === state.screen ||
      (state.screen === "activity" && item.dataset.screen === "library");
    item.classList.toggle("is-active", isActive);
    if (isActive) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function setScreen(screen) {
  state.useReferenceScreens = false;
  document.body.classList.remove("reference-mode");
  state.screen = screen;
  updateNavigation();
  render();
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setReferenceScreen(screen, updateHistory = true) {
  if (!Object.hasOwn(screenReferenceMap, screen)) {
    console.error(`Unknown reference screen: ${screen}`);
    return;
  }
  state.useReferenceScreens = true;
  state.referenceScreen = screen;
  document.body.classList.add("reference-mode");
  updateNavigation();
  render();
  if (updateHistory) history.pushState({ screen }, "", `#${screen}`);
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHeading(title, subtitle, action = "") {
  return `<div class="page-heading">
    <div><p class="eyebrow">رحلة صغيرة، إنجاز كبير</p><h1>${title}</h1>
    ${subtitle ? `<p class="subheading">${subtitle}</p>` : ""}</div>${action}
  </div>`;
}

function categoryCards() {
  const categories = [
    { id: "letters", title: "عالم الحروف", caption: "نتعلّم حرفًا جديدًا", image: "Illustrated letter and subject.png" },
    { id: "counting", title: "الأرقام والعدّ", caption: "نعدّ ونكتشف", image: "Girl counting with her fingers.png" },
    { id: "patterns", title: "فكّر واكتشف", caption: "أنماط وألغاز ممتعة", image: "Pattern exercise.png" },
    { id: "coloring", title: "مرسم سارة", caption: "وقت الفن والألوان", image: "Paintbrush illustration.png" },
  ];
  return categories.map((item) => `<button class="category-card" type="button" data-action="category" data-category="${item.id}">
    <img src="${asset(item.image)}" alt="" loading="lazy" />
    <strong>${item.title}</strong><small>${item.caption}</small>
  </button>`).join("");
}

function renderHome() {
  const learned = Math.min(28, progress.completed);
  return `${`<section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">أهلًا يا سارة! ✨</p>
        <h1>مستعدة لمغامرة<br />جديدة اليوم؟</h1>
        <p>كل يوم فرصة نتعلّم فيها شيئًا جديدًا، خطوة صغيرة تصنع فرقًا كبيرًا.</p>
        <button class="button gold" type="button" data-action="start">هيا نبدأ <span aria-hidden="true">←</span></button>
      </div>
      <img class="hero-art" src="${asset("Learning character.png")}" alt="سارة مستعدة للتعلّم" />
    </section>
    <section class="home-stats" aria-label="تقدّمك">
      <div class="stat-card"><span class="stat-icon" aria-hidden="true">⭐</span><div><strong>${progress.stars}</strong><small>نجمة جمعتِها</small></div></div>
      <div class="stat-card"><span class="stat-icon" aria-hidden="true">📚</span><div><strong>${learned}</strong><small>نشاطًا مكتملًا</small></div></div>
      <div class="stat-card"><span class="stat-icon" aria-hidden="true">🔥</span><div><strong>${progress.currentStreak}</strong><small>أيام من التعلّم</small></div></div>
    </section>
    <section class="section">
      <div class="section-title"><h2>اختاري مغامرتك</h2><button class="text-button" type="button" data-screen="library">كل الأنشطة ←</button></div>
      <div class="category-grid">${categoryCards()}</div>
    </section>
    <section class="section">
      <div class="section-title"><h2>حروفنا الجميلة</h2><button class="text-button" type="button" data-action="category" data-category="letters">تدرّبي عليها ←</button></div>
      <div class="letter-strip">${letters.slice(0, 14).map(([letter, word, image]) => `<button class="letter-tile" type="button" data-action="speak" data-word="${word}" aria-label="استمع إلى حرف ${letter}"><span>${letter}</span><small>${word}</small></button>`).join("")}</div>
    </section>
    <section class="section">
      <div class="section-title"><h2>رحلتك مستمرة</h2><button class="text-button" type="button" data-screen="achievements">إنجازاتي ←</button></div>
      <div class="screen-card">
        <div class="progress-label"><span>خطواتك نحو اكتشاف الحروف</span><strong>${learned} / 28</strong></div>
        <div class="progress-track"><div class="progress-fill" style="width:${Math.min(100, (learned / 28) * 100)}%"></div></div>
      </div>
    </section>`}`;
}

function renderLibrary() {
  const action = `<button class="button secondary" type="button" data-screen="coloring">✎ مرسم الألوان</button>`;
  const shown = activities.filter((activity) => state.filter === "الكل" || activity.category === state.filter);
  return `${renderHeading("مكتبة الأنشطة", "اختاري نشاطًا، وسارة سترافقك في كل خطوة.", action)}
    <div class="filter-row" role="group" aria-label="تصفية الأنشطة">${filters.map((filter) => `<button class="filter-chip ${state.filter === filter ? "is-selected" : ""}" type="button" data-action="filter" data-filter="${filter}" aria-pressed="${state.filter === filter}">${filter}</button>`).join("")}</div>
    <section class="activity-grid" aria-live="polite">${shown.length ? shown.map((activity) => `<button class="activity-card" type="button" data-action="category" data-category="${activity.id}">
      <span class="activity-art"><img src="${asset(activity.icon)}" alt="" loading="lazy" /></span>
      <strong>${activity.title}</strong><p>${activity.description}</p>
      <span class="card-meta"><span>${activity.category}</span><span>${activity.count}</span></span>
    </button>`).join("") : `<p class="empty-state">لا توجد أنشطة في هذا القسم بعد.</p>`}</section>`;
}

function openCategory(category) {
  if (category === "coloring") {
    setScreen("coloring");
    return;
  }
  state.category = quizSets[category] ? category : "letters";
  state.questionIndex = 0;
  state.correctInRound = 0;
  state.answered = false;
  progress.lastCategory = state.category;
  saveProgress();
  setScreen("activity");
}

function currentQuestion() {
  const set = quizSets[state.category] || quizSets.letters;
  return set[state.questionIndex % set.length];
}

function renderActivity() {
  if (state.questionIndex >= 5) return renderCompletion();
  const question = currentQuestion();
  const roundNumber = state.questionIndex + 1;
  const artwork = question.image;
  const choices = question.choices.map((choice) => {
    const selectedClass = state.answered && choice === question.answer ? " is-correct" : "";
    const isDisabled = state.answered ? " disabled" : "";
    const choiceImage = state.category === "letters" ? letters.find(([letter]) => letter === choice)?.[2] : "";
    const label = state.category === "letters" ? choice : escapeHTML(choice);
    return `<button class="answer-option${selectedClass}" type="button" data-action="answer" data-answer="${escapeHTML(choice)}"${isDisabled}>
      ${choiceImage ? `<img src="${asset(choiceImage)}" alt="" loading="lazy" />` : `<span aria-hidden="true">${state.category === "counting" ? "🔢" : state.category === "shapes" ? "🔶" : "✨"}</span>`}
      <span>${label}</span>
    </button>`;
  }).join("");
  return `<div class="page-heading"><div><p class="eyebrow">نشاط مع سارة</p><h1>${activities.find((activity) => activity.id === state.category)?.title || "عالم الحروف"}</h1></div>
      <button class="back-link" type="button" data-screen="library">← العودة للأنشطة</button></div>
    <section class="screen-card">
      <div class="activity-topline"><span class="star-count">⭐ ${progress.stars} نجمة</span><span class="muted">جولة قصيرة وممتعة</span></div>
      <div class="progress-label"><span>السؤال ${roundNumber} من ٥</span><strong>${state.correctInRound} إجابات صحيحة</strong></div>
      <div class="progress-track"><div class="progress-fill" style="width:${roundNumber * 20}%"></div></div>
      <div class="question-panel">
        <div class="question-art"><img src="${asset(artwork)}" alt="${escapeHTML(question.word)}" /></div>
        <div class="question-content"><h2>${question.prompt}</h2><p>فكّري بهدوء، ثم اختاري الإجابة الصحيحة.</p>
          <button class="speak-button" type="button" data-action="speak" data-word="${escapeHTML(question.word)}">🔊 استمعي إلى الكلمة</button></div>
      </div>
      <div class="answer-grid">${choices}</div>
      <p class="feedback ${state.answered && state.correctInRound < roundNumber ? "is-wrong" : ""}" aria-live="polite">${state.answered ? "أحسنتِ! إجابة رائعة ⭐" : " "}</p>
      <div class="activity-footer"><span class="muted">أنتِ تتقدّمين خطوة بخطوة 🌱</span>
        ${state.answered ? `<button class="button" type="button" data-action="next">${roundNumber === 5 ? "عرض النتيجة" : "السؤال التالي ←"}</button>` : ""}</div>
    </section>`;
}

function renderCompletion() {
  return `<section class="completion-card">
    <img class="completion-art" src="${asset("Celebration.png")}" alt="" />
    <div class="big-star" aria-hidden="true">★ ★ ★</div>
    <p class="eyebrow">إنجاز رائع يا سارة!</p>
    <h1>أنهيتِ مغامرتك بنجاح</h1>
    <p>أجبتِ عن ${state.correctInRound} من ٥ أسئلة بشكل صحيح. كل محاولة تعلّم جديد، ونحن فخورون بك!</p>
    <button class="button" type="button" data-action="restart">مغامرة أخرى ←</button>
    <button class="button secondary" type="button" data-screen="home" style="margin-inline-start:10px">العودة للرئيسية</button>
  </section>`;
}

function renderColoring() {
  return `${renderHeading("مرسم سارة", "اختاري لونك، ثم ارسمي لوحة تعبّر عن خيالك.")}
    <section class="coloring-layout">
      <div class="drawing-board" aria-label="لوحة الرسم">
        <div class="drawing-watermark" aria-hidden="true">✿</div>
        <canvas id="drawing-canvas" aria-label="منطقة الرسم"></canvas>
      </div>
      <aside class="paint-controls">
        <h2>ألوانك الجميلة</h2><p>اختاري لونًا ثم اسحبي إصبعك أو الفأرة على اللوحة للرسم.</p>
        <div class="palette" role="group" aria-label="لوحة الألوان">${paletteColors.map((color, index) => `<button class="color-choice ${index === 0 ? "is-selected" : ""}" type="button" style="background:${color}" data-action="color" data-color="${color}" aria-label="اللون ${index + 1}" aria-pressed="${index === 0}"></button>`).join("")}</div>
        <label class="brush-control" for="brush-size">حجم الفرشاة <output id="brush-size-value">12</output>
          <input id="brush-size" type="range" min="4" max="36" value="12" />
        </label>
        <div class="control-actions">
          <button class="button secondary" type="button" data-action="clear">مسح اللوحة</button>
          <button class="button" type="button" data-action="save-drawing">حفظ لوحتي ↓</button>
        </div>
      </aside>
    </section>`;
}

function renderAchievements() {
  const badges = [
    { title: "بداية جميلة", description: "أكملي أول نشاط", image: "Achievement badge.png", current: Math.min(1, progress.completed), target: 1 },
    { title: "نجمة ساطعة", description: "اجمعي ٥ نجوم", image: "Golden star.png", current: Math.min(5, progress.stars), target: 5 },
    { title: "قارئة صغيرة", description: "تعرّفي على ٥ كلمات", image: "Award.png", current: Math.min(5, progress.completed), target: 5 },
    { title: "مبدعة الألوان", description: "اكتشفي مرسم الألوان", image: "Color palette.png", current: 0, target: 1 },
    { title: "رحّالة نشيطة", description: "تعلّمي في ٣ أيام", image: "Achievement badge-1.png", current: Math.min(3, progress.currentStreak), target: 3 },
    { title: "بطلة الحروف", description: "أكملي ١٠ أنشطة", image: "Achievement badge-2.png", current: Math.min(10, progress.completed), target: 10 },
  ];
  return `${renderHeading("إنجازاتي", "كل نجمة تذكّرك بشيء جديد تعلّمته.")}
    <section class="achievement-grid">${badges.map((badge) => `<article class="achievement-card">
      <img src="${asset(badge.image)}" alt="" loading="lazy" />
      <h3>${badge.title}</h3><p>${badge.description}</p>
      <div class="achievement-progress" aria-label="${badge.current} من ${badge.target}"><span style="width:${(badge.current / badge.target) * 100}%"></span></div>
    </article>`).join("")}</section>`;
}

function renderProfile() {
  const soundChecked = progress.sound ? "true" : "false";
  return `${renderHeading("ملفي الشخصي", "هذه رحلتك الخاصة، مليئة بالاكتشافات الجميلة.")}
    <section class="profile-summary"><img src="${asset("Profile portrait.png")}" alt="صورة سارة" />
      <div><p class="eyebrow">المستكشفة الصغيرة</p><h2>سارة</h2><p>مستعدة للتعلّم كل يوم ✨</p></div></section>
    <section class="profile-grid">
      <div class="profile-stat"><span>مجموع النجوم</span><strong>⭐ ${progress.stars}</strong></div>
      <div class="profile-stat"><span>أنشطة مكتملة</span><strong>📚 ${progress.completed}</strong></div>
      <div class="profile-stat"><span>أطول سلسلة</span><strong>🔥 ${progress.currentStreak} أيام</strong></div>
    </section>
    <section class="settings-card"><h2>إعدادات التعلّم</h2>
      <div class="setting-row"><span>الأصوات والتشجيع</span><button class="toggle" type="button" role="switch" aria-checked="${soundChecked}" data-action="toggle-sound" aria-label="تفعيل الأصوات"></button></div>
      <div class="setting-row"><span>التعلّم باللعب كل يوم</span><span class="muted">استمرّي، أنتِ رائعة!</span></div>
    </section>`;
}

function render() {
  if (state.useReferenceScreens) {
    renderReferenceScreen();
    return;
  }
  const pages = {
    home: renderHome,
    library: renderLibrary,
    activity: renderActivity,
    coloring: renderColoring,
    achievements: renderAchievements,
    profile: renderProfile,
  };
  app.innerHTML = (pages[state.screen] || renderHome)();
  if (state.screen === "coloring") setupCanvas();
}

function renderReferenceScreen() {
  const screen = screenReferenceMap[state.referenceScreen];
  if (!screen) {
    console.error(`Could not render reference screen: ${state.referenceScreen}`);
    app.replaceChildren();
    return;
  }

  const screenName = escapeHTML(screen.title);
  const imagePath = `./الشاشات/${encodeURIComponent(screen.image)}`;
  const hotspots = screen.hotspots.map((hotspot) => {
    const targetAttribute = hotspot.screen
      ? `data-reference-screen="${escapeHTML(hotspot.screen)}"`
      : `data-reference-action="${escapeHTML(hotspot.action)}"`;
    const position = `left:${hotspot.x * 100}%;top:${hotspot.y * 100}%;width:${hotspot.width * 100}%;height:${hotspot.height * 100}%`;
    return `<button class="screen-hotspot" type="button" ${targetAttribute} style="${position}" aria-label="${escapeHTML(hotspot.label)}"></button>`;
  });

  if (screen.parent) {
    hotspots.push(`<button class="screen-hotspot screen-back-hotspot" type="button" data-reference-screen="${escapeHTML(screen.parent)}" style="left:84%;top:1%;width:15%;height:7%" aria-label="رجوع إلى ${escapeHTML(screenReferenceMap[screen.parent].title)}"></button>`);
  }

  if (screen.showTabs !== false) {
    referenceNavigation.forEach((item) => {
      hotspots.push(`<button class="screen-hotspot" type="button" data-reference-screen="${item.screen}" style="left:${item.x * 100}%;top:92%;width:${item.width * 100}%;height:8%" aria-label="${item.label}"></button>`);
    });
  }

  app.innerHTML = `<section class="reference-stage" aria-label="${screenName}">
    <img class="reference-image" src="${imagePath}" alt="الشاشة المرجعية: ${screenName}" draggable="false" />
    <div class="reference-hotspots">${hotspots.join("")}</div>
  </section>`;
}

function handleAnswer(button) {
  if (state.answered) return;
  state.answered = true;
  const question = currentQuestion();
  const correct = button.dataset.answer === question.answer;
  if (correct) {
    state.correctInRound += 1;
    progress.stars += 1;
    saveProgress();
  }
  render();
  if (correct) {
    const feedback = app.querySelector(".feedback");
    if (feedback) feedback.textContent = "أحسنتِ! إجابة رائعة ⭐";
  } else {
    const wrongAnswer = app.querySelector(`[data-answer="${CSS.escape(button.dataset.answer)}"]`);
    wrongAnswer?.classList.add("is-wrong");
    const feedback = app.querySelector(".feedback");
    if (feedback) {
      feedback.textContent = "محاولة جميلة! الإجابة الصحيحة مميّزة بالأخضر.";
      feedback.classList.add("is-wrong");
    }
  }
  document.querySelector(".star-count").textContent = `⭐ ${progress.stars} نجمة`;
}

function advanceQuestion() {
  state.questionIndex += 1;
  state.answered = false;
  if (state.questionIndex >= 5) {
    progress.completed += 1;
    progress.currentStreak = Math.max(progress.currentStreak, 1);
    saveProgress();
  }
  render();
}

function speak(text) {
  if (!progress.sound) {
    showToast("الصوت متوقف من إعداداتك");
    return;
  }
  if (!("speechSynthesis" in window)) {
    showToast("ميزة الصوت غير متاحة في هذا المتصفح");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ar";
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}

function setupCanvas() {
  const canvas = document.querySelector("#drawing-canvas");
  const board = canvas?.parentElement;
  const watermark = document.querySelector(".drawing-watermark");
  if (!canvas || !board) return;
  const context = canvas.getContext("2d");
  if (!context) {
    showToast("تعذّر تشغيل لوحة الرسم في هذا المتصفح");
    return;
  }
  let drawing = false;
  let hasInk = false;
  let color = paletteColors[0];
  const resizeCanvas = () => {
    const bounds = board.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(bounds.width * ratio);
    canvas.height = Math.round(bounds.height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.lineCap = "round";
    context.lineJoin = "round";
  };
  resizeCanvas();
  const observer = new ResizeObserver(resizeCanvas);
  observer.observe(board);

  const position = (event) => {
    const bounds = canvas.getBoundingClientRect();
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  };
  canvas.addEventListener("pointerdown", (event) => {
    drawing = true;
    canvas.setPointerCapture(event.pointerId);
    const point = position(event);
    context.beginPath();
    context.moveTo(point.x, point.y);
    context.strokeStyle = color;
    context.lineWidth = Number(document.querySelector("#brush-size").value);
    context.lineTo(point.x + 0.1, point.y + 0.1);
    context.stroke();
    hasInk = true;
    watermark.classList.add("is-hidden");
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!drawing) return;
    const point = position(event);
    context.strokeStyle = color;
    context.lineWidth = Number(document.querySelector("#brush-size").value);
    context.lineTo(point.x, point.y);
    context.stroke();
  });
  const stopDrawing = () => {
    drawing = false;
    context.beginPath();
  };
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", stopDrawing);
  document.querySelectorAll(".color-choice").forEach((button) => {
    button.addEventListener("click", () => {
      color = button.dataset.color;
      document.querySelectorAll(".color-choice").forEach((choice) => {
        const selected = choice === button;
        choice.classList.toggle("is-selected", selected);
        choice.setAttribute("aria-pressed", String(selected));
      });
    });
  });
  document.querySelector("#brush-size").addEventListener("input", (event) => {
    document.querySelector("#brush-size-value").value = event.target.value;
    document.querySelector("#brush-size-value").textContent = event.target.value;
  });
  document.querySelector('[data-action="clear"]').addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    hasInk = false;
    watermark.classList.remove("is-hidden");
  });
  document.querySelector('[data-action="save-drawing"]').addEventListener("click", () => {
    if (!hasInk) {
      showToast("ارسمي شيئًا جميلًا أولًا!");
      return;
    }
    const link = document.createElement("a");
    link.download = "لوحة-سارة.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("تم حفظ لوحتك الجميلة!");
  });
}

document.addEventListener("click", (event) => {
  const referenceControl = event.target.closest("[data-reference-screen], [data-reference-action]");
  if (referenceControl) {
    if (referenceControl.dataset.referenceScreen) {
      setReferenceScreen(referenceControl.dataset.referenceScreen);
      return;
    }
    const actions = {
      "live-coloring": "coloring",
      "live-letters": "letters",
      "live-counting": "counting",
      "live-patterns": "patterns",
      "live-puzzles": "puzzles",
    };
    const category = actions[referenceControl.dataset.referenceAction];
    if (category === "coloring") setScreen("coloring");
    else if (category) openCategory(category);
    return;
  }

  const control = event.target.closest("[data-screen], [data-action]");
  if (!control) return;
  if (control.dataset.screen) {
    setScreen(control.dataset.screen);
    return;
  }
  switch (control.dataset.action) {
    case "category":
      openCategory(control.dataset.category);
      break;
    case "start":
      openCategory("letters");
      break;
    case "filter":
      state.filter = control.dataset.filter;
      render();
      break;
    case "answer":
      handleAnswer(control);
      break;
    case "next":
      advanceQuestion();
      break;
    case "restart":
      openCategory(state.category);
      break;
    case "speak":
      speak(control.dataset.word);
      break;
    case "toggle-sound":
      progress.sound = !progress.sound;
      saveProgress();
      render();
      showToast(progress.sound ? "تم تفعيل الأصوات" : "تم إيقاف الأصوات");
      break;
    case "color":
      break;
    default:
      break;
  }
});

document.querySelector(".notification-button").addEventListener("click", () => {
  showToast("أحسنتِ! أنتِ تقومين بعمل رائع 🌟");
});

window.addEventListener("popstate", () => {
  const screen = window.location.hash.slice(1);
  if (Object.hasOwn(screenReferenceMap, screen)) {
    setReferenceScreen(screen, false);
  } else {
    setReferenceScreen("home", false);
  }
});

const initialScreen = window.location.hash.slice(1);
if (Object.hasOwn(screenReferenceMap, initialScreen)) {
  state.referenceScreen = initialScreen;
} else {
  history.replaceState({ screen: "home" }, "", "#home");
}

document.body.classList.add("reference-mode");
render();
updateNavigation();
