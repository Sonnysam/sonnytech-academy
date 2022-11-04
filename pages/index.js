import Header from "../components/Header";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import TypeWriter from "../components/TypeWriter";



export default function Home() {
  return (
    <div className="px-5 min-h-screen bg-slate-800">
      <Header />
      <Nav />
      <Banner/>
      <TypeWriter/>
    </div>
  );
}
