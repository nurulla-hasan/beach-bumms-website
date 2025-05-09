import { hotelData } from "@/data/data"
import HotelCard from "./HotelCard"
import { FaArrowRightLong } from "react-icons/fa6"
import Link from "next/link"


const HotelsList = ({ hotels, totalHotels, location }) => {
    return (
        <div className="flex-1">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-medium">
                    Total {hotelData.length} Hotel{totalHotels !== 1 ? "s" : ""} in {location}
                </h2>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by :</span>
                    <div className="border border-gray-200 rounded p-1 text-xs bg-gray-100">
                        <select className="outline-none text-gray-600">
                            <option>Zip Code</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {hotels.slice(0, 3).map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>


            <div className="mt-10 flex justify-center">
                <div className='relative text-xs font-medium bg-primary hover:bg-hover_color w-28 hover:w-34 mt-2 py-3 px-4 rounded text-white cursor-pointer group transition-all duration-300'>
                    <span className="transition-all duration-300">LEARN MORE</span>
                    <FaArrowRightLong size={16} color='#ffffff' className="absolute top-3 right-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default HotelsList
