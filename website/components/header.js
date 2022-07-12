import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { useOutsideClick } from "../lib/hooks/useOutsideClick"
import { useWindowSize, twBreakpoints } from "../lib/hooks/useWindowSize"
import GTag from "./gtag"

export function Header({}){

  const [expanded, setExpanded] = useState(false)
  const size = useWindowSize()
  const navRef = useRef(null)

  const toggleMenu = () => {
    setExpanded(!expanded)
  }

  useOutsideClick(navRef, () => {
    setExpanded(false)
  });

  const Logo = ({}) => (
    <div className="-ml-4 p-4">
      <div className="w-[220px] min-h-[80px] h-auto relative">
        <Image
          src="/assets/img/logos/logo.svg"
          className="object-fit"
          layout="fill"
          alt=""
          title="" />
      </div>
    </div>
  )


  return(
    <header className="mx-auto max-w-5xl p-4">
      <nav
        className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full p-4 transition-all"
        ref={navRef}>
        <div className="flex items-center justify-between">
          <Link href="/">
            <a>
              <h1 className="relative flex-none flex flex-col">
                {/* <Logo/> */}
                <div className="flex gap-1">
                  <span className="text-xl font-bold">Choice</span>
                  <span className="text-xl">Machine</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-thin">Let the Machine decide …</span>
                  <span className="text-xs font-thin">if you can't!</span>
                </div>
              </h1>
            </a>
          </Link>
          {
            (size.width < twBreakpoints.lg) &&
            <a className="no-underline text-4xl -mt-2 pr-0 cursor-pointer" onClick={toggleMenu}>
              {
                  expanded ? <i className="bi bi-x-lg" /> : <i className="bi bi-list" />
              }
            </a>
          }
        </div>
        {
          ((size.width >= twBreakpoints.lg) || expanded) &&
          <div className="flex flex-col lg:flex-row py-8 lg:p-0 z-10 text-2xl md:text-lg gap-4">
            {
              [
                { href: '#cm-mk1', text: 'The Choice Machine' },
                { href: '#cm-mk2', text: 'MK II' },
                { href: '#cm-mk3', text: 'MK III' },
              ].map(({href, text}, i) => (
                <Link
                  key={i}
                  href={href}
                ><a className="py-4 lg:py-0 bg-neutral-50 p-4 rounded-xl">{text}</a></Link>
              ))
            }
          </div>
        }
      </nav>
      <GTag/>
    </header>
  )
}
