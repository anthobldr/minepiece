import BtnSecondary from "@/app/components/BtnSecondary"
import "@/app/(pages)/vote/css/site.css"

export default function Site(){
    const sites = [
        {
            id: 1,
            name: "Serveur-Privé.net",
            time: "24h",
        },
        {
            id: 2,
            name: "Top-Serveurs.net",
            time: "24h",
        },
        {
            id: 3,
            name: "ServeursMinecraft.org",
            time: "24h",
        },
        {
            id: 4,
            name: "Serveur-Minecraft.com",
            time: "24h",
        }
    ]
    return (
        <div className="d-flex flex-column gap-3">
            {sites.map((site) => (
                <div key={site.id} className="site-card d-flex gap-2 gap-lg-5 align-items-center px-3 py-3">
                    <div>
                        <span>{site.id}</span>
                    </div>
                    <div className="d-flex flex-column lh-1">
                        <h5 className="mb-0">{site.name}</h5>
                        <small className="text-muted">{site.time}</small>
                    </div>
                    <div className="ms-auto">
                        <BtnSecondary text="Voter" />
                    </div>
                </div>
            ))}
        </div>
    )
}