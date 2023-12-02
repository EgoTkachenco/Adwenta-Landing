import constants, { address } from '@/constants';
import Image from 'next/image';
Image;
const Contacts = () => {
  return (
    <footer
      id="contacts"
      className="bg-gray-800 text-gray-200 lg:p-20 py-10 px-8 flex flex-col lg:flex-row gap-6"
    >
      <div className="flex-grow">
        <h3 className="uppercase text-2xl mb-3" data-aos="fade-right">
          Обговоримо Деталі
        </h3>
        <h4 className="font-serif text-5xl mb-24" data-aos="fade-right">
          Зв'яжіться з нашою командою
        </h4>

        <div
          className="flex flex-col gap-6"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <ContactItem
            icon="/icons/calendar.svg"
            title="Графік роботи:"
            text={constants.work_hours}
          />
          <ContactItem
            icon="/icons/phone.svg"
            title="Наші контакти:"
            text={
              <div>
                <a
                  href={constants.phone_1.link}
                  className="text-red-300 hover:underline"
                >
                  {constants.phone_1.label}
                </a>
                <span className="text-gray-400">{' ' + '|' + ' '}</span>
                <a
                  href={constants.phone_2.link}
                  className="text-red-300 hover:underline"
                >
                  {constants.phone_2.label}
                </a>
              </div>
            }
          />
          <ContactItem
            icon="/icons/mail.svg"
            title="Електрона пошта:"
            text={
              <a
                href={constants.email.link}
                className="text-red-300 hover:underline"
              >
                {constants.email.label}
              </a>
            }
          />
          <ContactItem
            icon="/icons/location.svg"
            title="Наша адреса:"
            text={
              <address className="text-red-300">{constants.address}</address>
            }
          />
        </div>
      </div>

      <div
        className="lg:w-1/3 relative xl:h-96 xl:ms-auto h-64 w-96 mx-auto"
        data-aos="fade-left"
      >
        <a href="https://maps.app.goo.gl/ncG4dBs51e4uAz627" target="_blank">
          <Image
            src="/icons/map-marker.svg"
            alt="marker"
            width={28}
            height={40}
            className="absolute z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 hover:scale-125 transition-all"
          />
        </a>
        <Image src="/map.png" alt="map" fill objectFit="fill" />
      </div>
    </footer>
  );
};

export default Contacts;

const ContactItem = ({ icon, title, text }) => (
  <div className="flex gap-8 items-center">
    <div className="flex items-center gap-2 w-44">
      <Image src={icon} alt="icon" width={24} height={16} />
      {title}
    </div>
    {text}
  </div>
);
