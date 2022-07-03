import React from "react";
import { HomeViewProps } from "../types";

export const HomeView = ({ viewModel }: HomeViewProps) => {
  return <h1 title="hello-title">Hello {viewModel.val}</h1>;
};