

export default function About() {

    return(
        <section className="bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200">
            <div className="relative w-full h-65 pt-16 md:pt-19 flex justify-center">
                <div data-aos="fade-right" className="absolute text-5xl md:text-6xl text-black font-semibold after:content-[''] after:block after:w-5 after:bg-orange-500 after:h-1 after:mt-4 after:px-10 after:mx-auto pt-20 z-1">会社概要</div>
            <img className="absolute w-full h-full rounded-sm object-cover" src="/banner.png" alt="" />
            </div>
            <div className="pb-20 bg-white shadow-lg mx-auto w-full rounded-2xl md:mt-19">
            <div className="flex flex-col items-center justify-center mx-auto mt-12 md:mt-12">
            <img src="/logo1.png" className="pt-10 h-auto w-90 rounded-lg"/>
            <div className="text-black pt-10">
                <table className="grid grid-cols-1 gap-5 ">
                    <tr className="grid grid-cols-2">
                        <th>会社名</th>
                        <td>株式会社モアソビ</td>
                    </tr>
                    <tr className="grid grid-cols-2">
                        <th>設立</th>
                        <td>2023年6月</td>
                    </tr>
                    <tr className="grid grid-cols-2">
                        <th>資本金</th>
                        <td>10万円</td>
                    </tr>
                    <tr className="grid grid-cols-2">
                        <th>代表取締役</th>
                        <td>永井 大地</td>
                    </tr>
                    <tr className="grid grid-cols-2">
                        <th>所在地</th>
                        <td>〒951-8067　<br></br>新潟県新潟市中央区本町通7番町<br></br>1098-1 WorkWith本町2F</td>
                    </tr>
                    <tr className="grid grid-cols-2">
                        <th>TEL</th>
                        <td>000-00-0000</td>
                    </tr>
                </table>
            </div>
            </div>
            </div>

            </section>
    )
}