import Link from "next/link";
import "./css/btn.css"

export default function BtnPrimary({text}: {text: string}){
    return (
        <Link id="btnPrimary" href="" className="text-decoration-none py-2 px-3">{text}</Link>
    )
}