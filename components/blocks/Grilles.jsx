import Image from 'next/image';
import { Card } from '../Styled';

const Grilles = () => (
  <div id="grilles" className="lg:p-20 py-10 px-8">
    <div className="flex flex-col xl:flex-row xl:gap-32">
      <div>
        <h3
          className="text-gray-700 text-3xl uppercase mb-3"
          data-aos="fade-right"
        >
          Безпека та Елегантність
        </h3>
        <h2 className="font-serif text-5xl mb-8" data-aos="fade-right">
          Решітки для вікон, щоб зберегти ваш спокій
        </h2>
      </div>

      <div className="xl:max-w-lg" data-aos="fade-left">
        Грати - це металеві конструкції чи решітки, які використовуються для
        захисту від вторгнень, декоративного оздоблення або вентиляції. Вони
        можуть мати різні розміри, форми та призначення. У вашому описі грат
        можна включити їхню функціональність (захист, декор), матеріали, з яких
        вони виготовлені (часто це метал), різноманітність дизайну та їхню
        важливу роль у забезпеченні безпеки, декору чи вентиляції будівель чи
        приміщень.
      </div>
    </div>

    <div
      className="flex flex-col gap-6 md:flex-row items-center my-12"
      data-aos="fade-left"
    >
      <Image
        data-aos="fade-up"
        data-aos-delay="100"
        src="/grilles_1.png"
        className="md:w-2/4"
        alt="illustration"
        width={628}
        height={408}
      />
      <Image
        data-aos="fade-up"
        data-aos-delay="300"
        src="/grilles_2.png"
        className="md:w-2/4"
        alt="illustration"
        width={628}
        height={408}
      />
    </div>

    <div className="flex flex-col lg:flex-row gap-6">
      <Card data-aos="fade-up">
        <Card.Header>безпека та захист</Card.Header>
        Вони можуть бути встановлені на вікнах, дверях чи інших місцях, щоб
        запобігти вторгненням та забезпечити безпеку будинку чи будівлі.
      </Card>
      <Card data-aos="fade-up" data-aos-delay="100">
        <Card.Header>декоративне оформлення</Card.Header>
        Грати часто використовуються як декоративні елементи для вікон, балконів
        або як частина архітектурного дизайну, додаючи стиль та характер
        будинку.
      </Card>
      <Card data-aos="fade-up" data-aos-delay="200">
        <Card.Header>вентиляція та провітрювання</Card.Header>Вони можуть
        використовуватися для забезпечення достатньої вентиляції в приміщеннях,
        дозволяючи повітрю вільно циркулювати.
      </Card>
    </div>
  </div>
);

export default Grilles;

const BulletProof = () => {
  return (
    <div>
      <div className="flex gap-32">
        <div className="flex-1" data-aos="fade-right">
          Куленепробивні двері - це спеціально розроблені для забезпечення
          високого рівня захисту від вогнепальних засобів та інших загроз. Вони
          використовуються в об'єктах, де важлива безпека, таких як банки,
          важливі установи, мілітарні об'єкти, а також у приватних будинках для
          забезпечення особистої безпеки. У вашому описі можна включити основні
          характеристики дверей, їхню здатність витримувати постріли та
          забезпечувати безпеку, а також вказати на важливість вибору
          правильного рівня захисту відповідно до потреб і конкретних умов
          використання.
        </div>
        <div className="flex gap-6 items-start" data-aos="fade-left">
          <Image
            src="/bulletproof_1.png"
            alt="illustration"
            width={302}
            height={372}
          />
          <Image
            src="/bulletproof_2.png"
            alt="illustration"
            width={302}
            height={372}
          />
        </div>
      </div>
    </div>
  );
};
