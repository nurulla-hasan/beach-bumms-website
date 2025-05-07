const FilterSection = ({ title, children }) => {
  return (
    <div className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-[#E6F4F9]">
        <h3 className="text-blue-900 font-medium p-4">{title}</h3>
      </div>
      <div className="bg-[#EEEEEE] p-4">
        {children}
      </div>
    </div>
  )
}

const FilterOption = ({ label, count, id }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <input type="checkbox" id={id} className="mr-2 h-4 w-4 accent-primary" />
        <label htmlFor={id} className="text-sm text-gray-700">
          {label}
        </label>
      </div>
      <span className="text-sm text-gray-500">{count}</span>
    </div>
  )
}

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`text-lg ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>
          ★
        </span>
      ))}
    </div>
  )
}

const FilterSidebar = () => {
  return (
    <div className="w-full lg:w-64 mr-0 lg:mr-6">
      <h2 className="text-blue-900 font-medium mb-4">Filter by</h2>

      <FilterSection title="Popular Filters">
        <FilterOption label="Free cancellation" count="200" id="free-cancellation" />
        <FilterOption label="Spa" count="100" id="spa" />
        <FilterOption label="Beach front" count="15" id="beach-front" />
        <FilterOption label="Hot tub/ jacuzzi" count="12" id="hot-tub" />
        <FilterOption label="Book without credit card" count="230" id="no-credit-card" />
        <FilterOption label="No prepayment" count="12" id="no-prepayment" />
      </FilterSection>

      <FilterSection title="Your budget per day">
        <FilterOption label="$ 0 - $ 200" count="200" id="budget-1" />
        <FilterOption label="$ 200 - $ 500" count="100" id="budget-2" />
        <FilterOption label="$ 500 - $ 1,000" count="15" id="budget-3" />
        <FilterOption label="$ 1,000 - $ 2,000" count="12" id="budget-4" />
        <FilterOption label="$ 2,000 - $ 5,000" count="230" id="budget-5" />
      </FilterSection>

      <FilterSection title="Rating">
        <div className="mb-2">
          <p className="text-sm text-gray-700 mb-2">Show only ratings more than</p>
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div key={rating} className="flex items-center border border-gray-300 rounded p-1">
                <span className="mr-1">{rating}</span>
                <span className="text-yellow-400">★</span>
              </div>
            ))}
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Activities">
        <FilterOption label="Fishing" count="200" id="fishing" />
        <FilterOption label="Hiking" count="100" id="hiking" />
        <FilterOption label="Beach" count="15" id="beach" />
        <FilterOption label="Cycling" count="12" id="cycling" />
        <FilterOption label="Sauna" count="230" id="sauna" />
        <FilterOption label="Night lights" count="12" id="night-lights" />
      </FilterSection>
    </div>
  )
}

export default FilterSidebar
