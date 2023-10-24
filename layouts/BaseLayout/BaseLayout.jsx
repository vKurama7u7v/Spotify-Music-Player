import React from "react";

import FooterComponent from "@/components/footer/FooterComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";

function BaseLayout(props) {
  const { children } = props;

  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}

export default BaseLayout;
