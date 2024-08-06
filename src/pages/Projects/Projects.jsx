import Section from "../../layouts/Section.jsx";
import Project from "./Project.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Keyboard} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import vedexpress from "../../assets/projects/vedexpress.png";
import aperture from "../../assets/projects/aperture.png";
import signal from "../../assets/projects/signal.png";
import autoonline from "../../assets/projects/autoonline.png";
import vedexpress_mobile from "../../assets/projects/vedexpress_mobile.jpg";
import aperture_mobile from "../../assets/projects/aperture_mobile.jpg";
import signal_mobile from "../../assets/projects/signal_mobile.jpg";
import autoonline_mobile from "../../assets/projects/autoonline_mobile.jpg";
import {useState} from "react";

const projects = [
    {
        id: "vedexpress",
        title: "Vedexpress",
        subtitle: "Вымышленный сайт сервиса доставки",
        description: "Практиковал grid-верстку, осваивал javascript в ui.",
        img_desktop: vedexpress,
        img_mobile: vedexpress_mobile,
        url: "https://konstantin-larin.github.io/vedexpress/VEDExpressRu.html",
    },
    {
        id: "autoonline",
        title: "Autoonline",
        subtitle: "Вымышленный сайт онлайн-школы по обучению ПДД",
        description: "Практиковал svg-, js-, css-анимации",
        img_desktop: autoonline,
        img_mobile: autoonline_mobile,
        url: "https://konstantin-larin.github.io/autoonline/",
    },
    {
        id: "signal",
        title: "Signal",
        subtitle: "Вымышленный сайт агенства с услугами по креативному и техническому обеспечению мероприятий",
        description: "Практиковал встраивание сторонних фрэймов (с Rutube), также вручную создал слайдер.",
        img_desktop: signal,
        img_mobile: signal_mobile,
        url: "https://konstantin-larin.github.io/signal_company/",
    },
    {
        id: "aperture",
        title: "Aperture",
        subtitle: "Вымышленный сайт студии фотографов",
        description: "Практиковал интересные css-эффекты, такие как параллакс, также создал галерею изображений.",
        img_desktop: aperture,
        img_mobile: aperture_mobile,
        url: "https://konstantin-larin.github.io/aperture/",
    }
]
export default function Projects() {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <Section id={'projects'} >
            <Swiper
                modules={[Navigation, Keyboard]}
                keyboard={
                    {
                        onlyInViewport: true,
                        enabled: true,
                    }
                }
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className={"h-full"}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {projects.map(project => {
                    return (
                        <SwiperSlide key={project.id}>
                            <Project project={project} isOpened={isOpened} setIsOpened={setIsOpened}></Project>
                        </SwiperSlide>
                    )
                })}
                <div className={"swiper-button-next p-8 bg-black opacity-30 hover:opacity-70 transition-opacity"}></div>
                <div className={"swiper-button-prev p-8 bg-black opacity-30 hover:opacity-70 transition-opacity"}></div>
            </Swiper>
        </Section>
    )
}