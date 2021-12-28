import { memo, useCallback, useEffect } from "react";
import { BsFillMoonFill } from 'react-icons/bs'
import { getLocalstorage, setLocalstorage } from "../../../utils/localStore/localStorage";
import "./css/themeButton.scss";
const ThemeButton = memo(() => {


    useEffect(() => {
        const defaultThemeColor = "light";
        const localThemeColor = getLocalstorage("themeColor");
        if (!localThemeColor) setLocalstorage("themeColor", defaultThemeColor);
        document
            .getElementsByTagName("body")[0]
            .setAttribute("data-theme-color", localThemeColor || defaultThemeColor);

    }, []);

    const handleChange = useCallback(() => {
        const localThemeColor = getLocalstorage("themeColor");
        const newTheme = localThemeColor === "light" ? "dark" : "light"
        document
            .getElementsByTagName("body")[0]
            .setAttribute("data-theme-color", newTheme);
        setLocalstorage("themeColor", newTheme);
    }, []);


    return (
        <div className="themeButton" onClick={handleChange}>
            <BsFillMoonFill className="themeButton__icon" />
            <h2 className="themeButton__text themeButton__text--light">Dark Mode</h2>
            <h2 className="themeButton__text themeButton__text--dark">Light Mode</h2>
        </div>
    );
});

export default ThemeButton;
