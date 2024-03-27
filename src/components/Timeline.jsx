export default function Timeline() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-black">
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-black"></div>
        <time className="mb-1 font-semibold leading-none text-gray-400 dark:text-black">
          February 2022
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Application UI code in Tailwind CSS
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </p>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-black"></div>
        <time className="mb-1 font-semibold leading-none text-gray-400 dark:text-black">
          March 2022
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Marketing UI design in Figma
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          All of the pages and components are first designed in Figma and we
          keep a parity between the two versions even as we update the project.
        </p>
      </li>
      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-black"></div>
        <time className="mb-1 font-semibold leading-none text-gray-400 dark:text-black">
          April 2022
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          E-Commerce UI code in Tailwind CSS
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
      </li>
      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-black"></div>
        <time className="mb-1 font-semibold leading-none text-gray-400 dark:text-black">
          April 2022
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          E-Commerce UI code in Tailwind CSS
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
      </li>
    </ol>
  );
}
