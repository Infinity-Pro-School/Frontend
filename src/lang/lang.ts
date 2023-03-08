const translations = {
    uz: {},
    ru: {},
    en: {},
};

function addWord(name: string, uz: string, en: string, ru: string) {
    Object.defineProperty(translations.uz, name, {
        value: uz,
        writable: false,
    });
    Object.defineProperty(translations.en, name, {
        value: en,
        writable: false,
    });
    Object.defineProperty(translations.ru, name, {
        value: ru,
        writable: false,
    });
}

console.log(translations);

addWord("home", "Bosh sahifa", "Home", "Главная страница");
addWord("about", "Biz haqimizda", "About", "О нас");
addWord("courses", "Kurslar", "Courses", "Курсы");
addWord("ratings", "Reytinglar", "Ratings", "Рейтинги");
addWord("gallery", "Galereya", "Gallery", "Галерея");
addWord(
    "main_title",
    "Biz o'rganishga bo'lgan ishtiyoqni rivojlantiramiz",
    "We develop passion for learning",
    "Развиваем страсть к обучению"
);
addWord(
    "main_description",
    "Biz o'rganishga bo'lgan ishtiyoqni rivojlantiramiz",
    "Ingliz tili bo'yicha ko'nikmalaringizni yuqori bosqichga olib chiqing! Sizdan faqatgina kurslarimizga yozilish qoldi, xolos! ",
    "Поднимите свои навыки английского на новый уровень! Запишитесь на наши курсы всего за"
);
addWord("main_price", "350.000", "350.000", "350.000");
addWord("main_soums", "so'm", "soums", "сумы");
addWord("register", "Ro'yxatdan o'ting", "Register now", "Зарегистрироваться");
addWord("tips", "Qo'llanma", "Quick tips", "Начать работу");
addWord(
    "tips_about",
    "Bizning faoliyatimiz bilan tanishing va savollaringizga javob toping",
    "If you have any kind of questions about who we are, what we do, just click the button below to learn more",
    "Познакомьтесь с нашей деятельностью и найдите ответы на свои вопросы"
);
addWord(
    "tips_gallery",
    "Bizning darslarimizdan fotolavhalarni tomosha qiling va bahra oling",
    "Want to see some shots from our lessons? Check out our photo gallery to see more",
    "Смотрите и наслаждайтесь фотографиями с наших занятий"
);
addWord(
    "tips_ratings",
    "O'quvchilarimizning natijalari qiziqmi? Unda siz quyidagi sahifada o'quvchilarimizning reytinglari bilan tanishishingiz mumkin",
    "Want to learn more about our students? Check out our students' ratings to learn more",
    "Хотите узнать больше о наших учениках? Ознакомьтесь с рейтингами наших студентов"
);
addWord(
    "tips_courses",
    "Bizning kurslarimiz bilan batafsil tanishib chiqing va o'zingizga mosini tanlang",
    "See the list of our courses that fits best in you! Click the button below to see more",
    "Узнайте больше о наших курсах и выберите тот, который подходит именно вам"
);
addWord("find_more", "Davom etish", "Find more", "Узнать больше");
addWord(
    "about_title",
    "Biz haqimizda",
    "What's so special about us?",
    "Что в нас такого особенного?"
);
addWord(
    "about_description",
    "Biz sizga ingliz tili bo'yicha bilimlaringizni yuqori bosqichga olib chiqishga yordam beramiz!",
    "We provide you with full game-changer knowledge of general English that you need in order to step up your English skills to the next level!",
    "Мы поможем вам поднять свой английский на новый уровень!"
);
addWord("experience", "Tajriba", "Experience", "Опыт");
addWord(
    "experience_body",
    "Biz katta tajribaga egamiz va 4 yilga yaqin vaqt mobaynida 1000ga yaqin o'quvchilarga ta'lim berdik.",
    "We believe that we have a great experience of teaching to almost 1000 students in 4 years.",
    "У нас большой опыт обучения почти 1000 студентов за 4 года."
);
addWord(
    "courses_description",
    "Ingliz tilini chuqurroq o'rganishingizga ishonch hosil qilish uchun biz asosan General Englishga e'tibor qaratamiz!",
    "We mainly focus on general English to make sure that you will have a better understanding of core English!",
    "Мы в основном ориентируемся на General English, чтобы убедиться, что вы лучше понимаете базовый английский!"
);
addWord(
    "ratings_description",
    "O'quvchilarimiz haqida ko'proq bilmoqchimisiz? Bizning eng yaxshi o'quvchilarimiz bilan tanishish uchun pastgi qismga tushing!",
    "Want to know more about our students? Just go down below to get to know our best students!",
    "Хотите узнать больше о наших учениках? Просто спуститесь ниже, чтобы познакомиться с нашими лучшими учениками!"
);
addWord(
    "top_students",
    "Eng yaxshi o'quvchilar",
    "Top students",
    "Лучшие студенты"
);
addWord(
    "gallery_description",
    "O'quvchilarimiz bilan o'tkazgan ajoyib lahzalarimizdan bahramand bo'ling!",
    "Enjoy the views of the amazing moments that we had with our students!",
    "Наслаждайтесь видами удивительных моментов, которые были у нас с нашими студентами!"
);
addWord(
    "change_lang",
    "Tilni o'zgartirish",
    "Change language",
    "Изменить язык"
);
export default translations;
