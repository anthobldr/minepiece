import "@/app/(pages)/vote/css/recompense.css"

export default function Recompense(){
    const recompenses = [
        {
            id: 1,
            name: "2000฿",
            rate: "60 % de chance",
        },
        {
            id: 2,
            name: "Clé d'épave",
            rate: "25 % de chance",
        },
        {
            id: 3,
            name: "Skin d'arme",
            rate: "10 % de chance",
        },
        {
            id: 4,
            name: "Fruit aléatoire",
            rate: "3 % de chance",
        }
    ]
    return (
        <div className="mb-4 mb-lg-0">
            <h2>Récompenses</h2>
            <div className="d-flex flex-wrap gap-2">
                {recompenses.map((recomp) => (
                    <div key={recomp.id} className="recompense-card d-flex flex-column align-items-center px-3 px-lg-4 py-3">
                        <h4>{recomp.name}</h4>
                        <span>{recomp.rate}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}