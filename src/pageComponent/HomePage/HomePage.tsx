import { ReactNode, ReactElement } from "react";
import Image from "next/image";
import homeImageMedium from "../../assets/homeImageMedium.jpg";

type Props = {
  children: ReactNode;
};
import Redsenol from "../../assets/brandLogos/Redsenol.jpg";
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
    <div className="flex w-screen h-auto flex-col gap-5 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row w-full items-start jus px-8 py-2 lg:h-[60vh] h-[90vh] mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4 items-center p-2 lg:h-full w-full lg:items-start justify-center pt-12">
          <span className="text-[2.5rem] text-gray-800 font-bold">
            Guard{" "}
            <span className="bg-green-500 text-white px-2">Your Heart</span>
          </span>
          <p className="text-md text-gray-700">
            Fully experience good health by providing the finest supplements,
            foods, and lifestyle solution.
          </p>
          <div className="flex items-start">
            <button className="bg-green-500 px-4 py-2 text-white rounded-md border border-green-600">
              View Our Products
            </button>
          </div>
        </div>
        <div className="lg:w-full h-full w-full max-w-[48rem] relative rounded-2xl mx-auto lg:h-full">
          <Image layout="fill" objectFit="scale-down" src={homeImageMedium} />
        </div>
        {children}
      </div>
      <div className="flex relative overflow-x-hidden h-[100px]">
        <div className="flex overflow-hidden flex-nowrap absolute top-0 gap-[20px] animate-scroll">
          {[...brandIcons, ...brandIcons].map((imgSrc) => {
            return (
              <div className="h-[80px] w-[200px] relative">
                <Image src={imgSrc} layout="fill" objectFit="scale-down" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
