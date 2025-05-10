"use client"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import PageContainer from "@/components/PageContainer/PageContainer"
import { commandments } from "@/data/data"

const CommandmentsScroll = () => {
  const [visibleItems, setVisibleItems] = useState(0)
  const scrollRef = useRef(null)
  const containerRef = useRef(null)


  // Scroll animation controls
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const scrollScale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8])

  // Trigger item animations as user scrolls
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // Calculate how many items should be visible based on scroll progress
      const itemsToShow = Math.ceil(value * 1.2 * commandments.length)
      setVisibleItems(Math.min(itemsToShow, commandments.length))
    })

    return () => unsubscribe()
  }, [scrollYProgress, commandments.length])

  return (
    <div ref={containerRef} className=" min-h-screen flex flex-col items-center justify-center">
      <PageContainer>
        <motion.div
          ref={scrollRef}
          style={{
            opacity: scrollOpacity,
            scale: scrollScale,
          }}
          className="relative"
        >

          {/* Scroll container */}
          <div className="rounded-lg relative">
            {/* Aged paper texture */}
            <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] opacity-20 mix-blend-overlay rounded-lg"></div>

            <h2 className="text-2xl md:text-4xl font-semibold text-title_color text-center mb-10 relative z-10">
              Jesse's 10 Commandments
            </h2>

            <div className="space-y-6 md:space-y-10 relative z-10">
              {commandments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={index < visibleItems ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2 * (index % 3), // Stagger effect
                  }}
                  className="flex items-start gap-4 bg-[#f2fdff] p-4 rounded-sm"
                >
                  <div>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="md:text-xl font-bold text-title_color mb-1">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="text-title_color text-xs md:text-base">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll bottom decoration */}
            <div className="mt-8 border-t-2 border-title_color pt-4 text-center text-title_color italic ">
              <p className="text-xl md:text-4xl">"Your Vacation Starts Right Now"</p>
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </div>
  )
}

export default CommandmentsScroll
