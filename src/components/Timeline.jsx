export default function Timeline() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-black">
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5  border border-white dark:border-black dark:bg-black"></div>
        <time className="mb-1 font-semibold leading-none text-gray-400 dark:text-black md:text-lg 2xl:text-xl">
          2023 - Mención honorífica - Concurso Provincial de anteproyectos sede
          CoPAER e ideas para su emplazamiento.
        </time>
        {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Application UI code in Tailwind CSS
        </h3> */}
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 2xl:text-lg">
          Autores: Arq. Ricardo Jaimovich, Arq. Marianela Galli, Arq. Florencia
          Feresin, Arq. Piero Rossetto. Colaboradoras: Ileana Maillen Famin y
          María Belén Patat Peltzer.
        </p>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-black"></div>
        <time className="mb-1 font-semibold leading-none text-gray-400 dark:text-black md:text-lg 2xl:text-xl">
          2021 - 2do Premio - Concurso Monumento en recordación de las víctimas
          del Holocausto Nazi.
        </time>
        {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Marketing UI design in Figma
        </h3> */}
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 2xl:text-lg">
          Autores: Arq. Ricardo Jaimovich, Arq. Fiorella Godoy y Arq. Marianela
          Galli.
        </p>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-black"></div>
        <time className="mb-1 font-semibold leading-none text-gray-400 dark:text-black md:text-lg 2xl:text-xl">
          2018 - Encuentro de Jovenes Investigadores de Universidad Nacional del
          Litoral
        </time>
        {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Marketing UI design in Figma
        </h3> */}
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 2xl:text-lg">
          Trabajo “Movilidad de personas con diversidad funcional. La
          construcción de la inclusividad urbana en el área metropolitana Santa
          Fe Paraná”. <br /> Autora: Arq Florencia Feresin - Directora: Arq.
          Mirta Soijet, Co-director: Arq. Gonzalo Corsetti.
        </p>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-black"></div>
        <time className="mb-1 font-semibold leading-none text-gray-400 dark:text-black md:text-lg 2xl:text-xl">
          2017 - Mención - “XXI Encuentro de Jóvenes Investigadores de
          Universidad Nacional del Litoral”.
        </time>
        {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          E-Commerce UI code in Tailwind CSS
        </h3> */}
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 2xl:text-lg">
          Trabajo “Paisajes rurales como construcción cultural educativa: su
          influencia en la configuración espacial de las escuelas de familia
          agrícola del Taragüí, Corrientes”. <br />
          Autora: Arq. Fiorella Godoy - Directora: Esp. Arq. Falchini Alicia.
        </p>
      </li>
    </ol>
  );
}
