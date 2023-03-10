import React from 'react';
import ParallaxText from '../ParallaxText/ParallaxText';
import './About.scss';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="about" id='aboutID'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="left">
                            <h2 className='f-os'>About Me</h2>
                            <div className="hr"></div>
                            <div className="content f-po">
                                <p>Hello, my name is Moosa Raza, and I am a full-stack developer with experience in MERN stack development and Shopify theme customization. I have a strong understanding of React, Node.js, Express, and MongoDB, and have used these technologies to build dynamic and responsive web applications. Additionally, I have experience with Shopify platform and can customize existing themes or create new ones to meet the specific needs of my clients. I am always looking for new challenges and opportunities to expand my skills. Let's build something great together.</p>
                                <p>I’m passionate about helping clients to conquer their design challenges and achieve their business goals. I am committed to creating inspiring design solutions, and customizations to help build the growth and success of your company. Whether you have a small or mid-sized business and others.</p>
                                <div className="left-btn">
                                    {/* <Link to="/files/resume.pdf" target="_blank" download><button>DOWNLOAD MY RESUME</button></Link> */}
                                    <a href="#contactID"><button>HIRE ME</button></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }} transition={{ duration: 1, type: 'spring', delay: 0.4 }} className="right">
                            <h3 className='f-os'>About My Skills</h3>
                            <div className="hr"></div>
                            <div className="content">

                                <div className="item">
                                    <h4 className='f-os'>PRIMARY SKILLS ON</h4>
                                    <ul>
                                        <li><img src={require("../../../images/icons/reactJS.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/js.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/html5.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/css.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/mui.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/bootstrap.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/sass.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/nodeJS.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/expressJS.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/mongodb.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/jwt.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/shopifyTheme.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/figma.png")} alt="" /></li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <h4 className='f-os'>SECONDARY SKILLS ON</h4>
                                    <ul>
                                        <li><img src={require("../../../images/icons/jquery.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/Redux.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/mysql.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/tailwind.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/wordpress.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/chrome.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/pinterest.png")} alt="" /></li>
                                        <li><img src={require("../../../images/icons/skype.png")} alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="p-text">
                        <ParallaxText baseVelocity={-5}>full-stack e-commerce portfolio MERN STACK</ParallaxText>
                        <ParallaxText baseVelocity={5}>blogsite real state dashboard commercial</ParallaxText>
                        <ParallaxText baseVelocity={-5}>Shopify Theme Development and customization</ParallaxText>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;