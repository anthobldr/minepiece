import Link from "next/link";
import "./css/navbar.css"

export default function BtnPrimary({text}: {text: string}){
    return (
        <Link id="btnPrimary" href="" className="text-decoration-none py-lg-2 px-lg-3">{text}</Link>
    )
}