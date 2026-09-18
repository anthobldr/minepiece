import Image from "next/image"
import "@/app/(pages)/vote/css/scoreboard.css"

export default function Scoreboard(){
    const players = [
        {
            id: 1,
            avatar: "https://mc-heads.net/avatar/GoldDDiablox/26",
            name: "Gold D. Diablox",
            vote: 148,
        },
        {
            id: 2,
            avatar: "https://mc-heads.net/avatar/Adeo_dll/26",
            name: "Adeo_dll",
            vote: 141,
        },
        {
            id: 3,
            avatar: "https://mc-heads.net/avatar/Wishyne/26",
            name: "Wishyne",
            vote: 137,
        },
        {
            id: 4,
            avatar: "https://mc-heads.net/avatar/Xelotrix/26",
            name: "Xelotrix",
            vote: 129,
        },
        {
            id: 5,
            avatar: "https://mc-heads.net/avatar/Colonor1/26",
            name: "Colonor1",
            vote: 118,
        },
        {
            id: 6,
            avatar: "https://mc-heads.net/avatar/Basilounet/26",
            name: "Basilounet",
            vote: 104,
        },
        {
            id: 7,
            avatar: "https://mc-heads.net/avatar/Peugeot/26",
            name: "Peugeot",
            vote: 96,
        },
        {
            id: 8,
            avatar: "https://mc-heads.net/avatar/Yourem/26",
            name: "Yourem",
            vote: 88,
        },
        {
            id: 9,
            avatar: "https://mc-heads.net/avatar/TourneSol/26",
            name: "TourneSol",
            vote: 81,
        },
        {
            id: 10,
            avatar: "https://mc-heads.net/avatar/Cranium/26",
            name: "Cranium",
            vote: 74,
        }
    ]
    return (
        <div className="board">
            <div className="board__head">
                <h2 className="board__title">Tableau du mois</h2>
                <span className="board__month">SEPTEMBRE</span>
            </div>
            <ol className="board__list">
                {players.map((player) => (
                    <li key={player.id} className={`board__row ${player.id <= 3 ? "board__row--top" : ""}`}>
                        <span className="board__rank board__rank--first">{player.id}</span>
                        <Image src={player.avatar} alt="avatar d'un joueur" className="board__avatar" width={0} height={0}></Image>
                        <span className="board__name">{player.name}</span>
                        <b className="board__votes">{player.vote}</b>
                    </li>
                ))}
            </ol>

            <p className="board__note">REMISE À ZÉRO LE 1ER DE CHAQUE MOIS</p>
            <span className="board__pin"></span>
        </div>
    )
}