import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";
import App from "./App";

test("affiche les contenus principaux de la page Circles", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /le week-end sportif qui agrandit tes cercles/i })).toBeInTheDocument();
  expect(screen.getByTestId("main-video")).toBeInTheDocument();
  expect(screen.getByText("heading", { name: /trois jours.*se rencontrer/i })).toBeInTheDocument();
  expect(screen.getByText(/venir seul/i)).toBeInTheDocument();
  expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
});
