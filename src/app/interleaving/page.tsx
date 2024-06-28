import ClientComponentOne from "../components/clinet-component-one";
import ServerComponentOne from "../components/server-component-one";

export default function InterLeavingPage() {
  return (
    <>
      <h2>Inter Leaving Page</h2>
      {/* <ClientComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
