import "./css/footer.css"

export default function Footer(){
    return (
        <footer className="py-lg-3 px-lg-5">
            <div className="d-flex justify-content-between">
                <span>© 2026 Minepiece - Tous droits réservé.</span>
                <ul className="list-unstyled d-flex gap-lg-4">
                    <li>Mentions légales</li>
                    <li>Politique de confidentialités</li>
                </ul>
            </div>
        </footer>
    )
}