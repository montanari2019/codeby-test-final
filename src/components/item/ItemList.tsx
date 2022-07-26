import React, { useState } from "react";
import { Item } from "../../model/IProductCart";
import styleItem from "./ItemList.module.css";

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
      <img role="figure" src={imageUrl} alt="Product"/>
      <div className={styleItem.dataItem}>
        <div className={styleItem.nameSection}>
          <strong data-testid="list-item-name">{name}</strong>
        </div>
        <p data-testid="list-item-price">{priceReal}</p>
        <h6 data-testid="list-item-selling-price">{sellingPriceReal}</h6>
      </div>
    </div>
  );
}
