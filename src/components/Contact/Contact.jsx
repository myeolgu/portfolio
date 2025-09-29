import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;