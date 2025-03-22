
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="bg-neutral-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Ready to Get Our New Stuff?</h2>
              <p className="text-gray-400 mb-4">
                Stuffeus for Home and Needs<br />
                We'll listen to your needs, identify the best approach, and then create a bespoke smart DIY design solution that's right for you.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
              />
              <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">About</h3>
            <ul className="space-y-2">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/about/team">Meet The Team</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/shipping">Shipping</FooterLink>
              <FooterLink href="/returns">Return</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-medium mb-4">Social Media</h3>
            <div className="flex space-x-3">
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://facebook.com" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © 2023 Stuffeus. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link to={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: any }) => (
  <a 
    href={href}
    className="bg-neutral-800 hover:bg-neutral-700 transition-colors p-2 rounded-full" 
    target="_blank" 
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export default Footer;
