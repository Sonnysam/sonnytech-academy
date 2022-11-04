import Header from "../components/Header";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import TypeWriter from "../components/TypeWriter";
import Button from "../components/Button";



export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Header />
      <Nav />
      <Banner/>
      <TypeWriter/>
      <Button/>
    </div>
  );
}
