import About from "@/components/about";
import CeoMessage from "@/components/ceoMessage";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Info from "@/components/info";
import InfoTest from "@/components/info-test";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Values from "@/components/values";

export default function Home() {
  return (
    <>
    <Header/>
    {/* <InfoTest/> */}
    <Info/>
    <About/>
    <Features/>
    <CeoMessage/>
    <Values/>
    <Team/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
