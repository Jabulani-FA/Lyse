import React, { useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { createTicket } from "../functions/analyse";
import type { queryInterface, injections } from "../interface/userInput";

const InputBox: React.FC<injections> = ({
  yPosition,
  animateInput,
  disableQuery,
}) => {
  const [userQuery, setuserQuery] = useState<string>("");
  const [attachment, setattachment] = useState<File | null>(null);
  const [loading, setloading] = useState<boolean>(false);

  const handleSubmitQuery = () => {
    // e:React.FormEvent<HTMLFormElement>
    // e.preventDefault();

    if (!loading || (!userQuery && !attachment)) {
      return;
    }
    setloading(true);
    const query: queryInterface = {
      ...(userQuery && { userQuery }),
      ...(attachment && { attachment }),
    };
    createTicket(query)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAttachment = (file: ChangeEvent<HTMLInputElement>) => {
    setloading(true);
    const File = file.target.files?.[0];
    if (File) {
      setattachment(File);
      // console.log(File)
      // console.log("attached")
    }
    setloading(false);
  };

  const Theform = () => (
    <form
      className={`w-2/3 p-2 fixed ${yPosition} left-1/4 mb-2 bg-white rounded-lg dark:bg-gray-700 z-50 mt-24`}
    >
      <div className="text-gray-900 dark:text-white items-center py-2">
        
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-900 dark:text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="What insight do you seek"
          aria-label="Your Query"
          onChange={(e) => setuserQuery(e.target.value)}
          value={userQuery}
        />
        <div className="flex justify-between pt-8">
          <div className="flex">
            <label htmlFor="file-input">
              <img
                src="/github-icon2.svg"
                width={20}
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              id="file-input"
              data-testid="file-input"
              name="attachment"
              accept=".csv, .txt, .xls, .xlsx"
              style={{ display: "none" }}
              onChange={(e) => handleAttachment(e)}
            />
            {attachment && (
              <p data-testid="file-name">{attachment.name}</p> // ✅ Add this
            )}
          </div>
          <button
            className="flex-shrink-0 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={() => handleSubmitQuery()}
            disabled={disableQuery || loading}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
  return (
    <div>
      {animateInput ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-screen"
        >
          {Theform()}
        </motion.div>
      ) : (
        <div>
          {Theform()}
        </div>
      )}
    </div>
  );
};

export default InputBox;
