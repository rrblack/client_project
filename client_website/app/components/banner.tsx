import Link from "next/link";

export default function Banner(){
    
    return(
        <section className="fixed bottom-0 right-0 z-99">
            <div className="">
                    <Link href="/recruit" className="">
                        <img className="w-100 h-full block" src={"line.png"}/>
                        </Link>
                    <div className="absolute bottom-0 right-0 mb-9 ">
                    </div>
            </div>
        </section>
    )
}