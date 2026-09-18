import "../css/affiche.css"
import Image from "next/image"

export default function Affiche(){
    return (
        <figure className="photo-pin position-relative m-0">
            <Image src="/images/bateau-fond.png" alt="Deux navires au large de Port-Cendre" width={200} height={322} className="photo-pin__img d-block w-100 object-fit-cover" />
            <span className="photo-pin__vignette position-absolute top-0 start-0 w-100"></span>
            <figcaption className="photo-pin__caption position-absolute">Deux voiles au large de Port-Cendre — 3e jour de brume</figcaption>
            <span className="tape tape--tl position-absolute"></span>
            <span className="tape tape--tr position-absolute"></span>
            <figure className="snap snap--tr position-absolute m-0">
                <div className="snap__slot d-flex align-items-end justify-content-center">
                </div>
                <figcaption className="snap__caption text-center">Arlong Park</figcaption>    
                <span className="tape tape--snap-top position-absolute"></span>
            </figure>
            <figure className="snap snap--bl position-absolute m-0">
                <div className="snap__slot snap__slot--dark d-flex align-items-end justify-content-center">
                </div>
                <span className="tape tape--snap-right position-absolute"></span>
            </figure>
        </figure>
    )
}