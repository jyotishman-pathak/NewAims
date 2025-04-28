"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className={cn('h-8 w-8', scrolled ? 'text-primary' : 'text-white')} />
            <span className={cn('font-bold text-xl', scrolled ? 'text-primary' : 'text-white')}>
              NEWAIMS
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks scrolled={scrolled} />
            <Button className="bg-primary-500 hover:bg-primary-600 text-white">
              Donate Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-primary' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-primary' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <NavLinks scrolled={true} mobile={true} />
              <Button className="bg-primary-500 hover:bg-primary-600 text-white w-full">
                Donate Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ scrolled = false, mobile = false }: { scrolled?: boolean; mobile?: boolean }) => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/donate', label: 'Donate' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'transition-colors duration-200',
            scrolled || mobile
              ? 'text-gray-700 hover:text-primary'
              : 'text-white hover:text-gray-200',
            mobile && 'py-2 border-b border-gray-100'
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;