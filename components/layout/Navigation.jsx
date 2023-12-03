import routes from '@/routes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import constants from '@/constants';
import { useLottie } from 'lottie-react';
import menuAnimation from './Animation - 1701624342853.json';

const links = [
  { label: 'ГОЛОВНА', link: '/' },
  { label: 'ПРО НАС', link: '#about' },
  { label: 'ДВЕРІ', link: '#doors' },
  { label: 'ВОРОТА ТА КОВАНІ ВИРОБИ', link: '#gates' },
  { label: 'ГРАТИ', link: '#grilles' },
  { label: 'КОНТАКТИ', link: '#contacts' },
];

const Navigation = () => {
  const animation = useLottie({
    animationData: menuAnimation,
    loop: false,
    autoplay: false,
  });
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    if (!open) {
      animation.playSegments([0, 80], true);
    } else {
      animation.playSegments([80, 160], true);
    }
  };

  return (
    <nav className="bg-white text-black border-b-2 border-gray-600 relative">
      <div className="gap-12 items-center justify-end py-3 xl:px-20 px-10 text-sm hidden xl:flex">
        <ContactsList />
      </div>

      <div className="flex gap-12 items-center py-3 xl:px-20 px-10 bg-white relative z-20">
        <div className="flex items-center">
          <Image src="/nav-logo.svg" alt="logo" height={32} width={138} />
        </div>

        <div className="ml-auto mr-8 gap-12 hidden xl:flex">
          <LinksList links={links} />
        </div>

        <button
          className="w-12 h-12 ml-auto xl:hidden flex"
          onClick={toggleMenu}
        >
          {animation.View}
        </button>
      </div>

      <div
        className={`transition-all duration-1000 absolute w-full bg-white z-10 p-10 left-0 border-y-2 border-gray-600 space-y-4 ${
          open ? 'top-full' : '-top-full -translate-y-full'
        }`}
      >
        <LinksList />
        <hr />
        <ContactsList />
      </div>
    </nav>
  );
};

export default Navigation;

const ContactsList = () => (
  <>
    <div className="flex items-center gap-1">
      <Image src="/icons/calendar.svg" alt="calendar" width={16} height={16} />
      {constants.work_hours}
    </div>
    <div className="flex items-center gap-1">
      <Image src="/icons/location.svg" alt="calendar" width={16} height={16} />
      {constants.address}
    </div>
    <div className="flex items-center gap-1">
      <Image src="/icons/email.svg" alt="mail" width={16} height={16} />
      <a href={constants.email.link} className="hover:underline">
        {constants.email.label}
      </a>
    </div>
    <div className="flex items-center gap-1">
      <Image src="/icons/phone.svg" alt="phone" width={16} height={16} />
      <a href={constants.phone_1.link} className="hover:underline">
        {constants.phone_1.label}
      </a>
      {' ' + '|' + ' '}
      <a href={constants.phone_2.link} className="hover:underline">
        {constants.phone_2.label}
      </a>
    </div>
  </>
);

const LinksList = () =>
  links.map((link, i) => {
    return (
      <Link
        key={i}
        href={link.link}
        className="flex items-center text-gray-600  hover:text-black  transition-all font-medium border-b-2 border-transparent hover:border-black"
      >
        {link.label}
      </Link>
    );
  });
