"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-component-two";
import ServerComponentOne from "./server-component-one";

export default function ClientComponentOne({children} : {
    children : React.ReactNode
}) {
  const [name, setName] = useState("Batman");

  return (
    <>
      <h2>Client Component One</h2>
      {children}
    </>
  );
}
