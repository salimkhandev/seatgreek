import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import appStore from "../../public/images/getonplay.png"; // Replace with actual App Store image
import googlePlay from "../../public/images/getonplay1.png"; // Replace with actual App Store image
import '../style/Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="download-app">
                    <h4 className="bolddown">Download the App</h4>
                    <div class="input-container">
                        
                        <input type="text" placeholder="Enter phone number to send a link" />
                        <button>
                            <GoArrowRight className="icon" />
                        </button>
                    </div>


                    <p className="message">Message and data rates may apply.</p>
                    <div className="store-buttons">
                        <Image
                            src={googlePlay}
                            alt="Get it on Google Play"
                            width={180}  
                            height={60}  
                            />
                        <Image
                            src={appStore}
                            alt="Download on the App Store"
                            width={180}
                            height={60}
                        />
                    </div>

                </div>
                <div className="links ">
                    <div>
                        <strong>Resources</strong>
                        <ul>
                            <li>About</li>
                            <li>Press</li>
                            <li>Jobs</li>
                            <li>Inclusion</li>
                            <li>Digital Accessibility</li>
                            <li>SeatGeek Blog</li>
                            <li>Help & Support</li>
                            <li>Sell on SeatGeek</li>
                            <li>SeatGeek Enterprise</li>
                            <li>SeatGeek Creators</li>
                        </ul>
                    </div>
                    <div>
                        <strong >Social</strong>
                        <ul>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>TikTok</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Developers</strong>
                        <ul>
                            <li>Platform</li>
                            <li>Developer Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <img src="/images/seatgeekfooter.png" width={60} height={30} alt="" />
                <div className="copyright" > &copy; 2024 SeatGeek. All rights reserved.</div> 
                <div className="settings">
                    <img src="/images/usaflag.png"   height = "20" width = "20"  alt="" /> <span>USD</span>
                    <img src="/images/privacy.png   " height="60" width="40" alt="" /> 
 <span>Your privacy choices</span>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Site map</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
