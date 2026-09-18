import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Affiche from "./components/Affiche";
import Info from "./components/Info";
import Role from "./components/Role";
import Wanted from "./components/Wanted";
import "./css/home.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="dashboard" className="pb-5 pt-4 pt-lg-0 pb-lg-2">
        <section className="container">
          <div className="row py-lg-5">
            <div className="col-12 col-lg-6">
              <Affiche />
            </div>
            <div className="col-12 col-lg-6 wanted-wrapper">
              <Wanted />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <Role />
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <Info />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
