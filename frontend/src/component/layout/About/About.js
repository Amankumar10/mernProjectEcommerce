import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
 <div>
      
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "30vmax", height: "30vmax", margin: "2vmax 0" }}
              src="https://shirrtup.com/wp-content/uploads/2021/08/about-us.jpg"
              alt="Founder"
            />
            
            
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <Typography>ShirrtUp</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            ShirrtUp is founded with an essence of vision to provide the best quality products with creative designs with pocket-friendly and best budget. It’s all about giving our customers a delightful experience of shopping in Shirrtup.com

The prime focus is on youngsters who have the ability to change everything by their thoughts, perception, vision, and action.  Shirrtup is about expressing.

            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
