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
    const [activeSectionId, setActiveSectionId] = useState(sections[0].id);
    const activeSectionIndex = sections.findIndex(section => section.id === activeSectionId);

    function onWheel(e) {
        if(Math.abs(e.deltaY) < 100) return;
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

    function onResize(){
        setActiveSectionId(sections[0].id);
    }

    useEffect(() => {
        window.addEventListener('wheel', onWheel);
        document.addEventListener('keydown', onKeyDown);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('wheel', onWheel);
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [onWheel, onResize, onKeyDown]);

    useEffect(() => {
        document.getElementById(activeSectionId).scrollIntoView({behavior: "smooth"});
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
