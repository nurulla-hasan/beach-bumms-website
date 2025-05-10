"use client";
import { usePathname } from "next/navigation";
import { SlBookOpen } from "react-icons/sl";

// Function to get the current date in a readable format
const getCurrentDate = () => {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return today.toLocaleDateString("en-US", options);
};

const Breadcrumb = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean)[0];

  console.log("Slug:", slug);

  return (
    <div className="max-w-7xl 3xl:max-w-[1400px] mx-auto md:px-8 px-4 text-black py-2">
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
        <div className="breadcrumb flex items-center gap-2">
          {/* <span>Home</span> &gt; <span>About Us</span> &gt;{" "} */}
          <SlBookOpen className="text-primary"/>
          <span className="text-black-600 capitalize">
            {slug?.split("-").join(" ")}
          </span>
        </div>
        <div className="date">
          <span>{getCurrentDate()}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
