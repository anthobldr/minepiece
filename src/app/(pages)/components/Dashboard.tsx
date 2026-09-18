import BtnPrimary from "@/app/components/BtnPrimary"
import "../css/home.css"
import BtnSecondary from "@/app/components/BtnSecondary"
export default function Dashboard(){
    return (
        <main id="dashboard">
            <section className="container">
                <div className="row py-lg-5">
                    <div className="col-12 col-lg-6">
                        <div className="affiche">
                            <img src="/images/bateau-fond.png" alt="Deux navires au large de Port-Cendre" />
                            <p className="legende">Deux voiles au large de Port-Cendre — 3e jour de brume</p>
                            <span className="scotch scotch-g"></span>
                            <span className="scotch scotch-d"></span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="mur">
                            <div className="avis avis-1">
                                <div className="cadre">
                                    <div className="titre">WANTED</div>
                                    <div className="portrait"></div>
                                    <div className="text-center fs-5">Gold D. Diablox</div>
                                    <div className="text-center prime">฿912 000 000</div>
                                </div>
                                <span className="punaise punaise-or"></span>
                            </div>
                            <div className="avis avis-2">
                                <div className="cadre">
                                    <div className="titre petit">WANTED</div>
                                    <div className="portrait court"></div>
                                    <div className="text-center fs-5">Wishyne</div>
                                    <div className="text-center prime">฿480 000 000</div>
                                </div>
                                <span className="punaise punaise-or"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="avis-pont">
                            <div className="surtitre">CITOYENS // MARINES // PIRATES</div>
                            <h1>Trois voies, une seule mer.</h1>
                            <p className="chapo">Les mers ne se résument pas aux pirates. Les équipages et la Marine écrivent des histoires différentes sur le même océan, avec leurs propres missions, codes et ambitions.</p>
                            <div className="d-flex gap-3">
                                <BtnPrimary text="Télécharger le launcher" />
                                <BtnSecondary text="Voter" />
                            </div>
                            <span className="punaise"></span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="nouvelles">
                            <div className="entete">
                                <span className="titre">Dernières nouvelles du monde</span>
                                <span className="tampon">RELEVÉ DE CE MATIN</span>
                            </div>
                            <div className="ligne">
                                <span className="date">CE MATIN</span>
                                <span className="texte">Incident à Fuchsia ce matin: une bagarre éclate entre des riverains et les Bandits de la Montagne.</span>
                            </div>
                            <div className="ligne">
                                <span className="date">HIER SOIR</span>
                                <span className="texte">Coup de tonnerre à Alabasta. Le roi déchu par un pirate au pouvoir étrange...</span>
                            </div>
                            <div className="ligne">
                                <span className="date">3E JOUR</span>
                                <span className="texte">Trois chasseurs de primes débarquent à Fuchsia à la recherche d&apos;un pirate dont la prime vient d&apos;être réévaluée.</span>
                            </div>
                            <div className="ligne">
                                <span className="date">SEMAINE</span>
                                <span className="texte">Ouverture du marché de nuit à Loguetown, les mardis et vendredis après la cloche.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}