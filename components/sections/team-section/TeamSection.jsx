import React from "react";
import styles from "./team-section.module.css";
import Image from "next/image";

const TeamSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Meet the team</div>
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <Image src="/home/aziz.jpeg" alt="Aziz" fill className={styles.photo} />
        </div>
        <div className={styles.texts}>
          <div className={styles.name}>Aziz</div>
          <div className={styles.description}>
            Aziz started his journey as a general contractor in 2016. He
            began as a versatile construction specialist, working in many
            spheres, such as engineering, HVAC, and plumbing. Working
            in these professions and solving many complex problems
            seasoned him as a construction specialist whom you could
            trust with anything.
            <br /><br/>
            Throughout his career, Aziz has earned the trust of
            numerous families who have entrusted him with the
            construction of entire houses, DUs, and the renovation of
            kitchens and bathrooms. This trust has led to the successful
            completion of these projects and significantly enhanced the
            value of his {"client's"} properties.

            <br /><br/>
            Completing these projects is only possible with an honest
            and reliable team of experts he gathered around him. Aziz
            hired the best contractors in his area and community and
            united them as a unit that could accomplish any assigned
            task.
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <Image src="/image/oleg.jpg" alt="Oleg" fill className={styles.photoPositionTop} />
        </div>
        <div className={styles.texts}>
          <div className={styles.name}>Oleg</div>
          <div className={styles.description}>
            Oleg joined Aziz Construction in 2023 after a successful asset management and operations career with various
            international organizations. As a seasoned operations specialist, he served abroad and domestically,
            managing millions in property assets for private and public companies.
            <br /><br/>
            As the COO at Aziz Construction, Oleg is at the helm of day-to-day operations, spearheading strategic
            initiatives, and managing all forms of external communications, be it digital or analog. His previous role
            as an operations manager for the Ministry of Foreign Affairs honed his analytical and problem-solving
            skills, and enhanced his project and risk management capabilities.
            <br /><br/>
            Oleg earned his {"Bachelor's"} degree from the University of California, Berkeley, and a {"Master's"} from Stanford
            University.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;