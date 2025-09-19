import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnnbradn");
  if (state.succeeded) {
    console.log(<p>Thanks for joining!</p>);
  }

  return (
    <form
      data-aos="fade-down"
      className="bg-card-bg flex flex-col gap-6 rounded-xl p-10 shadow-lg"
      onSubmit={handleSubmit}
      action={"https://formspree.io/f/mnnbradn"}
      method="POST"
    >
      <div className="form-group">
        <label htmlFor="email" className="label-links">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          id="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="contact-links"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="label-links">
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          placeholder="What's this about?"
          className="contact-links"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="label-links">
          Message
        </label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Your Message here.."
          className="contact-links"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-primary text-background hover:bg-primary-hover cursor-pointer rounded-xl px-6 py-3 font-semibold shadow-lg transition duration-500 hover:scale-105"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>

      {state.succeeded && (
        <p className="text-accent mt-2 text-center font-semibold">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
