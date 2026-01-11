

export default function About() {

    return(
        <section className="mx-auto  min-h-screen flex items-center bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-200">
            <div className="min-h-screen bg-white shadow-lg mx-auto w-225">
            <div className="flex flex-col items-center justify-center mx-auto mt-24">
            <img src="/logo1.png" className="h-auto w-90 rounded-lg"/>
            <div className="text-black">
                <h1 className="text-4xl mb-10 m-10 font-semibold text-center" > 会社概要  </h1>
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