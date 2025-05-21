import Image from "next/image";
import "./style.css";
import img from "../../../public/green-shield.webp";
import { LiveClock } from "../live-clock";

export const MainLayoutHeader = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-2 header__side"></div>

          <div className="col-8 d-flex align-items-center gap-2 header__center">
            <Image width={34} height={40} alt="shield" src={img} priority />
            <h1 className="header__title">dZENcode</h1>
          </div>

          <div className="col-2 header__side">
            <LiveClock />
          </div>
        </div>
      </div>
    </header>
  );
};
