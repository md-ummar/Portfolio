import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Creating variables for API Ids :: from emailJS Account ::

    const serviceId = "service_2c6l96j";
    const templateId = "template_ws7jj6c";
    const publickey = "tNzVekd8ps7zn895j";

    //creating an object for dynamic details values ::

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Md Ummar",
      message: message,
    };

    //send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publickey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setname("");
        setemail("");
        setmessage("");
      })
      .catch((error) => {
        console.error(`Error sending email:`, error);
      });
  };

  return (
    <div id="contact" className="max-w-md  mx-auto my-8 ">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl  "
      >
        Get In Touch
      </motion.div>
      <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-900 p-10 shadow-md rounded-2xl "
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-400 "
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-transform transform hover:scale-105"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-400"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-transform transform hover:scale-105"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            required
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black transition-transform transform hover:scale-105"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-block w-full px-4 py-2 text-center bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Send Mail
          </button>
        </div>
      </motion.form>
    </div>
  );
}

export default ContactForm;
