import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="rounded-3xl bg-white ringa-border p-10 text-center shadow-soft">
        <div className="text-3xl font-black">404</div>
        <p className="mt-2 text-sm text-slate-600">That page doesn’t exist.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button as={Link} to="/" variant="primary">Go Home</Button>
          <Button as={Link} to="/menu" variant="ghost">Browse Menu</Button>
        </div>
      </div>
    </Container>
  );
}
