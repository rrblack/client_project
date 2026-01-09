// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen select-none ">

       {/* Hero */}
      <section className="pt-12 pb-10 px-6 min-h-screen flex items-center bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200">
        <div className="container mx-auto text-center">
          <div className='relative'>
            <h1 className=' mt-20 px-15 absolute text-7xl md:text-7xl font-bold  text-yellow-500'> Moasobi </h1>
            <h1 className="border-red-700 mt-144 absolute text-5xl md:text-7xl font-bold mb-6 text-white text-shadow-amber-100 bg-clip-text" style={{ textShadow: '1px 1px 0 #000, -2px -1px 0 #000, 1px -1px 0 #000, -2px 2px 0 #000' }}>
            あなたの夢を実現する場所
          </h1>
          <h2 className="mt-180 mx-25 absolute text-5xl md:text-4xl font-bold mb-6 text-whit w-full" style={{ textShadow: '0px 1px 0 #000, -2px -1px 0 #000, 1px -1px 0 #000, -2px 2px 0 #000' }}>
            プロのライブ配信者として、新しいキャリアをスタートしませんか？
          </h2>
           <img className="w-full h-full x-auto object-cover rounded-4xl" src="/S__8011843.jpg" alt="" /> 
            </div>
          <div className="flex gap-4 mt-10 justify-center text-3xl">
            <a href="/recruit" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition">
              応募する
            </a>
            <a href="/contact" className="px-8 py-4 bg-green-400 border-2 border-green-400 rounded-full font-semibold hover:bg-green-500 transition">
              相談する
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Moasobi Projectとは？</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl"></div>
        </div>
      </section>

      {/* 所属ライバー */}
      <section className="py-20 px-6 bg-white">
        <h2 className='text-4xl text-orange-500 font-bold text-center'>
                所属ライバー 
                </h2>
        <div className='grid grid-cols-3 justify-items-center'> 
            <div className='container mx-auto text-center mt-5'>
              <img className="w-125 h-125 mx-auto object-cover rounded-full" src="/S__8011784.jpg" alt="Yukina" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>Yukina</span>
              <p className='max-w-xl mx-auto text-red-300 text-2xl mt-5'> ゆきなさんは能力的な人であり、インスタでも凄く人気です。フォロワーが５万人以上あります。<br></br>ゆきなさんの趣味はカラオケ、猫遊び、そして寝ることです。</p>
            </div>
            <div className='container mx-auto text-center mt-5'>
              <img className="w-125 h-125 mx-auto object-cover rounded-full" src="/S__8011784.jpg" alt="Yukina" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>Yukina</span>
              <p className=' text-red-300 text-2xl mt-5  max-w-xl mx-auto'> ゆきなさんは能力的な人であり、インスタでも凄く人気です。フォロワーが５万人以上あります。<br></br>ゆきなさんの趣味はカラオケ、猫遊び、そして寝ることです。</p>
            </div>
          </div>
      </section>

      {/* Features */}
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
      </section>

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

      {/* CTA */}
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
      </section>
    </div>
  )
}