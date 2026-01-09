
export default function Contact() {

    return(
        <section className="pb-42 pt-50 container mx-auto ">
        <div className="flex items-center container mx-20 my-20 pr-5">
        <form className="text-2xl mx-50 mt-25 border border-red-500 ">
        <h1 className="text-center text-6xl mt-10 ">問い合わせフォーム</h1>
        <div className="pt-5 -pb-24"> 
            <div>
                <label className="mx-10">お名前</label>
                <input type="email" className="mx-10 my-5 bg-white text-black" />
            </div>
            <div>
                <label className="mx-10">メールアドレス</label>
                <input type="email" className="mx-5 my-5 bg-white text-black" />
                <button className="cursor-pointer border rounded-full border-red-500 bg-rose-500" 
                > 
                Submit</button>
            </div>

        
        </div>
        </form>
        </div>
        </section>
    )
}