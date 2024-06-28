import ClientComponentOne from "./clinet-component-one";
import ServerComponentTwo from "./server-component-two";
import fs from "fs";

export default function ServerComponentOne() {

  fs.readFileSync("src/app/components/server-component-one.tsx" , "utf-8")

  return (
    <>
      <h2>Server Component One</h2>
      <ServerComponentTwo />
    </>
  )
}