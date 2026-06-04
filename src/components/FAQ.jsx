import FAQItem from "./FAQItem";
import faqData from "../data/data";

const FAQ = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-900 p-3 ">
      <div className="max-w-2xl w-full p-6 bg-amber-100 rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-3">
          FAQ
        </h1>
        <p className="text-center text-gray-500 font-bold mb-6">Frequently Asked Questions</p>

        {faqData.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
