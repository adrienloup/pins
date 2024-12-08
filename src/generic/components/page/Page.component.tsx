import { lazy, Suspense } from "react";
import { Page } from "./Page.type";
import { LoaderComponent } from "../loader/Loader.component";
import { MainComponent } from "../main/Main.component";
import { FooterComponent } from "../footer/Footer.component";
import { delayFallback } from "../../utils/delayFallback";

const HeaderComponent = lazy(() =>
  delayFallback(import("../header/Header.component"), 2e2)
);

export const PageComponent = ({ children }: Page) => {
  return (
    <>
      <Suspense fallback={<LoaderComponent />}>
        <HeaderComponent />
      </Suspense>
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
};
