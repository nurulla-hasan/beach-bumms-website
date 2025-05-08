"use client";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import PageContainer from "@/components/PageContainer/PageContainer";
import { blogPosts } from "@/data/data";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";



const BlogSection = () => {
  return (
    <PageContainer>
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-3xl font-bold text-[#003366]">Jesses blogs</h2>
        <span className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
          Coming soon
        </span>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="w-full h-48 relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaRegCalendarAlt className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <h3 className="text-md font-bold text-[#003366] mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 flex-grow">
                {post.description}
              </p>
              <Link href={`/blogs/${post.id}`}>
                <button className="mt-4 w-full text-xs 3xl:text-sm bg-primary text-white font-semibold py-2 rounded hover:bg-hover_color transition cursor-pointer">
                  SEE MORE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <div className='relative text-xs font-medium bg-primary hover:bg-hover_color w-28 hover:w-34 mt-2 py-2 px-4 rounded text-white cursor-pointer group transition-all duration-300'>
          <span className="transition-all duration-300">LEARN MORE</span>
          <FaArrowRightLong size={16} color='#ffffff' className="absolute top-2 right-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default BlogSection;
