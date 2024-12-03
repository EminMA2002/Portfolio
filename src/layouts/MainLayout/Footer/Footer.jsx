import React from 'react'
import styles from "./Footer.module.css"
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.FooterTitleAndBTN}>
            <div className={styles.FTitle}>Let's Create Something</div>
            <div className={styles.FTitleSecBTN}>
                <div className={styles.FTitleSec}>Together</div>
                <div className={styles.FLine}></div>
                <button className={styles.FBTn}>Get In Toucn! <HiArrowSmallRight /></button>
            </div>
        </div>
        <div className={styles.FSocials}>
            <Link to={"https://www.instagram.com/e_mmmdv/"} className={styles.FSocial}>Instagram <HiArrowUpRight /> </Link>
            <Link to={"https://www.behance.net/emmmdv"} className={styles.FSocial}>Behance <HiArrowUpRight /></Link>
            <Link to={"https://www.linkedin.com/home?originalSubdomain=tr"} className={styles.FSocial}>Linkedin <HiArrowUpRight /></Link>
        </div>
    </div>
  )
}

export default Footer;