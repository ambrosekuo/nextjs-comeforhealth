import { ReactNode, ReactElement } from "react";
import Nav from "../Nav";
type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props): ReactElement {
  return (
    <div className="flex min-h-screen overflow-x-hidden flex-col">
      <Nav />
      <main className="flex grow flex-col">{children}</main>
    </div>
  );
}
