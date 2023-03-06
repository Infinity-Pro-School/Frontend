type Rating = {
    id: number;
    imgSrc: string;
};
type RatingInfo = {
    description: string;
    ratings: Rating[];
};

const ratings: Rating[] = [
    {
        id: 1,
        imgSrc: "https://i.ibb.co/Q8mNrrf/august-1.jpg",
    },
    {
        id: 2,
        imgSrc: "https://i.ibb.co/GMh2bsP/august-2.jpg",
    },
    {
        id: 3,
        imgSrc: "https://i.ibb.co/6Xhy1SR/august-3.jpg",
    },
    {
        id: 4,
        imgSrc: "https://i.ibb.co/8xbjH1z/august-4.jpg",
    },
];

const ratingInfo: RatingInfo = {
    description: "Top students",
    ratings,
};

export default ratingInfo;
