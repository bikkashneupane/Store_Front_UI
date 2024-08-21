const Contact = () => {
  return (
    <div className="text-gray-700 dark:text-gray-300">
      <div className="mx-auto max-w-5xl px-10 py-10">
        <h1 className="text-2xl font-bold mb-6 text-center tracking-widest font-mono dark:text-gray-200">
          CONTACT US
        </h1>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
          <p className="mb-4 text-sm md:text-base">
            Sydney Showroom <br />
            Mon-Fri 10:00 AM - 4:00 PM <br />
            Warehouse 19 <br />
            14B Queens Rd <br />
            Wentworthville NSW 2145
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Call Us</h2>
          <p className="mb-4 text-sm md:text-base">
            (02) 9876 5432 <br />
            Mon-Fri 10:00 AM - 4:00 PM
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Email Us</h2>
          <p className="mb-4 text-sm md:text-base">
            If you wish to send us a message, please use the form below or email
            us at{" "}
            <a
              href="mailto:support@vikiamy.com"
              className="text-teal-600 hover:underline"
            >
              support@vikiamy.com
            </a>
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-6 text-sm md:text-base">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
            >
              Send Message
            </button>
          </form>
        </section>
        <section>
          <p className="text-sm">
            1300 294 328 - Business number hosted by Vikiasmy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
