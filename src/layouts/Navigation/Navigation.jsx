export default function Navigation({sections = [], activeSectionId = '',setActiveSectionId}) {
    return (
        <nav
            className={"fixed top-0 left-0 min-w-[320px] w-full z-50 min-h-14 flex items-center justify-center gap-8 bg-indigo-950  sm:text-xl 2xl:text-2xl"}>
            {sections.map((section) => {
                return (
                    <button key={section.id}
                       onClick={() => {
                           setActiveSectionId(section.id);
                       }}
                       className={"transition-colors underline-offset-8  hover:text-violet-500 hover:underline" + (section.id === activeSectionId ? " text-violet-600 underline" : "")}
                    >
                        {section.label}
                    </button>
                )
            })}
        </nav>
    )
}