// ProductCard.jsx
import './ProductCard.css';

const ProductCard = ({ image, title, price, quantity }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
        <div className="product-quantity-badge">
          <span className="qty-label">Qty:</span>
          <span className="qty-number">{quantity}</span>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;