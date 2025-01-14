import React, { useState, useRef } from "react";
import { Button, Container, Flex } from "theme-ui";
import { Icon } from "./Icon";
import { FluidLogo } from "./FluidLogo";
// import { Link } from "./Link";

const logoHeight = "28px";

export const SideNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);

  if (!isVisible) {
    return (
      <Button sx={{ display: ["flex", "none"] }} variant="icon" onClick={() => setIsVisible(true)}>
        <Icon name="bars" size="lg" />
      </Button>
    );
  }
  return (
    <Container
      variant="infoOverlay"
      ref={overlay}
      onClick={e => {
        if (e.target === overlay.current) {
          setIsVisible(false);
        }
      }}
    >
      <Flex variant="layout.sidenav">
        <Button
          sx={{ position: "fixed", right: "25vw", m: 2 }}
          variant="icon"
          onClick={() => setIsVisible(false)}
        >
          <Icon name="times" size="2x" />
        </Button>
        <FluidLogo height={logoHeight} p={2} />
        {/* <Box as="nav" sx={{ m: 3, mt: 1, p: 0 }} onClick={() => setIsVisible(false)}>
          <Link to="/">Dashboard</Link>
          <Link to="/bonds">Bonds</Link>
          <Link to="/risky-troves">Risky Troves</Link>
        </Box> */}
      </Flex>
    </Container>
  );
};
