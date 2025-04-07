import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-200 bg-clip-text text-transparent leading-tight">
            Connect and Collaborate:
          </h2>
          <p className="text-gray-400 text-justify text-lg mb-8 max-w-lg mx-auto">
            I value the opportunity to connect with fellow scholars,
            researchers, and enthusiasts who share a passion for knowledge and
            discovery. Whether you have questions, insights to share, or
            potential collaborations to explore, I invite you to reach out via
            email at uddandaraopriyanka@gmail.com or connect with me on
            LinkedIn. Thank you for visiting, and I look forward to engaging in
            meaningful conversations and collaborations with you.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/uddandarao-priyanka-phd-039596177/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 256, 0.4)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
