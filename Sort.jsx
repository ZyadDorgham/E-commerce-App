
import './Sort.css';

const SortControls = ({AllSorted}) => {
  return (
    <div className="sort-controls">
      <button onClick={()=>{
        
        AllSorted(`Low`);
      }} className="sort-btn">Price: Low to High</button>

      <button onClick={()=>{
        
        AllSorted(`High`);
      }} className="sort-btn">Price: High to Low</button>

      <button onClick={()=>{
        
        AllSorted(`Name`);
      }} className="sort-btn">Sort A-Z</button>
    </div>
  );
};

export default SortControls;