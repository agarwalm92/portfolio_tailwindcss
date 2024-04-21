import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  useEffect(() => emailjs.init("nsfMIddy3gyQtYm5V"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_5cf93np";
    const templateId = "template_skm8eu5";
    try {
      //setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      //setLoading(false);
    }
  };

  return (
    <div id="contact" className="section">
      <h1 className="header">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="contact-div">
            <label className="contact-label">Name</label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              className="contact-input"
            />
          </div>
          <div className="contact-div">
            <label className="contact-label">Phone</label>
            <input
              ref={phoneRef}
              type="number"
              name="phone"
              className="contact-input"
            />
          </div>
        </div>

        <div className="contact-div">
          <label className="contact-label">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="contact-input"
          />
        </div>
        <div className="contact-div">
          <label className="contact-label">Message</label>
          <textarea
            ref={messageRef}
            rows="5"
            name="message"
            className="border-2 rounded-lg p-3 border-gray-300"
          />
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
