import mainPhoto from "/src/assets/mainphoto.png";
import Section from "../../layouts/Section.jsx";
import {useEffect, useState} from "react";

export default function AboutMe() {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
        const img = new Image()
        img.src = mainPhoto
        img.onload = () => setSourceLoaded(mainPhoto)
    }, [mainPhoto, sourceLoaded])


    return (
        <Section id={"about-me"} className={
            "select-text px-8 flex !items-start !justify-between flex-col md:flex-row"}>
            <div className={"max-sm:text-center relative z-10"}>
                <h1 className={"text-3xl tracking-wider text-balance sm:text-4xl md:text-5xl mt-6 sm:mt-10 md:mt-15 lg:mt-20"}>Константин Ларин</h1>
                <h2 className={"mt-6 text-xl sm:text-2xl md:text-3xl"}>Программист, 20 лет</h2>
                <h3 className={"mt-4 sm:text-lg md:text-xl md:w-1/2"}>
                    Умею выполнять разные задачи разработки, связанные с javascript.
                    В основном специализируюсь на frontend, но немного знаю и за backend.
                </h3>
            </div>

            {sourceLoaded ? <img
                src={sourceLoaded}
                className={"w-1/2 h-auto mh:w-auto mh:h-2/4 mh:lg:h-2/3 mh:xl:h-4/5 self-center md:self-end"}
                alt="Константин Ларин"
            /> : ""}
        </Section>
    )
}