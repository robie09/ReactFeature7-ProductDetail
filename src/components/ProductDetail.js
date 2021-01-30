import { DetailWrapper, ThemeButton } from "../styles";
// import products from "../products";
import DeleteButton from "./DeleteButton";

const ProductDetail = (props) => {
  const product = props.product;

  // const productList = products.map((product) => (
  //   <ProductDetail product={product} key={product.id} />
  // ));

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <ThemeButton onClick={() => props.setProduct(null)}>
        back to Home
      </ThemeButton>
      <br />
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={product}
        setProduct={props.setProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
