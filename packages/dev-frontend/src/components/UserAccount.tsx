import React from "react";
import { Text, Flex, Button } from "theme-ui";

// import { FluidStoreState } from "@fluid/lib-base";
// import { useLiquitySelector } from "@fluid/lib-react";

// import { COIN, GT } from "../strings";
// import { useFluid } from "../hooks/FluidContext";
// import { shortenAddress } from "../utils/shortenAddress";

// import { Icon } from "./Icon";
// import { useBondView } from "./Bonds/context/BondViewContext";
// import { useBondAddresses } from "./Bonds/context/BondAddressesContext";
import { ConnectKitButton } from "connectkit";

// const select = ({ accountBalance, saiBalance, floBalance }: FluidStoreState) => ({
//   accountBalance,
//   saiBalance,
//   floBalance
// });

export const UserAccount: React.FC = () => {
  // const { account } = useFluid();
  // const { accountBalance, saiBalance: realSaiBalance, floBalance } = useLiquitySelector(select);
  // const { bSaiBalance, saiBalance: customSaiBalance } = useBondView();
  // const { SAI_OVERRIDE_ADDRESS } = useBondAddresses();

  // const saiBalance = SAI_OVERRIDE_ADDRESS === null ? realSaiBalance : customSaiBalance;

  return (
    <Flex>
      <ConnectKitButton.Custom>
        {connectKit => (
          <Button
            variant="outline"
            sx={{ alignItems: "center", p: 2}}
            onClick={connectKit.show}
          >
            {/* <Icon name="user-circle" size="lg" /> */}
            <Text as="span" sx={{ ml: 42, mr: 42, fontSize: 18 }}>
              {/* {shortenAddress(account)} */}
              Connected
            </Text>
          </Button>
        )}
      </ConnectKitButton.Custom>

      {/* <Box
        sx={{
          display: ["none", "flex"],
          alignItems: "center"
        }}
      >
        <Icon name="wallet" size="lg" />

        {([
          ["ETH", accountBalance],
          [COIN, Decimal.from(saiBalance || 0)],
          [GT, Decimal.from(floBalance)],
          ["bSAI", Decimal.from(bsaiBalance || 0)]
        ] as const).map(([currency, balance], i) => (
          <Flex key={i} sx={{ ml: 3, flexDirection: "column" }}>
            <Heading sx={{ fontSize: 1 }}>{currency}</Heading>
            <Text sx={{ fontSize: 1 }}>{balance.prettify()}</Text>
          </Flex>
        ))}
      </Box> */}
    </Flex>
  );
};
