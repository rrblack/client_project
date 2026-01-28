"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ' '
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');
        
        try {
            const response = await fetch('https://moapro.jp/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            setStatus('success');
            setFormData({name:'', email: '', message:''});
        } else {
            setStatus('error');
            setErrorMessage(data.error || 'エラーが発生しました。');
        }
        } catch (error) {
            setStatus('error');
            setErrorMessage('通信エラー。 もう一度試してください。');
        }
    };

    return(
        <section className="mx-auto bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200 overflow-hidden ">
            <div className="relative w-full h-65 pt-16 md:pt-19 flex justify-center">
                <div data-aos="fade-right"  className="absolute text-5xl md:text-6xl text-black font-semibold after:content-[''] after:block after:w-5 after:bg-orange-500 after:h-1 after:mt-4 after:px-10 after:mx-auto pt-20 z-1">お問い合わせ</div>
            <img className="absolute w-full h-full rounded-sm object-cover" src="/banner.png" alt="" />
            </div>
        <div className=" bg-white shadow-lg mx-auto w-full md:px-50 px-10 py-10 pt-16 rounded-2xl md:mt-19">
        <form onSubmit={handleSubmit} className="text-2xl mb-5">
        <div className="mx-auto grid grid-col gap-4 w-full md:w-150 font-semibold"> 
            <h1 className="text-center text-xl mt-10 md:mt-0 text-black font-semibold">弊社にご興味をお持ちいただき、誠にありがとうございます。こちらはお問い合わせ全般の窓口です。お問い合わせ内容を確認のうえ、通常 2営業日以内 にご返信いたします。</h1>
            <label className="text-black block text-lg before:p-2 before:content-['*'] before:text-red-500">氏名</label>
            <input type="text" required id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} 
            className="focus:outline-none focus:ring focus:ring-orange-300 shadow-sm text-lg bg-white text-black border-2  border-orange-400 pl-2 rounded-lg" />
            <label className="text-black text-lg before:p-2 before:content-['*'] before:text-red-500">メールアドレス</label>
            <input type="email" required id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="focus:outline-none focus:ring focus:ring-orange-300 shadow-sm text-lg bg-white text-black border-2  border-orange-400 pl-2 rounded-lg" />
            <label className="text-black block text-lg before:p-2 before:content-['*'] before:text-red-500">お問い合わせ内容</label>
            <textarea rows={6} required id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="focus:outline-none focus:ring focus:ring-orange-300 shadow-sm text-lg bg-white text-black border-2  border-orange-400 pl-2 pt-3 rounded-lg" />
            <button className="ring ring-orange-800 text-white shadow-lg px-8 hover:scale-110 transition-transform rounded-2xl bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 hover:bg-orange-500 text-xl mt-10 py-2 w-full cursor-pointer justify-self-center" 
            > 
            
            {status === 'loading' ? '...' : '送信'} </button>
            {status === "success" && (
                <div className="p-4 rounded-lg bg-green-500 border-2 border-green-500 text-white text-lg"> ご連絡ありがとうございます。2日以内に返事いたします。</div>
            ) }
            {status === "error" && (
                <div className="p-4 rounded-lg bg-red-500 border-2 border-red-500 text-white text-lg"> 申し訳ございません。送信できませんでした。{errorMessage} </div>
            )}
        </div>
        </form>
        </div>
        </section>
    )
}