import "@/app/(pages)/css/info.css"

export default function Info(){
    const infos = [
        {
            id: 1, 
            time: "CE MATIN", 
            text: "Incident à Fuchsia ce matin: une bagarre éclate entre des riverains et les Bandits de la Montagne."
        },
        {
            id: 2,
            time: "HIER SOIR", 
            text: "Coup de tonnerre à Alabasta. Le roi déchu par un pirate au pouvoir étrange..."
        },
        {
            id: 3, 
            time: "3E JOUR", 
            text: "Trois chasseurs de primes débarquent à Fuchsia à la recherche d'un pirate dont la prime vient d'être réévaluée."
        },
        {
            id: 4, 
            time: "SEMAINE", 
            text: "Ouverture du marché de nuit à Loguetown, les mardis et vendredis après la cloche."
        },
    ]
    return(
        <div className="nouvelles">
            <div className="entete">
                <span className="titre">Dernières nouvelles du monde</span>
                <span className="tampon">RELEVÉ DE CE MATIN</span>
            </div>
            {infos.map((info) => (
                <div key={info.id} className="ligne">
                    <span className="date">{info.time}</span>
                    <span className="texte">{info.text}</span>
                </div>
            ))}
        </div>
    )
}