const DeleteButton = (props) => {
  const handeleDelete = () => {
    props.deleteProduct(props.product.id);
    props.setProduct(null);
  };
  return <button onClick={handeleDelete}>Delete</button>;
};

export default DeleteButton;
