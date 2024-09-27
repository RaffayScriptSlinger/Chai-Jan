import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import Swal from "sweetalert2";
import React from 'react';
import { Button, notification } from 'antd';

function ContactUs() {
  const { theme } = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [api, contextHolder] = notification.useNotification(); 

  const openNotification = () => {
    api.open({
      message: 'Thank you!',
      description: 'Your response has been recorded successfully.',
      duration: 3, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore(); 
    const contactsCollection = collection(db, "contacts"); 

    try {
      if (!name || !email || !message) {
        Swal.fire("Please fill in all fields", "", "error");
      } else {
        await addDoc(contactsCollection, {
          name: name,
          email: email,
          message: message,
        });
        
        openNotification(); 

        setName("");
        setEmail("");
        setMessage("");
      }

    } catch (error) {
      console.error("Error adding document: ", error);
      Swal.fire(`Error adding document: ${error}`);
    }
  };

  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      {contextHolder} 
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl title-font mb-4 text-red-600 font-semibold">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Looking For Your <span className="text-red-500">Valuable</span> Feedback
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="rounded p-2 bg-green-500 text-white hover:bg-green-600">
                  Send Message
                </button>
                <br />
                <Link to="/FAQs" className="text-red-600">FAQs</Link>
                <p className="text-red-600">Note: Your response is recorded</p>
              </div>
            </form>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">TasteAndHealth@gmail.com</a>
              <p className="leading-normal my-5">
                Malir St.
                <br />
                Near Malir Court
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
