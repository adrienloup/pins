import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
} from "react";

import { Children } from "./generic/types/Children.type";
import { LocalisationProvider } from "./generic/localisation/LocalisationProvider";
import { DataProvider } from "./game/secondary/DataProvider";

type ProvidersType = [
  ComponentType<{ children: Children }>,
  ComponentPropsWithoutRef<ElementType>?,
][];

const combineProviders = (providers: ProvidersType) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: Children }) => <>{children}</>
  );

export const Providers: FunctionComponent<{ children: Children }> =
  combineProviders([[LocalisationProvider], [DataProvider]]);
