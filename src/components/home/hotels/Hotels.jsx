'use client'
import PageContainer from '@/components/PageContainer/PageContainer';
import FilterSidebar from './hotel-compo/FilterSidebar';
import HotelsList from './hotel-compo/HotelsList';
import { useState } from 'react';
import { hotelData } from '@/data/data';

const Hotels = () => {
    const [hotels, SetHotels] = useState(hotelData)
  
    return (
      <PageContainer>
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Hotels</h1>
        <div className="flex flex-col lg:flex-row">
          <FilterSidebar />
          <HotelsList hotels={hotels} location="Ft Lauderdale" />
        </div>
      </PageContainer>
    )
  }
  
  export default Hotels;