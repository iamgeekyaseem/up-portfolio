import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Left: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src= 'src\assets\image.png'
            href= 'src\assets\image.png'
            alt="Priyanka"
            className="rounded-2xl shadow-xl w-72 h-100 object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <RevealOnScroll>
          <div className="w-full  text-center md:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-200 bg-clip-text text-transparent leading-tight">
              Hi, I'm Uddandarao Priyanka
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-4xl text-justify">
              Welcome to my personal blog, a digital space where I share insights,
              discoveries, and reflections from my journey as an academician and a
              researcher. I'm a dedicated scholar
              passionate about exploring the intersections of Photosynthetic
              chalcogenide nanobiohybrids for wastewater treatment and production
              of value added products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
