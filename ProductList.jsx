
import  { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import SortControls from './Sort';
import Update from './Update';

const ProductList = () => {
  const products = [
    { id: 1, image: 'https://picsum.photos/id/20/400/400', title: 'سماعات لاسلكية مانعة للضوضاء', price: 129.99, quantity: 1 },
    { id: 2, image: 'https://picsum.photos/id/26/400/400', title: 'ساعة ذكية الترا', price: 249.00, quantity: 1 },
    { id: 3, image: 'https://picsum.photos/id/0/400/400', title: 'حقيبة ظهر للحاسوب المحمول', price: 59.99, quantity: 1 },
    { id: 4, image: 'https://picsum.photos/id/1/400/400', title: 'لوحة مفاتيح ميكانيكية RGB', price: 89.99, quantity: 1 },
    { id: 5, image: 'https://picsum.photos/id/13/400/400', title: 'تلفاز ذكي 55 بوصة 4K', price: 499.00, quantity: 1 },
    { id: 6, image: 'https://picsum.photos/id/22/400/400', title: 'ماوس لاسلكي للألعاب', price: 49.99, quantity: 1 }
  ];

  let [val, setval] = useState(() => {
    let Items = localStorage.getItem('Items');
    return Items ? JSON.parse(Items) : products;
  });

  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(val));
  }, [val]);

  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    image: '',
    price: '',
    quantity: 1
  });

  function Plus(id)
  {
    let map = val.map((e)=>{
      if(e.id===id)
      {
        return{...e,quantity:e.quantity+1}
      }else{
        return e;
      }
    })
    setval(map);
  }

  function Minus(id)
  {
    let map = val.map((e)=>{
      if(e.id===id&&e.quantity>1)
      {
        return{...e,quantity:e.quantity-1}
      }else{
        return e;
      }
    })
    setval(map);

  }


  function DeleteItem(id)
  {
    let confirmed = confirm('Are you sure you want to delete element?');
    if(!confirmed) return;
    
    let filter = val.filter((e)=>{
      return e.id!==id;
    })
    setval(filter);
  }


  function AllSorted(sort) {

  let sorted = [...val];

  if(sort === "Low")
  {
    sorted.sort((a,b) => a.price - b.price);
  }
  else if(sort === "High")
  {
    sorted.sort((a,b) => b.price - a.price);
  }
  else if(sort === "Name")
  {
    sorted.sort((a,b) => a.title.localeCompare(b.title));
  }

  setval(sorted);
}
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSave = () => {
    if (!newProduct.title.trim()  || !newProduct.price) {
      alert('يرجى ملء جميع الحقول');
      return;
    }

    const maxId = val.reduce((max, p) => (p.id > max ? p.id : max), 0);
    const newId = maxId + 1;
    const productToAdd = {
      id: newId,
      title: newProduct.title.trim(),
      image: newProduct.image.trim(),
      price: parseFloat(newProduct.price),
      quantity: parseInt(newProduct.quantity) || 1
    };
    setval([...val, productToAdd]);
    setShowModal(false);
    setNewProduct({ title: '', image: '', price: '', quantity: 1 });
  };

  const handleCancel = () => {
    setShowModal(false);
    setNewProduct({ title: '', image: '', price: '', quantity: 1 });
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>جميع المنتجات</h2>
        <button className="add-product-btn" onClick={() => setShowModal(true)}>
          + إضافة منتج جديد
        </button>
      </div>

      <div className="product-grid">
        {val.map(product => (
          <div key={product.id} className="product-item">
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price * product.quantity}
              quantity={product.quantity}
            />
            <div className="button-group">
              <button onClick={() => Minus(product.id)} className="decrement-btn">-</button>
              <span className="counter-number">{product.quantity}</span>
              <button onClick={() => Plus(product.id)} className="increment-btn">+</button>
              <button onClick={() => DeleteItem(product.id)} className="delete-btn" title="إزالة">🗑️</button>
            </div>
          </div>
        ))}
      </div>

<SortControls  AllSorted={AllSorted}/>

      {showModal && (

        <div className="modal-overlay" onClick={handleCancel}>

          <Update newProduct={newProduct} handleInputChange={handleInputChange} handleCancel={handleCancel} handleSave={handleSave}/>

        </div>

      )}

    </div>
  );
};

export default ProductList;