import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaTwitter, FaTiktok, FaYoutube, FaSearch } from "react-icons/fa"
import { SiVisa, SiMastercard, SiDiscover, SiPaypal, SiJcb } from "react-icons/si"

const Footer = () => {
    return (
        <footer className="bg-title_color text-white py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* More Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">More</h3>
                        <ul className="space-y-4 *:text-[#CACACA]">
                            <li>
                                <Link href="/vip-card" className="hover:text-gray-100 transition-colors">
                                    About VIP Card
                                </Link>
                            </li>
                            <li>
                                <Link href="/vip-card/facilities" className="hover:text-gray-100 transition-colors">
                                    VIP Card Facilities
                                </Link>
                            </li>
                            <li>
                                <Link href="/vip-card/restaurant-offers" className="hover:text-gray-100 transition-colors">
                                    Restaurant Offer by VIP Card
                                </Link>
                            </li>
                            <li>
                                <Link href="/coming-soon" className="hover:text-gray-100 transition-colors">
                                    Coming soon
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Company</h3>
                        <ul className="space-y-4 *:text-[#CACACA]">
                            <li>
                                <Link href="/about-us" className="hover:text-gray-100 transition-colors">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-gray-100 transition-colors">
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-gray-100 transition-colors">
                                    Jesse's blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-gray-100 transition-colors">
                                    Terms of service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4 text-[#CACACA]">
                            <li>
                                <Link href="/faq" className="hover:text-gray-100 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-gray-100 transition-colors">
                                    Get in touch
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-gray-100 transition-colors">
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Social</h3>
                        <div className="flex space-x-4">
                            <Link
                                href="https://facebook.com"
                                className="bg-white p-2 rounded-full text-title_color hover:opacity-80 transition-opacity"
                            >
                                <FaFacebookF size={20} />
                            </Link>
                            <Link
                                href="https://twitter.com"
                                className="bg-white p-2 rounded-full text-title_color hover:opacity-80 transition-opacity"
                            >
                                <FaTwitter size={20} />
                            </Link>
                            <Link
                                href="https://tiktok.com"
                                className="bg-white p-2 rounded-full text-title_color hover:opacity-80 transition-opacity"
                            >
                                <FaTiktok size={20} />
                            </Link>
                            <Link
                                href="https://youtube.com"
                                className="bg-white p-2 rounded-full text-title_color hover:opacity-80 transition-opacity"
                            >
                                <FaYoutube size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mt-12 max-w-md mx-auto lg:mx-0">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800 bg-[#EEEEEE]"
                        />
                        <button className="bg-primary hover:bg-hover_color text-white px-4 py-2 rounded-r-md flex items-center transition-colors">
                            <FaSearch className="mr-2" />
                            Search
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#5a7b86] mt-4 mb-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 *:text-[#B0DCED] *:text-sm">
                        <p>© Copyright {new Date().getFullYear()}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image 
                        src="/images/visa.png"
                        width={500}
                        height={500}
                        alt=""
                        className="w-12 rounded-sm"
                        />
                        <Image 
                        src="/images/mastercard.png"
                        width={500}
                        height={500}
                        alt=""
                        className="w-12 rounded-sm"
                        />
                        <Image 
                        src="/images/discover.png"
                        width={500}
                        height={500}
                        alt=""
                        className="w-12 rounded-sm"
                        />
                        <Image 
                        src="/images/paypal.png"
                        width={500}
                        height={500}
                        alt=""
                        className="w-12 rounded-sm"
                        />
                        <Image 
                        src="/images/jcb.png"
                        width={500}
                        height={500}
                        alt=""
                        className="w-12 rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer