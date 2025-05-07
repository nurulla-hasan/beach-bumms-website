"use client";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import PageContainer from "@/components/PageContainer/PageContainer";
import { blogPosts } from "@/data/data";



const BlogSection = () => {
  return (
    <PageContainer>
      <section className="py-16">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-3xl font-bold text-[#003366]">Jesses blog</h2>
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
                <button className="mt-4 bg-primary text-white text-sm font-semibold py-2 rounded hover:bg-[#007bbd] transition">
                  SEE MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[#007bbd] transition">
            LOAD MORE
          </button>
        </div>
      </section>
    </PageContainer>
  );
};

export default BlogSection;
