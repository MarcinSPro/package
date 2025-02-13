import React from "react";
import { Flex, Button, Text, Spinner } from "theme-ui";
import { ActionDescription } from "../../../../../ActionDescription";
import { useBondView } from "../../../../context/BondViewContext";

export const Cancel: React.FC = () => {
  const { dispatchEvent, selectedBond: bond, statuses } = useBondView();

  const isProcessingTransaction = statuses.CANCEL === "PENDING";

  const handleConfirmPressed = () => {
    dispatchEvent("CONFIRM_PRESSED");
  };

  const handleBackPressed = () => {
    dispatchEvent("BACK_PRESSED");
  };

  if (bond === undefined) return null;

  return (
    <>
      <ActionDescription>
        You will receive your bonded{" "}
        <Text sx={{ fontWeight: "bold" }}>{bond.deposit.prettify(2)} SAI</Text> back and forgo{" "}
        <Text sx={{ fontWeight: "bold" }}>{bond.accrued.shorten()} bSAI</Text>
      </ActionDescription>

      <Flex variant="layout.actions">
        <Button variant="cancel" onClick={handleBackPressed} disabled={isProcessingTransaction}>
          Back
        </Button>
        <Button variant="primary" onClick={handleConfirmPressed} disabled={isProcessingTransaction}>
          {!isProcessingTransaction && <>Confirm</>}
          {isProcessingTransaction && <Spinner size="28px" sx={{ color: "white" }} />}
        </Button>
      </Flex>
    </>
  );
};
