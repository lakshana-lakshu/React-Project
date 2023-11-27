
//Home.jsx
import DonationForm from "../components/DonationForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DonateImg from "../images/pic14.jpg";
import { useState } from "react";
import { useContext } from "react";
//import DonateImg from "C:\Users\Rakshitha\Downloads\donation-site-stripe-reactjs-main\donationapp\src\images\pic9.jpg";
const Home = () => {
  return (
    <>
      <Header/>
      <div className="grid grid-cols-2 xl:grid-cols-2 gap-10 place-content-center" style={{marginTop:"100px"}}>
        <div
          className="bg-cover bg-no-repeat bg-center rounded-lg hidden xl:block"
          style={{
            backgroundImage: `url(${DonateImg})`,
          }}
        ></div>
        <div className="text-center mx-auto max-w-screen-sm">
          <h1 className="text-4xl font-extrabold mb-8 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500">Donate to Our Community</h1>
          <p className="mb-5">
          THE SMALLEST ACT OF KINDNESS IS WORTH MORE THEN THE GRANDEST INTENTION!!!!
            <br className="hidden sm:block" />
            YOUR CONTRIBUTION , HOWEVER BIG OR SMALL , IS VALUABLE FOR OUR FUTURE!.
          </p>
          <DonationForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
