import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import Aside from "../../components/Aside";

const QuestionPage = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/data/Question.json");
        const data = await response.json();
        setQuestionsData(data);
        setSelectedOptions(Array(data.length).fill(""));
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleButtonClick = (questionIndex, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div className="max-w-screen-lg">
      <div>
        <Aside />
      </div>
      <div className="flex flex-col justify-center p-2 md:pl-72">
        <div className="p-3 shadow-xl rounded-lg">
          <h2 className="pb-6 text-3xl font-semibold text-blue-500">Latihan</h2>
          {questionsData.length === 0 ? (
            <p>Loading questions...</p>
          ) : (
            questionsData.map((q, index) => (
              <div key={index} className="mb-6">
                <h3 className="mb-4 font-semibold text-gray-900">
                  {index + 1}. {q.question}
                </h3>
                <div className="flex flex-col  space-y-2">
                  {q.options.map((option) => (
                    <Button
                      key={option}
                      color={
                        selectedOptions[index] === option ? "info" : "gray"
                      }
                      onClick={() => handleButtonClick(index, option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-end pt-5">
          <Button>Selesai</Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
