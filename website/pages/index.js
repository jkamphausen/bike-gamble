import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Header } from '../components/header'
import { useOutsideClick } from '../lib/hooks/useOutsideClick'


export default function Home() {

  const [modalState, setModalState] = useState(false)

  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    setModalState(false)
  });

  const toggleModal = () => {
    setModalState(!modalState)
  }

  return (
    <div id="main">
      <Head>
        <title>Choice Machine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />

        <link rel="icon" href="favicon.ico" />
        {/* <link rel="apple-touch-icon-precomposed" href="/assets/img/logos/logo-bsw.jpg"></link> */}

        {/* <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/apple-touch-icon-152x152.png" /> */}

        {/* <link rel="icon" type="image/png" href="/assets/favicon/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-160x160.png" sizes="160x160" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-32x32.png" sizes="32x32" /> */}


        {/* <meta name="theme-color" content="#111826"></meta>
        <meta name="msapplication-TileColor" content="#111826" />
        <meta name="msapplication-TileImage" content="/assets/favicon/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/assets/favicon/mstile-70x70.png" />
        <meta name="msapplication-square144x144logo" content="/assets/favicon/mstile-144x144.png" />
        <meta name="msapplication-square150x150logo" content="/assets/favicon/mstile-150x150.png" />
        <meta name="msapplication-square310x310logo" content="/assets/favicon/mstile-310x310.png" />
        <meta name="msapplication-wide310x150logo" content="/assets/favicon/mstile-310x150.png" /> */}

        {/* <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="description" content="" /> */}

        <meta name="apple-mobile-web-app-title" content="Choice Machine" />
        <meta name="description" content="Choice Machine" />
        <meta name="keywords" content="Choice Machine, Nudge, Nudging, Pleasurable Troublemaker" />

        <meta name="copyright" content="Julian Kamphausen" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Julian Kamphausen" />
        <meta name="publisher" content="Choice Machine" />
        <meta name="copyright" content="Choice Machine" />
        <meta name="revisit-after" content="1 day" />
      </Head>

      <Header/>

      { modalState &&
        <div className="fixed top-0 left-0 mx-auto w-[100vw] h-[100vh] grid grid-cols-1 grid-rows-1 z-50">
          <div className="col-start-1 row-start-1 bg-black mx-auto w-full h-full z-30 opacity-70">
            {/* BACKDROP */}
          </div>
          <div className="col-start-1 row-start-1 bg-white mx-auto w-full h-full lg:w-3/4 lg:h-3/4 self-center align-center opacity-100 z-40 relative" ref={modalRef}>
            <div className="absolute top-4 right-4 p-4 text-xl cursor-pointer">
              <a onClick={toggleModal}>
                <i className="bi bi-x-lg"></i>
              </a>
            </div>
            <div className="h-full overflow-scroll pb-32">
              <article className="w-full p-16 lg:w-2/3 grid grid-cols-1 gap-4 text-xs">
                <h3 className="text-4xl pb-4">Impressum</h3>
                <section>
                  <h4 className="text-lg">Angaben gem. §5 TMG</h4>
                  <p>Julian Kamphausen, Beller Str. 161, 41199 Mönchengladbach, NRW.</p>
                  <br />
                </section>
                <section>
                  <h4 className="text-lg">Haftung für Inhalte</h4>
                  <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                </section>
                <section>
                  <h4 className="text-lg">Haftung für Links</h4>
                  <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                </section>
                <section>
                  <h4 className="text-lg">Urheberrecht</h4>
                  <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                </section>
                {/* <section>
                  <a onClick={toggleModal}>Close</a>
                </section> */}
              </article>
            </div>
          </div>
        </div>
      }

      <main className="relative">
        <article>

          {/* <section className="p-4 pb-8 bg-gray-900 min-h-[90vh] relative grid items-center">
            <Image
              src="/assets/img/stock/blue.jpg"
              alt="…"
              title="…"
              layout="fill"
              className="object-cover opacity-10 z-0" />
            <div className="mx-auto max-w-5xl p-4 text-white z-10">
              <div>
                <h2 className="text-4xl">Lorem Ipsum</h2>
                <p className="lg:w-2/3 text-4xl font-thin grid gap-2">
                  <span className="font-bold">Wir gestalten Seminare, Events und Workshop-Erlebnisse.</span>
                  <span>In Präsenz, digital und hybrid.</span>
                </p>
              </div>
            </div>
          </section> */}


          <section className="p-4 pb-8 min-h-[100vh] grid items-center relative" id="cm-mk1">
            <Image
              src="/assets/img/stock/metal-4.jpg"
              alt="Leistungen"
              title="Leistungen"
              layout="fill"
              className="object-cover opacity-[0.025] z-0" />

            <div className="mx-auto max-w-5xl">
              <div className="w-full p-4 text-gray-900 z-10">
                <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-8">

                  <div className="bg-neutral-50 min-h-[50vh] p-4 flex flex-col gap-2">
                    <h2 className="font-bold text-3xl pb-2">The Choice Machine</h2>
                    <p>Oh yes, you know it would be much better to take the bike more often instead of driving around in a big car. But if you have to decide, then you go on 4 wheels to the bakery?</p>
                    <p>If you know that you often make bad decisions or are just too lazy to work on yourself - no problem! The decision engine takes a lot of work off your shoulders and decides well for you - at least 60%!</p>
                    <p>
                      This first prototype is made of scrap wood, parts of a mandarin box, a board, a decoder, various cables of some tinkering and fun. 🛠️
                    </p>
                    <p className="text-gray-400">
                      Below is a earlier cover design, the back cover and the internal layout.
                    </p>
                  </div>
                  <div className="grid items-center relative">
                    <Image layout="fill" src="/assets/img/mk1/front.jpg" className="object-cover z-10" />
                  </div>

                </div>

                <div className="flex justify-end w-full gap-4 py-8 flex-wrap">
                  <div className="relative h-[210px] w-[210px]">
                    <Image layout="fill" src="/assets/img/mk1/first-cover.JPG" className="object-cover z-0" />
                  </div>
                  <div className="relative h-[210px] w-[210px]">
                    <Image layout="fill" src="/assets/img/mk1/back.JPG" className="object-cover z-0" />
                  </div>

                  <div className="relative h-[210px] w-[210px]">
                    <Image layout="fill" src="/assets/img/mk1/inner.JPG" className="object-cover z-0" />
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="p-4 pb-8 min-h-[100vh] grid items-center relative" id="cm-mk2">
            {/* <Image
              src="/assets/img/stock/metal-2.jpg"
              alt="Leistungen"
              title="Leistungen"
              layout="fill"
              className="object-cover opacity-[0.025] z-0" /> */}

            <div className="mx-auto max-w-5xl">
              <div className="w-full p-4 text-gray-900 z-10">
                <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-8">

                  <div className="bg-neutral-50 min-h-[50vh] p-4 flex flex-col gap-2">
                    <h2 className="font-bold text-3xl pb-2">Choice Machine - MK II</h2>
                    <p>The MK II changes the presentation of the profit and the process of issuing keys. During the game, both keys are on display - the prize is practically hanging right in front of your nose. Almost within reach. One pull of the lever and it can be yours ... the prize or question: Do I really need THIS key?</p>
                    <p className="text-gray-400">
                      Below is a first cover design for the MK II, a custom switch board which detects if a key has been liftet and some switches that we used for testing.
                    </p>
                  </div>
                  <div className="grid items-center relative">
                    <Image layout="fill" src="/assets/img/mk2/front.jpg" className="object-cover z-10" />
                  </div>
                </div>

                <div className="flex justify-end w-full gap-4 py-8 flex-wrap">
                  <div className="relative h-[210px] w-[210px]">
                    <Image layout="fill" src="/assets/img/mk2/BIKE.JPG" className="object-cover z-10" />
                  </div>
                  <div className="relative h-[210px] w-[210px]">
                    <Image layout="fill" src="/assets/img/mk2/AUTO.JPG" className="object-cover z-10" />
                  </div>

                  <div className="relative h-[210px] w-[210px]">
                    <Image layout="fill" src="/assets/img/mk2/switch.JPG" className="object-cover z-10" />
                  </div>
                  <div className="relative h-[210px] w-[210px]">
                    <Image layout="fill" src="/assets/img/mk2/switches.JPG" className="object-cover z-10" />
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="p-4 pb-8 min-h-[100vh] grid items-center relative" id="cm-mk3">
            <Image
              src="/assets/img/stock/metal-4.jpg"
              alt="Leistungen"
              title="Leistungen"
              layout="fill"
              className="object-cover opacity-[0.025] z-0" />

            <div className="mx-auto max-w-5xl">
              <div className="w-full p-4 text-gray-900 z-10">
                <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-8">

                  <div className="bg-neutral-50 min-h-[50vh] p-4 flex flex-col gap-2">
                    <h2 className="font-bold text-3xl pb-2">Choice Machine - MK III</h2>
                    <p>The third generation of the decision-making machine should be aesthetically pleasing, easy to produce and robust in use. For this purpose, we will rely on a 3D printing process for the fabrication of the body. The new machine will be based on the principle of the MK II and will be key forward. The MK III is expected in September. </p>
                    <p>The new version should not only have a printed body, but also a replaceable cover, as well as back lighting. This not only underlines wins and losses, but also provides feedback about the machine's activity - e.g. pauses.</p>
                    <p>We are currently working on a 3d model. More information will be available here soon.</p>
                  </div>
                  <div className="grid items-center relative">
                    <Image layout="fill" src="/assets/img/stock/metal-2.jpg" className="object-cover z-10" />
                  </div>

                </div>
              </div>
            </div>
          </section>



        </article>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-5xl p-4 py-8 flex flex-row gap-4 justify-between items-center">
          <a onClick={toggleModal} className="cursor-pointer">Imprint</a>
          {/* <Link href="#"><a>Kontakt</a></Link> */}
          <Link href="/">
            <a title="Zum Seitenanfang" className="px-4 py-2 hover:bg-gray-700 bg-gray-800">
              <i className="bi bi-arrow-up"/>
            </a>
          </Link>
        </div>
      </footer>

    </div>
  )
}
