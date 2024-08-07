import {useEffect, useState} from "react";
import mainPhoto from "../../assets/mainphoto.png";

export default function Project({project, isOpened, setIsOpened}) {
    const [isMobile, setIsMobile] = useState(null);
    const img = isMobile ? project.img_mobile : project.img_desktop;
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
        const img = new Image()
        img.src = img
        img.onload = () => setSourceLoaded(img)
    }, [img, sourceLoaded])

    function defineIsMobile() {
        if (window.innerWidth > 480) {
            setIsMobile(false)
        } else setIsMobile(true);
    }

    function handleResize() {
        defineIsMobile();
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize]);
    return (
        <div
            className={`h-[200px] mh:h-full relative flex items-center justify-center select-text bg-center bg-cover bg-no-repeat bg-violet-500 bg-opacity-50 bg-blend-multiply`}
            style={img ? {
                backgroundImage: `url(${img})`,
            } : {}}>
            <button
                onClick={() => {
                    setIsOpened(!isOpened)
                }}
                className={`
                select-none
                absolute
                bottom-5
                w-9/12 sm:w-10/12 
                transition-opacity 
                rounded-2xl 
                opacity-70 
                hover:opacity-100 
                bg-indigo-950 
                h-10 sm:h-12 lg:h-16 md:h-14  
                text-lg sm:text-xl`}>
                {isOpened ? "Скрыть информацию" : "О проекте"}
            </button>
            <div
                className={`
                w-9/12 sm:w-10/12 self-end duration-400 rounded-t-2xl
                px-8 py-3 
                ` + (isOpened ? " h-4/5 bg-indigo-950" : "  h-16")}>
                <h2 className={"text-2xl sm:text-4xl tracking-wider"}>{project.title}</h2>
                <h3 className={"mt-6 text-xl sm:text-2xl"}>{project.subtitle}</h3>
                <h4 className={"mt-4 text-lg sm:text-xl"}>{project.description}</h4>
                <div className={"mt-6"}>
                    <a href={project.url}
                       target={"_blank"}
                       className={'border-2 border-amber-50 px-2 py-1 rounded-xl text-lg sm:text-xl hover:text-violet-500 hover:border-violet-500 transition-colors'}>Посмотреть</a>
                </div>
            </div>
        </div>
    )
}