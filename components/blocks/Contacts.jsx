import constants, { address } from '@/constants';
import Image from 'next/image';
Image;
const Contacts = () => {
  return (
    <footer
      id="contacts"
      className="bg-gray-800 text-gray-200 lg:p-20 py-10 px-4 flex flex-col xl:flex-row gap-6"
    >
      <div className="flex-grow">
        <h3 className="uppercase text-2xl mb-3" data-aos="fade-right">
          Обговоримо Деталі
        </h3>
        <h4 className="font-serif text-5xl mb-24" data-aos="fade-right">
          Зв`яжіться з нашою командою
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
                <a href={constants.phone_1.link} className="underline">
                  {constants.phone_1.label}
                </a>
                <span className="text-white hidden lg:inline">
                  {' ' + '|' + ' '}
                </span>
                <br className="block lg:hidden" />
                <a href={constants.phone_2.link} className="underline">
                  {constants.phone_2.label}
                </a>
              </div>
            }
          />
          <ContactItem
            icon="/icons/email.svg"
            title="Електрона пошта:"
            text={
              <a href={constants.email.link} className="underline">
                {constants.email.label}
              </a>
            }
          />
          <ContactItem
            icon="/icons/location.svg"
            title="Наша адреса:"
            text={<address>{constants.full_address}</address>}
          />
        </div>
      </div>

      <div
        className="xl:w-1/3 relative xl:ms-auto w-full mx-auto"
        data-aos="fade-left"
      >
        <iframe
          title="Адвента на карті"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.700317967283!2d30.407473977239825!3d50.44668247159156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc6b85d9062d%3A0x2048d4b8ea57f795!2z0JDQtNCy0LXQvdGC0LAg0J_RgNC-0YLQuNCy0L7Qv9C-0LbQsNGA0L3Ri9C1INCU0LLQtdGA0Lg!5e0!3m2!1suk!2sua!4v1701618240838!5m2!1suk!2sua"
          style={{
            border: 0,
            width: '100%',
            height: '100%',
            maxWidth: '500px',
            minHeight: '350px',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Contacts;

const ContactItem = ({ icon, title, text }) => (
  <div className="flex gap-8 lg:items-center items-start">
    <div className="flex items-center gap-2 lg:w-44 w-2/4">
      <Image src={icon} alt="icon" width={24} height={16} />
      {title}
    </div>
    <div className="w-2/4">{text}</div>
  </div>
);
