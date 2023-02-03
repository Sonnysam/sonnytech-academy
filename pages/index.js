import Header from "../components/Header";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import TypeWriter from "../components/TypeWriter";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Courses from "../components/Courses";
import New from "../components/New";
import About from "../components/About";
import Buy from "../components/Buy";
import Email from "../components/Email";
import Footer from "../components/Footer";
import Labs from "../components/Labs";
import Subscribe from "../components/Subscribe";
import { useEffect } from "react";
import AOS from "aos";



export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen bg-slate-700">
      <Header />
      <Nav />
      <Carousel />
      <Banner />
      <TypeWriter />
      <Courses/>
      <Button />
      <New/>
      <About/>
      <Buy/>
      {/* <Email /> */}
      <Labs/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
