export default function Section({id, children, className=""}){
    return (
        <div id={id} className={className + " mh:h-svh pt-14 flex justify-center items-center"}>
            {children}
        </div>
    )
}