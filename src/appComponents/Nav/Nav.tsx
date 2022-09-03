import { ReactNode, ReactElement } from "react";
import logo from "../../images/logo.svg";
import Image from 'next/image'
import cnpa from "../../assets/homepage/cnpa.png"


export default function Nav(): ReactElement {
  return (
    <nav className="w-full h-[80px]flex items-center">
        <div className="w-full h-1/2 m-4 flex gap-4 items-center">
          <Image src="/logo.svg" height={50} width={50} />
          <span className="text-green-600 text-[40px] font-bold" >
            ComeForHealth
          </span>
          <Image src={cnpa} height={50} width={90} />
        </div>
    </nav>
  );
}