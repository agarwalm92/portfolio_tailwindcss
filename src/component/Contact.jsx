const Contact = () => {
  return (
    <div id="contact" className="section">
      <h1 className="header">Contact</h1>
      <form action="" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="contact-div">
            <label className="contact-label">Name</label>
            <input type="text" name="name" className="contact-input" />
          </div>
          <div className="contact-div">
            <label className="contact-label">Phone</label>
            <input type="text" name="phone" className="contact-input" />
          </div>
        </div>

        <div className="contact-div">
          <label className="contact-label">Email</label>
          <input type="email" name="email" className="contact-input" />
        </div>
        <div className="contact-div">
          <label className="contact-label">Message</label>
          <textarea
            rows="10"
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
