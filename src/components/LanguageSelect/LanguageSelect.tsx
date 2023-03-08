import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next"

export default function LanguageSelect() {
    const { i18n: { changeLanguage, language }, t } = useTranslation();

    return (
        <Select fontSize={["1rem", "1.2rem", "1.4rem", "1.6rem", "2rem"]} width={"max-content"} placeholder={t("change_lang")!} _checked={{
            color: "crimson"
        }} name="lang" id="lang" onChange={evt => {
            localStorage.setItem("lang", evt.target.value);
            changeLanguage(evt.target.value)
        }}>
            <option style={{
                backgroundImage: "url('/social/instagram.svg')"
            }} defaultChecked={language === "uz"} value="uz">O'zbekcha</option>
            <option style={{
                backgroundImage: "url('/social/instagram.svg')"
            }} defaultChecked={language === "ru"} value="ru">Русский</option>
            <option style={{
                backgroundImage: "url('/social/instagram.svg')"
            }} defaultChecked={language === "en"} value="en">English</option>
        </Select>
    )
}
