import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TextSection() {
  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto">
      <p className="text-2xl">Вдъхновени от красотата на розата!</p>
      <h1 className="text-4xl font-bold">Изкуството да бъдеш жена !</h1>
      <p>
        Тази пролет DAZZLE добавя още едно цвете към изпълнената с женственост
        и цвят градина на ювелирните си шедьоври: розата. Служила за вдъхновение
        в литературата, изкуството, модата и музиката от векове, розата
        неслучайно е избрана за Кралица на цветята, тъй като има уникалната
        способност едновременно да поразява с красотата, нежността и аромата на
        изящния си цвят и да излъчва сила чрез бодлите по финото си стебло.
        Според цвета си розата може да бъде също така и символ на любов,
        приятелство, уважение, невинност, благодарност, грижа и радост – все
        чувства и емоции, които изпитваме в отношенията си с тези, които имат
        специално място в сърцето ни. Затова и именно Кралицата на цветята е
        основното вдъхновение за нас в новата колекция „Изкуството да бъдеш
        жена“!
      </p>
      <Link
        className="bg-pink-200 max-w-fit rounded-full p-2 px-4 flex flex-row items-center gap-2 hover:bg-pink-400 transition mt-5"
        href="/jewelry"
      >
        Към колекцията <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
