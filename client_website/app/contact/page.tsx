
export default function Contact() {

    return(
        <section className="mx-auto min-h-screen flex items-center bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200">
        <div className=" bg-white shadow-lg mx-auto w-200 min-h-screen mx-auto md:px-50 px-10 py-10 pt-16">
        <form className="text-2xl ">
        <h1 className="text-center text-4xl mt-10 text-black">お問い合わせ</h1>
        <div className="pt-5 mx-auto grid grid-col gap-4 "> 
            <label className="text-black block text-lg ">氏名</label>
            <input type="text" required className="text-lg bg-white text-black border-2  border-orange-400 pl-2" />
            <label className="text-black text-lg">メールアドレス</label>
            <input type="email" required className=" text-lg bg-white text-black border-2  border-orange-400 pl-2" />
            <label className="text-black block text-lg">お問い合わせ内容</label>
            <textarea required className=" text-lg bg-white text-black border-2  border-orange-400 pl-2" />
            <button className="cursor-pointer border rounded-2xl border-red-500 bg-rose-500 justify-self-center mt-10 px-6 py-2 w-auto" 
            > 
            送信</button>
        </div>
        </form>
        </div>
        </section>
    )
}