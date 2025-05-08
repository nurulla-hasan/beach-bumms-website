import { hotelData } from "@/data/data"
import HotelCard from "./HotelCard"


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
                        <select className="outline-none">
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

            <div className="mt-6 text-center">
                <button className="bg-primary text-white px-6 py-2 rounded text-sm cursor-pointer">LOAD MORE</button>
            </div>
        </div>
    )
}

export default HotelsList
