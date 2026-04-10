import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "@/components/Button.jsx";

const Hero = () => {
    const { t } = useTranslation();

    useGSAP(() => {
        gsap.fromTo(
            ".hero-in",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
        );
    }, []);


    return (
        <section id="hero" className="relative overflow-x-hidden bg-black">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <img src="/images/bg.png" alt="" className="h-full w-full object-cover" />
            </div>

            <div className="hero-layout max-w-[1500px] mx-auto">
                {/* Right visual */}
                <figure className="hero-3d-layout order-1 lg:order-2 w-full overflow-hidden">
                    <div className="hero-in relative mx-auto w-full max-w-[560px]">
                        <div className="absolute left-1/2 top-[58%] h-20 w-[90%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(217,70,239,0.55),transparent_65%)] blur-xl" />
                        <div className="absolute left-1/2 top-[58%] h-[2px] w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />

                        <div className="absolute left-[4%] top-[8%] rotate-[-16deg] rounded-2xl border border-emerald-300/60 bg-emerald-500/20 px-4 py-3 shadow-[0_0_26px_rgba(16,185,129,0.4)]">
                            <img src="/logos/davinci.png" alt="DaVinci Resolve" className="h-10 w-auto object-contain" />
                        </div>

                        <div className="absolute right-[5%] top-[14%] rotate-[14deg] rounded-2xl border border-sky-300/60 bg-sky-500/20 px-4 py-3 shadow-[0_0_26px_rgba(56,189,248,0.4)]">
                            <img src="/logos/adobe-pr.png" alt="CapCut" className="h-10 w-auto object-contain" />
                        </div>

                        <div className="relative mx-auto w-[80%] md:w-[74%]">
                            <img src="/avatar.png" alt="Video editor" className="w-full object-contain" />
                        </div>
                    </div>
                </figure>

                {/* Left content */}
                <header className="order-2 lg:order-1 flex flex-col justify-center w-full md:px-20 px-5">
                    <div className="flex flex-col gap-7 hero-in">
                        <div>
                            <p className="mb-3 inline-block border-b border-fuchsia-500/70 pb-1 text-xs uppercase tracking-[0.2em] text-white/70">
                                {t("hero.name", "Ryan")}
                            </p>

                            <h1 className="text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
                                {t("hero.titleTop", "Professional")}
                                <br />
                                {t("hero.titleBottom", "Videographer")}
                            </h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-md">
                            {t("hero.description", "Hi, I’m Nam Pham, a video creator and editor based in Vietnam.")}
                        </p>

                        <Button text={t("hero.button")} className="w-full sm:w-60 md:w-80 md:h-16 h-12" id="counter" />

                    </div>
                </header>
            </div>

            <AnimatedCounter />
        </section>
    );
};

export default Hero;
