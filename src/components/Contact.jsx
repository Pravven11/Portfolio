import { FaTelegramPlane } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // TODO: integrate with actual email API or backend
      await new Promise((res) => setTimeout(res, 1500));
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.0 }}
          className="text-4xl text-center my-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono">04.</span> Get In Touch
          </h2>
          <h5 className="text-sm md:text-xl text-foreground">
            {" "}
            Have a project in mind or want to collaborate? Feel free to reach
            out..
          </h5>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-card p-8 rounded-2xl shadow-lg"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-6 text-center"
            >
              Send a Message
            </motion.h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {["name", "email", "message"].map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium mb-2"
                  >
                    {field === "name"
                      ? "Your Name"
                      : field === "email"
                      ? "Your Email"
                      : "Your Message"}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Your message..."
                      aria-label="Your message"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={`Your ${field}...`}
                      aria-label={`Your ${field}`}
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 rounded-2xl mt-4"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaTelegramPlane size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
