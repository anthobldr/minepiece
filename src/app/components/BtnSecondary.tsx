import Link from "next/link";
import "./css/btn.css"

export default function BtnSecondary({text}:{text: string}){
    
    return (
        <Link id="btnSecondary" href="" className="text-decoration-none py-lg-2 px-lg-3">{text}</Link>
    ) 
}