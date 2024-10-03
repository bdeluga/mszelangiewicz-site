import Carousel from "./feature/carousel";

export default function Page() {
  return (
    <div className="p-4 bg-mauve-1">
      <Carousel autoSlideInterval={5000} />
    </div>
  );
}
