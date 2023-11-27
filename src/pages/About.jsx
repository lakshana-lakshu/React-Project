
import React from 'react';
import AboutImg1 from "../images/pic1.jpg";
import AboutImg2 from "../images/pic11.jpg";
import AboutImg3 from "../images/pic12.jpg";
import AboutImg4 from "../images/pic14.jpg";
const About = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-center">
      <div className="col-span-1 sm:col-span-2">
        <h1 className="text-4xl font-extrabold mb-8">About Us</h1>
        <p className="mb-5">
        When you choose to give, you may not realize that donating to charity will do more than just help your favourite cause, giving can also provide you with many personal benefits. Whether you choose to donate to charities supporting people living in poverty, advocating to protect the environment, helping animals in need, or addressing other global or local problems, charities need your help to continue their selfless initiatives, but giving can feel just as good as receiving!
        </p>
        <p className="mb-5">
        Undoubtedly, you can donate to some poor people on the street but that would not help because you need to make sure that money that goes as donation must be distributed properly. Hence, you should donate through an organization that specializes in helping the poor.
        Undoubtedly, there could be thousands of such organizations but you should be able to find the right and authentic organization so as to ensure that the money that goes for donation riches to the poor.
        </p>
        <p className="mb-5">
        It is always better to give than to receive. When we help others, we not only make their lives better, but we also make the world a better place. Helping those in need not only benefits them, but it also benefits us. It feels good to know that we are making a difference in someone’s life. There are many ways that we can help those who are less fortunate than us. We can volunteer our time at a local soup kitchen or food bank. We can donate clothes or food to a local shelter. We can also simply lend a listening ear to someone who needs someone to talk to. We can help the poor, by providing things such as by giving them money, food, clothes, or shelter. Whatever way we choose to help, we should do so with a loving heart. We should also try to help them in other ways, such as by providing them with education or job opportunities. By helping the poor, we not only improve their lives but also make the world a better place.
        </p>
      </div>

      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <img src={AboutImg1} className="hover:scale-110 transition duration-300 ease-in-out" alt="Louvre" />
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <img src={AboutImg2} className="hover:scale-110 transition duration-300 ease-in-out" alt="Louvre" />
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <img src={AboutImg3} className="hover:scale-110 transition duration-300 ease-in-out" alt="Louvre" />
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover">
        <img src={AboutImg4} className="hover:scale-110 transition duration-300 ease-in-out" alt="Louvre" />
      </div>
        <p className="mb-5">
        It is always better to give than to receive. When we help others, we not only make their lives better, but we also make the world a better place. Helping those in need not only benefits them, but it also benefits us. It feels good to know that we are making a difference in someone’s life. There are many ways that we can help those who are less fortunate than us. We can volunteer our time at a local soup kitchen or food bank. We can donate clothes or food to a local shelter. We can also simply lend a listening ear to someone who needs someone to talk to. We can help the poor, by providing things such as by giving them money, food, clothes, or shelter. Whatever way we choose to help, we should do so with a loving heart. We should also try to help them in other ways, such as by providing them with education or job opportunities. By helping the poor, we not only improve their lives but also make the world a better place.
        </p>
        <p className="mb-5">
        There are many ways that people can help those who are less fortunate. One way is to donate money to charities that help the poor. Another way is to volunteer at soup kitchens or food banks. This allows people to directly help those in need by providing them with food and other necessities. People can also advocate for policies that will help the poor, such as increasing funding for social welfare programs. By helping the poor, we can make society a better place for everyone.
        No matter what our personal circumstances may be, we can all do something to help those who are less fortunate than ourselves. Whether it’s volunteering our time, donating money or simply offering a friendly smile, every act of kindness makes a difference. So let’s make a commitment to helping the poor and needy whenever we can. Not only will it make the world a better place, but it will also enrich our own lives in the process. There are a lot of ways to help the poor, and no one solution is perfect.
        But if we all work together, we can make a difference. Every little bit helps, whether it’s donating money to charity, volunteering your time at a local soup kitchen, or simply spreading awareness about poverty and its effects on people’s lives. Let’s commit to doing our part to help those in need and make the world a better place for everyone.
        </p>
        <p className="mb-5">
        The current state of poverty

        There is no question that the current state of poverty is unacceptable. Over 22% of the world’s population lives in poverty, according to the World Bank. That means over 1.6 billion people are struggling to meet their basic needs on a daily basis. The causes of poverty are complex and multi-dimensional. They include factors like unequal distribution of resources, conflict, and natural disasters. But one of the most important drivers of poverty is simply lack of opportunity. Too many people are trapped in a cycle of poverty because they lack the skills or education to get decent jobs.
        In order to address poverty, we need to address these underlying causes. We need to create more opportunities for people to get out of poverty and into decent work. This means investing in education and training, promoting economic growth, and tackling inequalities.
        There are lots of ways we can help reduce poverty. We can donate money to charitable organizations that are working to tackle the issue. We can also lobby our governments to do more to support those living in poverty. But perhaps the most important thing we can do is raise awareness about the issue and show solidarity with those who are affected by it.
        </p>
    </div>
  );
};

export default About;
