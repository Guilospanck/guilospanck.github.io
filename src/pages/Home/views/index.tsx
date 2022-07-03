import React from "react";
import { HomeViewProps } from "../types";

export const HomeView = ({ viewModel }: HomeViewProps) => {
  return <h1>Hello {viewModel.val}</h1>;
};