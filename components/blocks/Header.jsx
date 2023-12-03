import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className="flex flex-col justify-center items-center bg-white py-10 md:px-20 px-4"
      id="home"
    >
      <h3
        data-aos="fade-up"
        className="text-gray-700 text-3xl mb-4 uppercase text-center"
      >
        Безпека та естетика
      </h3>
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="font-serif text-5xl max-w-5xl mb-8 text-center"
      >
        Протипожежні двері, ворота та ковані вироби для вашого дому та бізнесу
      </h2>
      <Link
        data-aos="fade-up"
        data-aos-delay="200"
        href="/"
        className="text-center text-xl p-2 mb-14 w-64  text-white rounded-md transition-colors bg-red-800 hover:bg-red-600 "
      >
        ЗВ`ЯЗАТИСЯ
      </Link>

      <Image
        data-aos="fade-up"
        data-aos-delay="200"
        src="/header-picture.png"
        alt="header picture"
        height={548}
        width={1280}
      />
    </header>
  );
};

export default Header;
