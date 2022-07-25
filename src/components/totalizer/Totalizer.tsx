import { TotalizerProduct } from "../../model/IProductCart";
import styleTotalizer from "./Totalizer.module.css";

export function Totalizer({ id, name, value }: TotalizerProduct) {

  const valueConverted = (value/100).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  
  return (
    <div className={styleTotalizer.totalizersItem}>
      <strong>Total</strong>
      <strong>{valueConverted}</strong>
    </div>
  );
}
