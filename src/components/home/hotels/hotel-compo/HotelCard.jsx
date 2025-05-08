import Image from "next/image"
import { FaWifi, FaSwimmingPool, FaCoffee, FaCamera, FaDumbbell, FaGlassMartini } from "react-icons/fa"

const HotelCard = ({ hotel }) => {
  const { name, rating, reviews, description, price, discount, image, availability } = hotel

  // Map amenity icons
  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "wifi":
        return <FaWifi className="text-primary" />
      case "pool":
        return <FaSwimmingPool className="text-primary" />
      case "coffee":
        return <FaCoffee className="text-primary" />
      case "camera":
        return <FaCamera className="text-primary" />
      case "gym":
        return <FaDumbbell className="text-primary" />
      case "bar":
        return <FaGlassMartini className="text-primary" />
      default:
        return null
    }
  }

  return (
    <div className="bg-gray-100 rounded-md overflow-hidden mb-4 flex flex-col md:flex-row">
      <div className="md:w-2/4 relative md:h-auto h-50 m-4">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-lg" />
      </div>
      <div className="p-4 md:w-2/3 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-xl font-semibold text-blue-900">{name}</h3>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}>
                  ★
                </span>
              ))}
              {rating % 1 > 0 && <span className="text-lg text-yellow-400">½</span>}
              <span className="ml-2 text-sm text-gray-600">
                {rating} ({reviews} Reviews)
              </span>
            </div>
          </div>
          {discount && (
            <div className="bg-[#F2994A] text-white px-2 py-1 rounded text-xs mt-2 md:mt-0 self-start">
              Receive {discount}% discount on a restaurant
            </div>
          )}
        </div>

        <p className="text-sm text-gray-700 mt-2">Live a little and celebrate with champagne</p>
        <p className="text-sm text-gray-700">
          Deals include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation
          applies
        </p>

        <div className="mt-3 flex items-center">
          <span className="text-sm text-gray-700 mr-2">Availability:</span>
          <span
            className={`px-2 py-1 rounded text-xs ${availability === "Available" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
          >
            {availability}
          </span>
        </div>

        <div className="mt-3">
          <span className="text-sm text-gray-700 mr-2">Amenities:</span>
          <div className="flex space-x-3 mt-1">
            {["wifi", "pool", "coffee", "camera", "gym", "bar"].map((amenity) => (
              <div key={amenity} className="bg-gray-200 p-2 rounded-full">
                {getAmenityIcon(amenity)}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-900">${price}</span>
            <span className="text-xs text-gray-600">Includes taxes and fees</span>
          </div>
          <div className="flex flex-col sm:flex-row mt-3 md:mt-0 w-full sm:w-auto">
            <button className="bg-white border border-primary text-primary px-4 py-2 rounded mb-2 sm:mb-0 sm:mr-2 text-sm cursor-pointer">
              View in Map
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded text-sm cursor-pointer">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
