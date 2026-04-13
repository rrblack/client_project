// app/page.tsx
import Link from 'next/link'
import Banner from './components/banner'

export default function Home() {
  return (
    <div className="select-none">
  <Banner/>
       {/* Hero */}
      <section className="relative mx-auto min-h-screen overflow-hidden bg-white circle-pattern">
      <div className='px-4 mt-18 mb-8'>
        <img alt='woman live streaming' className='w-full h-full object-fill rounded-2xl' src="actually_main_photo.jpg"/>
      </div>

      {/* Shapes */}
      {/* <div className='absolute bg-yellow-300 w-25 h-25 mt-44 rotate-12'></div>
      <div className='absolute bg-black/20 w-25 h-25 mt-44 mx-2 rotate-12'></div>
      <div className='absolute bg-pink-400 w-25 h-25 mt-69 rounded-full mx-94 rotate-12'></div>
      <div className='absolute bg-orange-500/40 w-25 h-25 mt-69 rounded-full mx-92 rotate-12'> </div>
      <div className='absolute z-50 mt-150 w-0 h-0 rotate-90 scale-85 border-l-[50px] border-r-[50px] border-b-[100px] border-l-transparent border-r-transparent border-b-blue-500'></div>
      <div className='absolute z-99 mt-150 mx-2 w-0 h-0 rotate-90 scale-85 border-l-[50px] border-r-[50px] border-b-[100px] border-l-transparent border-r-transparent border-b-black/20'></div>   */}
      <p className=' inset-0 text-black text-5xl text-center font-black'> ライブ配信で<br></br>生きていく</p>
      <p className=' inset-0 text-black text-lg text-center font-black mt-8'> 頑張った時間が収入になる！<br></br>
      モアプロはあなたが最短で稼げるように支援します</p>

      {/* LINE button function */}
      <div data-aos="fade-up" data-aos-duration="800" className='relative flex items-center justify-center mt-20 bg-gradient-to-br from-yellow-100 to-yellow-400 h-35 overflow-visible '>
      {/* Speech bubble */}
      <div className='z-50 absolute top-3 bg-white rounded-2xl w-40 font-sans text-center object-center py-1 scale-120 text-green-500 outline-1 outline-black/20 shadow-xl'> まずは気軽に面談</div>
       {/* Speech bubble arrow */}
      <div className='z-50  absolute border-l-[12px] border-r-[12px] border-b-[12px] border-t-[12px] border-l-transparent border-b-transparent border-r-transparent border-t-white -mt-7'> </div>
      {/* LINE button start*/}
      <button className='flex items-center justify-center gap-2 bg-gradient-to-r from-[#008234] to-[#5DD68D] rounded-4xl w-65 h-13 font-sans cursor-pointer text-xl text-white font-bold scale-120'> <img width="36" height="36" src="https://img.icons8.com/color/50/line-me.png" alt="line-me"/>  LINEで応募する <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
   <  path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>
    {/* LINE button end*/}
      </div>
      {/*LINE button function end */}
        <div className='absolute w-full bottom-0 left-0 '>
          <div className='text-2xl text-black tracking-widest scrolling font-bold'>
            <span>Moasobi Project ・ Moasobi Project ・ Moasobi Project ・ Moasobi Project ・ Moasobi Project ・ Moasobi Project ・ </span>
            <span>Moasobi Project ・ Moasobi Project ・ Moasobi Project ・ Moasobi Project ・ Moasobi Project ・ Moasobi Project ・ </span>
          </div>
        </div>
      </section>
      {/* Section end */}

      {/*Question*/}
      <section className='py-20 px-6 bg-white overflow-hidden circle-pattern'>
      <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-black tracking-wider font-bold text-center pb-2'>QUESTION</p>
      <p data-aos="fade-up" data-aos-duration="1000" className='text-3xl text-black font-bold text-center pb-2'>ライブ配信とは？</p>
      <div className='flex justify-center items-center mx-auto bg-gray-300/10 rounded-xl p-4 border-4 border-yellow-500'>
      {/*Placeholder - picture goes here*/}
        <div className='block bg-gray-400 w-full h-100  pb-4'>
        </div>
      </div>
      <p className='text-2xl font-black text-black mt-4 pb-4'>ライブ配信だけで生活する先輩ライバーも多数在籍！正しいやり方で継続すれば安定して稼げる！</p>
        <p className='text-lg font-bold text-black '>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ</p>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div data-aos="fade-up" data-aos-duration="3000" className="mx-auto items-center">
           <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-black tracking-wider font-bold text-center pb-2'>ABOUT</p>
           <p data-aos="fade-up" data-aos-duration="1000" className='text-3xl text-black font-bold text-center pb-4'>モアプロとは？</p>
           <img className="w-full h-full x-auto object-cover rounded-4xl pb-4" src="/7.jpg" alt="" />
            <p className="text-lg   text-black">
             モアプロは、ライブ配信という文化が生まれた時から、配信者に寄り添いプロデュース・マネジメントを行ってきました。<br></br>
              ライブ配信という枠を飛び越え、配信者の夢を形にしてきた実績があります。<br></br>KDDI主催の大型オーディションの運営事務局を担当するなど、外部とのコネクションが豊富です。
            </p>
        </div>
      </section>

        {/* メリット */}
      <section className='py-20 px-6 bg-white -mb-15 overflow-hidden'>
        <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-black tracking-wider font-bold text-center pb-2'>MERIT</p>
        <p data-aos="fade-up" data-aos-duration="1000" className='text-3xl text-black font-semibold text-center'>モアプロのメリット</p>
        <div className='container mx-auto grid p-4 items-start gap-4 mt-6 '>
          <div className='py-4 flex flex-row gap-2'>
            <p data-aos="fade-up" data-aos-duration="1000" className='gap-4 text-5xl text-black font-semibold text-center h-22 tracking-wider'>01</p>
            <div data-aos="fade-up" data-aos-duration="1000" className='bg-black w-0.5 h-12 block text-black'></div>
            <p data-aos="fade-up" data-aos-duration="1000" className='gap-4 text-2xl text-black font-semibold text-center h-22'>万全のサポート体制で<br></br>安心して継続できる</p>
            </div>
            {/* Image placeholder */}
            <span data-aos="fade-up" data-aos-duration="1000" className="block flex justify-center items-center mx-auto mt-2 w-50 h-50 object-cover rounded-full bg-pink-500 "></span>
            <p className='text-black font-bold text-lg'>配信者として稼ぐにはまずは継続すること！しかし、一人ではなかなか継続できなかったり、辞めてしまう人が多いです。<br></br><br></br>モアプロは、配信者として活動する業界に精通したマネージャーがみなさんをサポートするから、安心して継続できます！ </p>
            <div className='py-4 flex flex-row gap-2'>
            <p data-aos="fade-up" data-aos-duration="1000" className='gap-4 text-5xl text-black font-semibold text-center h-22 tracking-wider'>02</p>
            <div data-aos="fade-up" data-aos-duration="1000" className='bg-black w-0.5 h-12 block text-black'></div>
            <p data-aos="fade-up" data-aos-duration="1000" className='gap-4 text-2xl text-black font-semibold text-center h-22'>高い還元率で<br></br>配信した分だけ稼げる</p>
            </div>
            {/* Image placeholder */}
            <span data-aos="fade-up" data-aos-duration="1000" className="block flex justify-center items-center mx-auto  w-50 h-50  object-cover rounded-full bg-pink-500 "></span>
            <p className='text-black font-bold text-lg'>モアプロでは、ライバーとして稼げるように業界トップクラスの還元率を提供します。ライブ配信事務所として、みなさんの活躍を後押しできる収入体系をご提供します。</p>
            <div className='py-4 flex flex-row gap-2'>
            <p data-aos="fade-up" data-aos-duration="1000" className='gap-4 text-5xl text-black font-semibold text-center h-22 tracking-wider'>03</p>
            <div data-aos="fade-up" data-aos-duration="1000" className='bg-black w-0.5 h-12 block text-black'></div>
            <p data-aos="fade-up" data-aos-duration="1000" className='gap-4 text-2xl text-black font-semibold text-center h-22'>幅広いマネタイズ力で<br></br>配信以外でも稼げる</p>
            </div>
            {/* Image placeholder */}
            <span data-aos="fade-up" data-aos-duration="1000" className="block flex justify-center items-center mx-auto mt-2 w-50 h-50 object-cover rounded-full bg-pink-500 "></span>
            <p className='text-black font-bold text-lg'>広告代理店出⾝のメンバーが創業したからこそできる、企業案件やPR案件のご紹介も！<br></br>ライブ配信以外でのマネタイズ機会もご提供いたします。</p>
        </div>
      </section>

      {/* 収入 */}
      <section className='py-20 px-6 bg-white overflow-hidden'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-5xl text-black font-bold text-center pb-2'>収入イメージ</h1>
        <h2 data-aos="fade-up" data-aos-duration="1000" className='text-2xl text-black font-bold text-center p-8'> BIGO LIVEなら―― </h2>
        <div className='mx-auto flex flex-col items-center justify-center gap-6 pt-6 w-full h-full p-4'>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250" className='flex justify-center items-center bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 w-75 h-50 rounded-xl p-4 shadow-lg'>
            <div className=''>
            <p data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-center font-semibold'>未経験スタート </p>
            <p data-aos="fade-right" data-aos-duration="1000" className='text-3xl text-center p-4 font-black'>月3～10万円 </p>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className='bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 w-75 h-50 rounded-xl p-4 flex justify-center items-center shadow-lg'>
            <div className=''>
           <p data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-center font-bold'>安定配信 </p>
            <p data-aos="fade-right" data-aos-duration="1000" className='text-3xl text-center p-4 font-black'>月10～30万円 </p>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="750" className='bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 w-75 h-50 rounded-xl p-4 flex justify-center items-center shadow-lg'>
            <div className=''>
           <p data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-center font-bold'>継続的に活動</p>
            <p data-aos="fade-right" data-aos-duration="1000" className='text-3xl text-center p-4 font-black'>月30万円以上も可能</p>
            </div>
          </div>
        </div>
        <p data-aos="fade-up" data-aos-duration="1000" className='text-2xl text-black text-center p-5 w-full justify-self-center'> まずは「時給収入」から無理なくステップアップできます。</p>
      </section>

        {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-white text-center">
        <div className="container mx-auto">
          <h2 data-aos="fade-up" data-aos-duration="1000" className="text-xl font-bold mb-6">ライブ配信はもう、一部の人だけの世界ではありません。</h2>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-3xl mb-8 mx-auto font-bold">BIGO LIVE × モアプロなら</p>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-3xl mb-8  mx-auto font-bold">&quot;誰でも、ちゃんと稼げる配信者になれる&quot;</p>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-xl mb-8 mx-auto font-bold">まずは気軽にご相談ください。</p>
          {/* LINE button function */}
      <div data-aos="fade-up" data-aos-duration="800" className='relative flex items-center justify-center mt-20  h-35 overflow-visible '>
      {/* Speech bubble */}
      <div className='z-50 absolute top-3 bg-white rounded-2xl w-40 font-sans text-center object-center py-1 scale-120 text-green-500 outline-1 outline-black/20 shadow-xl'> まずは気軽に面談</div>
       {/* Speech bubble arrow */}
      <div className='z-50  absolute border-l-[12px] border-r-[12px] border-b-[12px] border-t-[12px] border-l-transparent border-b-transparent border-r-transparent border-t-white -mt-7'> </div>
      {/* LINE button start*/}
      <button className='flex items-center justify-center gap-2 bg-gradient-to-r from-[#008234] to-[#5DD68D] rounded-4xl w-65 h-13 font-sans cursor-pointer text-xl text-white font-bold scale-120'> <img width="36" height="36" src="https://img.icons8.com/color/50/line-me.png" alt="line-me"/>  LINEで応募する <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
   <  path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>
    {/* LINE button end*/}
      </div>
      {/*LINE button function end */}
        </div>
      </section>

      {/* この人にピッタリ */}
      <section className='bg-white py-20 px-6 overflow-hidden -mt-20'>
        <p data-aos="fade-up" data-aos-duration="1000" className='text-3xl text-black text-center font-bold'> モアプロはこんな人にピッタリ！</p>
        <div className='flex mx-auto justify-center items-center shadow-md rounded-xl bg-gray-300/20 p-4 mt-10 mb-10'>
          <div className='flex justify-center items-center text-2xl'>
            <ul className='text-black text-center　'>
              <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250" className="before:content-['✔'] before:p-2 before:text-green-500">
                未経験から配信を始めたい
              </li>
              <br></br>
              <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className="before:content-['✔'] before:p-2 before:text-green-500">
                安定して稼ぎたい
              </li>
              <br></br>
              <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="750" className="before:content-['✔'] before:p-2 before:text-green-500">
                在宅で収入をつくりたい
              </li>
              <br></br>
              <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000" className="before:content-['✔'] before:p-2 before:text-green-500">
                TikTokやインスタライブがうまくいかなかった
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 応募 */}
      <section className='bg-white py-20 px-6 overflow-hidden -mt-20'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-3xl text-black text-center font-bold mx-auto'>応募からデビューまで</h1>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-3xl text-black text-center font-bold mx-auto p-4 mt-4'>たった3ステップ </h1>
        <div className='flex flex-col mx-auto justify-center items-center mt-10'>
          <div className='flex flex-col justify-center items-center'>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250" className='flex flex-col justify-center items-center text-8xl mx-auto object-cover bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full w-50 h-50 text-center'>
          1
          </div>
          <h1 data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-black text-center font-bold mx-auto p-10'>無料応募</h1>
          </div>
          <div className='flex flex-col mx-auto justify-center items-center  '>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className='flex flex-col justify-center items-center text-8xl mx-auto object-cover bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full w-50 h-50 text-center'>
          2
          </div>
          <h1 data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-black text-center font-bold mx-auto p-10'>オンライン面談</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="750" className='flex flex-col justify-center items-center text-8xl mx-auto object-cover bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full w-50 h-50 text-center'>
          3
          </div>
          <h1 data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-black text-center font-bold mx-auto p-10'>配信スタート</h1>
          </div>
        </div>
       <h1 data-aos="fade-up" data-aos-duration="1000" className='text-2xl text-orange-500 text-center font-bold mx-auto p-10'>最短で、応募当日から開始も可能</h1>
      </section>


      {/* 所属ライバー */}
      <section className="py-20 px-6 bg-gradient-to-bl from-pink-200 via-orange-100 to-yellow-100 overflow-hidden">
        <h2 className='relative text-5xl text-orange-500 font-bold text-center mb-10 '>
                所属ライバー
                </h2>
        <div className='grid justify-items-center gap-10 '>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" className='mt-5'>
              <img className="w-90 h-90 mx-auto object-cover rounded-full" src="/nao.jpg" alt="Nao" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>Nao</span>
              <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto text-red-300 text-xl mt-5'>
              <p> 思わず見惚れる、圧倒的な可愛さ。ディズニーや旅行、野球まで幅広い趣味を持ち、どんな話題でも楽しめる話題豊富なライバーです。
                <br></br>
                <br></br>
                とびきりの笑顔と明るい人柄で、配信はいつも楽しく、あっという間に時間が過ぎていきます。</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='mt-5'>
              <img className="w-90 h-90 mx-auto object-cover rounded-full" src="/saki.jpg" alt="Saki" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>さき</span>
              <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto text-red-300 text-xl mt-5'>
              <p> 明るさと優しさで、自然と元気をもらえる存在。現役看護学生として忙しい日々を送りながらも、いつも前向きで、誰にでも寄り添えるあたたかい人柄が魅力のライバーです。
              <br></br>
              <br></br>
                リアクションも豊かで会話も楽しく、相談にも親身に向き合ってくれる、安心感のある配信が人気です。</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="750" className='mt-5'>
              <img className="w-90 h-90 mx-auto object-cover rounded-full" src="/aoki.jpg" alt="Aoki" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>あおきたかはし</span>
              <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl text-red-300 text-xl mt-5'>
              <p> 気づけば、また会いたくなる存在。少し不思議で、でもとても優しくて。その人柄に惹かれ、多くのファンが集まるライバーです。
                <br></br>
              <br></br>
                配信はいつも温かく、自然と笑顔になれる空間になっています。</p>
              </div>
            </div>
          </div>
      </section>

      {/* Q&A */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">Q&A</h2>
          <div className="space-y-4 text-black">
              <details data-aos="fade-right" data-aos-delay="100" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">ライバーって何をするんですか？</summary>
                <p className="mt-4 text-gray-600">ライブ配信アプリで生配信を行います。自分の趣味や今日のできごとなど、簡単な雑談からスタートできます。特別なスキルは必要ありません。</p>
              </details>
              <details data-aos="fade-right" data-aos-delay="150" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">本当に未経験でも大丈夫？</summary>
                <p className="mt-4 text-gray-600">はい。ほとんどの方が未経験からのスタートです。</p>
              </details>
              <details data-aos="fade-right" data-aos-delay="200"  className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">顔出しは必要？</summary>
                <p className="mt-4 text-gray-600">必要ではありません。あなたに合った形を提案します。</p>
              </details>
              <details data-aos="fade-right" data-aos-delay="300"  className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">費用はかかりますか？</summary>
                <p className="mt-4 text-gray-600">登録・サポートはすべて無料です。</p>
              </details>
              <details data-aos="fade-right" data-aos-delay="400" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">配信時間の決まりは？</summary>
                <p className="mt-4 text-gray-600">無理のない範囲で相談しながら決められます。</p>
              </details>
              <details data-aos="fade-right" data-aos-delay="500" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">他の仕事との掛け持ちはできますか？</summary>
                <p className="mt-4 text-gray-600">可能です。学業や本業と両立しながら活動されている方も多数いらっしゃいます。あなたのライフスタイルに合わせた活動をサポートします。</p>
              </details>
          </div>
        </div>
      </section>

      
    </div>
  )
}
