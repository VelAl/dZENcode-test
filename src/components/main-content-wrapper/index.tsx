import { PropsWithChildren } from "react";
import "./style.css";
import NavMenu from "../nav-menu";

export const MainContentWrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className="row main-content">
      <div className="col-2 main-content__nav">
        <NavMenu />
      </div>
      <div className="col-10 main-content__body">{children}</div>
    </main>
  );
};
