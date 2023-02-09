import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
      .then((response) => response.json())
      .then((planeteers) => setPlaneteers(planeteers));
  }, []);

  const filteredPlaneteerArray = planeteers.filter((planeteer) => {
    return planeteer.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Header />
      <SearchBar setSearch={setSearch} />
      <RandomButton />
      <PlaneteersContainer
        planeteers={filteredPlaneteerArray}
        setPlaneteers={setPlaneteers}
      />
    </div>
  );
}

export default App;
