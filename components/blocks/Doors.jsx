import Image from 'next/image';
import { useState } from 'react';
import { Card } from '../Styled';

const Doors = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div id="doors" className="lg:p-20 py-10 px-4">
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
          className="flex items-center mb-8 lg:overflow-x-visible overflow-x-auto md:mr-0 md:pr-0 -mr-4 pr-4 md:pb-0 pb-2 "
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
        <Card className="w-full lg:w-1/3" data-aos="fade-up">
          <Card.Header>матеріали</Card.Header>
          Куленепробивні двері зазвичай виготовляються з міцних матеріалів,
          таких як сталь або спеціальні композитні матеріали, які можуть
          витримувати постріли та інші атакуючі впливи. Вони можуть мати
          підсилені рами, спеціальні запобіжні системи та бути покриті захисними
          шаром для поглинання енергії від пострілу.
        </Card>
        <Card
          className="w-full lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Card.Header>Критерії</Card.Header>
          При обиранні куленепробивних дверей важливо враховувати рівень
          захисту, їхню вагу (особливо для встановлення в приватних будинках),
          дизайн та можливості інтеграції в інтер`єр. Також важливо враховувати
          відповідність стандартам безпеки і сертифікації.
        </Card>
        <Card
          className="w-full lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
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

const FireProof = () => {
  return (
    <div>
      <div className="flex xl:flex-row flex-col xl:gap-32 gap-12">
        <div className="flex-1" data-aos="fade-right">
          Протипожежні двері - це важлива частина будь-якої будівлі, яка
          забезпечує безпеку та захист в разі виникнення пожежі. Вони спеціально
          розроблені для утримання поширення вогню з однієї зони на іншу,
          надаючи людям у будівлі час на евакуацію та дозволяючи пожежним
          боротися з вогнем.
        </div>
        <div className="flex md:flex-row flex-col gap-6 md:items-start justify-center items-center">
          <Image
            data-aos="fade-left"
            src="/fireproof_1.png"
            alt="illustration"
            width={302}
            height={372}
          />
          <Image
            data-aos="fade-left"
            data-aos-delay="200"
            src="/fireproof_2.png"
            alt="illustration"
            width={302}
            height={372}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-12">
        <Card className="w-full lg:w-1/3" data-aos="fade-up">
          <Card.Header>матеріали</Card.Header>
          Такі двері зазвичай виготовляються з вогнестійких матеріалів, таких як
          сталь чи спеціальні складні композитні матеріали, які можуть
          витримувати вплив високих температур. Вони також можуть мати
          спеціальні ущільнювачі, які запобігають проникненню диму та пожежних
          газів через щілини між дверима та рамою.
        </Card>
        <Card
          className="w-full lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Card.Header>Критерії</Card.Header>
          При обиранні протипожежних дверей важливо враховувати їхню
          вогнестійкість, монтажні особливості та відповідність стандартам
          безпеки. Також важливо звернути увагу на додаткові функції, наприклад,
          звукову ізоляцію чи дизайн, який відповідає інтер`єру будівлі.
        </Card>
        <Card
          className="w-full lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Card.Header>Характеристики</Card.Header>У вашому описі можна включити
          основні характеристики дверей, їх переваги у вогнестійкості, міцності
          та безпеці, а також вказати на важливість правильної установки та
          відповідності стандартам безпеки.
        </Card>
      </div>
    </div>
  );
};

const RayProof = () => {
  return (
    <div>
      <div className="flex xl:flex-row flex-col xl:gap-32 gap-12">
        <div className="flex-1" data-aos="fade-right">
          Рентгенозахисні двері є важливим елементом безпеки в медичних
          установах, дослідницьких лабораторіях та інших місцях, де
          використовують рентгенівське обладнання. Вони призначені для захисту
          персоналу та навколишнього середовища від шкідливого випромінювання,
          яке може виділятися під час проведення рентгенівських процедур.
        </div>
        <div className="flex md:flex-row flex-col gap-6 md:items-start justify-center items-center">
          <Image
            data-aos="fade-left"
            src="/rayproof_1.png"
            alt="illustration"
            width={302}
            height={372}
          />
          <Image
            data-aos="fade-left"
            data-aos-delay="200"
            src="/rayproof_2.png"
            alt="illustration"
            width={302}
            height={372}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-12">
        <Card className="w-full lg:w-1/3" data-aos="fade-up">
          <Card.Header>матеріали</Card.Header>
          Ці двері зазвичай складаються з спеціальних важких матеріалів, таких
          як свинцеві або свинцево-скляні композити, що здатні ефективно
          поглинати рентгенівське випромінювання. Вони мають спеціальне
          конструктивне виконання та ущільнення, щоб мінімізувати проникнення
          радіації через щілини та з`єднання.
        </Card>
        <Card
          className="w-full lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Card.Header>Критерії</Card.Header>
          При виборі рентгенозахисних дверей важливо враховувати рівень захисту,
          щільність та якість матеріалів, з яких вони виготовлені. Також важливо
          враховувати відповідність стандартам безпеки та сертифікацію, яка
          підтверджує їхню здатність ефективно захищати від радіації.
        </Card>
        <Card
          className="w-full lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Card.Header>Характеристики</Card.Header>У вашому описі можна включити
          основні характеристики дверей, їхню здатність ефективно поглинати
          рентгенівське випромінювання та забезпечувати безпеку, а також вказати
          на важливість вибору правильного рівня захисту відповідно до
          конкретних потреб медичної установи чи лабораторії.
        </Card>
      </div>
    </div>
  );
};

const Indoors = () => {
  return (
    <div>
      <div className="flex xl:flex-row flex-col xl:gap-32 gap-12">
        <div className="flex-1" data-aos="fade-right">
          Вхідні двері є ключовим елементом будь-якого будинку чи приміщення,
          вони відіграють важливу роль у забезпеченні безпеки, захисту та
          естетики приміщення.
        </div>
        <div className="flex md:flex-row flex-col gap-6 md:items-start justify-center items-center">
          <Image
            data-aos="fade-left"
            src="/indoor_1.png"
            alt="illustration"
            width={302}
            height={372}
          />
          <Image
            data-aos="fade-left"
            data-aos-delay="200"
            src="/indoor_2.png"
            alt="illustration"
            width={302}
            height={372}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-12">
        <Card className="w-full lg:w-1/3" data-aos="fade-up">
          <Card.Header>матеріали</Card.Header>
          Ці двері зазвичай можуть бути виготовлені зі сталі, дерева, скла чи
          спеціальних композитних матеріалів. Кожен матеріал має свої переваги
          щодо міцності, вогнестійкості, звукоізоляції та зовнішнього вигляду.
        </Card>
        <Card
          className="w-full lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Card.Header>Критерії</Card.Header>
          Міцність, надійність замків, суцільний чи віконний дизайн – все це
          важливо при виборі, особливо для підвищення безпеки приміщення. <br />
          Вхідні двері можуть бути виготовлені в різних стилях і кольорах, що
          відповідають внутрішньому чи зовнішньому дизайну будинку.
        </Card>
        <Card
          className="w-full lg:w-1/3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Card.Header>Характеристики</Card.Header>Опис вхідних дверей може
          включати їхню міцність, здатність до захисту від несанкціонованого
          доступу, можливості звукоізоляції чи теплоізоляції, а також естетичний
          вигляд, який підкреслює стиль будівлі. Також важливо зазначити
          можливості налаштування (якщо такі є) для відповідності особистим
          потребам чи стандартам безпеки.
        </Card>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: 'Куленепробивні',
    children: <BulletProof />,
  },
  {
    title: 'Протипожежні',
    children: <FireProof />,
  },
  { title: 'Ренгенозахисні', children: <RayProof /> },
  { title: 'Вхідні', children: <Indoors /> },
];
