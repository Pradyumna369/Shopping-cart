import { Header } from "../Header.tsx";
import Items from "./Items";
import FilterPanel from "./FilterPanel";

const HomePage = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <FilterPanel />
        <Items />
      </div>
    </div>
  );
};

export default HomePage;
