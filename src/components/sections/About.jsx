import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Sass",
    "Figma",
    "Photoshop",
    "Pro Create",
    "UI/UX Design",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "RESTful APIs",
    "SQL",
    "Python",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-4xl mx-auto text-justify">
            As an academician and researcher with a profound commitment to
            advancing knowledge in biotechnology, I've had the privilege of
            immersing myself in the pursuit of understanding and discovery. I am
            an environmental engineer with my research focusing on
            nanotechnology for wastewater treatment.
          </p>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a web developer based in the India. I specialize in building
              websites and web applications using modern web technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={skill}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-row-1 md:grid-row-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Education
              </h3>
              <ul className="list-disc list-outside text-gray-300 space-y-2 ">
                <li>
                  <strong>Ph.D Chemical Engineering 2019 </strong> - National
                  Institute of Technology Surathkal, Karnataka, India
                </li>
                <li>
                  <strong>M.Tech Chemical Engineering 2014</strong> -
                  Pondicherry Central University, Puducherry, India
                </li>
                <li>
                  <strong>B.Tech Biotechnology Engineering 2012</strong> -
                  Andhra University, Visakhapatnam, Andhra Pradesh, India
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Awards received:
              </h3>
              <div className="space-y-4 text-gray-300 ">
                <div>
                  <p>
                    <ul className="list-disc list-outside text-gray-300 space-y-2">
                      <li>
                        Water Advanced Research and Innovation (WARI) Funded by
                        Department of Science and Technology, Govt. of India
                        (DST), University of Nebraska-Lincoln (UNL), Daugherty
                        Water for Food Institute (DWFI) and Indo-U.S. Science
                        and Technology Forum (IUSSTF) for a period of 6 months
                        from May1st to November 1st, 2018
                      </li>
                      <li>
                        International Travel Grant for Sensors and
                        Nanotechnology Summer Course funded by Department of
                        Science and Technology-Science and Engineering Research
                        Board at TECHNION Israel Institute of Technology, Israel
                        for a period of 2 months from July 26th to August 24th,
                        2017
                      </li>
                      <li>
                        Summer Research Fellowship Programme: funded by
                        Department of Science and Technology in collaboration
                        with Indian Academy of Sciences, Bangalore at National
                        Center for Disease Control, Delhi for a period of 2
                        months from 1st May to 1st July, 2011
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Publications:
              </h3>
              <div className="space-y-4 text-gray-300 ">
                <div>
                  <p>
                    <ul className="list-decimal list-outside text-gray-300 space-y-2">
                      <li>
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>
                        , Piet N.L.Lens., 2022.Enhanced production of amylase,
                        pyruvate and phenolic compounds from glucose by
                        light‐driven Aspergillus niger‐CuS nanobiohybrids.
                        Journal of Chemical Technology &amp; Biotechnology. 98,
                        pp.602-614. (IF: 3.7)
                      </li>
                      <li>
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>
                        , Piet N.L.Lens., 2022. Light driven Aspergillus
                        niger-ZnS nanobiohybrids for degradation of methyl
                        orange. Chemosphere, 298, pp. 134162(IF: 5.7)
                      </li>
                      <li>
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>
                        , Piet N.L. Lens., 2022. Enhanced removal of
                        hydrocarbons BTX by Light driven Aspergillus niger ZnS
                        nanobiohybrids. Enzyme and Microbial Technology, 157,
                        pp. 110020 (IF: 3.4)
                      </li>
                      <li>
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>
                        ., Hingnekar, T.A., Balakrishnan, R.M. and Rene, E.R.,
                        2019. Solar assisted photocatalytic degradation of
                        organic pollutants in the presence of biogenic
                        fluorescent ZnS nanocolloids. Chemosphere, 234,
                        pp.287-296. (IF: 5.7)
                      </li>
                      <li>
                        Gupta, C., Balakrishnan, R.M.,{" "}
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>{" "}
                        and Pugazhendhi, A., 2019. Mycosensing of soil
                        contaminants by Ganoderma lucidum and Omphalotus
                        subilludens including the insights on growth media
                        requirements. Biocatalysis and Agricultural
                        Biotechnology,20,p.101239. (IF: 2.1)
                      </li>
                      <li>
                        Vijay, S., Balakrishnan, R.M., Rene, E.R. and{" "}
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>
                        , 2019. Photocatalytic degradation of Irgalite violet
                        dye using nickel ferrite nanoparticles. Journal of Water
                        Supply: Research and Technology— AQUA, 68(8),pp.666-674.
                        (IF: 1.3)
                      </li>
                      <li>
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>
                        ., Balakrishnan, R.M., Ashok, A., Swarup, S. and Sinha,
                        P., 2019. Bioinspired ZnS: Gd nanoparticles synthesized
                        from an endophytic fungi Aspergillus flavus for
                        fluorescence- based metal detection. Biomimetics,
                        4(1),p.11. (IF: 2.6)
                      </li>
                      <li>
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>
                        . and Balakrishnan, R.M., 2017. Thermal and optical
                        characterization of biologically synthesized ZnS
                        nanoparticles synthesized from an endophytic fungus
                        Aspergillus flavus: A colorimetric probe in metal
                        detection. Spectrochimica Acta Part A: Molecular and
                        Biomolecular Spectroscopy, 175, pp.200- 207. .(IF: 3.2)
                      </li>
                      <li>
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>
                        , Akshay Gowda K.M., Elisha, M.G. and Nitish, N., 2017.
                        Biologically synthesized PbS nanoparticles for the
                        detection of arsenic in water. International
                        Biodeterioration &amp; Biodegradation, 119,pp.78-86.
                        (IF: 4)
                      </li>
                      <li>
                        <strong class="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                          {" "}
                          Uddandarao, P.{" "}
                        </strong>
                        ., and Balakrishnan, R.M., 2016. ZnS semiconductor
                        quantum dots production by an endophytic fungus
                        Aspergillus flavus. Materials Science and Engineering:
                        B, 207,pp.26- 32.(IF: 4.7)
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Conferences Presented:
              </h3>
              <div className="space-y-4 text-gray-300">
                <ul className="list-decimal list-outside text-gray-300 space-y-2">
                  <li>
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>
                    , Piet N.L. Lens. “Photosynthetic chalcogenide
                    nanobiohybrids for enhanced photocatalytic activity and
                    value added products”, presented at “8th International
                    Conference on Advanced Nanomaterials and Nanotechnology”,
                    November 29 – December 1, 2023.
                  </li>
                  <li>
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>
                    , Piet N.L. Lens. “Light driven Aspergillus niger‐ZnS
                    nanobiohybrid system for enhanced uptake of hydrocarbons
                    BTX”, at “14th CESE Conference on Challenges in
                    Environmental Science and Engineering”, November 6 – 7,
                    2021.
                  </li>
                  <li>
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>
                    , Piet N.L. Lens. “Artificial photosynthesis by Aspergillus
                    niger - ZnS living biohybrids for enhanced removal of
                    synthetic dye methyl orange”, Chemical Science Symposium
                    2021 on “Biohybrid Approaches to Sustainable Energy
                    Conversion”, September 13 – 15, 2021.
                  </li>
                  <li>
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>
                    , Piet N.L. Lens. “Nanobiohybrids for the removal of methyl
                    orange by adsorption and photocatalysis”, at 13th CESE
                    Conference on Challenges in Environmental Science and
                    Engineering, November 7 – 8, 2020.
                  </li>
                  <li>
                    Raj, M.B. ,{" "}
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>
                    , and <strong>Seenivasaperumal, A.</strong> “Studies on
                    microbial synthesis of ZnS nanocolloids in a stirred tank
                    reactor”, 11th CESE Conference on Challenges in
                    Environmental Science and Engineering, Bangkok, Thailand,
                    November 4 – 8, 2018.
                  </li>
                  <li>
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>
                    “Photocatalytic performance of ZnS@CNT nanocomposite
                    membranes for inactivation of emerging pollutants and drug
                    resistant bacteria”, poster presented at “Sci-ROI Annual
                    Event 2018”, University of Chicago, Chicago, USA, September
                    8 - 9, 2018.
                  </li>
                  <li>
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>
                    , Banajarani, P., Daniel, S., and Siamak, N. “Mitigation of
                    surface and groundwater pollutants of Missouri and Arkansas
                    River Basins”, poster presented at “National Institutes for
                    Water Resources Regional Symposium: Water Resources of the
                    US Great Plains Region”, Nebraska Water Centre, University
                    of Nebraska Lincoln, USA, October 24 - 26, 2018.
                  </li>
                  <li>
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>
                    , Tina, A.H., and Raj, M.B. “Solar photocatalysis of methyl
                    violet dye using biological ZnS nanoparticles synthesized
                    from an endophytic fungi Aspergillus flavus”, 5th
                    International Conference on Research Frontiers in Chalcogen
                    Cycle Science & Technology, Goa, India, December 19 - 21,
                    2016. pp: 28-29, 14.
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Book Chapters:
              </h3>
              <div className="space-y-4 text-gray-300">
                <ul className="list-decimal list-outside text-gray-300 space-y-2">
                  <li>
                    Balakrishnan, R.M. ,{" "}
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Uddandarao, P.
                    </strong>
                    , Raval, K. and Raval, R., 2019. A perspective of advanced
                    biosensors for environmental monitoring. In{" "}
                    <em>
                      Tools, Techniques and Protocols for Monitoring
                      Environmental Contaminants
                    </em>{" "}
                    (pp. 19–51). Elsevier.
                  </li>
                  <li>
                    Balakrishnan, R.M.,{" "}
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Uddandarao, P.
                    </strong>
                    , Manirethan, V. and Raval, K., 2020. Insights on the
                    advanced processes for treatment of inorganic water
                    pollutants. In <em>Inorganic Pollutants in Water</em> (pp.
                    315–336). Elsevier.
                  </li>
                  <li>
                    Manirethan, V. , Justin, J., Rijin, T.V.,{" "}
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Uddandarao, P.
                    </strong>
                    , 2022. Municipal solid waste for sustainable production of
                    biofuels and value added products from biorefinery. In{" "}
                    <em>Zero Waste Biorefinery</em>. Springer.
                  </li>
                  <li>
                    Manirethan, V. , Shajan, N., Sajan, A.S.,{" "}
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>{" "}
                    and Sinharoy, A., 2023. Development of bioelectrochemical
                    systems integrated nanocomposite membranes for wastewater
                    management. In{" "}
                    <em>
                      Development in Wastewater Treatment Research and Processes
                    </em>{" "}
                    (pp. 191–217). Elsevier.
                  </li>
                  <li>
                    Kumar, M. , Sinharoy, A.,{" "}
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Priyanka, U.
                    </strong>{" "}
                    and Singh, K.S., 2023. Industrial wastewater treatment using
                    bioelectrochemical systems and the potential for energy
                    recovery. In{" "}
                    <em>
                      Development in Wastewater Treatment Research and Processes
                    </em>{" "}
                    (pp. 219–238). Elsevier.
                  </li>
                  <li>
                    Sinharoy, A. and{" "}
                    <strong className="font-bold underline hover:text-blue-600 dark:hover:text-blue-400">
                      Uddandarao, P.
                    </strong>
                    , 2023. Zero-Valent Nanomaterials for Wastewater Treatment.
                    In{" "}
                    <em>
                      Advanced Application of Nanotechnology to Industrial
                      Wastewater
                    </em>{" "}
                    (pp. 53–73). Singapore: Springer Nature Singapore.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
