import { DetailWrapper } from "../styles";
import products from "../products";

const ProductDetail = (props) => {
  const productList = products.map((product) => (
    <ProductDetail product={product} key={product.id} />
  ));

  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt="I should be a producte" />
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
    </DetailWrapper>
  );
};

export default ProductDetail;
