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
  { label: 'ҐРАТИ', link: '#grilles' },
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
    <nav className="bg-white text-black border-b-2 border-gray-300 relative">
      <div className="gap-12 items-center justify-end py-3 xl:px-20 px-10 text-sm hidden xl:flex">
        <ContactsList />
      </div>

      <div className="flex gap-12 items-center py-3 xl:px-20 px-10 bg-white relative z-20">
        <div className="flex items-center gap-2 font-serif text-xl">
          <Logo />
          АДВЕНТА
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
        className={`transition-all duration-1000 absolute w-full bg-white z-10 p-10 left-0 border-y-2 border-gray-300 space-y-4 ${
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
      <a href={constants.email.link} className="underline">
        {constants.email.label}
      </a>
    </div>
    <div className="flex items-center gap-1">
      <Image src="/icons/phone.svg" alt="phone" width={16} height={16} />
      <a href={constants.phone_1.link} className="underline">
        {constants.phone_1.label}
      </a>
      {' ' + '|' + ' '}
      <a href={constants.phone_2.link} className="underline">
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
        className="flex items-center text-gray-600    transition-all font-medium border-b-2 border-transparent hover:border-black hover:text-black"
      >
        {link.label}
      </Link>
    );
  });

const Logo = () => (
  <svg
    width="27"
    height="32"
    viewBox="0 0 27 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 5.81818L13.5 0L27 5.81818V14.5455C27 22.6182 21.24 30.1673 13.5 32C5.76 30.1673 0 22.6182 0 14.5455V5.81818ZM2 7.36088L13.5 2.42424V29.5758C6.90667 28.0207 2 21.6154 2 14.7658V7.36088Z"
      fill="#1A1C1E"
    />
  </svg>
);
