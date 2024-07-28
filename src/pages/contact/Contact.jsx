const Contact = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center tracking-widest font-mono">
          CONTACT
        </h1>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <p className="mb-4">
            Sydney Showroom <br />
            Mon-Fri 10:00 AM - 4:00 PM <br />
            Warehouse 19 <br />
            14B Queens Rd <br />
            Wentworthville NSW 2145
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Call Us</h2>
          <p className="mb-4">
            (02) 9876 5432 <br />
            Mon-Fri 10:00 AM - 4:00 PM
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Email Us</h2>
          <p className="mb-4">
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
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
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
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
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
                rows={10}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
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
