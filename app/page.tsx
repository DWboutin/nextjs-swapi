import { Films } from "features/Films/Films";
import { appStore } from "store/store";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-4">Starwars movies</h1>
      <Films />
    </div>
  );
}
