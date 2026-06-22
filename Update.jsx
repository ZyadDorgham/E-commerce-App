export default function Update({newProduct,handleInputChange,handleSave,handleCancel})
{
    return(
        <>

                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>إضافة منتج جديد</h3>

            <form onSubmit={(e) => e.preventDefault()}>


              <div className="form-group">
                <label>اسم المنتج</label>
                <input
                  type="text"
                  name="title"
                  value={newProduct.title}
                  onChange={handleInputChange}
                  placeholder="أدخل اسم المنتج"
                  required
                />
              </div>

              <div className="form-group">
                <label>رابط الصورة</label>
                <input
                  type="text"
                  name="image"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  placeholder="أدخل رابط الصورة"
                  required
                />
              </div>

              <div className="form-group">
                <label>السعر</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  placeholder="أدخل السعر"
                  step="0.01"
                  min="0"
                  required
                />
              </div>

              <div className="form-group">
                <label>الكمية</label>
                <input
                  type="number"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={handleInputChange}
                  placeholder="الكمية"
                  min="1"
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="save-btn" onClick={handleSave}>حفظ</button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>إلغاء</button>
              </div>

            </form>

          </div>

        
        </>
    )
}