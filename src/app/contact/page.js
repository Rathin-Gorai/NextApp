import ContactCard from "@/app/components/contactCard";
import styles from "@/app/contact/contact.module.css"
import ContactForm from "@/app/components/ContactForm";
const Contact = () => {
    return (
      <>
      <div className={styles.container}>
      <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>We&rsquo;d love to  hear <span>from you</span></h2>
          <ContactForm/>
        </section>
      </div>
  
      </>
    );
  };
  export default Contact;