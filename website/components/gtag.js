import Script from "next/script";

export default function GTag({}) {

  const name = 'choice-machine.com'
  const measurementId = 'G-7N9LD0F09Y'

  return(
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id={`gtag-${name}-1`}
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />

      <Script
        id={`gtag-${name}-2`}
        strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${measurementId}, {
            page_path: window.location.pathname,
          });
      `}
      </Script>
    </>
  )
}
