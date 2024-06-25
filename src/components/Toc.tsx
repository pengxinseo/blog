"use client"
import {useEffect} from "react"
import tocbot from "tocbot"
import "./toc.css"

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".markdown",
      headingSelector: "h1, h2, h3",
      orderedList: true,
      scrollSmooth: true,
      scrollSmoothDuration: 400,
      collapseDepth: 6
    })
    return () => tocbot.destroy()
  }, [])

  return (
    <div className="flex flex-col gap-2 sticky top-4 md:px-10 px-0">
      <h5 className="text-slate-900 font-semibold text-sm leading-6 dark:text-slate-100">
        目录书🌲
      </h5>
      <section className="toc py-2 pl-2 text-slate-700 text-sm leading-6">
      </section>
    </div>
  )
}