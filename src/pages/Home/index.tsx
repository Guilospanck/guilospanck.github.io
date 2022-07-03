import React from "react";

/** Views */
import { HomeView } from './views';

/** ViewModels */
import { useHomeViewModel } from "./viewModels/homeViewModel";

/** Components */

const Home = () => {
  const viewModel = useHomeViewModel();

  return (
    <HomeView viewModel={viewModel} />
  );
};

export default Home