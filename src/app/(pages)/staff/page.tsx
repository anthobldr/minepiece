import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import "./css/staff.css"
import Image from "next/image";

export default function Staff(){
    const staff = [
        {
            administrateurs: [
                {
                    name: "Gold D Diablox",
                    years: "2017",
                },
                {
                    name: "Wishyne",
                    years: "2026",
                },
            ],
        },
    ];
    return (
        <>
        <Navbar />
        <main id="staff">
            <section className="container  py-3 py-lg-5">
                <div>
                    <h2 className="mb-0">L'équipage du serveur</h2>
                    <p className="py-lg-2 mb-0">L'équipe qui fait tourner le serveur: modérateurs, développeurs et administrateurs. Joignables sur le Discord ou directement en jeu. </p>
                </div>
            </section>
            <section id="staffList">
                <div className="container d-flex flex-column gap-4 py-5">
                    <div>
                        <h2>Administrateurs</h2>
                        <div className="d-flex flex-wrap gap-3 py-3">
                            <article className="crew-card crew-card--a">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/GoldDDiablox"} alt="Tête du skin de Gold D Diablox" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Gold D. Diablox</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>ADMINISTRATION</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--b">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Wishyne"} alt="Tête du skin de Wishyne" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Wishyne</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>ADMINISTRATION</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                        </div>
                    </div>
                    <div>
                        <h2>Modérateurs</h2>
                        <div className="d-flex flex-wrap gap-3 py-3">
                            <article className="crew-card crew-card--a">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Colonor1"} alt="Tête du skin de Colonor1" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Colonor1</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>MODÉRATION</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--b">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Xelotrix"} alt="Tête du skin de Xelotrix" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Xelotrix</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>ADMINISTRATION</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--a">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Kevox"} alt="Tête du skin de Kevox" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Kevox</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>ADMINISTRATION</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--b">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/KevAizuox"} alt="Tête du skin de Aizu" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Aizu</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>ADMINISTRATION</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--A">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Hkd94"} alt="Tête du skin de Hkd94" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Hkd94</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>ADMINISTRATION</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                        </div>
                    </div>
                    <div>
                        <h2>Développeurs</h2>
                        <div className="d-flex flex-wrap gap-3 py-3">
                            <article className="crew-card crew-card--a">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Peugeot"} alt="Tête du skin de Peugeot" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Peugeot</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>Développement</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--b">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Basilounet"} alt="Tête du skin de Basilounet" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Basilounet</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>Développement</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--a">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Yourem"} alt="Tête du skin de Yourem" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Yourem</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>Développement</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--b">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Adeo_dll"} alt="Tête du skin de Adeo_dll" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Adeo_dll</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>Développement</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                        </div>
                    </div>
                    <div>
                        <h2>Voice Actors</h2>
                        <div className="d-flex flex-wrap gap-3 py-3">
                            <article className="crew-card crew-card--a">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Cranium"} alt="Tête du skin de Cranium" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Cranium</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>Développement</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--b">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Khaotil"} alt="Tête du skin de Khaotil" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Khaotil</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>Développement</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--a">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/TourneSol"} alt="Tête du skin de TourneSol" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">TourneSol</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>Développement</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                            <article className="crew-card crew-card--b">
                                <div className="crew-card__inner">
                                <Image src={"https://mc-heads.net/avatar/Flaaks"} alt="Tête du skin de Flaaks" width={150} height={100} className="crew-card__portrait" />
                                <h3 className="crew-card__name py-3 text-center">Flaaks</h3>
                                <div className="crew-card__meta">
                                    <span>DEPUIS 2021</span>
                                    <span>Développement</span>
                                </div>
                                </div>
                                <span className="crew-card__pin crew-card__pin--red"></span>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
    )
}