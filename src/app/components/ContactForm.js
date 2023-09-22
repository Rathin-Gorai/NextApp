'use client'
 
import { useState } from 'react';
import styles from "@/app/contact/contact.module.css";
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: [ '300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

const ContactForm = () => {
    const[user,setUser]= useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })
    const [status, setStatus] = useState(null);

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({...prevUser,[name]:value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api', {
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }
    return (
      <form className={styles.contact_form} onSubmit={handleSubmit} >
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label }>
            Name:
            <input id="username" type="text" name="username" placeholder="Enter Your Name" className={mulish.className} value={user.username} required onChange={handleChange}/>
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label }>
            Email:
            <input id="email" type="text" name="email" placeholder="Enter Your Email" className={mulish.className} value={user.email} required onChange={handleChange}/>
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label }>
            Contact Number:
            <input id="phone" type="number" name="phone" placeholder="Enter Your Contact Number" className={mulish.className} value={user.phone} required onChange={handleChange}/>
        </label>
      </div>
      
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label }>
            Message:
            <textarea id="message" type="text" name="message" placeholder="Enter Your Message" className={mulish.className} rows={6} value={user.message} required onChange={handleChange}/>
        </label>
      </div>
        <div>
            <button type="submit" className={mulish.className}>Send Message</button>
        </div>
      </form>
    );
  };
  export default ContactForm;