import Image from 'next/image';

const ADVANTAGES = [
  { icon: 'done.svg', text: 'Повна відповідність технічних характеристик' },
  {
    icon: 'settings.svg',
    text: 'Використання передових і сучасних технологій',
  },
  { icon: 'verification.svg', text: 'Сертифікат на продукцію' },
  { icon: 'battery.svg', text: 'Високий запас міцності' },
  { icon: 'date.svg', text: 'Виконання замовлення в строк' },
  {
    icon: 'instruments.svg',
    text: 'Використання якісних, сучасних матеріалів',
  },
];

const About = () => {
  return (
    <section id="about" className="lg:p-20 py-10 px-4 lg:space-y-24 space-y-8">
      <div data-aos="fade-right" className="max-w-screen-md lg:text-3xl">
        Наша компанія надає послуги з виробництва та монтажу виробів з металу
        вже понад 15 років. Ми перший офіційний виробник, який отримав ліцензію
        на виробництво протипожежних і протирадіаційних дверей (рентген) в
        Україні. Компанія Адвента є лідером на ринку дверей.
      </div>
      <div
        data-aos="fade-left"
        className="max-w-screen-md lg:text-3xl lg:ml-auto"
      >
        Головний напрямок компанія це виробництво якісної сертифікованої
        продукції, а також постійний розвиток і відстеження сучасних,
        інноваційних технологій на ринку дверей. Наша компанія перший
        Український виробник, що дає можливість виробляти продукцію за дуже
        низькими цінами з гарантією якості.
      </div>

      <div className="space-y-6">
        <h4
          data-aos="fade-right"
          className="text-xl uppercase font-medium text-gray-700"
        >
          Купуючи нашу продукцію, Ви можете бути впевнені в:
        </h4>

        <div className="flex flex-col lg:flex-row gap-6">
          {ADVANTAGES.slice(0, 3).map((item, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex items-center p-6 rounded-xs bg-blue-200 lg:w-1/3 text-base"
              key={i}
            >
              <Image
                src={'/icons/' + item.icon}
                alt={item.icon}
                width={56}
                height={56}
              />
              {item.text}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {ADVANTAGES.slice(3, 6).map((item, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 100 + 300}
              className="flex items-center p-6 rounded-xs bg-blue-200 lg:w-1/3 text-base"
              key={i}
            >
              <Image
                src={'/icons/' + item.icon}
                alt={item.icon}
                width={56}
                height={56}
              />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
