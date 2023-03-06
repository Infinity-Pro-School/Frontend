type QuickTip = {
    title: string;
    body: string;
    link: string;
};

const quickTips: QuickTip[] = [
    {
        title: "About Us",
        body: "If you have any kind of questions about who we are, what we do, just click the button below to learn more!",
        link: "/about",
    },
    {
        title: "Photo Gallery",
        body: "Want to see some shots from our lessons? Check out our photo gallery to see more!",
        link: "/gallery",
    },
    {
        title: "Ratings",
        body: "Want to learn more about our students? Check out our students' ratings to learn more!",
        link: "/ratings",
    },
    {
        title: "Courses",
        body: "See the list of our courses that fits best in you! Click the button below to see more!",
        link: "/courses",
    },
];

export default quickTips;
