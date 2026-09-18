import "../css/wanted.css"

export default function Wanted(){
    const wanted = [
        {
            id: 1,
            className: "avis-1",
            titleClass: "",
            portraitClass: "",
            image: "https://cdn.discordapp.com/guilds/404270028813500430/users/319564068073635850/avatars/9747f74edaae26779c13e8b06aff06c8.webp?size=2048",
            name: "Gold D. Diablox",
            bounty: "฿912 000 000",
        },
        {
            id: 2,
            className: "avis-2",
            titleClass: "petit",
            portraitClass: "court",
            image: "https://cdn.discordapp.com/avatars/369541128615231488/029c989075c81b021c5d0cf935e44b93.webp?size=2048",
            name: "Wishyne",
            bounty: "฿480 000 000",
        },
    ]
    return (
        <div className="position-relative">
            {wanted.map((wanted) => (
                <div key={wanted.id} className={`avis ${wanted.className}`}>
                    <div className="cadre">
                        <div className={`wanted ${wanted.titleClass}`}>
                            WANTED
                        </div>
                        <div className={`portrait ${wanted.portraitClass}`} style={{ backgroundImage: `url(${wanted.image})` }}></div>
                        <div className="text-center fs-5">
                            {wanted.name}
                        </div>
                        <div className="text-center prime">
                            {wanted.bounty}
                        </div>
                    </div>
                    <span className="punaise punaise-or"></span>
                </div>
            ))}
        </div>
    )
}