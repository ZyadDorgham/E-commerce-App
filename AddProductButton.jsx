import './AddProductButton.css';

const AddProductButton = ({ onOpen }) => {
  return (
    <button className="add-product-btn" onClick={onOpen}>
      + Add New Product
    </button>
  );
};

export default AddProductButton;