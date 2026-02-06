import Banner from "./banner/Banner"
import Poster from './poster/Poster'
import News from "./news/News"
import Catalog from "./catalog/Cattalog"
import Icons from '../ui/icons/Icons';
import Card from "./card/Card";
export function Home() {
  return (
    <div>
      <Banner />
      <Catalog />
      <Card />
      <Poster />
      <News />
      
      <Icons />
    </div>
  )
}
