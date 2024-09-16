import '../master.css'
import { IoMdCheckmarkCircle } from "@react-icons/all-files/io/IoMdCheckmarkCircle";
import {  Klappbilliard } from '../../public/resources/resources';
import { useTranslation } from 'react-i18next';

export const AboutOHome = () => {
    const {t} = useTranslation();
    let features = [
        
        t('about.feature1'),
        t('about.feature2'),
        t('about.feature3'),
        t('about.feature4'),
        t('about.feature5'),
 
    ]
  return (
    <div className="about_us mt-20">

        <div className="title text-center">            
            
            <h2 className="mb-4  text-xl font-extrabold  md:text-4xl  text-orangeLogo">
                
                {t('about.title')}
            </h2>
            <p className="mb-6 font-light text-redLogo lg:mb-8 text-lg lg:text-xl">
            {t('about.paragraph')}
                </p>
                
 
        </div>
        <div className="sectors">
            <div className="left_sector_about">
                <img src={Klappbilliard} className='w-3/4 h-[350ox] object-contain' alt={t('products.#10.description')} title={t('products.#10.name')} />
            </div>
            <div className="right_sector_about">
                <h3 className="text-navyLogo text-2xl font-medium">
                {t('about.Our Features')}
                </h3>
                <ul>
                    {features?.map((el,i)=>{
                        return(
                            <li key={i} className='flex items-center mt-10 text-xl space-x-2 text-navyLogo stats-card'>
                            <span className='text-redLogo bg-[#d3eef5]  p-3 rounded-full'>
                                <IoMdCheckmarkCircle />
                            </span>
                            <span>
                               {el}
                            </span>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </div>


    </div>

  )
}
