import Section from "../../layouts/Section.jsx";
import TgChannel from "./TgChannel.jsx";
import Links from "./Links.jsx";
export default function Contacts(){
    return (
        <Section id="contacts" className={"flex items-center justify-center"}>
            <div className={"grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-4/5 h-4/5"}>
                <TgChannel></TgChannel>
                <Links></Links>
            </div>
        </Section>
    )
}