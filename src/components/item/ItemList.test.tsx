import { render, screen } from "@testing-library/react";
import { ItemList } from "./ItemList";

const renderedItem = (
  <ItemList
    name="Hot dog"
    imageUrl="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000"
    price={500}
    sellingPrice={400}
  />
);

test("Testing if name is rendered", async () => {
  render(renderedItem);
  expect(await (await screen.findByTestId("list-item-name"))).toHaveTextContent(
    "Hot dog"
  );
});

test("Testing if price is rendered and the mask is right", async () => {
  render(renderedItem);
  expect(await (await screen.findByTestId("list-item-price"))).toHaveTextContent('R$ 5,00');
});

test("Testing if selling price is rendered and the mask is right", async () => {
  render(renderedItem);
  expect(await (await screen.findByTestId("list-item-selling-price"))).toHaveTextContent('R$ 4,00');
});

test("Testing if image is rendered", async () => {
  render(renderedItem);
  expect(await (await screen.findByRole("figure"))).toHaveAttribute('src', "http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000");
});
