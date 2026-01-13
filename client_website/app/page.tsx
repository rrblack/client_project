// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen select-none ">
       {/* Hero */}
      <section className="mx-auto  md:min-h-screen md:flex md:items-center bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200 overflow-x-hidden md:pt-38  ">
        <img className="absolute w-full h-full mx-auto object-cover rounded-sm" src="/S__8011843.jpg" alt="" /> 
        <div className="md:container md:mx-auto md:text-center ">
          <div className='relative md:py-0 py-25 '>
            <h1 data-aos="fade-right" data-aos-duration="3000" className="border-red-700 md:mt-40  z-11 mt-25 mx-10 absolute text-5xl md:text-7xl font-bold  text-white text-shadow-amber-100 bg-clip-text" style={{ textShadow: '1px 1px 0 #000, -2px -1px 0 #000, 1px -1px 0 #000, -2px 2px 0 #000' }}>
           あなたの夢を実現する場所 </h1>
           <div data-aos="fade-right" data-aos-duration="3000" className='absolute lg:h-10 lg:w-200 lg:mt-50 lg:mx-12 z-10 bg-yellow-300'></div>
           <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="3000" data-aos-anchor-placement="top-bottom" className='absolute lg:h-5 lg:w-265 lg:mt-85 lg:mx-20 bg-yellow-300'></div>
          <h2 data-aos="fade-right" data-aos-duration="3000" data-aos-delay="3000" data-aos-anchor-placement="top-bottom"
          className=" z-11 mt-59 md:mt-80 md:mx-0 mx-2 md:px-10 px-10 md:mb-6 absolute text-3xl md:text-4xl font-bold  text-white w-full " style={{ textShadow: '0px 1px 0 #000, -2px -1px 0 #000, 1px -1px 0 #000, -2px 1px 0 #000' }}>
            プロのライブ配信者として、新しいキャリアをスタートしませんか？
          </h2>
            </div>
          <div className="flex gap-4 md:mt-125 mt-80 md:pb-0 pb-15 justify-center text-center text-3xl">
            <Link href="/recruit" className=" z-1 shadow-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-transform hover:scale-105">
              応募する
            </Link>
            <Link href="/contact" className=" z-1 shadow-lg px-8 py-4 bg-gradient-to-l from-green-500 via-green-300 to-green-500  rounded-full font-semibold hover:bg-green-500 hover:shadow-lg transition-transform hover:scale-105">
              相談する
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-35 px-6 bg-white ">
        <div data-aos="fade-up" data-aos-duration="3000" className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">Moasobi Projectとは？</h2>
            <p className="text-black mb-4 text-lg">
             Moasobi Projectは、ライブ配信という文化が生まれた時から、配信者に寄り添いプロデュース・マネジメントを行ってきました。
            </p>
            <p className="text-black text-lg">
              ライブ配信という枠を飛び越え、配信者の夢を形にしてきた実績があります。KDDI主催の大型オーディションの運営事務局を担当するなど、外部とのコネクションが豊富です。
            </p>
          </div>
          <img className="w-full h-full x-auto object-cover rounded-4xl " src="/7.jpg" alt="" />
        </div>
      </section>

        {/* メリット */}
      <section className='p-10 min-h-screen bg-white '>
        <h1 data-aos="fade-up" data-aos-duration="3000" className='text-5xl text-black font-semibold text-center'>Moasobi Projectのメリット</h1>
        <div className='container mx-auto grid md:grid-cols-3 p-4 items-start gap-12 my-12 '>
          <div className='p-10'>
            <h1 data-aos="fade-up" data-aos-duration="3000" className='gap-4 text-4xl text-black font-semibold text-center h-22'>常に「最新」の情報をご提供</h1>
            <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center items-center mx-auto my-8 w-50 h-50  object-cover rounded-full bg-pink-500 "> <span className='text-white text-8xl mx-atu'> 1</span></div>
            <p data-aos="fade-up" data-aos-duration="3000" className='py-4 text-xl text-black font-semibold '>配信者として活動する業界に精通したマネージャーがみなさんをサポートします。</p>
            </div>
            <div className='p-10'>
            <h1 data-aos="fade-up" data-aos-duration="3000" className='gap-4 text-4xl text-black font-semibold text-center h-22'> ⾼い還元率</h1>
            <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center items-center mx-auto my-8 w-50 h-50  object-cover rounded-full bg-pink-500 "> <span className='text-white text-8xl mx-atu'> 2</span></div>
            <p data-aos="fade-up" data-aos-duration="3000" className='py-4 text-xl text-black font-semibold '>ライバーとして稼げるように業界トップクラスの還元率を提供します。</p>
            </div>
            <div className='p-10'>
            <h1 data-aos="fade-up" data-aos-duration="3000" className='gap-4 text-4xl text-black font-semibold text-center h-22'>幅広いマネタイズ⼒</h1>
            <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center items-center mx-auto my-8 w-50 h-50  object-cover rounded-full bg-pink-500 "> <span className='text-white text-8xl mx-atu'> 3</span></div>
            <p data-aos="fade-up" data-aos-duration="3000" className='py-4 text-xl text-black font-semibold '>広告代理店出⾝のメンバーが創業したからこそできる、企業案件やPR案件のご紹介、 ライブ配信以外でのマネタイズ機会もご提供いたします。</p>
            </div>
        </div>
      </section>

        {/* ライバーってなに？
      <section className='p-10 min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200'>
        <h1 className='text-5xl text-center font-semibold text-orange-500'>ライバーってなに？  </h1>
        <div className='flex flex-col-1 gap-4 px-10'>
          <div className='text-4xl text-black'>
              Hello test
          </div>
           <div className='text-4xl text-black'>
              Hello test
          </div>
        </div>
        <div >
        </div>
      </section> */}

      {/* 所属ライバー */}
      <section className="py-20 px-6 bg-gradient-to-bl from-pink-200 via-orange-100 to-yellow-100">
        <h2 className='relative text-5xl text-orange-500 font-bold text-center mb-10 '>
                所属ライバー 
                </h2>
        <div className='grid md:grid-cols-3 justify-items-center gap-10'> 
            <div data-aos="fade-up" data-aos-duration="3000" className=' mx-auto text-center mt-5'>
              <div className="w-50 h-50 mx-auto object-cover rounded-full bg-pink-500" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>ライバーの名前</span>
              <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto text-red-300 text-xl mt-5'>
              <p> ○○さんは能力的な人であり、インスタでも凄く人気です。フォロワーが５万人以上あります。</p> <br></br> <p> ○○さんの趣味はカラオケ、猫遊び、そして寝ることです。</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className=' mx-auto text-center mt-5'>
              <img className="w-125 h-125 mx-auto object-cover rounded-full" src="/S__8011784.jpg" alt="Yukina" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>ゆきな</span>
              <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto text-red-300 text-xl mt-5'>
              <p> ゆきなさんは能力的な人であり、インスタでも凄く人気です。フォロワーが５万人以上あります。</p><br></br><p> ゆきなさんの趣味はカラオケ、猫遊び、そして寝ることです。</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className=' mx-auto text-center mt-5'>
              <div className="w-50 h-50 mx-auto object-cover rounded-full bg-pink-500" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>ライバーの名前</span>
              <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto text-red-300 text-xl mt-5'>
              <p> ○○さんは能力的な人であり、インスタでも凄く人気です。フォロワーが５万人以上あります。</p> <br></br> <p> ○○さんの趣味はカラオケ、猫遊び、そして寝ることです。</p>
              </div>
            </div>
          </div>
      </section>
      {/* Features
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-3">Feature {i}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Q&A */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">Q&A</h2>
          <div className="space-y-4 text-black">
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="font-semibold cursor-pointer">ライバーって何をするんですか？</summary>
                <p className="mt-4 text-gray-600">ライブ配信アプリで生配信を行います。自分の趣味や今日のできごとなど、簡単な雑談からスタートできます。特別なスキルは必要ありません。</p>
              </details>
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="font-semibold cursor-pointer">配信未経験ですが大丈夫ですか？</summary>
                <p className="mt-4 text-gray-600">全く問題ありません！アプリの使い方、配信の始め方などゼロからサポートします。現在所属しているライバーさんも、配信未経験の方がほとんどです。</p>
              </details>
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="font-semibold cursor-pointer">所属するのにお金はかかりますか？</summary>
                <p className="mt-4 text-gray-600">一切かかりません。入会金やレッスン料、罰金などこちらからお金を請求することは一切ございませんのでご安心ください。完全無料でサポートします。</p>
              </details>
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="font-semibold cursor-pointer">どのくらい稼げますか？</summary>
                <p className="mt-4 text-gray-600">配信アプリや活動頻度によって異なりますが、アルバイト代わりに月数万円稼ぐ方から専業ライバーとして月収100万円を超えている方も多くいらっしゃいます。</p>
              </details>
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="font-semibold cursor-pointer">顔出ししなくても大丈夫ですか？</summary>
                <p className="mt-4 text-gray-600">顔出し不要の配信アプリもご紹介可能です。希望の配信内容、頻度、目指す将来に合わせて最適なアプリをご紹介いたします。</p>
              </details>
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="font-semibold cursor-pointer">他の仕事との掛け持ちはできますか？</summary>
                <p className="mt-4 text-gray-600">可能です。学業や本業と両立しながら活動されている方も多数いらっしゃいます。あなたのライフスタイルに合わせた活動をサポートします。</p>
              </details>
          </div>
        </div>
      </section>

      {/* CTA
      <section className="py-20 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us today and transform your experience
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transition">
            Contact Us
          </button>
        </div>
      </section> */}
    </div>
  )
}