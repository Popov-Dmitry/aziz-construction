import React from "react";
import styles from "./our-process.module.css";
import PageHeader from "@/components/sections/page-header/PageHeader";
import ServiceRow from "@/components/elements/service-row/ServiceRow";
import { ourProcessData } from "@/data";
import ContactUsSection from "@/components/sections/contact-us-section/ContactUsSection";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";

const Page = () => {
  return (
    <div>
      <Breadcrumbs useDefaultContainer />
      <PageHeader
        title="About Us"
        subtitle="Simple Process. Guaranteed Results."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque mattis odio sed semper. Donec quis ex porta neque eleifend consequat. Fusce in consequat lectus, sit amet convallis velit. Donec quis odio massa. Cras vel lacus justo. Nulla sapien velit, congue sed velit et, placerat varius massa. Aenean auctor volutpat sodales. Aliquam non placerat magna. Sed feugiat ultricies placerat. Aenean ante nibh, vehicula id consequat in, eleifend sit amet erat. Curabitur volutpat ultricies purus, ut varius sem malesuada et."
        src="/about-us/cover.jpg"
        contactUsId="contact-us"
      />
      {ourProcessData.map((item) => (
        <ServiceRow
          key={item.title}
          className={styles.row}
          title={item.title}
          description={item.description}
          src={item.src}
        />
      ))}
      <div className={styles.row}>
        <div className={styles.contactUs}>
          <ContactUsSection />
        </div>
      </div>
    </div>
  );
};

export default Page;