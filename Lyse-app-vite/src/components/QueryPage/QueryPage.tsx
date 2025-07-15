import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import InputBox from "../reusable/InputBox";

const QueryPage = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <>
      <div className="md:flex w-screen h-screen">
        <div className="md:w-64 h-screen bg-black">
          <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Writes upside-down
          </h3>
        </div>
        <div className="w-full flex-1 text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          <p className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent mb-2">
            Lyse
          </p>
          <div className="flex flex-wrap justify-around p-6 overflow-y-scroll">
            <Tilt options={defaultOptions}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-64 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5  mb-4"
              >
                {" "}
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                    <svg className="h-6 w-6 stroke-white"></svg>
                  </span>
                </div>
                <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
                  Writes upside-down
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                  The Zero Gravity Pen can be used to write in any orientation,
                  including upside-down. It even works in outer space.
                </p>
              </motion.div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="max-w-64 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5  mb-4"
              >
                {" "}
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                    <svg className="h-6 w-6 stroke-white"></svg>
                  </span>
                </div>
                <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
                  Writes upside-down
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                  The Zero Gravity Pen can be used to write in any orientation,
                  including upside-down. It even works in outer space.
                </p>
              </motion.div>
            </Tilt>
            <Tilt options={defaultOptions}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                className="max-w-64 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5  mb-4"
              >
                {" "}
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                    <svg className="h-6 w-6 stroke-white"></svg>
                  </span>
                </div>
                <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
                  Writes upside-down
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                  The Zero Gravity Pen can be used to write in any orientation,
                  including upside-down. It even works in outer space.
                </p>
              </motion.div>
            </Tilt>
          </div>
          <InputBox yPosition="bottom-0"/>
        </div>
      </div>
    </>
  );
};

export default QueryPage;
