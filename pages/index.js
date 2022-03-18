import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import WideGrid from "../src/components/WideGrid";
import JobsList from "../src/components/JobsList";
import Subscribe from "../src/components/Subscribe";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <WideGrid />
      <JobsList />
      <Subscribe />
      <Footer />
    </>
  )
}
