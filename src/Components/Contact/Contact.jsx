import   "../../styles/contact.css";
import Locart2 from "../../assets/create the same imag66.png";


const ContactPage = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('تم إرسال رسالتك بنجاح!');
  //   // handle actual send logic here
  // };

  return <>
  
   <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto  grid md:grid-cols-2">
        <img className="w-[500px] max-aouto mt-40 my-4" src={Locart2} alt="/" />

        {/* <div className="flex flex-col justify-center">
          <h1 className="text-[] font-bold">{t("abouts.title")}</h1>
          <p className="md:text-4xl sm:text-3xl text-2xl  py-2">
            {t("abouts.description")}
           
          </p>

          <button className="btx bg-[#512da8] w-[200px] font-bold rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white hover:bg-[#673ab7] transition duration-300">
            {t("abouts.button")}
          </button>
        </div> */}<section className="contact-section ">
          <form>
            <h2>Contact Form</h2>
            <div className="input-box ">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" className="field" name="name" required placeholder="Enter your name"/>
            </div>
              <div className="input-box">
              <label htmlFor="name">Email Address</label>
              <input type="email" id="email" className="field" required placeholder="Enter your name"/>
            </div>
              <div className="input-box">
              <label htmlFor="name"> Your Message</label>
              <textarea id="message" className="field-message" required placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="">Send Message</button>
          </form>
        </section>
      </div>
      </div>
  </>
  
  
};

export default ContactPage;