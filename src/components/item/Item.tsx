import { useState } from "react";
import { Item } from "../../model/IProductCart";
import styleItem from "./Item.module.css";

export function ItemList({ imageUrl, name, price, sellingPrice }: Item) {
  const priceReal = (price / 100).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const sellingPriceReal = (sellingPrice / 100).toLocaleString("pt", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={styleItem.container}>
      <img src={imageUrl} />
      <div className={styleItem.dataItem}>
        <div className={styleItem.nameSection}>
          <strong>{name}</strong>
        </div>
        <p>{priceReal}</p>
        <h6>{sellingPriceReal}</h6>
      </div>
    </div>
  );
}
