import Link from "next/link";

export default function Banner(){
    
    return(
        <section className="fixed bottom-0 right-0 z-99 pb-10">
            <div className="flex items-center relative bg-red-500/50 hover:bg-red-500 rounded-lg w-80 h-25 shadow-2xl transition-all">
                    <h1 className="text-center text-2xl text-white p-8 font-semibold"> ライバーの新規登録は<br></br>こちら ➡</h1>
                    <Link href="/recruit" className="z-1 px-8 text-white text-center text-2xl   rounded-full font-semibold transition-transform hover:scale-105">
                        応募する
                        </Link>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-9 ">
                    </div>
            </div>
        </section>
    )
}