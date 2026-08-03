import { Link } from "react-router";

function NotFoundPage() {
  return (
    <main>
      <h1>404</h1>
      <p>This page does not exist.</p>
      <Link to="/">Return home</Link>
    </main>
  );
}

export default NotFoundPage;