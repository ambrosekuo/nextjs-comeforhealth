import { ReactNode, ReactElement } from "react";
import Image from 'next/image'
import homeImageMedium from '../../assets/homeImageMedium.jpg';

type Props = {
  children: ReactNode;
};import Redsenol from "../../assets/brandLogos/Redsenol.jpg";
import AVogel from "../../assets/brandLogos/AVogel.png";
import GardenOfLife from "../../assets/brandLogos/GardenOfLife.png";
import Purica from "../../assets/brandLogos/Purica.png";
import AllKiDz from "../../assets/brandLogos/AllKidz.png";
import HairEssentials from "../../assets/brandLogos/HairEssentials.jpg";
import Aor from "../../assets/brandLogos/Aor.png";
import MegaFood from "../../assets/brandLogos/MegaFood.png";
import RenewLife from "../../assets/brandLogos/RenewLife.png";
import BackToEarth from "../../assets/brandLogos/BackToEarth.png";
import NewChapter from "../../assets/brandLogos/NewChapter.png";
import SiSU from "../../assets/brandLogos/SiSU.png";
import Doms from "../../assets/brandLogos/Doms.jpg";
import NordicNaturals from "../../assets/brandLogos/NordicNaturals.jpg";
import SouthFrance from "../../assets/brandLogos/SouthFrance.jpg";
import DrNatural from "../../assets/brandLogos/DrNatural.jpg";
import Provita from "../../assets/brandLogos/Provita.jpg";

export const brandIcons = [
  Redsenol,
  AVogel,
  GardenOfLife,
  Purica,
  AllKiDz,
  HairEssentials,
  Aor,
  MegaFood,
  RenewLife,
  BackToEarth,
  NewChapter,
  SiSU,
  Doms,
  NordicNaturals,
  SouthFrance,
  DrNatural,
  Provita,
];


export default function HomePage({ children }: Props): ReactElement {
  return (
    <div>
    <div className="flex w-full px-8 items-center py-2">
      <div className="flex flex-col gap-4 items-center p-2">
        <span className="w-full text-[30px] text-gray-800 font-bold">Guard <span className="bg-green-500 text-white px-2" > Your Heart</span></span>
        <p className="w-full text-xs text-gray-700">Fully experience good health by providing the finest supplements, foods, and lifestyle solution.</p>
      <div className="flex items-start w-full"> <button className="bg-green-500 px-2 py-1 text-white rounded-sm" >View Our Products</button> </div>
      </div>
      <div className="w-full">
        <Image
        src={homeImageMedium} 
        className="rounded-2xl"
        />
        </div>
    {children}
    </div>
    <div className="flex animate-scroll">
    {brandIcons.map((imgSrc) => {
      return <div>
        <Image src={imgSrc} layout="fixed" width={1000}  />
        </div>})}
</div>
    </div>
  );
}