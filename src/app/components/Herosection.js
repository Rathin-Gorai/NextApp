import Link from "next/link";
import heroStyle from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: [ '300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

const Herosection = ({title,imageUrl}) => {
    return (
      <main className={heroStyle.main_section}>
          <div className={styles.container}>
              <div className={styles.grid_two_section}>
                  <div className={heroStyle.hero_content}>
                  <h1>{title}</h1>
                      <p>
                      The Employment Department at present has a digital platform www.pgrkam.com and its mobile application to provide almost all services offered to job seekers and employers through digital means. The portal has multiple modules like private sector jobs, government jobs, self-employment avenues, foreign jobs, foreign study, counseling, guidance, induction into armed forces, job melas, etc.
                      </p>
                      <Link href="/movie">
                      <button className={mulish.className}>
                        Explore Movies
                      </button>
                      </Link>
                  </div>
                  <div className={heroStyle.hero_image}>
                    <Image src={imageUrl} alt="Netflix Image" width={500} height={500}/> 
                  </div>
              </div>
          </div>
      </main>
    );
  };
  export default Herosection;