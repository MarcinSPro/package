import React, { useCallback } from "react";
import { Card, Heading, Box, Button, Flex } from "theme-ui";
import { CollateralSurplusAction } from "../CollateralSurplusAction";
import { FluidStoreState } from "@fluid/lib-base";
import { useLiquitySelector } from "@fluid/lib-react";
import { useTroveView } from "./context/TroveViewContext";
import { InfoMessage } from "../InfoMessage";

const select = ({ collateralSurplusBalance }: FluidStoreState) => ({
  hasSurplusCollateral: !collateralSurplusBalance.isZero
});

export const LiquidatedTrove: React.FC = () => {
  const { hasSurplusCollateral } = useLiquitySelector(select);
  const { dispatchEvent } = useTroveView();

  const handleOpenTrove = useCallback(() => {
    dispatchEvent("OPEN_TROVE_PRESSED");
  }, [dispatchEvent]);

  return (
    <Card>
      <Heading>Trove</Heading>
      <Box sx={{ p: [2, 3] }}>
        <InfoMessage title="Your Trove has been liquidated.">
          {hasSurplusCollateral
            ? "Please reclaim your remaining collateral before opening a new Trove."
            : "You can borrow SAI by opening a Trove."}
        </InfoMessage>

        <Flex variant="layout.actions">
          {hasSurplusCollateral && <CollateralSurplusAction />}
          {!hasSurplusCollateral && <Button onClick={handleOpenTrove}>Open Trove</Button>}
        </Flex>
      </Box>
    </Card>
  );
};
