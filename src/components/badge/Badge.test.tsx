import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

const title = 'Parabéns, sua compra possui frete grátis';

test("Testing if the <p> element has been rendered", async () => {
  render(<Badge/>);

  expect(await screen.findByText(title)).toBeTruthy();
});

test("Testing if the badge is green", async () => {
  render(<Badge/>);
  
  expect(await screen.findByText(title)).toHaveClass('strongGreen');
});
