import Section from "../../layouts/Section.jsx";
import TgChannel from "./TgChannel.jsx";
import Links from "./Links.jsx";
export default function Contacts(){
    return (
        <Section id="contacts" className={"flex items-center pb-14 mh:pb-0"}>
            <div className={"grid grid-rows-2 md:grid-cols-2 md:grid-rows-1"}>
                <TgChannel></TgChannel>
                <Links></Links>
            </div>
        </Section>
    )
}