import React from "react";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroVideo autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default Hero;
