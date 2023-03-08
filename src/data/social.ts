import telegramIcon from "/social/telegram.svg";
import instagramIcon from "/social/instagram.svg";
import youtubeIcon from "/social/youtube.svg";

type SocialLink = {
    iconPath: string;
    title: string;
    link: string;
};

const socialLinks: SocialLink[] = [
    {
        iconPath: telegramIcon,
        title: "telegram",
        link: "https://t.me/INFINITY_PROSTUDY",
    },
    {
        iconPath: instagramIcon,
        title: "instagram",
        link: "https://www.instagram.com/infinity_prostudy/",
    },
    {
        iconPath: youtubeIcon,
        title: "youtube",
        link: "https://www.youtube.com/@INFINITY_PROSTUDY",
    },
];

export default socialLinks;
