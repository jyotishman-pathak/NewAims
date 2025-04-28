import Link from 'next/link';
import { Heart, Instagram, Twitter, Facebook, Youtube, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl">New Aims</span>
            </Link>
            <p className="text-gray-400 mb-6">
            Empowering Communities 
            for a Better Tomorrow
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram size={20} />} href="#" />
              <SocialIcon icon={<Twitter size={20} />} href="#" />
              <SocialIcon icon={<Facebook size={20} />} href="#" />
              <SocialIcon icon={<Youtube size={20} />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/programs" label="Our Programs" />
              <FooterLink href="/donate" label="Donate" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/events" label="Events" />
              <FooterLink href="/reports" label="Annual Reports" />
              <FooterLink href="/volunteer" label="Volunteer" />
              <FooterLink href="/partners" label="Our Partners" />
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay informed with our latest news, updates, and ways to get involved.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700"
              />
              <Button size="icon" aria-label="Subscribe">
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hope Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="text-gray-500 hover:text-white text-sm">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="bg-gray-800 hover:bg-primary-500 transition-colors p-2 rounded-full"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-white transition-colors">
      {label}
    </Link>
  </li>
);

export default Footer;