import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import "@/app/(pages)/vote/css/vote.css"
import Site from "./components/Site";
import Scoreboard from "./components/Scoreboard";
import Recompense from "./components/Recompense";
export default function Vote() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container py-lg-5">
          <div className="pB-lg-3">
            <h2 className="mb-0">Voter pour le serveur</h2>
            <p className="py-lg-2 mb-0">Un vote par site, tous les 3 haures. Les récompenses sont créditées automatiquement sur <br />votre compte un fois connecté.</p>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 d-flex flex-column gap-4">
              <Site />
              <Recompense />
            </div>
            <div className="col-12 col-lg-6">
              <Scoreboard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
