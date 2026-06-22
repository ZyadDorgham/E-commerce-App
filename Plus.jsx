export default function Plus(id,val,setval)
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
