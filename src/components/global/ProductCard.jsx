import { useTranslation } from "react-i18next"

export const ProductCard = ({image,name,description,i,color}) => {

  return (
    <button className='h-[100px]  w-[100px] sm:w-full group  min-h-[150px] p-3 rounded-2xl shadow-md relative  border-2 border-[#d3cec2]  transition-shadow hover:shadow-2xl' style={{background:color}}>
        
      <span className="transition-all absolute start-0 -top-10 invisible group-hover:visible opacity-100 z-20 font-semibold text-navHover text-lg bg-orangeLogo px-2 py-1 rounded-xl ">
       {name}
        </span>


      <img className='w-full h-full object-contain' src={image} alt={description} title={name} />
      
      <span className="absolute bottom-0 end-2 text-4xl z-20 font-semibold text-navHover opacity-80">{i+1 > 9 ? `${i+1}`:`0${i+1}`}</span>
    </button>
  )
}
