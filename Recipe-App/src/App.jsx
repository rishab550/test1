import React, { useEffect } from "react";
import { recipe } from "../utils/apiRecipe";

const App = () => {
  useEffect(() => {
    recipe();
  }, []);

  return <></>;
};

export default App;
