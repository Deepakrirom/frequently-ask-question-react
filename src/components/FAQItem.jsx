import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import { IoIosArrowDown } from "react-icons/io";

const FAQItem = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <h3
        className="cursor-pointer text-[15px] font-semibold flex justify-between"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {faq.question}
        <span>{showAnswer ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </h3>

      {showAnswer && <p className="mt-2 text-sm font-semibold text-gray-600 mb-6">{faq.answer}</p>}
    </div>
  );
};

export default FAQItem;
