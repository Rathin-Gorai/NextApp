import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const Page = () => {
    return (
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Could not find the requested page.</p>
            <Link href="/">
                <button>
                    Go to Home Page
                </button>
            </Link>
        </div>
    </section>
    );
  };
  export default Page;
