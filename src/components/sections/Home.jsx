import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative "
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-200 bg-clip-text text-transparent leading-tight">
            Hi, I'm Uddandarao Priyanka
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-justify">
            Welcome to my personal blog, a digital space where I share insights,
            discoveries, and reflections from my journey as an academician and a
            researcher. I'm Dr. UDDANDARAO PRIYANKA, a dedicated scholar
            passionate about exploring the intersections of Photosynthetic
            chalcogenide nanobiohybrids for wastewater treatment and production
            of value added products.
          </p>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-justify">
            About Me: As an academician and researcher with a profound
            commitment to advancing knowledge in biotechnology, I've had the
            privilege of immersing myself in the pursuit of understanding and
            discovery. I am an environmental engineer with my research focusing
            on nanotechnology for wastewater treatment. I received a doctorate
            from National Institute of Technology Karnataka, Surathkal, India in
            Chemical Engineering in the year 2019. In addition I have received
            Master's from Pondicherry Central University, Puducherry, India in
            2014 and Bachelor's from in the Department of Biotechnology at
            Andhra University, Visakhapatnam, Andhra Pradesh, India in 2012.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 256, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 256, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
