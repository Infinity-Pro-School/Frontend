type Course = {
    id: string;
    name: string;
    description: {
        uz: string;
        ru: string;
        en: string;
    };
};

const courses: Course[] = [
    {
        id: crypto.randomUUID(),
        name: "General English",
        description: {
            uz: "Ushbu kursda sizga General Englishdan to'liq bilim beriladi",
            en: "In this course, you will be given a full knowledge of General English",
            ru: "На этом курсе вы получите полное знание General",
        },
    },
];
export default courses;
