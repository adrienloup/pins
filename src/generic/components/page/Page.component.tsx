import { Page } from "./Page.type";
import { HeaderComponent } from "../header/Header.component";
import { MainComponent } from "../main/Main.component";
import { FooterComponent } from "../footer/Footer.component";
import { NavigationComponent } from "../navigation/Navigation.component";

export const PageComponent = ({ children }: Page) => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
};
