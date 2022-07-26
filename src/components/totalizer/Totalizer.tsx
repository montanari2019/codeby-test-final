import styleTotalizer from "./Totalizer.module.css";

interface ITotalizerProps {
  value: number;
}

export function Totalizer({ value }: ITotalizerProps) {

  const valueConverted = (value/100).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  
  return (
    <div className={styleTotalizer.totalizersItem}>
      <strong>Total</strong>
      <strong data-testid="totalizer-value">{valueConverted}</strong>
    </div>
  );
}
