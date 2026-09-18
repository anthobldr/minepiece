import Image from "next/image";
import "./css/navbar.css";
import BtnPrimary from "./BtnPrimary";

export default function Navbar(){
    return (
        <header>
            <div className="d-flex justify-content-lg-between align-items-center px-lg-4 py-lg-3 py-2 headerTop">
                <Image src={"/images/logo-gif.gif"} alt="Logo du serveur MinePiece animé." width={60} height={50} />
                <h1>MinePiece</h1>
                <div className="d-none d-lg-flex">
                    <BtnPrimary text="Télécharger le launcher" />
                </div>
            </div>
            <nav className="navbar navbar-expand-lg px-lg-4 py-lg-2">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex gap-lg-4">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Vote</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Boutique</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Staff</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}