import { useTranslation } from 'react-i18next';
import Slider from 'react-slick'
import { girl3, pers1, pers2 } from '../../public/resources/resources';
export const Testimonials = () => {
    const {t} = useTranslation()
    const TestimonialsData=[
        {
            name:t('Testimonials.Testimonial1.name'),
            work:t('Testimonials.Testimonial1.work'),
            idea:t('Testimonials.Testimonial1.idea'),
            image:pers1
        },
        {
            name:t('Testimonials.Testimonial2.name'),
            work:t('Testimonials.Testimonial2.work'),
            idea:t('Testimonials.Testimonial2.idea'),
            image:pers2
        },
        {
            name:t('Testimonials.Testimonial3.name'),
            work:t('Testimonials.Testimonial3.work'),
            idea:t('Testimonials.Testimonial3.idea'),
            image:girl3
        },

       
    ]
    const settings = {
        
  
        speed: 500,
    
        centerMode: true,

        centerPadding:'0px',
        autoPlay: true,
        className:'center',
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
  
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },

          ]
      };
  return (
    <div className=' mt-5 '>
        <div className="title text-center">            
            
            <h2 className="mb-4  text-2xl font-extrabold  md:text-2xl xl:text-3xl text-orangeLogo">
            
            {t("Testimonials.title")}
            </h2>
            <p className="mb-6 font-light text-redLogo lg:mb-8 text-lg lg:text-xl">
            {t("Testimonials.paragraph")}
                
                </p>

 
        </div>
<div className="Testimonials ">



<Slider {...settings}>
        {TestimonialsData?.map((el,i)=>{
                     return <div  key={i} className="p-5 group ">
                                                 <figure className="center flex flex-col items-center justify-center p-8 text-center bg-transparent group-hover:bg-primaryBg  rounded-xl border border-cyanLogo  ">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-navyLogo lg:mb-8 ">
                            <p className="my-4 navyLogo">{el.idea}</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-16 h-16 object-cover" src={el.image} alt="profile picture" />
                            <div className="space-y-0.5 font-medium text-navyLogo  text-left rtl:text-right ms-3">
                                <div>{el.name}</div>
                                <div className="text-sm text-redLogo  ">{el.work}</div>
                            </div>
                        </figcaption>    
                    </figure>
                     </div>
                     

        })}
</Slider>


</div>

</div>
  )
}
