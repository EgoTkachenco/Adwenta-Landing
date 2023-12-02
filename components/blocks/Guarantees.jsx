import Image from 'next/image';

const items = [
  {
    text: 'Повна відповідність технічних характеристик',
    icon: '/terms-and-conditions.png',
  },
  { text: 'Високий запас міцності', icon: 'icons/guarantee_2.svg' },
  {
    text: 'Використання передових та сучасних технологій',
    icon: '/components.png',
  },
  { text: 'Виконання замовлення у строк', icon: '/calendar.png' },
  { text: 'Сертифікат на продукцію', icon: '/document.png' },
  {
    text: 'Використання якісних та сучасних матеріалів',
    icon: '/quality.png',
  },
];

const Guarantees = () => {
  return (
    <section className=" bg-white text-black py-16">
      <h3 className="text-center text-4xl mb-16 font-mono font-medium">
        Переваги компанії
      </h3>

      <div className="flex justify-between gap-y-8 max-w-4xl mx-auto flex-wrap">
        {items.map(({ text, icon }, i) => (
          <div key={i} className="flex flex-col gap-4 items-center w-1/3">
            <Image src={icon} width={64} height={64} alt="icon" />
            <div className="text-center px-4">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guarantees;
