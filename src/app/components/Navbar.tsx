import Image from "next/image";
import Link from "next/link";
import "./css/navbar.css";
import BtnPrimary from "./BtnPrimary";

export default function Navbar(){
    return (
        <header>
            <div className="d-flex justify-content-lg-between align-items-center px-lg-4 py-lg-3 py-2 headerTop">
                <Image src={"/images/logo-gif.gif"} alt="Logo du serveur MinePiece animé." width={60} height={50} />
                <h1>MinePiece</h1>
                <div className="ms-auto ms-lg-0">
                    <div className="d-none d-lg-block">
                        <BtnPrimary text="Télécharger le launcher" />
                    </div>
                    <button className="navbar-toggler d-block d-lg-none ms-auto me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg px-lg-4 py-lg-2">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex text-center text-lg-start gap-3 gap-lg-4">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/vote">Vote</Link>
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