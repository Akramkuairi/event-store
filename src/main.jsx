import React, { useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './language/multilingual.js'
import('preline')
import { productsData } from './products.jsx'
import { ProductsContext } from './contextApp/context.jsx'
import { ThemeContext } from './contextApp/themeMode.jsx'



const Main = () =>{
 
  const[products,SetProducts] = useState([]);
  const[loading,setLoading] = useState(true);



  const [theme, setTheme] = useState('light');
  const ThemeValue = useMemo(
    () => ({ theme, setTheme }), 
    [theme]
  );
  








  useEffect(() => {
    if(loading){
      SetProducts(productsData());
      setLoading(false);
    }
  },[loading])
  return (
    <React.StrictMode>
    <BrowserRouter>

    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <ProductsContext.Provider value={products}>
      <ThemeContext.Provider value={ThemeValue}>
      <App />
      </ThemeContext.Provider>
      </ProductsContext.Provider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
<Main />
)
