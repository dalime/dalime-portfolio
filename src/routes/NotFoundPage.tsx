import { useRouteError } from "react-router-dom";

import "../styles/index.css";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as any).statusText || (error as any).message}</i>
      </p>
    </div>
  );
}
