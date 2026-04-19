export const navLinks = [
    {
        name: "Bosh sahifa",
        href: "/",
    },
    {
        name: "Yangiliklar",
        href: "/news",
    },
    {
        name: "Fakultet",
        href: "/faculty",
    },
    {
        name: "Forum",
        href: "/forum"
    },
    {
        name: "Afzalliklar",
        href: "/advantages"
    },

];

export const colors = {
    bordo: "#722F37",
    cream: "#FFF8E7",
    bordoDark: "#5A2330",
    creamDark: "#F5E6D3"
};

// Mock data for homepage components
export const sliderImages = [
    {
        id: 1,
        url: "/slider1.jpg",
        title: "Tarixiy meroslarimiz",
        description: "O'zbekistonning boy tarixiy merosini kashf eting"
    },
    {
        id: 2,
        url: "/slider2.jpg",
        title: "Buyuk allomalar",
        description: "Sharqning ulkan olimlari va ularning asarlari"
    },
    {
        id: 3,
        url: "/slider3.jpg",
        title: "Qadimiy sivilizatsiyalar",
        description: "Buyuk ipak yo'li va qadimiy shaharlar tarixi"
    }
];

export const aboutUs = {
    title: "Yosh Tarixchi haqida",
    description: "Yosh Tarixchi platformasi yosh tarixchilarni birlashtirib, ularga tarixiy tadqiqotlar olib borish, maqolalar yozish va bilimlarini baham ko'ish imkoniyatini beruvchi zamonaviy ta'lim portali.",
    features: [
        "1500+ faol a'zo",
        "500+ ilmiy maqola",
        "24/7 ko'mak",
        "Bepul ta'lim materiallari"
    ]
};

export const popularArtifacts = [
    {
        id: 1,
        title: "Amir Temur qilichi",
        description: "Buyuk sarkardaning jangovar qilichi, XV asr",
        image: "https://picsum.photos/400/300?random=1",
        author: "Aliyev B.",
        likes: 245,
        comments: 18
    },
    {
        id: 2,
        title: "Qadimiy Xorazm tangalari",
        description: "Miloddan avvalgi III asrga oid Xorazm shohligi tangalari",
        image: "https://picsum.photos/400/300?random=2",
        author: "Karimova D.",
        likes: 189,
        comments: 12
    },
    {
        id: 3,
        title: "Buxoro Qur'oni",
        description: "XIII asrga oid qo'lyozma Qur'oni Karim",
        image: "https://picsum.photos/400/300?random=3",
        author: "Saidov R.",
        likes: 312,
        comments: 25
    }
];

export const facultyDetails = {
    title: "Tarix fakultetlari",
    description: "Mamlakatimizning yetakchi tarix fakultetlari va ularning takliflari",
    faculties: [
        {
            name: "O'zbekiston Milliy Universiteti",
            specialty: "Jahon tarixi",
            students: 850,
            description: "Mamlakatimizning eng qadimiy va nufuzli ta'lim muassasasi"
        },
        {
            name: "Toshkent Davlat Universiteti",
            specialty: "O'zbekiston tarixi",
            students: 620,
            description: "Zamonaviy tarixchilarni tayyorlaydigan yetakmarkaz"
        },
        {
            name: "SamDU",
            specialty: "Arxeologiya",
            students: 340,
            description: "Qadimiy merosni o'rganish bo'yicha ixtisoslashgan markaz"
        }
    ]
};

export const whyUs = {
    title: "Nima uchun Yosh Tarixchi?",
    description: "Bizning platformamiz tarixga bo'lgan muhabbatingizni professional darajaga olib chiqadi",
    reasons: [
        {
            icon: "M",
            title: "Malakali o'qituvchilar",
            description: "Mamlakatimizning yetakchi tarix olimlari va professorlari"
        },
        {
            icon: "R",
            title: "Resurslar boyligi",
            description: "Raqamli kutubxona va arxiv materiallarga bepul kirish"
        },
        {
            icon: "J",
            title: "Jamoaniyat",
            description: "Bir fikrdagi tarixsevarlar bilan muloqot va hamkorlik"
        },
        {
            icon: "S",
            title: "Sertifikatlar",
            description: "Tugatgan kurslaringiz uchun xalqaro sertifikatlar"
        }
    ]
};

export const footerData = {
    description: "Yosh Tarixchi - yosh tarixchilar uchun zamonaviy ta'lim platformasi. Tarixiy merosni o'rganing, tadqiqotlar olib boring va bilimlaringizni baham ko'ring.",
    quickLinks: [
        { name: "Bosh sahifa", href: "/" },
        { name: "Yangiliklar", href: "/news" },
        { name: "Fakultet", href: "/faculty" },
        { name: "Forum", href: "/forum" },
        { name: "Afzalliklar", href: "/advantages" }
    ],
    resources: [
        { name: "Tarixiy manbalar", href: "/resources" },
        { name: "Kutubxona", href: "/library" },
        { name: "Arxivlar", href: "/archives" },
        { name: "Maqolalar", href: "/articles" },
        { name: "Videolar", href: "/videos" }
    ],
    support: [
        { name: "Yordam markazi", href: "/help" },
        { name: "Aloqa", href: "/contact" },
        { name: "Shartlar", href: "/terms" },
        { name: "Maxfiylik", href: "/privacy" },
        { name: "FAQ", href: "/faq" }
    ],
    social: [
        { name: "Facebook", href: "https://facebook.com", icon: "f" },
        { name: "Telegram", href: "https://telegram.org", icon: "t" },
        { name: "Instagram", href: "https://instagram.com", icon: "i" },
        { name: "YouTube", href: "https://youtube.com", icon: "y" }
    ],
    contact: {
        email: "info@yoshtarixchi.uz",
        phone: "+998 71 234-56-78",
        address: "Toshkent sh., Universitet ko'chasi, 5"
    }
};

// News data for pagination
export const newsData = [
    {
        id: 1,
        title: "Amir Temur yubileyi keng nishonlandirildi",
        excerpt: "Buyuk sarkarda Amir Temur tavalludining 690 yilligi munosabati keng nishonlandirildi. Tadbir davomida...",
        content: "O'zbekiston Respublikasi Prezidentining farmoni bilan Amur Temur tavalludining 690 yilligi munosabati keng nishonlandirildi. Tadbir davomida...",
        author: "Qodir Aliyev",
        date: "2024-03-25",
        image: "https://picsum.photos/800/400?random=101",
        category: "Yangiliklar",
        readTime: "5 daqiqa o'qish"
    },
    {
        id: 2,
        title: "Xorazm shohligining yangi topilmalari",
        excerpt: "Arxeologlar Xorazm shohligining poytaxti Qoraqal'a yaqin yangi qabristonlarni topdilar...",
        content: "Xorazm viloyatida olib borilayotgan qazish ishlari davom etar ekan, arxeologlar Xorazm shohligining poytaxti Qoraqal'a yaqin yangi qabristonlarni topdilar. Bu topilmalar tarix fanlari uchun katta ahamiyatga ega...",
        author: "Dilnoza Karimova",
        date: "2024-03-24",
        image: "https://picsum.photos/800/400?random=102",
        category: "Arxeologiya",
        readTime: "7 daqiqa o'qish"
    },
    {
        id: 3,
        title: "Buxoro da tarixchilar uchun xalqaro anjuman",
        excerpt: "Buxoro shahrida O'zbekiston va xorijiy mamlakatlar olimlari ishtirok etilmoqda...",
        content: "Buxoro shahrida O'zbekiston va xorijiy mamlakatlar olimlari ishtirok etilmoqda. Anjuman 3 kun davom etib, 20 dan ortiq ma'ruza qabul qiladi...",
        author: "Bahodir Umarov",
        date: "2024-03-23",
        image: "https://picsum.photos/800/400?random=103",
        category: "Konferensiya",
        readTime: "4 daqiqa o'qish"
    },
    {
        id: 4,
        title: "Qadimiy qo'lyozmalar raqamlashtirildi",
        excerpt: "O'zbekistonning qadimiy qo'lyozma yodgorliklarining raqamlashtirilishi boshlandi...",
        content: "O'zbekiston Madaniyat vazirligi huzuridagi qadimiy qo'lyozma yodgorliklarining raqamlashtirilishi boshlandi. Bu loyiha doirasida 1000 dan ortiq qo'lyozmani raqamlashtirish rejalashtirilgan...",
        author: "Gulnora Sodiqova",
        date: "2024-03-22",
        image: "https://picsum.photos/800/400?random=104",
        category: "Madaniyat",
        readTime: "6 daqiqa o'qish"
    },
    {
        id: 5,
        title: "Yosh tarixchilar orasida tanlov o'tkazildi",
        excerpt: "Respublika tanlovining ikkinchi bosqichida yosh tarixchilar o'rtasida kurash o'tkazishdi...",
        content: "Respublika tanlovining ikkinchi bosqichida yosh tarixchilar o'rtasida kurash o'tkazishdi. Yoshlar o'z bilimlarini namoyish etishdi...",
        author: "Javlon Toshmatov",
        date: "2024-03-21",
        image: "https://picsum.photos/800/400?random=105",
        category: "Tanlov",
        readTime: "3 daqiqa o'qish"
    },
    {
        id: 6,
        title: "SamDU da yangi tarix fakulteti ochildi",
        excerpt: "SamDU qoshida yangi tarix fakulteti ochildi, zamonaviy jihozlarga ega bo'ldi...",
        content: "Samarqand Davlat Universiteti qoshida yangi tarix fakulteti ochildi. Yangi fakultet zamonaviy jihozlarga ega bo'lib, talabalarga sifatli ta'lim berishga qaratilgan...",
        author: "Malika Xolmatova",
        date: "2024-03-20",
        image: "https://picsum.photos/800/400?random=106",
        category: "Ta'lim",
        readTime: "5 daqiqa o'qish"
    },
    {
        id: 7,
        title: "Buyuk ipak yo'li bo'yicha xalqaro loyiha",
        excerpt: "YUNESKO ko'magida O'zbekistonning qadimiy shaharlari bo'yicha xalqaro loyiha ishga tushirilmoqda...",
        content: "Birlashgan Millatlar Tashkiloti (YUNESKO) ko'magida O'zbekistonning qadimiy shaharlari bo'yicha xalqaro loyiha ishga tushirilmoqda. Loyiha doirasida 5 yil davom etib, 10 million dollar miqdorida mablag' ajratilgan...",
        author: "Azizbek Rahimov",
        date: "2024-03-19",
        image: "https://picsum.photos/800/400?random=107",
        category: "Loyiha",
        readTime: "8 daqiqa o'qish"
    },
    {
        id: 8,
        title: "Qadimiy tangalarning ko'rgazilishi",
        excerpt: "O'zbekiston Milliy muzeyida qadimiy tangalarning ko'rgazilishi ochildi...",
        content: "O'zbekiston Milliy muzeyida qadimiy tangalarning ko'rgazilishi ochildi. Ko'rgazmada 100 dan ortiq qadimiy tangalar namoyish etilgan bo'lib, ular haqida to'liqroq ma'lumot berilmoqda...",
        author: "Komiljon Ismoilov",
        date: "2024-03-18",
        image: "https://picsum.photos/800/400?random=108",
        category: "Ko'rgazma",
        readTime: "4 daqiqa o'qish"
    },
    {
        id: 9,
        title: "Yosh olimlar grant yutib oldilar",
        excerpt: "O'zbekistonlik yosh olimlar xorijiy grantlar yutib oldilar...",
        content: "O'zbekistonlik yosh olimlar xorijiy ilmiy grantlar yutib oldilar. Ular AQSH, Yevropa Ittifoqi va Osiyo mamlakatlarining nufuzli universitetlarida o'qish va tadqiqotlar olib borish imkoniyatiga ega bo'lishdi...",
        author: "Nodira Begmatova",
        date: "2024-03-17",
        image: "https://picsum.photos/800/400?random=109",
        category: "Grant",
        readTime: "6 daqiqa o'qish"
    }
];