import React from "react";
import TitleHeader from "@/components/TitleHeader.jsx";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button.jsx";

const AboutMe = () => {
    const { t } = useTranslation();

    const timeline = t("about.timeline", { returnObjects: true });
    const tools = ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut"];

    return (
        <section id="about" className="section-padding">
            <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
                <TitleHeader
                    title="Turning moments into compelling visual stories"
                    sub={t("about.title")}
                />

                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 md:p-8">
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">{t("about.paragraph1")}</p>
                        <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-300">{t("about.paragraph2")}</p>
                        <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-300">{t("about.paragraph3")}</p>
                        <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-300">{t("about.paragraph4")}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-sm text-white/90"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 rounded-3xl border border-purple-400/20 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)] p-6 md:p-7">
                        <p className="text-sm uppercase tracking-[0.2em] text-purple-200/80">{t("about.journeyTitle")}</p>

                        <div className="mt-6 space-y-5">
                            {timeline.map((item, i) => (
                                <div key={`${item.year}-${i}`} className="flex gap-4">
                                    <div className="mt-1 flex flex-col items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-purple-300" />
                                        {i !== timeline.length - 1 && <div className="mt-2 h-12 w-px bg-purple-300/40" />}
                                    </div>
                                    <div>
                                        <p className="text-sm text-purple-100/80">{item.year}</p>
                                        <p className="mt-1 text-white">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Button text={t("video.button")} className="w-full md:h-16 h-12" id="videos" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
