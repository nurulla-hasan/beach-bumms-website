import { restaurants } from "@/data/data"
import Image from "next/image"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"

const RestaurantCard = ({ name, description, rating, reviews, image }) => {
  // Generate star rating
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />)
    }

    const remainingStars = 5 - stars.length
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />)
    }

    return stars
  }

  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm relative">
      {/* Discount Badge */}
      <div className="absolute top-0 left-0 bg-orange-400 text-white px-2 py-1 text-sm font-medium z-10  rounded-br-xl ">30% OFF</div>

      {/* Restaurant Image */}
      <div className="relative h-56 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{name}</h3>
        <p className="text-gray-700 text-sm mb-3">{description}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex mr-2">{renderStars(rating)}</div>
          <span className="text-gray-600 text-sm">
            {rating} ({reviews} Reviews)
          </span>
        </div>

        {/* Book Button */}
        <button className="w-full text-xs bg-primary hover:bg-hover_color text-white py-3 rounded font-medium transition-colors cursor-pointer">
          BOOK NOW
        </button>
      </div>
    </div>
  )
}

const VipCardServices = () => {


  return (
    <section className="py-">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Restaurants and Services included in the VIP Card</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary text-xs hover:bg-hover_color text-white px-6 py-3 rounded font-medium transition-colors cursor-pointer">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  )
}

export default VipCardServices
