import Link from "next/link";
import "./css/btn.css"

export default function BtnSecondary({text}:{text: string}){
    
    return (
        <Link id="btnSecondary" href="" className="text-decoration-none py-2 px-3">{text}</Link>
    ) 
}