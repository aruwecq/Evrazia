import Banner from "./banner/Banner"
import Poster from './poster/Poster'
import News from "./news/News"
import Catalog from "./catalog/Catalog"
export function Home() {
  return (
    <div>
      <Banner />
      <Catalog />
      <Poster />
      <News />
    </div>
  )
}
