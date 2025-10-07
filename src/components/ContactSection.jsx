import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";

export default function ContactSection() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Please send your message to the Telegram ID or email.");
  }

  return (
    <section id="contact" className="bg-secondary/30 relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Get In<span className="text-primary"> Touch</span>
        </h2>

        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
          Have a project in mind or want to collaborate? feel free to reach out.
          I'm always open to discussing new opprtunities.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>

            <div className="justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div className="">
                  <h4>Email</h4>
                  <a
                    href="mailto:sobhanasadi703@gmail.com"
                    className="text-muted-foregonud hover:text-primary transition-colors"
                  >
                    sobhanasadi703@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div className="">
                  <h4>Phone</h4>
                  <a
                    href="tel:+98 936 257 2474"
                    className="text-muted-foregonud hover:text-primary transition-colors"
                  >
                    +98 936 257 2474
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div className="">
                  <h4>Telegram</h4>
                  <a
                    href="https://t.me/SobhanAsadi"
                    className="text-muted-foregonud hover:text-primary transition-colors"
                  >
                    https://t.me/SobhanAsadi
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="mb-4 font-medium">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" target="_blank" className="">
                  <Linkedin />
                </a>
                <a href="#" target="_blank" className="">
                  <Twitter />
                </a>
                <a href="#" target="_blank" className="">
                  <Instagram />
                </a>
                <a href="#" target="_blank" className="">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-xs">
            <h3 className="mb-3.5">Send a Message</h3>
            <form action="#" className="space-y-6" onSubmit={handleSubmit}>
              <div className="">
                <label
                  className="mb-2 block text-sm font-medium"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Sobhan Asadi..."
                  className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                />
              </div>

              <div className="">
                <label
                  className="mb-2 block text-sm font-medium"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="sobhanasadi703@gmail.com..."
                  className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                />
              </div>

              <div className="">
                <label
                  className="mb-2 block text-sm font-medium"
                  htmlFor="name"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello, I,d to talk about..."
                  className="border-input bg-background focus:ring-primary w-full resize-none rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button flex w-full cursor-pointer items-center justify-center gap-2",
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
