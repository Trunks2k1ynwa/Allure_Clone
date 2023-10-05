export const iconcodes = {
  SampleFontAwesomeBasic: `import * as React from "react";
  import { Stack, FontIcon } from "@gui/fluent-ui-allure";
  
  export const SampleFontAwesomeBasic = () => {
      const style: React.CSSProperties = {
          fontSize: 24,
      };
  
      return (
          <Stack horizontal tokens={{ childrenGap: 30 }}>
              <FontIcon style={style} iconName="fas-plus" />
              <FontIcon style={style} iconName="far-pen-to-square" />
              <FontIcon style={style} iconName="fas-trash" />
              <FontIcon style={style} iconName="af-smile" />
              <FontIcon style={style} iconName="af-face-sad-tear" />
          </Stack>
      );
  };`,
  FontAwesomeBasicCustomColor: `import * as React from "react";
  import { Stack, FontIcon } from "@gui/fluent-ui-allure";
  
  export const SampleFontAwesomeColors = () => {
      const style = (color: string): React.CSSProperties => {
          return {
              fontSize: 24,
              color: color,
          };
      };
  
      return (
          <Stack horizontal tokens={{ childrenGap: 30 }}>
              <FontIcon style={style("#0072D0")} iconName="fas-plus" />
              <FontIcon style={style("#00A84E")} iconName="far-pen-to-square" />
              <FontIcon style={style("#D01B1B")} iconName="fas-trash" />
          </Stack>
      );
  };`,
  FontAwesomeBasicUiFabric: `import * as React from "react";
  import { Stack, FontIcon } from "@gui/fluent-ui-allure";
  
  export const SampleMicrosoftBasic = () => {
      const style: React.CSSProperties = {
          fontSize: 24,
      };
      return (
          <Stack horizontal tokens={{ childrenGap: 30 }}>
              <FontIcon style={style} iconName="ExchangeLogo" />
              <FontIcon style={style} iconName="SharepointLogo" />
              <FontIcon style={style} iconName="TeamsLogo16" />
          </Stack>
      );
  };`,
  FontAwesomeUiFabricCustomColor: `import * as React from "react";
  import { Stack, FontIcon } from "@gui/fluent-ui-allure";
  
  export const SampleMicrosoftColors = () => {
      const style = (color: string): React.CSSProperties => {
          return {
              fontSize: 24,
              color: color,
          };
      };
      return (
          <Stack horizontal tokens={{ childrenGap: 30 }}>
              <FontIcon style={style("#0F78D4")} iconName="ExchangeLogo" />
              <FontIcon style={style("#038387")} iconName="SharepointLogo" />
              <FontIcon style={style("#4B53BC")} iconName="TeamsLogo16" />
          </Stack>
      );
  };`
}
