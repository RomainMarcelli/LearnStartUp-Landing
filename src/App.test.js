import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders landing hero and download actions", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /Réseau, progression, succès/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Ouvrir le formulaire beta Android/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Voir la disponibilité iOS/i })
  ).toBeInTheDocument();
});
