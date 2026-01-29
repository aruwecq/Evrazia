import Banner from "./banner/Banner"
import Poster from './poster/Poster'
import News from "./news/News"
import Catalog from "./catalog/Catalog"
import Icons from '../ui/icons/Icons';
export function Home() {
  return (
    <div>
      <Banner />
      <Catalog />
      <Poster />
      <News />
      <Icons />
    </div>
  )
}
