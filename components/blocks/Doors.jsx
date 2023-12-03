import Image from 'next/image';
import { useState } from 'react';
import { Card } from '../Styled';

const Doors = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div id="doors" className="lg:p-20 py-10 px-8">
      <h3
        className="text-gray-700 text-3xl uppercase mb-3"
        data-aos="fade-right"
      >
        Прохід до стабільності
      </h3>
      <div className="flex xl:items-center flex-col xl:flex-row gap-8">
        <h2 className="font-serif text-5xl mb-8" data-aos="fade-right">
          Якісні двері для вашого спокою
        </h2>

        <div
          className="flex items-center mb-8 lg:overflow-x-visible overflow-x-auto md:mr-0 md:pr-0 -mr-8 pr-8 md:pb-0 pb-2 "
          data-aos="fade-left"
        >
          {TABS.map((tab, i) => (
            <div
              key={i}
              className={`p-4 uppercase transition-all hover:bg-red-800 hover:text-white cursor-pointer ${
                i === activeTab ? 'bg-red-800 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setActiveTab(i)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      {TABS[activeTab].children}
    </div>
  );
};

export default Doors;

const BulletProof = () => {
  return (
    <div>
      <div className="flex xl:flex-row flex-col xl:gap-32 gap-12">
        <div className="flex-1" data-aos="fade-right">
          Куленепробивні двері - це спеціально розроблені для забезпечення
          високого рівня захисту від вогнепальних засобів та інших загроз. Вони
          використовуються в об`єктах, де важлива безпека, таких як банки,
          важливі установи, мілітарні об`єкти, а також у приватних будинках для
          забезпечення особистої безпеки. У вашому описі можна включити основні
          характеристики дверей, їхню здатність витримувати постріли та
          забезпечувати безпеку, а також вказати на важливість вибору
          правильного рівня захисту відповідно до потреб і конкретних умов
          використання.
        </div>
        <div className="flex md:flex-row flex-col gap-6 md:items-start justify-center items-center">
          <Image
            data-aos="fade-left"
            src="/bulletproof_1.png"
            alt="illustration"
            width={302}
            height={372}
          />
          <Image
            data-aos="fade-left"
            data-aos-delay="200"
            src="/bulletproof_2.png"
            alt="illustration"
            width={302}
            height={372}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-12">
        <Card data-aos="fade-up">
          <Card.Header>матеріали</Card.Header>
          Куленепробивні двері зазвичай виготовляються з міцних матеріалів,
          таких як сталь або спеціальні композитні матеріали, які можуть
          витримувати постріли та інші атакуючі впливи. Вони можуть мати
          підсилені рами, спеціальні запобіжні системи та бути покриті захисними
          шаром для поглинання енергії від пострілу.
        </Card>
        <Card data-aos="fade-up" data-aos-delay="100">
          <Card.Header>Критерії</Card.Header>
          При обиранні куленепробивних дверей важливо враховувати рівень
          захисту, їхню вагу (особливо для встановлення в приватних будинках),
          дизайн та можливості інтеграції в інтер`єр. Також важливо враховувати
          відповідність стандартам безпеки і сертифікації.
        </Card>
        <Card data-aos="fade-up" data-aos-delay="200">
          <Card.Header>Характеристики</Card.Header>У вашому описі можна включити
          основні характеристики дверей, їхню здатність витримувати постріли та
          забезпечувати безпеку, а також вказати на важливість вибору
          правильного рівня захисту відповідно до потреб і конкретних умов
          використання.
        </Card>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: 'Пуленепробивні',
    children: <BulletProof key={1} />,
  },
  {
    title: 'Протипожежні',
    children: <BulletProof key={2} />,
  },
  { title: 'Ренгенозахисні', children: <BulletProof key={3} /> },
  { title: 'Вхідні', children: <BulletProof key={4} /> },
];
