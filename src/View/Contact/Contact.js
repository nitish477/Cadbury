import React, { useState } from 'react';
import './Contact.css';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading("please wait...")
     setTimeout(()=>{
      toast.dismiss();
      toast.success("Submited")
     },1000)
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
        <div className="contact-image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCul-Oza-8i8Vgve4XuYhM_HSJem5LW73PsQ&s"
            alt="Chocolate"
            className="contact-image"
          />
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default Contact;
