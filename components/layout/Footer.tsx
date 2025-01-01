import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" bg-[#0a1a32ff] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-6xl uppercase font-extrabold text-center mb-12 text-[#73ffedff]">
            fragrancewhispherer
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mt-1">Your Brand</h3>
            <p className="text-sm">Elevate your style with our curated collection of trendsetting fashion.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#73ffedff] transition-colors">
                <FaFacebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-[#73ffedff] transition-colors">
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-[#73ffedff] transition-colors">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-[#73ffedff] transition-colors">
                <FaYoutube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#73ffedff] transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#73ffedff] transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-[#73ffedff] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#73ffedff] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><Link href="/privacypolicy" className="hover:text-[#73ffedff] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms&conditions" className="hover:text-[#73ffedff] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-[#73ffedff] transition-colors">Shipping Policy</Link></li>
              <li><Link href="/return-policy" className="hover:text-[#73ffedff] transition-colors">Return Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Visit Our Store</h2>
            <p>
              123 Fashion Street, Karachi, Pakistan
            </p>
            <p className='mt-4'>
              Open Monday to Saturday, 10:00 AM - 9:00 PM
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#73ffedff] text-center text-sm">
          <p>&copy; 2024 Your Brand Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer