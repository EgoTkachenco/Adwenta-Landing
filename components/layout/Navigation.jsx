import routes from '@/routes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import constants from '@/constants';
import LinkTransition from '../LinkTransition';

const links = [
  { label: 'ГОЛОВНА', link: '/' },
  { label: 'ПРО НАС', link: '#about' },
  { label: 'ДВЕРІ', link: '#doors' },
  { label: 'ВОРОТА ТА КОВАНІ ВИРОБИ', link: '#gates' },
  { label: 'ГРАТИ', link: '#grilles' },
  { label: 'КОНТАКТИ', link: '#contacts' },
];
const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="bg-white text-black border-b-2 border-gray-600">
      <div className="flex gap-12 items-center justify-end py-3 px-20 text-sm">
        <div className="flex items-center gap-1">
          <Image
            src="/icons/calendar.svg"
            alt="calendar"
            width={16}
            height={16}
          />
          {constants.work_hours}
        </div>

        <div className="flex items-center gap-1">
          <Image
            src="/icons/location.svg"
            alt="calendar"
            width={16}
            height={16}
          />
          {constants.address}
        </div>

        <div className="flex items-center gap-1">
          <Image src="/icons/mail.svg" alt="mail" width={16} height={16} />
          {constants.email.label}
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
      </div>

      <div className="flex gap-12 items-center justify-end py-3 px-20">
        <div className="flex items-center">
          <Image src="/nav-logo.svg" alt="logo" height={32} width={138} />
        </div>

        <div className="ml-auto mr-8 flex gap-12">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.link}
                className="flex items-center text-gray-600  hover:text-black  transition-all font-medium border-b-2 border-transparent hover:border-black"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
