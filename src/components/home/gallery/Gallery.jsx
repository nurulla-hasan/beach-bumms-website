"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { galleryImages } from "@/data/data"
import { RxCross2 } from "react-icons/rx";
import PageContainer from "@/components/PageContainer/PageContainer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const openLightbox = (image) => {
    setSelectedImage(image)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    // Restore body scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <PageContainer>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* First row */}
          <div className="md:col-span-7">
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer h-64 md:h-80"
              onClick={() => openLightbox(galleryImages[0])}
            >
              <Image
                src={galleryImages[0].src || "/placeholder.svg"}
                alt={galleryImages[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer h-64 md:h-80"
              onClick={() => openLightbox(galleryImages[1])}
            >
              <Image
                src={galleryImages[1].src || "/placeholder.svg"}
                alt={galleryImages[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="md:col-span-4">
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer h-48 md:h-64"
              onClick={() => openLightbox(galleryImages[2])}
            >
              <Image
                src={galleryImages[2].src || "/placeholder.svg"}
                alt={galleryImages[2].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:col-span-4">
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer h-48 md:h-64"
              onClick={() => openLightbox(galleryImages[3])}
            >
              <Image
                src={galleryImages[3].src || "/placeholder.svg"}
                alt={galleryImages[3].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:col-span-4">
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer h-48 md:h-64"
              onClick={() => openLightbox(galleryImages[4])}
            >
              <Image
                src={galleryImages[4].src || "/placeholder.svg"}
                alt={galleryImages[4].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Third row */}
          <div className="md:col-span-4">
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer h-48 md:h-64"
              onClick={() => openLightbox(galleryImages[5])}
            >
              <Image
                src={galleryImages[5].src || "/placeholder.svg"}
                alt={galleryImages[5].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <div
              className="relative rounded-lg overflow-hidden cursor-pointer h-48 md:h-64"
              onClick={() => openLightbox(galleryImages[6])}
            >
              <Image
                src={galleryImages[6].src || "/placeholder.svg"}
                alt={galleryImages[6].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-primary hover:hprimary text-white px-6 py-2 rounded font-medium transition-colors">
            VIEW MORE
          </button>
        </div>
      </div>

      {/* Custom Lightbox  */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeLightbox}>
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 z-10 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              {/* Using a simple X instead of Lucide icon */}
              <span className="text-xl font-bold cursor-pointer"><RxCross2 color="#000000"/></span>
            </button>

            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  )
}

export default Gallery
