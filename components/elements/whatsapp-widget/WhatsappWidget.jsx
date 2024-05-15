"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./whatsapp-widget.module.css";
import Image from "next/image";

const WhatsappWidget = () => {
  const [open, setOpen] = useState(false);
  const opened = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!opened.current) {
        setOpen(true);
      }
    }, 30000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div className={styles.container}>
      {open && (
        <div className={styles.window}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.photoContainer}>
                <Image
                  src="/image/LOGO-01.png"
                  alt=""
                  width={52}
                  height={52}
                  className={styles.photo}
                />
                <div className={styles.online} />
              </div>
              <div>
                <div className={styles.name}>Aziz Construction Team</div>
                <div className={styles.subtitle}>Hi there!</div>
              </div>
            </div>
            <div className={styles.closeButton} onClick={() => setOpen(false)}>
              <Image
                src="/close-black.svg"
                alt=""
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.time}>
              {new Date().getHours() / 10 < 1 && "0"}
              {new Date().getHours()}
              :
              {new Date().getMinutes() / 10 < 1 && "0"}
              {new Date().getMinutes()}
            </div>
            <div className={styles.messageContainer}>
              <Image
                src="/image/LOGO-01.png"
                alt=""
                width={28}
                height={28}
                className={styles.photo}
              />
              <div className={styles.message}>How can we help you? :)</div>
            </div>
            <div className={styles.text}>Start Chat withing with us:</div>
            <div
              className={styles.whatsappButton}
              onClick={() => window.open('https://wa.me/16507875802', '_blank', 'width=800,height=600')}
            >
              <Image
                src="/whatsapp-icon.svg"
                alt=""
                width={24}
                height={24}
              />
              <div className={styles.whatsappButtonText}>WhatsApp</div>
            </div>
          </div>
        </div>
      )}
      <div
        className={styles.button}
        onClick={() => {
          setOpen((prevState) => !prevState);
          opened.current = true;
        }}
      >
        <Image
          src="/chat.svg"
          alt=""
          width={24}
          height={24}
        />
        <div className={styles.buttonText}>WhatsApp</div>
      </div>
    </div>
  );
};

export default WhatsappWidget;