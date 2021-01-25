// Styling
import { ProductWrapper } from "../styles";

import DeleteButton from "./DeleteButton";

const ProductItem = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;

  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => {
          setProduct(product);
        }}
      />

      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>

      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={product}
        setProduct={setProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
