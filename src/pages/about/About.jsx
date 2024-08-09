import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-gray-700 dark:text-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-bold mb-6 dark:text-gray-300">About Us</h1>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-300">
            Quality Watches at Affordable Prices
          </h2>
          <p className="mb-4">
            Our mission is simple: to bring you the top global brands in watches
            at affordable prices. Vikiamy's is the ideal shopping destination
            for anyone looking for a new watch or a special gift. With over ten
            years of experience, we have served hundreds of thousands of
            satisfied customers.
          </p>
          <p className="mb-4">
            We offer an incredible range of watches, stocking hundreds of models
            from more than 40 brands. From everyday watches to premium choices
            like Seiko, Ball, Baume & Mercier, and Frederique Constant, all our
            watches are authentic and brand new.
          </p>
          <p className="mb-4">
            As authorized stockists of quality watch brands, you can be
            confident that you're getting the real deal when you purchase from
            us. We stay on top of new products in the market, bringing you the
            latest trends. Whether you want the newest style or a classic watch,
            you'll find what you need here.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-300">
            An Australian Retailer, Born from a Genuine Love for Watches
          </h2>
          <p className="mb-4">
            Ten years ago, we saw a demand in the Australian watch market. We
            knew that watch-lovers needed a greater range of online offerings at
            better prices. Vikiamy's was created so customers like ourselves
            could find a large selection of quality watches at competitive
            prices from the convenience of their own homes.
          </p>
          <p className="mb-4">
            We now offer an extensive range of well-curated pieces, from men's
            and women's watches to our latest statement jewelry collection,
            including diamond earrings, rings, and bracelets. Our original
            passion for watches keeps us ticking along every day.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-300">
            Taking the Stress Out of Buying
          </h2>
          <p className="mb-4">
            We understand that investing in a watch is a big decision, whether
            it's for everyday wear or special occasions. That's why we offer
            comprehensive after-sale Customer Service, helping you maintain your
            watch and keep it in top condition.
          </p>
          <p className="mb-4">
            You can also return your purchase easily within 30 days, no
            questions asked. This means you don’t have to stress about whether
            your chosen watch will suit your style. If it doesn’t, simply send
            it back! Check out the full details in our Returns Policy.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-300">
            Our Commitment to You: Top Customer Service
          </h2>
          <p className="mb-4">
            We're fast and reliable. You get same-day, free shipping on any
            watch purchase within Australia. We take care to ensure that all our
            watches are well-packed, so you can be assured that your purchase
            will get to you safely.
          </p>
          <p className="mb-4">
            If you have any product or order issues, we're here to help. You can
            reach us easily through our Customer Support Service by phone or
            email.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-300">
            Meet the Team
          </h2>
          <p className="mb-4">
            <strong>Bikash</strong> is our Director, managing our buying
            requirements and ongoing relationships with suppliers. His goal is
            to ensure you enjoy the thrill of purchasing a new watch with the
            best experience possible. His favorite watch? Ball Marvelight.
          </p>

          <p className="text-teal-600 font-semibold my-20">
            Looking for inspiration? Check out our best-selling watches to find
            a style you’ll love.{" "}
            <Link to="/products" className="text-purple-600 hover:underline">
              Shop now.
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
