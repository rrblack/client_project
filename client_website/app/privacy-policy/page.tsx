export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <header className="text-center border-b-2 border-gray-200 px-8 py-10 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            プライバシーポリシー
          </h1>
          <p className="text-lg text-gray-700 mb-2">株式会社モアソビ</p>
          <p className="text-sm text-gray-500">最終更新日: 2026年1月11日</p>
        </header>

        {/* Content */}
        <div className="px-8 py-10">
          {/* Article 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第1条 基本方針
            </h2>
            <p className="text-gray-700 leading-relaxed">
              株式会社モアソビ(以下「当社」といいます)は、お客様の個人情報保護の重要性を認識し、個人情報の保護に関する法律(以下「個人情報保護法」といいます)その他の関連法令を遵守するとともに、以下のプライバシーポリシー(以下「本ポリシー」といいます)に従い、適切な取扱い及び保護に努めます。
            </p>
          </section>

          {/* Article 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第2条 個人情報の定義
            </h2>
            <p className="text-gray-700 leading-relaxed">
              本ポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの、及び個人識別符号が含まれるものをいいます。
            </p>
          </section>

          {/* Article 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第3条 取得する個人情報の種類
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、以下の個人情報を取得する場合があります。
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              3.1 お客様から直接ご提供いただく情報
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>氏名、住所、電話番号、メールアドレス</li>
              <li>生年月日、年齢、性別</li>
              <li>クレジットカード情報、銀行口座情報等の決済情報</li>
              <li>お問い合わせ内容、アンケート回答内容</li>
              <li>その他当社サービス利用に際してご提供いただく情報</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              3.2 サービス利用時に自動的に取得される情報
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>IPアドレス、Cookie情報、広告識別子</li>
              <li>端末情報(OS、ブラウザの種類、バージョン等)</li>
              <li>アクセス履歴、閲覧履歴、検索履歴</li>
              <li>位置情報(お客様の同意を得た場合のみ)</li>
              <li>サービスの利用状況、行動履歴</li>
            </ul>
          </section>

          {/* Article 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第4条 個人情報の利用目的
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、取得した個人情報を以下の目的で利用いたします。
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>当社サービスの提供、維持、改善のため</li>
              <li>お客様からのお問い合わせへの対応のため</li>
              <li>サービスに関する重要なお知らせの送付のため</li>
              <li>お客様に最適化されたコンテンツやサービスの提供のため</li>
              <li>マーケティング活動、市場調査、データ分析のため</li>
              <li>新サービス、キャンペーン、イベント等の案内のため</li>
              <li>利用規約違反行為への対応のため</li>
              <li>サービスの不正利用の防止及びセキュリティ維持のため</li>
              <li>料金請求及び決済処理のため</li>
              <li>法令に基づく対応のため</li>
              <li>その他上記に付随する目的のため</li>
            </ol>
          </section>

          {/* Article 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第5条 個人情報の第三者提供
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>法令に基づく場合</li>
              <li>
                人の生命、身体又は財産の保護のために必要がある場合であって、お客様の同意を得ることが困難である場合
              </li>
              <li>
                公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難である場合
              </li>
              <li>
                国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
              </li>
              <li>お客様の事前の同意を得た場合</li>
            </ol>
          </section>

          {/* Article 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第6条 個人情報の共同利用
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、以下の通り個人情報を共同利用する場合があります。
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-gray-800 mb-1">
                    共同利用する個人情報の項目
                  </dt>
                  <dd className="text-gray-700 ml-4">
                    氏名、住所、電話番号、メールアドレス、サービス利用履歴
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-800 mb-1">
                    共同利用者の範囲
                  </dt>
                  <dd className="text-gray-700 ml-4">当社グループ会社</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-800 mb-1">利用目的</dt>
                  <dd className="text-gray-700 ml-4">
                    第4条に記載の利用目的と同様
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-800 mb-1">管理責任者</dt>
                  <dd className="text-gray-700 ml-4">株式会社モアソビ</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Article 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第7条 個人情報の委託
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、個人情報の取扱いの全部又は一部を第三者に委託する場合があります。その場合、当社は、個人情報を適切に取り扱うと認められる委託先を選定し、委託契約において個人情報の適切な管理を求めるとともに、適切な監督を行います。
            </p>
          </section>

          {/* Article 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第8条 個人情報の安全管理措置
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、個人情報の漏えい、滅失又は毀損の防止その他の個人情報の安全管理のため、以下の措置を講じます。
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <span className="font-semibold">組織的安全管理措置:</span>{" "}
                個人情報保護責任者の設置、従業員への教育研修
              </li>
              <li>
                <span className="font-semibold">人的安全管理措置:</span>{" "}
                従業員との秘密保持契約の締結
              </li>
              <li>
                <span className="font-semibold">物理的安全管理措置:</span>{" "}
                入退室管理、個人情報を取り扱う機器の盗難防止
              </li>
              <li>
                <span className="font-semibold">技術的安全管理措置:</span>{" "}
                アクセス制御、不正ソフトウェア対策、暗号化通信
              </li>
            </ol>
          </section>

          {/* Article 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第9条 Cookie及びアクセス解析ツールについて
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、サービスの利便性向上及び利用状況の分析のため、Cookie及びこれに類する技術を使用します。お客様はブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、サービスの一部機能をご利用いただけない場合があります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              当社は、Google
              Analytics等のアクセス解析ツールを使用しています。これらのツールはCookieを使用してお客様の情報を収集しますが、個人を特定する情報は含まれません。
            </p>
          </section>

          {/* Article 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第10条 お客様の権利
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              お客様は、当社に対して以下の権利を行使することができます。
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>個人情報の開示請求</li>
              <li>個人情報の訂正、追加又は削除の請求</li>
              <li>個人情報の利用停止又は消去の請求</li>
              <li>個人情報の第三者提供の停止の請求</li>
            </ol>
            <p className="text-gray-700 leading-relaxed">
              これらの権利を行使される場合は、本ポリシー末尾記載のお問い合わせ窓口までご連絡ください。なお、本人確認のための書類のご提出をお願いする場合があります。
            </p>
          </section>

          {/* Article 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第11条 個人情報の保管期間
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、個人情報を利用目的達成に必要な期間、又は法令で定められた期間保管します。保管期間終了後は、適切な方法で個人情報を削除又は匿名化します。
            </p>
          </section>

          {/* Article 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第12条 未成年者の個人情報
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社のサービスは、原則として18歳以上の方を対象としています。18歳未満の方がサービスを利用される場合は、保護者の同意を得た上でご利用ください。
            </p>
          </section>

          {/* Article 13 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第13条 プライバシーポリシーの変更
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、法令の変更、サービス内容の変更等に応じて、本ポリシーを変更する場合があります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。重要な変更がある場合は、お客様に通知いたします。
            </p>
          </section>

          {/* Article 14 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
              第14条 お問い合わせ窓口
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <p className="font-bold text-gray-900 mb-3">
                株式会社モアソビ 個人情報保護担当
              </p>
              <p className="text-gray-700 mb-1">
                メールアドレス: privacy@moreasobi.co.jp
              </p>
              <p className="text-gray-700">
                受付時間: 平日 10:00～18:00(土日祝日、年末年始を除く)
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 px-8 py-6 text-center text-sm text-gray-600">
          <p className="mb-1">
            <span className="font-semibold">制定日:</span> 2026年1月11日
          </p>
          <p className="mb-1">
            <span className="font-semibold">株式会社モアソビ</span>
          </p>
          <p>
            <span className="font-semibold">代表取締役:</span>{" "}
            永井 大地
          </p>
        </footer>
      </div>
    </div>
  );
}