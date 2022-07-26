import { render, screen } from "@testing-library/react";
import { Totalizer } from "./Totalizer";

const renderedTotalizer = (
  <Totalizer value={300}/>
);

test("Testing if the value has been rendered and formatted", async () => {
  render(renderedTotalizer);
  expect(await screen.findByTestId("totalizer-value")).toHaveTextContent("R$ 3,00");
});
