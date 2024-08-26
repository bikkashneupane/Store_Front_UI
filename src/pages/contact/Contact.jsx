const Contact = () => {
  return (
    <div className="text-gray-700 dark:text-gray-300 text-sm">
      <div className="mx-auto max-w-5xl px-10 py-10">
        <h1 className="text-xl font-bold mb-6 text-center tracking-widest font-mono dark:text-gray-200">
          CONTACT US
        </h1>
        <section className="mb-10">
          <h2 className="text-base font-semibold mb-3">Visit Us</h2>
          <p className="mb-4">
            Sydney Showroom <br />
            Mon-Fri 10:00 AM - 4:00 PM <br />
            Warehouse 19 <br />
            14B Queens Rd <br />
            Wentworthville NSW 2145
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-base font-semibold mb-3">Call Us</h2>
          <p className="mb-4">
            (02) 9876 5432 <br />
            Mon-Fri 10:00 AM - 4:00 PM
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-base font-semibold mb-3">Email Us</h2>
          <p className="mb-4">
            If you wish to send us a message, please use the form below or email
            us at{" "}
            <a
              href="mailto:vikiasmy-watches@gmail.com"
              className="text-teal-600 hover:underline"
            >
              vikiasmy-watches@gmail.com
            </a>
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-base font-semibold mb-3">Send Us a Message</h2>
          <form className="space-y-6 text-sm">
            <div>
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gray-50 dark:text-gray-800"
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
          <p>1300 294 328 - Business number hosted by Vikiasmy Watches.</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
