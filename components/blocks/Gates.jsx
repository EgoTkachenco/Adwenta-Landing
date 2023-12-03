import Image from 'next/image';
import { Card } from '../Styled';

const Gates = () => (
  <div id="gates" className="lg:p-20 py-10 px-4">
    <div className="flex flex-col gap-12 xl:flex-row xl:gap-32 items-center">
      <div className="flex-1" data-aos="fade-right">
        <h3 className="text-gray-700 text-3xl uppercase mb-3">
          запорука безпеки
        </h3>
        <h2 className="font-serif text-5xl mb-8">
          Ковані ворота та екслюзивні вироби
        </h2>
        <div>
          Ворота та ковані вироби є чудовими елементами для додання стилю,
          елегантності та безпеки до будинку чи земельної ділянки.
          <br />
          <br />
          Опис воріт та кованих виробів може включати їхні характеристики,
          якість матеріалів, ручну роботу, дизайн, який додає стиль та
          елегантність до будівлі чи земельної ділянки. Також можна зазначити
          про їхню довговічність, можливість виробництва на замовлення, якість
          та унікальність кожного елементу.
        </div>
      </div>
      <Image
        data-aos="fade-left"
        src="/gates.png"
        alt="gates"
        className="mx-auto"
        height={351}
        width={628}
      />
    </div>
    <div className="flex gap-6 mt-12 xl:flex-row flex-col">
      <Image
        src="/icons/gates_text.svg"
        data-aos="fade-right"
        className="sm:-mr-14 mr-0"
        alt="Ворота"
        width={475}
        height={91}
      />
      <Card
        className="w-full xl:w-1/3"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <Card.Header>Тип воріт</Card.Header>
        Вони можуть бути розпашними, відкатними, ролетними, автоматизованими
        тощо. Кожен тип має свої переваги та використовується в залежності від
        розміру, функціональності та дизайну.
      </Card>
      <Card
        className="w-full xl:w-1/3"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <Card.Header>Матеріали</Card.Header>Сталь, алюміній, дерево,
        використання скла - різні матеріали, які можуть бути використані для
        виготовлення воріт. Кожен матеріал має свої переваги щодо міцності,
        довговічності та естетики.
      </Card>
    </div>

    <div className="flex gap-6 mt-12 xl:flex-row flex-col">
      <Image
        src="/icons/gates_text_2.svg"
        data-aos="fade-right"
        className="mr-0 sm:-mr-8"
        alt="Ковані вироби"
        width={475}
        height={184}
      />
      <Card
        className="w-full xl:w-1/3"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <Card.Header>Виготовлення</Card.Header>
        Ковка використовується для створення різноманітних виробів: вікна,
        балюстради, ліхтарі, поручні тощо. Це робить їх унікальними та
        вишуканими.
      </Card>
      <Card
        className="w-full xl:w-1/3"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <Card.Header>Дизайн</Card.Header>Ковані вироби можуть мати різні
        орнаменти, узори та стилі, що додають вигляду будинку елегантності та
        художнього спадщини.
      </Card>
    </div>
  </div>
);

export default Gates;
