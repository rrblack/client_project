

export default function Recruit() {

    return(
        <section className="mx-auto  min-h-screen flex items-center bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200">
            <div className="bg-white rounded-2xl w-200 shadow-lg min-h-screen mx-auto mt-10 pt-24 ">
                <h1 className="text-black font-bold text-6xl text-center "> 応募フォーム</h1>
                <div className="flex justify-center">
                    <form className="grid grid-cols-1 items-center text-black gap-5 mt-15 px-10 ">
                        <label className="text-2xl text-black ">
                            氏名
                        </label>
                        <input required type="text" className=" outline outline-2 outline-black w-50 pl-3">
                        </input>
                        <label className="text-2xl text-black ">
                            年齢
                        </label>
                        <input required type="number" className=" outline outline-2 outline-black w-50 pl-3">
                        </input>
                        <label className="text-2xl text-black ">
                            メールアドレス
                        </label>
                        <input required type="email" className=" outline outline-2 outline-black w-50 pl-3">
                        </input>
                        <label className="text-2xl text-black ">
                            お電話
                        </label>
                        <input required type="tel" className=" outline outline-2 outline-black w-50 pl-3">
                        </input>
                        <label className="text-2xl text-black ">
                            現在の仕事
                        </label>
                        <input required type="tel" className=" outline outline-2 outline-black w-50 pl-3">
                        </input>
                        <label className="text-2xl text-black ">
                            なぜ応募したいですか？（簡単に）
                        </label>
                        <textarea required className=" outline outline-2 outline-black w-50 pl-3">
                        </textarea>
                        <button className="rounded-2xl bg-red-500 text-xl mt-10 px-6 py-2 w-auto cursor-pointer justify-self-center    ">
                            送信
                        </button>   
                    </form>
                </div>
            </div>
            </section>
    )
}