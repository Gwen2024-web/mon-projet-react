import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";
import App from "./App";

// Test d’intégration : vérifier la bonne disposition et les éléments essentiels
test("vérifie que la page principale s'affiche correctement", () => {
  render(<App />);

  // Vérifie la présence du titre principal
  expect(
    screen.getByText(/Le Week end sportif hasardeux qui ouvre tes cercles/i)
  ).toBeInTheDocument();

  // Vérifie que la vidéo est bien présente
  const video = screen.getByTestId("main-video");
  expect(video).toBeInTheDocument();

  // Vérifie la présence du titre “Le Programme”
  expect(screen.getByText(/Le Programme/i)).toBeInTheDocument();

  // Vérifie la section “À propos”
  expect(screen.getByText(/À propos/i)).toBeInTheDocument();

  // Vérifie les textes de contact
  expect(
    screen.getByText(/Nous contacter : - Mail : maxime.georges056@gmail.com/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Réseaux : DM/i)).toBeInTheDocument();

  // Vérifie la présence d'au moins une image
  const images = screen.getAllByRole("img");
  expect(images.length).toBeGreaterThan(0);
});