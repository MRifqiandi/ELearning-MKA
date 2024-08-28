import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import Aside from "../../components/Aside";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();

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

  const handleButtonClick = (questionIndex, optionKey) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionKey;
    setSelectedOptions(newSelectedOptions);
  };

  const handleFinish = () => {
    let calculatedScore = 0;

    questionsData.forEach((q, index) => {
      if (q.correctAnswer === selectedOptions[index]) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowScore(true);
    const intervalTime = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/classasync");
    }, 5000);
    return () => {
      clearInterval(intervalTime);
      clearTimeout(timer);
    };
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <Aside />
      </div>
      <div className="flex flex-col justify-center p-2 md:pl-72 pt-10">
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
                <div className="flex flex-col space-y-2">
                  {Object.entries(q.options).map(([key, value]) => (
                    <Button
                      key={key}
                      color={selectedOptions[index] === key ? "info" : "gray"}
                      onClick={() => handleButtonClick(index, key)}
                    >
                      {key}. {value}
                    </Button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {showScore && (
          <div className="p-3 mt-4 shadow-xl rounded-lg bg-green-100 text-green-800">
            <h3 className="text-2xl font-semibold">
              Skor Anda: {score} dari {questionsData.length} 🎉🎊
            </h3>
            <p className="text-gray-600">
              Kamu akan diarahkan kembali kehalaman materi dalam {timeLeft}{" "}
              detik
            </p>
          </div>
        )}

        <div className="flex justify-end pt-5">
          <Button
            onClick={handleFinish}
            disabled={selectedOptions.includes("")}
          >
            Selesai
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
