import { useContext, useEffect, useState } from "react"
import { productsData } from "../products"
import { DetailProduct, DetailProductSkeleton } from "./global/DetailProduct"
import { ProductCard } from "./global/ProductCard"
import { OrdersForm } from "../forms/OrdersForm"
import { useTranslation } from "react-i18next"
import { ProductsContext } from "../contextApp/context"

export const ProductsOHome = () => {
    const[activeProduct,SetProduct] = useState({});
    const[loading,setLoading] = useState(true);
    const[updating,setUpdating] = useState(false);
    const[checkout,setCheckout] = useState(false);
    

    const products = useContext(ProductsContext);
    useEffect(() => {
      if(loading){
        SetProduct(productsData()[0]);
        setLoading(false);

      }
    },[loading])
    const handelClick = (el) =>{
        setUpdating(true);
        SetProduct(el);
        setTimeout(() => {
            setUpdating(false);
        }, 250);
    }
    const {t} = useTranslation();
    
  return (
    <div className="products mt-20 pb-52" >
        +
        <div className="title text-center">            
            <h2 className="mb-4  text-2xl font-extrabold  sm:text-2xl xl:text-3xl md:text-4xl  text-orangeLogo">
                
                {t('product-section.title')}
            </h2>
            <p className="mb-6 font-light lg:mb-8 text-lg lg:text-xl text-redLogo">
                
                {t('product-section.paragraph')}
                </p>
        </div>
        <div className="flex sm:flex-row flex-nowrap sm:flex-nowrap  space-x-0 sm:space-x-5  ">
            <div className="w-1/3">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 ">
                    {products?.map((el,i)=>{
                        return(
                            <button className="product-card" onClick={()=>handelClick(el)} key={i}>
                                <ProductCard  i={i} {...el }/>
                            </button>
                        );
                    })}
                    
                </div>
            </div>
            <div className="w-2/3">
                
                { (loading === false && updating === true) ? <DetailProductSkeleton  /> :
                    <div className="h-full">
                        {checkout === false ?  <DetailProduct home={true} {...activeProduct} setCheckout={setCheckout} />  :

                        <div className="sm:px-20 px-10 relative h-full">
           
                        <div className="sticky up top-10 ">
                        <div className="flex justify-between mb-2">
                            <h5 className="text-sm text-orangeLogo Font-bold ">
                            {t('product-section.Order Now')}
                            </h5>
                            <button className="text-sm bg-yellowLogo text-gray-800  px-2 py-1 rounded-full hover:bg-orangeLogo" onClick={()=> setCheckout(prev => !prev)}>Cancel Order</button>
                        </div> 
                        <hr />
                        <OrdersForm {...activeProduct} /> 
                        </div>
                        </div>
                         
                         
                         }
                    </div>
                
               
                 }
            </div>
        </div>
        
  
    </div>
  )
}
