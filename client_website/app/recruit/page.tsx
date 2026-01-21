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
        <section className="mx-auto  min-h-screen flex items-center bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200 overflow-x-hidden">
            <div className="bg-white rounded-2xl w-200 shadow-lg mx-auto md:pt-12 pt-24 md:mt-19 ">
                <h1 className="text-black font-semibold text-4xl text-center after:content-[''] after:block after:w-5 after:bg-orange-500 after:h-1 after:mt-4 after:px-10 after:mx-auto "> 応募フォーム</h1>
                <div className="">
                    <form onSubmit={handleSubmit} className=" flex flex-col  items-center text-black gap-5 mt-12 px-10 ">
                        <label className="text-lg text-black ">
                            氏名
                        </label>
                        <input required type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value })} className="focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400 w-50 pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black">
                            年齢
                        </label>
                        <input required type="number" id="age" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} className="focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400 w-50 pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black ">
                            メールアドレス
                        </label>
                        <input required type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400 w-50 pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black ">
                            お電話
                        </label>
                        <input required type="tel" id="phone" value={formData.phone_number} onChange={(e) => setFormData({...formData, phone_number: e.target.value})} className="focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400 w-50 pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black ">
                            現在の仕事
                        </label>
                        <input required type="text" id="job" value={formData.job} onChange={(e) => setFormData({...formData, job: e.target.value})} className="focus:outline-none focus:ring focus:ring-orange-300 shadow-md border-2 border-orange-400 w-50 pl-3 rounded-lg">
                        </input>
                        <label className="text-lg text-black ">
                            なぜ応募したいですか？（簡単に）
                        </label>
                        <textarea rows={4} required id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="focus:outline-none focus:ring focus:ring-orange-300 shadow-lg border-2 border-orange-400 pl-3 pt-3 pb-30 md:w-125 w-80 rounded-lg">
                        </textarea>
                        <button className="ring ring-orange-800 shadow-lg px-8 hover:scale-110 transition-transform rounded-2xl bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 hover:bg-orange-500 text-xl mt-10 mb-10 px-6 py-2 w-auto cursor-pointer justify-self-center">
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
            </section>
    )
}