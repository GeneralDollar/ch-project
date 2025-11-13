
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("https://formspree.io/f/xkgkgwvq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
            setStatus(data["errors"].map((error: { message: string; }) => error["message"]).join(", "));
        } else {
            setStatus("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setStatus("Network error. Try again later.");
    }
  };

  return (
    <>
      <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Get In Touch</h2>
      <p className="text-gray mb-8">Have a question or need help finding a part? Fill out the form below or contact us directly. Our team is ready to assist you.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div>
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-accent" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-accent" />
          </div>
        </div>
        <div className="mb-6">
          <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-accent" />
        </div>
        <div className="mb-6">
          <textarea name="message" placeholder="Your Message" rows={5} required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-accent"></textarea>
        </div>
        <button type="submit" className="bg-accent text-primary font-bold py-3 px-8 rounded-md text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          Send Message
        </button>
      </form>

      {status && (
        <p className="text-gray mt-4">{status}</p>
      )}
    </>
  );
};

export default ContactForm;
