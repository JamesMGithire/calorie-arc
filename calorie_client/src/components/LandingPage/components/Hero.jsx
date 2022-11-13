import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
export default function Hero() {
  return (
    <Section id="home">
      <div className="hero-background">
        <img src={hero} alt="Background Image" />
      </div>
      <div className="content">
        <div className="info">
          <h2>CALORIE-ARC</h2>
          <p>
            GOOD HEALTH STARTS WITH WHAT YOU EAT
          </p>
          <em>
            Want to eat more mindfully?
            Track meals, learn about your habits, 
            and reach your desired goals with
             Calorie-Arc. 

          </em>
          <button>GET STARTED</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  .hero-background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 120%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 25vh;
        left: 15vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 40%;
      right: 10%;
      padding-bottom:3rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: white;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      p {
        color: lightgreen;
        font-weight: bold;
        font-size: 2rem;
      }
      em {
        margin-top:-2rem;
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        font-weight: bold;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: black;
        border-radius: 50px;
        border-style: dotted;
        border-width: thick;
        border-color: lightgreen;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          border-style: dotted;
          border-width: thick;
          border-color: black;
          border-radius: 50px;
          background-color: lightgreen;
          color: black;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
