
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
            setErrorMessage(data.error || 'Something went wrong');
        }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
        }
    };

    return(
        <section className="mx-auto min-h-screen flex items-center bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200">
        <div className=" bg-white shadow-lg mx-auto w-200 min-h-screen mx-auto md:px-50 px-10 py-10 pt-16">
        <form onSubmit={handleSubmit} className="text-2xl ">
        <h1 className="text-center text-4xl mt-10 text-black">お問い合わせ</h1>
        <div className="pt-5 mx-auto grid grid-col gap-4 "> 
            <label className="text-black block text-lg ">氏名</label>
            <input type="text" required id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} 
            className="text-lg bg-white text-black border-2  border-orange-400 pl-2" />
            <label className="text-black text-lg">メールアドレス</label>
            <input type="email" required id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
            className=" text-lg bg-white text-black border-2  border-orange-400 pl-2" />
            <label className="text-black block text-lg">お問い合わせ内容</label>
            <textarea rows={6} required id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
            className=" text-lg bg-white text-black border-2  border-orange-400 pl-2" />
            <button className="cursor-pointer border rounded-2xl border-red-500 bg-rose-500 justify-self-center mt-10 px-6 py-2 w-auto" 
            > 
            送信</button>
            {status === "success" && (
                <div className="p-4 rounded-lg bg-green-500 border-2 border-green-500 text-white text-lg"> ご連絡ありがとうございます。2日以内に返事いたします。</div>
            ) }
            {status === "error" && (
                <div className="p-4 rounded-lg bg-red-500 border-2 border-red-500 text-white text-lg"> 申し訳ございません。送信できませんでした。もう一度試してください</div>
            )}
        </div>
        </form>
        </div>
        </section>
    )
}