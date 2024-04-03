import React from "react";
import styles from "./new-construction.module.css";
import { newConstructionData } from "@/app/new-construction/data";
import Image from "next/image";

const NewConstruction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {newConstructionData.map((value, index) => (
          <div key={value.title} className={styles.row}>
            <div className={styles.column}>
              <Image
                src={`/services/new-construction/${index + 1}.jpeg`}
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

export default NewConstruction;