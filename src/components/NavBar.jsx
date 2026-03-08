import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { useTranslation } from "react-i18next";
import "../../i18n.js";
import LanguageSwitcher from "@/components/LanguageSwitcher.jsx"; // import cấu hình i18n

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <div className="flex items-center gap-2">
                    {/*<img*/}
                    {/*    src="/images/avatar.png"*/}
                    {/*    alt="avatar"*/}
                    {/*    width={40}*/}
                    {/*    height={40}*/}
                    {/*    className="rounded-full aspect-square"*/}
                    {/*/>*/}
                    <a href="#hero" className="logo">{t("name")}</a>
                </div>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{t(`navbar.${name}`)}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                   <LanguageSwitcher />



                    <a href="#contact" className="contact-btn group">
                        <div className="inner">
                            <span>{t("contact")}</span>
                        </div>
                    </a>
                </div>
            </div>


        </header>
    );
};

export default NavBar;
