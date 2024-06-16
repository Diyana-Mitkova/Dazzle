import Image from "next/image";

export default function PreviewSection() {
  return (
    <div className="  flex flex-row gap-7 max-w-3xl mx-auto items-center">
      <div className=" ">
        <h2 className="text-4xl font-bold">BE LOVE с Dazzle</h2>
        <p>
          Повикай любовта! Вдъхнови се от любовта! Излъчвай любовта! Копней за
          любовта! Бъди любовта с новите модели на Dazzle !
        </p>
      </div>

      <Image
        width={1200}
        height={620}
        alt="header image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuNQ9r_jkSCJKqbzAioesxXqVvN8irDDtpQ&s"
        className="h-50 w-80 object-cover  rounded-xl"
      />
    </div>
  );
}
