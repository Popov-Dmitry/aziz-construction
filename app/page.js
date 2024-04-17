import Image from "next/image";
import styles from "./page.module.css";
import { whyChooseUsData, faqData, recentWorksData } from "@/data"
import AdvantageCard from "@/components/advantage-card/AdvantageCard";
import Sns from "@/components/sns/Sns";
import Services from "@/components/services/Services";
import WorkCard from "@/components/work-card/WorkCard";
import Button from "@/components/button/Button";
import ReviewsBlock from "@/components/reviews-block/ReviewsBlock";
import Input from "@/components/input/Input";
import TextArea from "@/components/text-area/TextArea";
import { joinClassNames } from "@/utils/join-class-names";
import AccordionsGroup from "@/components/accordions-group/AccordionsGroup";

const mainInfoBlock = () => (
  <div className={styles.main}>
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <Button className={styles.license} text="License# 1103807" />
        <div className={styles.mainText1}>Diversified General Contracting Services. Unvarying Quality</div>
        <div className={styles.mainDivider} />
        <div className={styles.mainText2}>Innovative Concepts, Creative Design, Flawless Execution</div>
        <div className={styles.mainText3}>We are a team of highly skilled professionals committed to delivering top-notch construction solutions to meet all your needs.</div>
        <div className={styles.mainButtons}>
          <Button text="Call Now" color="black" />
          <Button text="Get A Quote" className={styles.getAQuoteButton} />
        </div>
      </div>
    </div>  
  </div>
);

const aboutBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={joinClassNames(styles.twoColsFlex, styles.aboutContainer)}>
        <div className={styles.leftColumn}>
          <div className={styles.title}>About Us</div>
          <div className={styles.aboutSlogan}>
            <span className={styles.aboutSloganBold}>GENERAL</span> CONTRACTING<br />
            <span className={styles.aboutSloganBold}>SERVICES</span> IN SAN<br />
            <span className={styles.aboutSloganBold}>FRANCISCO</span> BAY AREA
          </div>
          <div className={styles.aboutDescription}>
            Welcome to Aziz Construction, where craftsmanship and family legacy meet. With years of hands-on experience and
            guidance from industry experts, I have established a general contractor business that aims to stand the test of
            time. At Aziz Construction, we believe in creating a lasting reputation for excellence, delivering quality
            workmanship, and building a foundation for future generations.
          </div>
        </div>
        <div className={styles.aboutPhoto}>
          <Image src="/home/aziz.jpeg" alt="" fill />
        </div>
      </div>
    </div>
  </div>
);

const whyChooseUsBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.subtitle}>Why Choose Us</div>
      <Sns size="lg" className={styles.sns} />
      <div className={styles.twoColsGrid}>
        {whyChooseUsData.map((item) => (
          <AdvantageCard {...item} />
        ))}
      </div>
    </div>
  </div>
);

const servicesBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Services />
    </div>
  </div>
);

const faqBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.twoColsFlex}>
        <div className={styles.leftColumn}>
          <div className={styles.title}>Ask Questions</div>
          <div className={styles.faqSubtitle}>Frequently Asked Questions</div>
          <AccordionsGroup data={faqData} />
        </div>
        <div className={styles.faqPhoto}>
          <Image src="/home/faq.jpeg" alt="" fill />
        </div>
      </div>
    </div>
  </div>
);

const recentWorksBock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Our Gallery</div>
        <div className={styles.subtitle}>Recent Works</div>
      </div>
      <div className={styles.recentWorks}>
        {recentWorksData.map((item) => (
          <WorkCard {...item} />
        ))}
      </div>
    </div>
  </div>
);

const clientsFeedbackBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Clients Feedback</div>
        <div className={styles.subtitle}>Our Clients Reviews</div>
      </div>
      <div className={styles.twoColsFlex}>
        <iframe className={styles.video} frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Full House Renovation Testimonial" src="https://www.youtube.com/embed/uop_Ps-PBlA?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fazizconstruction.com&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-6="true"></iframe>
        <iframe className={styles.video} frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Kitchen Remodel Testimonial in  San Jose" src="https://www.youtube.com/embed/vKwVM8xMsW8?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fazizconstruction.com&amp;widgetid=3" id="widget4" data-gtm-yt-inspected-6="true"></iframe>
      </div>
      </div>
  </div>
);

const reviewsBlock = () => (
  <div className={styles.wrapper}>
    <ReviewsBlock />
  </div>
);

const contactUsBlock = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={joinClassNames(styles.twoColsFlex, styles.contactUsWrapper)}>
        <div className={styles.leftColumn}>
          <div className={styles.contactUsTitle}>Contact Us</div>
          <div className={styles.subtitle} style={{ marginTop: -12 }}>Get A Quote</div>
          <form className={styles.contactUsForm}>
            <div className={styles.contactUsRow}>
              <Input className={styles.contactUsInput} placeholder="Name" />
              <Input className={styles.contactUsInput} placeholder="Email" />
            </div>
            <div className={styles.contactUsRow}>
              <Input className={styles.contactUsInput} placeholder="Phone" />
              <Input className={styles.contactUsInput} placeholder="Your Address" />
            </div>
            <TextArea className={styles.contactUsTextArea} placeholder="Message" />
            <Button className={styles.contactUsButton} text="Send Message" type="submit" />
          </form>
        </div>
        <div className={styles.faqPhoto}>
          <Image src="/home/contact-us.jpeg" alt="" fill />
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className={styles.home}>
      {mainInfoBlock()}
      {aboutBlock()}
      {whyChooseUsBlock()}
      {servicesBlock()}
      {faqBlock()}
      {recentWorksBock()}
      {clientsFeedbackBlock()}
      {reviewsBlock()}
      {contactUsBlock()}
    </div>
  );
}
