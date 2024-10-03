import { Home, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-6xl w-full flex-1 mx-auto flex flex-col justify-center items-center gap-12 p-4">
      <h1 className="text-5xl font-semibold leading-3">
        Skontaktuj się z nami
      </h1>
      <p className="text-sm max-w-xl text-mauve11">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi
        nesciunt? Qui, omnis incidunt?
      </p>
      <div className="flex items-center gap-8">
        <div className="flex flex-col rounded items-center justify-center">
          <Phone className="size-8" />
          <span className="font-semibold">Telefon</span>
          <span className="text-mauve11">+48 123 456 789</span>
        </div>
        <div className="flex flex-col rounded items-center justify-center">
          <Home className="size-8" />
          <span className="font-semibold">Adres</span>
          <span className="text-mauve11">ul. Magiczna 4</span>
        </div>
        <div className="flex flex-col rounded items-center justify-center">
          <Mail className="size-8" />
          <span className="font-semibold">E-mail</span>
          <span className="text-mauve11">joe@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
