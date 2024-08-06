import {useEffect, useState} from "react";

export default function Project({project, isOpened, setIsOpened}) {
    const [isMobile, setIsMobile] = useState(null);
    const img = isMobile ? project.img_mobile : project.img_desktop;
    function defineIsMobile(){
        if(window.innerWidth > 480){
            setIsMobile(false)
        } else setIsMobile(true);
    }

    function handleResize(){
        defineIsMobile();
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); }
    }, []);
    return (
        <div className={`h-full relative flex items-center justify-center select-text bg-center bg-cover bg-no-repeat bg-violet-500 bg-opacity-50 bg-blend-multiply`} style={{
            backgroundImage: `url(${img})`,
        }}>
            <div
                className={"w-9/12 sm:w-10/12 self-end duration-400 rounded-t-2xl" + (isOpened ? " h-4/5 bg-indigo-950" : "  h-16")}>
                <button
                    onClick={() => {
                        setIsOpened(!isOpened)
                    }}
                    className={"w-full transition-opacity rounded-t-2xl opacity-70 hover:opacity-100 bg-indigo-950 h-16  text-lg sm:text-xl"}>
                    {isOpened ? "Скрыть информацию" : "О проекте"}
                </button>

                <div className={"px-8 mt-3"}>
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
        </div>
    )
}