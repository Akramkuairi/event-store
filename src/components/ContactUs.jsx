import emailjs from '@emailjs/browser'
import { t } from 'i18next';
import {  toast } from 'react-toastify';

export const ContactUs = () => {
    const handelFormSubmit = (e) =>{
        e.preventDefault();
     
        const formData = new FormData(e.target);
        const data = {
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),

        };
    
          emailjs
          .send('service_p3nsgtb', 'template_rdn60aw', data, {
            publicKey: 'VJIPjbjniWZ32D9n5',
          })
          .then(
            () => {
              document.getElementById("contactForm").reset();
              toast.success(
                t('contactForm.successMessage')
              )
            },
            () => {
              toast.error(
                t('contactForm.errorMessage')
              )
            },
          );
      };
  return (
    <section className="">
            <div className="title text-center">            
            <h2 className="mb-4  text-2xl font-extrabold  md:text-2xl xl:text-3xl text-orangeLogo">
                {t("contact.title")}
            </h2>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 text-lg lg:text-xl text-redLogo">
            {t("contact.paragraph")}
            </p>
          </div>
    <div className="flex flex-wrap space-x-0 ">
        <div className="w-full sm:w-1/2 mr-auto place-self-center lg:col-span-7 p-5">
        <form id='contactForm' onSubmit={(e)=>{handelFormSubmit(e)}} className="space-y-8 w-full">
          <div>
              <label htmlFor="email" className=" block mb-2 text-sm font-medium text-redLogo ">
              {t("contactForm.email")}
              </label>
              <input type="email" id="email" name='email' className="shadow-sm bg-transparent border border-cyanLogo text-navyLogo text-sm rounded-lg  focus:border-redLogo focus:outline-redLogo focus:ring-redLogo focus:bg-primaryBg block w-full p-2.5 " placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-redLogo ">{t("contactForm.subject")}</label>
              <input type="text" id="subject" name='subject' className="shadow-sm bg-transparent border border-cyanLogo text-navyLogo text-sm rounded-lg  focus:border-redLogo focus:outline-redLogo focus:ring-redLogo focus:bg-primaryBg block w-full p-2.5 " placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-redLogo ">{t("contactForm.message")}</label>
              <textarea id="message" name='message' rows="6" className="shadow-sm bg-transparent border border-cyanLogo text-navyLogo text-sm rounded-lg  focus:border-redLogo focus:outline-redLogo focus:ring-redLogo focus:bg-primaryBg block w-full p-2.5 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-redLogo sm:w-fit hover:bg-orangeLogo focus:ring-4 focus:outline-none focus:ring-orangeLogo "> {t('orderForm.submit')}</button>
      </form>
        </div>
        <div className="w-full sm:w-1/2 p-7  lg:mt-0 lg:col-span-5 lg:flex rounded-2xl">
        <div className="mapouter"><div className="gmap_canvas">

          <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40453.672160212576!2d8.242009626005705!3d50.676244280503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc3f757f602251%3A0x422435029b0a620!2s35745%20Herborn!5e0!3m2!1sen!2sde!4v1717098497399!5m2!1sen!2sde">

            </iframe>

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40453.672160212576!2d8.242009626005705!3d50.676244280503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc3f757f602251%3A0x422435029b0a620!2s35745%20Herborn!5e0!3m2!1sen!2sde!4v1717098497399!5m2!1sen!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

</iframe> */}
            </div>
        </div>
        </div>                
    </div>
</section>
  )
}
