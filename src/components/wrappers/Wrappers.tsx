import { BrowserRouter } from "react-router-dom";

export const Wrappers = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => <BrowserRouter>{children}</BrowserRouter>;
