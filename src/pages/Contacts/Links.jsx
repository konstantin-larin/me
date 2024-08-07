import TgIcon from "./TgIcon.jsx";
import GithubIcon from "./GithubIcon.jsx";
import VkIcon from "./VkIcon.jsx";
export default  function Links(){
    return (
        <div className={"flex flex-col"}>
            <a href={"https://t.me/klx33"} target={"_blank"} className={"group transition-all focus:text-[#29b6f6] hover:text-[#29b6f6] px-10 flex items-center  justify-between bg-black text-2xl md:text-3xl lg:text-4xl tracking-widest font-mono bg-opacity-50 hover:bg-opacity-70 gap-8 flex-grow basis-0"}>Telegram <TgIcon></TgIcon></a>
            <a href={"https://github.com/konstantin-larin/"} className={"group transition-all focus:text-black hover:text-black px-10 flex items-center justify-between bg-black text-2xl md:text-3xl lg:text-4xl tracking-widest font-mono bg-opacity-50 hover:bg-opacity-70 hover:bg-white hover: gap-8  flex-grow basis-0"}>Github <GithubIcon></GithubIcon></a>
            <a href={"https://vk.com/konstantin_larin_33"} className={"group transition-all focus::text-[#5281b8] hover:text-[#5281b8] px-10 flex items-center justify-between bg-black text-2xl md:text-3xl lg:text-4xl tracking-widest font-mono bg-opacity-50 hover:bg-opacity-70 gap-8  flex-grow basis-0"}>ВКонтакте <VkIcon></VkIcon></a>
        </div>
    )
}