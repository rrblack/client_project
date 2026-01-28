"use client";

import { useState, FormEvent } from "react";

export default function Recruit() {
    const[formData, setFormData] = useState({
        name:'',
        age:'',
        email:'',
        phone_number:'',
        job:'',
        message:''
    });
    const[status, setStatus] = useState<'success' | 'idle' | 'loading' | 'error' >('idle');
    const[errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');
        
        try {
            const response = await fetch('https://moapro.jp/recruit.php', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if(response.ok && data.success) {
                setStatus('success');
                setFormData({name:'',age:'',email:'',phone_number:'',job:'',message:''});
            } else{
                setStatus('error')
                setErrorMessage(data.error || 'エラーが発生しました。');
            } 
            } catch(error){
                setStatus('error');
                setErrorMessage('通信エラー。 もう一度試してください。');
        }
    };


    return(
        <section className="mx-auto bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200 overflow-hidden ">
            <div className="relative w-full h-65 pt-16 md:pt-19 flex justify-center">
                <div className="absolute text-5xl md:text-6xl text-black font-semibold after:content-[''] after:block after:w-5 after:bg-orange-500 after:h-1 after:mt-4 after:px-10 after:mx-auto pt-20 z-1">ライバー応募</div>
            <img className="absolute w-full h-full rounded-sm object-cover" src="/banner.png" alt="" />
            </div>
            <div className="bg-white rounded-2xl md:w-full shadow-lg mx-auto md:pt-12 pt-24 md:mt-19 ">
                <div className="mx-auto grid grid-col gap-4 w-85 md:w-150">
                    <p className="text-center text-xl mt-10 md:mt-0 text-black font-semibold ">ライバーへのご応募にご興味をお持ちいただき、誠にありがとうございます。ぜひ一緒にお仕事ができれば嬉しく思います。</p> <p className="text-center text-xl mt-10 md:mt-0 text-black font-semibold ">下記の必要事項をご入力のうえご送信ください。内容を確認後、2営業日以内 にご連絡いたします。皆さまとお会いできること、そしてご一緒に活動できることを楽しみにしております。</p>
                    <div className="md:w-full">
                    <form onSubmit={handleSubmit} className=" flex flex-col  text-black gap-5 mt-12  font-semibold">
                        <label className="text-lg text-black before:p-2 before:content-['*'] before:text-red-500 ">
                            氏名
                        </label>
                        <input required type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value })} className="w-full focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400 pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black before:p-2 before:content-['*'] before:text-red-500">
                            年齢
                        </label>
                        <input required type="number" id="age" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} className="w-full focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400 pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black before:p-2 before:content-['*'] before:text-red-500">
                            メールアドレス
                        </label>
                        <input required type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400  pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black  before:p-2 before:content-['*'] before:text-red-500">
                            お電話
                        </label>
                        <input required type="tel" id="phone" value={formData.phone_number} onChange={(e) => setFormData({...formData, phone_number: e.target.value})} className="w-full focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400 pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black  before:p-2 before:content-['*'] before:text-red-500">
                            現在の仕事
                        </label>
                        <input required type="text" id="job" value={formData.job} onChange={(e) => setFormData({...formData, job: e.target.value})} className="w-full focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400 pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black before:p-2 before:content-['*'] before:text-red-500">
                            なぜ応募したいですか？（簡単に）
                        </label>
                        <textarea rows={4} required id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full focus:outline-none focus:ring focus:ring-orange-300 shadow-lg border-2 border-orange-400 pl-3 pt-3 pb-30  rounded-lg">
                        </textarea>
                        <button className="text-white ring ring-orange-800 shadow-lg px-8 hover:scale-110 transition-transform rounded-2xl bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 hover:bg-orange-500 text-xl mt-10 mb-10 px-6 py-2 w-full cursor-pointer justify-self-center">
                           {status === 'loading' ? '...' : '送信'} 
                        </button>
                        {status === "success" && (
                            <div className="mb-10 p-4 rounded-lg bg-green-500 border-2 border-green-500 text-white text-lg"> ご連絡ありがとうございます。2日以内に返事いたします。</div>
                        ) }
                        {status === "error" && (
                            <div className="mb-10 p-4 rounded-lg bg-red-500 border-2 border-red-500 text-white text-lg"> 申し訳ございません。送信できませんでした。{errorMessage} </div>
                        )}
                    </form>
                    </div>
                </div>
            </div>
            </section>
    )
}