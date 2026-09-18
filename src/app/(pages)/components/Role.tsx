import BtnPrimary from "@/app/components/BtnPrimary";
import BtnSecondary from "@/app/components/BtnSecondary";
import "@/app/(pages)/css/role.css"

export default function Role(){
    return (
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
    )
}