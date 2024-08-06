import mainPhoto from "/src/assets/lilophoto.png";
import Section from "../../layouts/Section.jsx";

export default function AboutMe() {
    return (
        <Section id={"about-me"} className={"bg-opacity-50 bg-black sm:bg-opacity-0 select-text px-8"}>
            <div className={"w-full h-full max-sm:text-center relative z-10"}>
                <h1 className={"text-3xl tracking-wider text-balance sm:text-4xl md:text-5xl mt-40"}>Константин Ларин</h1>
                <h2 className={"mt-6 text-xl sm:text-2xl md:text-3xl"}>Программист, 20 лет</h2>
                <h3 className={"mt-4 sm:text-lg md:text-xl md:w-1/2"}>
                    Умею выполнять разные задачи разработки, связанные с javascript.
                    В основном специализируюсь на frontend, но немного знаю и за backend.
                </h3>
            </div>
            <img
                src={mainPhoto}
                className={"h-2/4 lg:h-2/3 xl:h-4/5 absolute bottom-0 right-4"}
                 alt="Константин Ларин"
            />
        </Section>
    )
}