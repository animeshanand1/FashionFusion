import React from 'react'
import styles from './footer.module.css'
function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles["footerSection"]}>
                <div className={styles["logoSection"]}>
                    <div className={styles["div-logo-container"]}>
                        <img
                            loading="lazy"
                            src=""
                            className={styles.logo}
                        />
                        <div className={styles["companyName"]}>Fashion Fusion</div>
                    </div>
                    <div className={styles["contactInfo"]}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a8a6027f5a3b146991338fc103c222620ae9a6ccdee8fe30385d6b9944f6a49?apiKey=efcdc6923779477789211f52a6096958&"
                            className={styles["contactIcon"]}
                        />
                        <div className={styles["address"]}>
                            110010 Gurugram,Haryana,
                            <br />
                           India
                        </div>
                    </div>
                    <div className={styles["contactInfoContainer"]}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f308e8c9d7a5e53718b7caf3281bfe01e5c2afed2a3e45660da1590b6381cf0?apiKey=efcdc6923779477789211f52a6096958&"
                            className={styles["img"]} />
                        <div className={styles["web-email"]}>fashionfusion@gmail.com</div>
                    </div>
                    <div className={styles["div-phone"]}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/434f44efbea59b9ccf609b3a9df9206d404130c4c3a87627105c6a0aef4aed2e?apiKey=efcdc6923779477789211f52a6096958&"
                            className={styles["img"]}
                        />
                        <div className={styles["phone-number"]}>+91 8209214512</div>
                    </div>
                </div>
                <div className={styles["companySection"]}>
                    <div className={styles["sectionTitle"]}>Company</div>
                    <div className={styles["navigationLinks"]}>
                        Our Team
                        <br />
                        Contact Us
                        <br />
                        Portfolio
                    </div>
                </div>
                <div className={styles["social-media-conatiner"]}>
                    <div className={styles["social-media-heading"]}>Our Social Media</div>
                    <div className={styles["social-media-list"]}>
                        Instagram
                        <br />
                        Facebook
                        <br />
                        Twitter
                    </div>
                </div>
                <form className={styles["div-subscribe"]}>
                    <div className={styles["div-subscribe-heading"]}>Join a Newsletter</div>
                    <input type='email' className={styles["subscriber-email"]} placeholder='Enter Your Email' />
                </form>
                <button className={styles["subscriber-email-send-btn"]}>Send</button>
            </div>
        </div>


    )
}

export default Footer