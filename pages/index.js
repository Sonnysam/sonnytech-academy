import Header from "../components/Header";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import TypeWriter from "../components/TypeWriter";
import Button from "../components/Button";
import Carousel from "../components/Carousel";



export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Header />
      <Nav />
      <Carousel/>
      <Banner/>
      <TypeWriter/>
      <Button/>
    </div>
  );
}
