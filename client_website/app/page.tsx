// app/page.tsx
import Link from 'next/link'
import Banner from './components/banner'

export default function Home() {
  return (
    <div className="min-h-screen select-none ">
  <Banner/>
       {/* Hero */}
      <section className="relative mx-auto min-h-screen md:flex md:items-center bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200 overflow-hidden md:pt-38  ">
        <img className="absolute w-full h-full mx-auto object-cover rounded-sm" src="/S__8011843.jpg" alt="" /> 
        <div className="md:container md:mx-auto md:text-center ">
          <div className='relative md:py-0 py-25 '>
            <h1 data-aos="fade-right" data-aos-duration="3000" className="border-red-700 md:mt-40  
            z-11 mt-25 mx-10 absolute text-5xl md:text-7xl font-bold  
            text-white text-shadow-amber-100 bg-clip-text" style={{ textShadow: '1px 1px 0 #000, -2px -1px 0 #000, 1px -1px 0 #000, -2px 2px 0 #000' }}>
           あなたの夢を実現する場所 </h1>
           <div data-aos="fade-right" data-aos-duration="3000" className='absolute lg:h-10 lg:w-200 lg:mt-50 lg:mx-12 z-10 bg-yellow-300'></div>
          <h2 data-aos="fade-right" data-aos-duration="3000" data-aos-delay="3000" data-aos-anchor-placement="top-bottom"
          className=" z-11 mt-59 md:mt-80 md:mx-0 mx-2 md:px-10 px-10 md:mb-6
           absolute text-3xl md:text-4xl font-bold  text-white w-full " style={{ textShadow: '0px 1px 0 #000, -2px -1px 0 #000, 1px -1px 0 #000, -2px 1px 0 #000' }}>
            プロのライブ配信者として、新しいキャリアをスタートしませんか？
          </h2>
          <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="3000" data-aos-anchor-placement="top-bottom" className='absolute lg:h-5 lg:w-265 lg:mt-85 sm:mx-20 xl:mx-50 bg-yellow-300'></div>
            </div>
          <div className="flex gap-4 md:mt-125 mt-80 md:pb-0 pb-15 justify-center text-center text-3xl">
            <Link href="/recruit" className="text-white z-1 shadow-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600  rounded-full font-semibold hover:shadow-lg transition-transform hover:scale-105">
              応募する
            </Link>
            <Link href="/contact" className="text-white z-1 shadow-lg px-8 py-4 bg-gradient-to-l from-green-500 via-green-300 to-green-500 rounded-full font-semibold hover:bg-green-500 hover:shadow-lg transition-transform hover:scale-105">
              相談する
            </Link>
          </div>
        </div>
      </section>

      {/*不安*/}
      <section className='py-20 px-6 bg-white overflow-hidden'>
      <h1 data-aos="fade-up" data-aos-duration="1000" className='md:text-5xl text-3xl text-black font-bold text-center pb-2'>こんな不安、ありませんか？</h1>
      <div className='flex justify-center items-center mx-auto bg-gray-300/10 md:w-125 md:h-100 rounded-xl shadow-md mb-10 mt-10 p-7'>
        <div className='text-black gap-4 text-2xl'>
          <ul className=''>
            <li data-aos="fade-right" data-aos-duration="1000" className="before:content-['〆'] before:p-2 before:text-blue-500 ">
              配信って本当に稼げるの？
            </li>
            <br></br>
            <li data-aos="fade-right" data-aos-duration="1000" className="before:content-['〆'] before:p-2 before:text-blue-500">
              TikTokはもうライバルが多すぎる…
            </li>
            <br></br>
            <li data-aos="fade-right" data-aos-duration="1000" className="before:content-['〆'] before:p-2 before:text-blue-500">
              未経験の自分でも大丈夫？
            </li>
            <br></br>
            <li data-aos="fade-right" data-aos-duration="1000" className="before:content-['〆'] before:p-2 before:text-blue-500">
              安定して続けられるか不安
            </li>
          </ul>
        </div>
      </div>
      <h1 data-aos="fade-up" data-aos-duration="1000" className='md:text-3xl text-2xl text-orange-500 font-bold text-center pb-2'>その悩み、BIGO LIVEなら解決できます。</h1>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div data-aos="fade-up" data-aos-duration="3000" className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="md:text-4xl text-3xl font-bold mb-6 text-black">Moasobi Projectとは？</h2>
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

      {/*BIGO LIVE */}
      {/* <section className='py-20 px-6 bg-white -mb-15 overflow-hidden'>
        <h1 data-aos="fade-up" className='text-5xl text-black font-bold text-center pb-2'>なぜ今、BIGO LIVEなのか？</h1>
        <div>

        </div>
      </section> */}

        {/* メリット */}
      <section className='py-20 px-6 bg-white -mb-15 overflow-hidden'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='md:text-5xl text-3xl text-black font-semibold text-center'>Moasobi Projectのメリット</h1>
        <div className='container mx-auto grid md:grid-cols-3 p-4 items-start gap-12 my-12 '>
          <div className='p-10'>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='gap-4 text-4xl text-black font-semibold text-center h-22'>常に「最新」の情報をご提供</h1>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center items-center mx-auto my-8 w-50 h-50  object-cover rounded-full bg-pink-500 "> <span className='text-white text-8xl '> 1</span></div>
            <p data-aos="fade-up" data-aos-duration="1000" className='py-4 text-xl text-black font-semibold '>配信者として活動する業界に精通したマネージャーがみなさんをサポートします。</p>
            </div>
            <div className='p-10'>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='gap-4 text-4xl text-black font-semibold text-center h-22'> ⾼い還元率</h1>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center items-center mx-auto my-8 w-50 h-50  object-cover rounded-full bg-pink-500 "> <span className='text-white text-8xl '> 2</span></div>
            <p data-aos="fade-up" data-aos-duration="1000" className='py-4 text-xl text-black font-semibold '>ライバーとして稼げるように業界トップクラスの還元率を提供します。</p>
            </div>
            <div className='p-10'>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='gap-4 text-4xl text-black font-semibold text-center h-22'>幅広いマネタイズ⼒</h1>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center items-center mx-auto my-8 w-50 h-50  object-cover rounded-full bg-pink-500 "> <span className='text-white text-8xl '> 3</span></div>
            <p data-aos="fade-up" data-aos-duration="1000" className='py-4 text-xl text-black font-semibold '>広告代理店出⾝のメンバーが創業したからこそできる、企業案件やPR案件のご紹介、 ライブ配信以外でのマネタイズ機会もご提供いたします。</p>
            </div>
        </div>
      </section>

      {/*代表メッセージ*/}
      <section className='py-20 px-6 bg-gradient-to-bl from-orange-200 via-orange-100 to-yellow-100 pb-10 overflow-hidden'>
        <h1 data-aos="fade-down" data-aos-duration="2000" className='md:text-5xl text-4xl text-black font-bold text-center p-4'> 代表メッセージ</h1>
        <img data-aos="fade-down" data-aos-duration="2000" className="md:w-100 md:h-100 mx-auto object-cover rounded-md shadow-md" src="/daihyou.png" alt="" /> 
        <h2 data-aos="fade-right" data-aos-duration="2000" className='md:text-3xl text-2xl text-black  text-center p-4'> 代表 永井大地より </h2>
        <div className='flex mx-auto justify-center items-center bg-white/40 md:w-200 md:h-150 p-8 gap-4 rounded-xl shadow-md'>
        <div data-aos="fade-up" data-aos-duration="2000" className='w-150 text-center text-black text-xl p-6 container '>
          <p className=''>ライブ配信で大切なのは、</p>
          <br></br>
          <p className=''>“才能”よりも</p>
          <br></br>
          <p className='font-bold'>“正しいやり方を知っているかどうか” です。</p>
          <br></br>
          <p className=''>私はこれまで、</p>
          <br></br>
          <p className=''>人の魅力を引き出し、数字に変える仕事をしてきました。</p>
          <br></br>
          <p className=''>モアプロでは</p>
          <br></br>
          <ul>
            <li>
              ①初心者でも安心して稼げる環境
            </li>
            <li>
              ②続ければちゃんと結果が出る仕組み
            </li>
          </ul>
          <br></br>
          <p className='font-bold'>を大切にしています。</p>
          <br></br>
          <p className=''>あなたの「やってみたい」を、</p>
          <br></br>
          <p className=''>収入に変えるお手伝いをさせてください。</p>
        </div>
        </div>
      </section>

      {/* 収入 */}
      <section className='py-20 px-6 bg-white overflow-hidden'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-5xl text-black font-bold text-center pb-2'>収入イメージ</h1>
        <h2 data-aos="fade-up" data-aos-duration="1000" className='text-2xl text-black font-bold text-center p-8'> BIGO LIVEなら―― </h2>
        <div className='mx-auto flex flex-col md:flex-row items-center justify-center gap-6 pt-6 w-full h-full p-4'>
          <div data-aos="fade-right" className='flex justify-center items-center bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 w-75 h-50 rounded-xl p-4 shadow-lg'>
            <div className=''>
            <p data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-center font-semibold'>未経験スタート </p>
            <p data-aos="fade-right" data-aos-duration="1000" className='text-3xl text-center p-4 font-black'>月3～10万円 </p>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className='bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 w-75 h-50 rounded-xl p-4 flex justify-center items-center shadow-lg'>
            <div className=''>
           <p data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-center font-bold'>安定配信 </p>
            <p data-aos="fade-right" data-aos-duration="1000" className='text-3xl text-center p-4 font-black'>月10～30万円 </p>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className='bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 w-75 h-50 rounded-xl p-4 flex justify-center items-center shadow-lg'>
            <div className=''>
           <p data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-center font-bold'>継続的に活動</p>
            <p data-aos="fade-right" data-aos-duration="1000" className='text-3xl text-center p-4 font-black'>月30万円以上も可能</p>
            </div>
          </div>
        </div>
        <p data-aos="fade-up" data-aos-duration="1000" className='text-2xl text-black text-center p-5 w-100 justify-self-center'> まずは「時給収入」から無理なくステップアップできます。</p>
      </section>

      {/* この人にピッタリ */}
      <section className='bg-white py-20 px-6 overflow-hidden -mt-20'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='md:text-5xl text-3xl text-black text-center font-bold'> モアプロはこんな人にピッタリ</h1>
        <div className='flex mx-auto justify-center items-center shadow-md rounded-xl bg-gray-300/20 p-4 mt-10 mb-10 md:w-125 md:h-100 '>
          <div className='flex justify-center items-center text-2xl'>
            <ul className='text-black text-center　'>
              <li data-aos="fade-right" data-aos-duration="1000" className="before:content-['✔'] before:p-2 before:text-green-500">
                未経験から配信を始めたい
              </li>
              <br></br>
              <li data-aos="fade-right" data-aos-duration="1000" className="before:content-['✔'] before:p-2 before:text-green-500">
                安定して稼ぎたい
              </li>
              <br></br>
              <li data-aos="fade-right" data-aos-duration="1000" className="before:content-['✔'] before:p-2 before:text-green-500">
                在宅で収入をつくりたい
              </li>
              <br></br>
              <li data-aos="fade-right" data-aos-duration="1000" className="before:content-['✔'] before:p-2 before:text-green-500">
                楽しく続けられる副業がほしい
              </li>
              <br></br>
              <li data-aos="fade-right" data-aos-duration="1000" className="before:content-['✔'] before:p-2 before:text-green-500">
                他アプリでうまくいかなかった
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 応募 */}
      <section className='bg-white py-20 px-6 overflow-hidden -mt-20'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='md:text-5xl text-3xl text-black text-center font-bold mx-auto'>応募からデビューまで</h1>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='md:text-5xl text-3xl text-black text-center font-bold mx-auto p-4 mt-4'>たった3ステップ </h1>
        <div className='flex md:flex-row flex-col mx-auto justify-center items-center md:w-200 mt-10'>
          <div className='flex flex-col justify-center items-center'>
          <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col justify-center items-center text-8xl mx-auto object-cover bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full w-50 h-50 text-center'>
          1
          </div>
          <h1 data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-black text-center font-bold mx-auto p-10'>無料応募</h1>
          </div>
          <div className='flex flex-col mx-auto justify-center items-center  '>
          <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col justify-center items-center text-8xl mx-auto object-cover bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full w-50 h-50 text-center'>
          2
          </div>
          <h1 data-aos="fade-right" data-aos-duration="1000" className='text-2xl text-black text-center font-bold mx-auto p-10'>オンライン面談</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col justify-center items-center text-8xl mx-auto object-cover bg-gradient-to-br from-orange-400 via-orange-600 to-orange-400 rounded-full w-50 h-50 text-center'>
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
        <div className='grid md:grid-cols-3 justify-items-center gap-10 '> 
            <div data-aos="fade-up" data-aos-duration="1000" className=' mx-auto text-center mt-5'>
              <img className="w-125 h-125 mx-auto object-cover rounded-full" src="/nao.jpg" alt="Nao" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>Nao</span>
              <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto text-red-300 text-xl mt-5'>
              <p> Naoさんは旅行が好きでなんでも話せ子です。</p> <br></br> <p> Naoさんの趣味はカラオケ、猫遊び、そして寝ることです。</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className=' mx-auto text-center mt-5'>
              <img className="w-125 h-125 mx-auto object-cover rounded-full" src="/S__8011784.jpg" alt="Yukina" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>ゆきな</span>
              <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto text-red-300 text-xl mt-5'>
              <p> ゆきなさんは能力的な人であり、インスタでも凄く人気です。フォロワーが５万人以上あります。</p><br></br><p> ゆきなさんの趣味はカラオケ、猫遊び、そして寝ることです。</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className=' mx-auto text-center mt-5'>
              <div className="w-50 h-50 mx-auto object-cover rounded-full bg-pink-500" />
              <span className='block mt-5 text-4xl text-orange-500 font-bold text-center'>ライバーの名前</span>
              <div className='bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto text-red-300 text-xl mt-5'>
              <p> ○○さんは能力的な人であり、インスタでも凄く人気です。フォロワーが５万人以上あります。</p> <br></br> <p> ○○さんの趣味はカラオケ、猫遊び、そして寝ることです。</p>
              </div>
            </div>
          </div>
      </section>

      {/* Q&A */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">Q&A</h2>
          <div className="space-y-4 text-black">
              <details data-aos="fade-right" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">ライバーって何をするんですか？</summary>
                <p className="mt-4 text-gray-600">ライブ配信アプリで生配信を行います。自分の趣味や今日のできごとなど、簡単な雑談からスタートできます。特別なスキルは必要ありません。</p>
              </details>
              <details data-aos="fade-right" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">本当に未経験でも大丈夫？</summary>
                <p className="mt-4 text-gray-600">はい。ほとんどの方が未経験からのスタートです。</p>
              </details>
              <details data-aos="fade-right" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">顔出しは必要？</summary>
                <p className="mt-4 text-gray-600">必要ではありません。あなたに合った形を提案します。</p>
              </details>
              <details data-aos="fade-right" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">費用はかかりますか？</summary>
                <p className="mt-4 text-gray-600">登録・サポートはすべて無料です。</p>
              </details>
              <details data-aos="fade-right" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">配信時間の決まりは？</summary>
                <p className="mt-4 text-gray-600">無理のない範囲で相談しながら決められます。</p>
              </details>
              <details data-aos="fade-right" className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">他の仕事との掛け持ちはできますか？</summary>
                <p className="mt-4 text-gray-600">可能です。学業や本業と両立しながら活動されている方も多数いらっしゃいます。あなたのライフスタイルに合わせた活動をサポートします。</p>
              </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-white text-center">
        <div className="container mx-auto">
          <h2 data-aos="fade-up" data-aos-duration="1000" className="text-xl font-bold mb-6">ライブ配信はもう、一部の人だけの世界ではありません。</h2>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-3xl mb-8 mx-auto font-bold">BIGO LIVE × モアプロなら</p>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-3xl mb-8  mx-auto font-bold">&quot;誰でも、ちゃんと稼げる配信者になれる&quot;</p>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-xl mb-8 mx-auto font-bold">まずは気軽にご相談ください。</p>
          <div className="flex gap-4  md:pb-0 pb-15 justify-center text-center text-3xl">
            <Link data-aos="fade-right" data-aos-duration="1000" href="/recruit" className="text-xl  shadow-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-transform hover:scale-105">
              今すぐ無料で応募する
            </Link>
            <Link data-aos="fade-right" data-aos-duration="1000" href="/contact" className="text-xl  shadow-lg px-8 py-4 bg-gradient-to-l from-green-500 via-green-300 to-green-500  rounded-full font-semibold hover:bg-green-500 hover:shadow-lg transition-transform hover:scale-105">
              LINEでかんたん相談
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}