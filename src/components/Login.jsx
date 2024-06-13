function Login() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Contact Arpita Singh
      </h1>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">
          I'd love to hear from you! Whether you have a question about my
          services, need a consultation, or just want to say hello, feel free to
          reach out. You can contact me through the form below, or via email or
          phone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-lg mb-2">
              <strong>Email:</strong> prabhashk408@gmail.com
            </p>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> 9860618628
            </p>
            <p className="text-lg mb-2">
              <strong>Address:</strong> Flat no. 108, meera apartment 2, samsan
              nagar, Near sevadham hospital, ta-maval, Talegaon Dhabade ,Mawal,
              District: Pune, Maharashtra,410507
            </p>
            <p className="text-lg mb-4">
              <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00
              PM
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <p className="text-lg mb-2">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/arpitasingh-/"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/arpitasingh-/
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="message"
              name="message"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              Q: How can I hire you for a project?
            </h3>
            <p className="text-lg">
              A: You can get in touch with me through the contact form above, or
              send me an email at arpita@example.com. We'll discuss your project
              requirements and how I can help you achieve your goals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Q: What social media platforms do you specialize in?
            </h3>
            <p className="text-lg">
              A: I specialize in managing campaigns on Facebook, Instagram,
              Twitter, LinkedIn, and Pinterest. However, I am flexible and can
              adapt to other platforms as needed.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Q: Do you offer long-term contracts?
            </h3>
            <p className="text-lg">
              A: Yes, I offer both short-term and long-term contracts based on
              your business needs. Long-term contracts often provide better
              results as they allow for continuous optimization and strategy
              adjustments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
