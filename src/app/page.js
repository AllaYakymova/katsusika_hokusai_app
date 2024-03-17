import CarouselComponent from "@/components/carousel";
import {getArticles} from "@/utils";
import MasonryComponent from "@/components/masonry";

export default async function Home() {
  const getSlides = await fetch('http://localhost:3004/carousel')
  const slides = await getSlides.json()

  const articles = await getArticles()

  return (
    <>
      <CarouselComponent data={slides}/>
      <MasonryComponent data={articles}/>
    </>
  );
}
