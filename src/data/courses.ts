type Course = {
    id: string;
    name: string;
    description: string;
};

const courses: Course[] = [
    {
        id: crypto.randomUUID(),
        name: "General English",
        description:
            "In this course, you will be given a full knowledge of General English. The primary ",
    },
];
export default courses;
