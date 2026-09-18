import "./css/footer.css"

export default function Footer(){
    return (
        <footer className="py-3 px-lg-5">
            <div className="d-flex flex-column flex-lg-row justify-content-lg-between text-center text-lg-start">
                <span>© 2026 Minepiece - Tous droits réservé.</span>
                <ul className="list-unstyled d-flex justify-content-center justify-content-lg-start gap-3 gap-lg-4">
                    <li>Mentions légales</li>
                    <li>Politique de confidentialités</li>
                </ul>
            </div>
        </footer>
    )
}