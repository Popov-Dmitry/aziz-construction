import React from "react";
import styles from "./service.module.css";
import { newConstructionData } from "@/data";
import Image from "next/image";

const Service = ({ params }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("/services/${params.slug}/cover.jpeg")`}}
    >
      <div className={styles.wrapper}>
        {newConstructionData[params.slug].map((value, index) => (
          <div key={value.title} className={styles.row}>
            <div className={styles.column}>
              <Image
                src={`/services/${params.slug}/${index + 1}.jpeg`}
                alt=""
                fill
                objectFit="contain"
              />
            </div>
            <div className={styles.column}>
              <div className={styles.title}>{value.title}</div>
              <div className={styles.description}>{value.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;