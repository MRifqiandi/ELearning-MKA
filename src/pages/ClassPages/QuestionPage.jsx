import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import Aside from "../../components/Aside";
import { useNavigate } from "react-router-dom";


const QuestionPage = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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

  const handleButtonClick = (optionKey) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionKey;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      handleFinish(); // Jika sudah pada soal terakhir, hitung skor
    }
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
      navigate("/sertifikatpage");
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
          <h2 className="pb-6 text-3xl font-semibold text-btn-card">Latihan</h2>
          {questionsData.length === 0 ? (
            <p>Loading questions...</p>
          ) : (
            <div className="mb-6">
              <h3 className="mb-4 font-semibold text-gray-900">
                {currentQuestionIndex + 1}.{" "}
                {questionsData[currentQuestionIndex].question}
              </h3>
              <div className="flex flex-col space-y-2">
                {Object.entries(
                  questionsData[currentQuestionIndex].options
                ).map(([key, value]) => (
                  <Button
                    key={key}
                    color={
                      selectedOptions[currentQuestionIndex] === key
                        ? "info"
                        : "gray"
                    }
                    onClick={() => handleButtonClick(key)}
                    className={`transition duration-300 ${
                      selectedOptions[currentQuestionIndex] === key
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                  >
                    {key}. {value}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {showScore && (
          <div className="p-3 mt-4 shadow-xl rounded-lg bg-green-100 text-green-800">
            <h3 className="text-2xl font-semibold">
              Skor Anda: {score} dari {questionsData.length} 🎉🎊
            </h3>
            <p className="text-gray-600">
              Kamu akan diarahkan ke halaman sertifikat dalam {timeLeft} detik
            </p>
          </div>
        )}

        <div className="flex justify-end pt-5">
          {showScore ? (
            <Button
              onClick={() => navigate("/sertifikatpage")}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Lihat Sertifikat
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              disabled={selectedOptions[currentQuestionIndex] === ""}
              className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
            >
              {currentQuestionIndex < questionsData.length - 1
                ? "Berikutnya"
                : "Selesai"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
