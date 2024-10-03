import Carousel from "../../feature/carousel";

export default function Home() {
  return (
    <div className="max-w-6xl w-full flex-1 mx-auto flex flex-col h-full gap-12 p-4">
      <h1 className="font-semibold text-2xl text-center">Tutaj title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad possimus
        corrupti dolores, temporibus perspiciatis atque asperiores nihil modi
        aut voluptates optio quaerat eligendi repudiandae nostrum quae totam
        consectetur odio quibusdam? Atque reiciendis molestias deleniti suscipit
        provident inventore ut necessitatibus eveniet nostrum culpa tempore modi
        labore, sunt harum et. Ut, autem. Doloribus sequi optio suscipit odit
        voluptates consectetur incidunt atque iste! Incidunt eius harum neque
        vero vitae? Minus eius inventore, placeat tempora quam commodi maiores
        repudiandae quisquam blanditiis aut, odio modi vitae hic, exercitationem
        quis voluptatem error sit consequatur facilis! Officia.
      </p>
      <Carousel
        images={[
          "https://placehold.co/600x400",
          "https://placehold.co/600x400",
          "https://placehold.co/600x400",
          "https://placehold.co/600x400",
        ]}
      />
    </div>
  );
}
