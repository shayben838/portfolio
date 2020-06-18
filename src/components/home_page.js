import React, { useEffect } from "react";
import "../styles/main_style.css"


import Aos from "aos"
import "aos/dist/aos.css"
import Animate from "./animation";
import Skils from "./skils/skils";

const HomePage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])
    const about_me = ""
    return (
        <div>
            <div id="wrap_home_page" className="jumbotron">
                <div class="container" >
                    <Animate />
                    <h1 className="home_page-title animated bounceInLeft  delay-.9s" data-sr-id="4" >
                        Hello, my name is {" "}
                        <span className="primary-color-text">Shay Ben Shimol</span>
                        <br />and I'm a Full-Stack Developer.</h1>
                    <div className="d-flex">
                        <div className=" d-flex justify-content-center justify-content-sm-start  animated fadeInDown  delay-.9s" >
                            <a className="button_home" href="#skills"> Skills </a>
                        </div>
                        <div className="ml-2 d-flex justify-content-center justify-content-sm-start  animated fadeInDown  delay-.9s" >
                            <a className="button_home" href="#about"> Who am i? </a>
                        </div>
                        <div className="ml-2 d-flex justify-content-center justify-content-sm-start  animated fadeInDown  delay-.9s" >
                            <a className="button_home" href="#contact"> Contact </a>
                        </div>
                    </div>
                </div>
            </div>


            <Skils />


            {/* ABOUT */}

            <section id="about" className="p-0">
                <div className="container ">
                    {/* <h2 style={{ letterSpacing: ".5rem" }} data-aos="fade-left" id="about_title" className="lead about_title lett_spec ">Who am I</h2> */}
                    <h2 className="about_title ">Who am i? </h2>
                    <div data-aos="fade-right" data-aos-delay="100" className="Wrap_text row ">

                        <p data-aos="fade-left" className="text_about">
                            Hello, I am Shay, a Full Stack Web Developer, from Tel Aviv, Israel, specialized in End to End Development.
                        <br></br>
                            <br></br>

Despite my experience or preferences, I always try to keep up to date with other programming languages and frameworks so that I can keep improving my knowledge and skills. I believe in always choosing the best technology for the the job, even if we need to get out of our comfort zone.
<br></br>
                            <br></br>

I have a strong focus on software quality and clean code.

<br></br>
                            <br></br>

I am eager to learn new things, Passionate about tech and programming in general, I have a big interest in everything related to Front-end Back-end technology.
<br></br>
                            <br></br>

I believe in tech and programming as a way to improve people lives and the focus should always be in the people!

    </p>
                        {/* <Animate /> */}


                        <div className="mt-5 d-flex justify-content-center justify-content-sm-start  " >
                            <a id="view" className="button_about" target="_blank" href="https://drive.google.com/file/d/1LMCy1ZknL_Gwnt4M0QsotZ4f6-v3QAGd/view?usp=sharing"> View Resume </a>

                        </div>


                    </div>
                    {/* <div className="ml-5 d-flex justify-content-center justify-content-sm-start  " data-aos="fade-up" >
                        <a className="button_about" target="_blank" href="https://drive.google.com/file/d/1LMCy1ZknL_Gwnt4M0QsotZ4f6-v3QAGd/view?usp=sharing"> View Resume </a>
                    </div> */}

                </div>
            </section>




            {/* Project */}
            <div style={{ overflow: "hidden" }}>
                <div className="container">
                    <div className="wrap_project ">
                        <h2 className="project_title ">Projects</h2>

                        {/* PROJECT 1 */}
                        <div className=" row m-0  mb-1 mb-md-5">
                            <div className="col-lg-4 col-sm-12 pb-2 " data-aos="fade-right">
                                <h4 className="project_name" >MeetArtist</h4>
                                <p className="par_project" >A Full-Stack face-recognition web application made using React.js as the front-end framework. Node.js and Express.js are used for the RESTful API back-end server. The web app implements face-recognition with Clarifai API image recognition services. Moreover users information and hash passwords are being stored securely on a PostgreSQL Database.</p>
                                <div className="d-flex">
                                    <div className=" d-flex justify-content-center justify-content-sm-start  " data-aos="fade-up" >
                                        <a className="button_Project" target="_blank" href="https://infallible-agnesi-f06595.netlify.app/"> See Live </a>
                                    </div>
                                    {/* <div className="ml-2 d-flex justify-content-center justify-content-sm-start  " data-aos="fade-up" >
                                        <a className="button_Project" style={{ border: "none" }} target="_blank" href="https://drive.google.com/file/d/1LMCy1ZknL_Gwnt4M0QsotZ4f6-v3QAGd/view?usp=sharing"> Source Code </a>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-8 col-sm-12 wrap_iamge_project">
                                <a target="_blank" href="https://infallible-agnesi-f06595.netlify.app/">
                                    <div className="mt-5  meet_artist image_project " data-aos="fade-left">

                                    </div>

                                </a>
                            </div>

                        </div>
                        {/* PROJECT 2 */}

                    </div>
                </div>

            </div>
            {/* FOOTER */}
            <div className="footer">
                <section id="contact">
                    <h2 data-aos="fade-right" className="about_title p-5">CONTACT</h2>
                    <p data-aos="fade-left" className="lead secondery_title">Make me an offer I can't refuse</p>
                    <div className=" d-flex justify-content-center   " data-aos="fade-up" >
                        <a style={{ fontWeight: "bold" }} className="button_about" target="_blank" href="mailto: shayben838@gmail.com"> Send Now </a>

                    </div>
                </section>

                <section id="footer">
                    <div className="wrap_angle" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <a href="#wrap_home_page">
                            <i className="angle_up fas fa-angle-double-up"></i>
                        </a>
                    </div>
                    <div className="mt-3 wrap_icos">
                        <a href="https://www.linkedin.com/in/shay-ben-shimol-972338196/" target="_blank">  <i href="https://www.linkedin.com/in/shay-ben-shimol-972338196/" className="icon_footer mr-2 fab fa-linkedin"></i></a>

                        <a href="https://github.com/shayben838" target="_blank">    <i className="icon_footer ml-2 fab fa-github-square"></i></a>
                    </div>

                    <div className="line"></div>
                    <h6 className="footer_dev" >© 2020 - Developed  by Shay Ben Shimol</h6>

                </section>

            </div>








        </div >
    )
}
export default HomePage;
