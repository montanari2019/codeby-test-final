import useSWR from "swr";
import styleShoppingCart from "./ShoppingCart.module.css";

import { defaultFetcher } from "../../config/fetcher";
import { IProductCart } from "../../model/IProductCart";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { ItemList } from "../../components/item/Item";
import { Badge } from "../../components/badge/Badge";
import { Totalizer } from "../../components/totalizer/Totalizer";

export function ShoppingCart() {
  const { selectedCard } = useParams();
  const { data, error, isValidating } = useSWR<IProductCart>(
    selectedCard,
    defaultFetcher
  );

  if (!!error) {
    return <h1>Deu erro</h1>;
  }

  return (
    <div>
      <Header />
      <div className={styleShoppingCart.container}>
        <strong>Meu carrinho</strong>
        <div className={styleShoppingCart.alingCenterContainer}>
          
          <div className={styleShoppingCart.flexContainerList}>
            <div className={styleShoppingCart.flexContainerListItem}>
              {!!data && !isValidating && data?.items.map((item) => (
                <ItemList
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  sellingPrice={item.sellingPrice}
                />
              ))}
              {(!data || isValidating) && <h1>Carregando...</h1>}
            </div>
          </div>

          <div className={styleShoppingCart.totalizers}>
            {data?.totalizers.map((totalizer) =>
              totalizer.id === "Items" ? <Totalizer id={totalizer.id} name={totalizer.name} value={totalizer.value}/> : null
            )}

            {selectedCard === "acima-10" && <Badge />}
          </div>

          <button className={styleShoppingCart.buttonFinalizePurchase} type="button">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}
