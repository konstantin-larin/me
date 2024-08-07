import './App.css'
import Navigation from './layouts/Navigation/Navigation.jsx'
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Projects from './pages/Projects/Projects.jsx'
import Contacts from "./pages/Contacts/Contacts.jsx";
import {useEffect, useState} from "react";

const sections = [
    {
        id: "about-me",
        label: "Обо мне",
    },
    {
        id: "projects",
        label: "Проекты"
    },
    {
        id: "contacts",
        label: "Контакты"
    }
]

function App() {
    const [isScroll, setIsScroll] = useState(defineIsScroll())
    const [activeSectionId, setActiveSectionId] = useState(sections[0].id);
    const activeSectionIndex = sections.findIndex(section => section.id === activeSectionId);

    function defineIsScroll(){
        return window.innerHeight <= 450;
    }


    function onWheel(e) {
        if (Math.abs(e.deltaY) < 100) return;
        if (e.deltaY < 0 && activeSectionIndex > 0) {
            setActiveSectionId(sections[activeSectionIndex - 1].id);
        }
        if (e.deltaY > 0 && activeSectionIndex < sections.length - 1) {
            setActiveSectionId(sections[activeSectionIndex + 1].id);
        }
    }

    function onKeyDown(e) {
        if (e.code === 'ArrowUp' && activeSectionIndex > 0) {
            setActiveSectionId(sections[activeSectionIndex - 1].id);
        }
        if (e.code === "ArrowDown" && activeSectionIndex < sections.length - 1) {
            setActiveSectionId(sections[activeSectionIndex + 1].id);
        }
    }

    function onResize() {
        setIsScroll(defineIsScroll());
        setActiveSectionId(sections[0].id);
    }

    function onScroll(e){
        console.log(e);
        const el = document.getElementById(activeSectionId);
        if(window.scrollY - el.offsetTop < -30 && activeSectionIndex > 0){
            setActiveSectionId(sections[activeSectionIndex - 1].id);
        }
        if(window.scrollY > (el.scrollHeight / 1.4 + el.offsetTop) && activeSectionIndex < sections.length - 1){
            setActiveSectionId(sections[activeSectionIndex + 1].id);
        }
    }

    // для телефонов
    function onTouchStart(e) {
        const Y = e.touches[0].clientY;

        function onTouchMove(e) {
            const y = e.touches[0].clientY;
            const diff = Y - y;
            if (Math.abs(diff) > window.innerHeight / 4) {
                onTouchEnd();
                if (diff < 0 && activeSectionIndex > 0) {
                    setActiveSectionId(sections[activeSectionIndex - 1].id);
                }
                if (diff > 0 && activeSectionIndex < sections.length - 1) {
                    setActiveSectionId(sections[activeSectionIndex + 1].id);
                }
            }
        }

        function onTouchEnd() {
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('touchcancel', onTouchEnd);
        }

        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
        window.addEventListener('touchcancel', onTouchEnd);
    }

    useEffect(() => {
        if(isScroll){
            window.addEventListener('resize', onResize);
            window.addEventListener('scroll', onScroll)
            return () => {
                window.removeEventListener('resize', onResize);
                window.removeEventListener('scroll', onScroll)
            }
        } else {
            window.addEventListener('touchstart', onTouchStart);
            window.addEventListener('wheel', onWheel);
            document.addEventListener('keydown', onKeyDown);
            window.addEventListener('resize', onResize);
            return () => {
                window.removeEventListener('touchstart', onTouchStart);
                window.removeEventListener('resize', onResize);
                window.removeEventListener('wheel', onWheel);
                document.removeEventListener('keydown', onKeyDown);
            }
        }
    }, [onWheel, onResize, onKeyDown, onScroll]);

    useEffect(() => {
        if(!isScroll){
            document.getElementById(activeSectionId).scrollIntoView({behavior: "smooth"});
        }
    }, [activeSectionId]);

    return (
        <>
            <Navigation sections={sections} activeSectionId={activeSectionId}
                        setActiveSectionId={setActiveSectionId}></Navigation>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contacts></Contacts>
        </>)
}

export default App