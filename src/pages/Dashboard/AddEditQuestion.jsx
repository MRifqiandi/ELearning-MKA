import { useState, useEffect } from "react";
import { Button, TextInput, Textarea } from "flowbite-react";
import Aside from "../../components/Aside";
import { useNavigate } from "react-router-dom";

const AddEditQuestion = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isEditing, setIsEditing] = useState(false);
  const [editQuestionIndex, setEditQuestionIndex] = useState(null);
  const [newQuestion, setNewQuestion] = useState("");
  const [newOptions, setNewOptions] = useState({});
  const [newOptionKey, setNewOptionKey] = useState("");
  const [newOptionValue, setNewOptionValue] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionType, setQuestionType] = useState("multiple-choice"); // New state for question type
  const [studentAnswers, setStudentAnswers] = useState({}); // For essay answers
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/data/Question.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
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
      if (q.is_essay) {
        if (studentAnswers[index] === q.correct_answer) {
          calculatedScore += 1;
        }
      } else {
        if (q.correctAnswer === selectedOptions[index]) {
          calculatedScore += 1;
        }
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

  const handleAddOption = () => {
    if (newOptionKey && newOptionValue) {
      setNewOptions((prevOptions) => ({
        ...prevOptions,
        [newOptionKey]: newOptionValue,
      }));
      setNewOptionKey("");
      setNewOptionValue("");
    }
  };

  const handleAddQuestion = () => {
    if (isEditing && editQuestionIndex !== null) {
      const updatedQuestions = [...questionsData];
      updatedQuestions[editQuestionIndex] = {
        question: newQuestion,
        options: newOptions,
        correctAnswer: correctAnswer,
        is_essay: questionType === "essay",
      };
      setQuestionsData(updatedQuestions);
      setIsEditing(false);
      setEditQuestionIndex(null);
    } else {
      // Add a new question
      setQuestionsData([
        ...questionsData,
        {
          question: newQuestion,
          options: newOptions,
          correctAnswer: correctAnswer,
          is_essay: questionType === "essay",
        },
      ]);
    }
    setNewQuestion("");
    setNewOptions({});
    setCorrectAnswer("");
    setQuestionType("multiple-choice");
  };

  const handleEditQuestion = (index) => {
    const questionToEdit = questionsData[index];
    setNewQuestion(questionToEdit.question);
    setNewOptions(questionToEdit.options);
    setCorrectAnswer(questionToEdit.correctAnswer);
    setQuestionType(questionToEdit.is_essay ? "essay" : "multiple-choice");
    setEditQuestionIndex(index);
    setIsEditing(true);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questionsData.filter((_, i) => i !== index);
    setQuestionsData(updatedQuestions);
    setSelectedOptions(Array(updatedQuestions.length).fill(""));
  };

  const handleEssayAnswerChange = (index, value) => {
    setStudentAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: value,
    }));
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <Aside />
      </div>
      <div className="flex flex-col justify-center p-2 md:pl-72 pt-10">
        <div className="p-3 shadow-xl rounded-lg">
          <h2 className="pb-6 text-3xl font-semibold text-blue-500">
            {isEditing ? "Edit Question" : "Add New Question"}
          </h2>
          <div className="mb-4">
            <label className="mr-2">Question Type:</label>
            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className="form-select rounded-xl"
            >
              <option value="multiple-choice">Multiple Choice</option>
              <option value="essay">Essay</option>
            </select>
          </div>
          <div className="mb-6">
            <TextInput
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Enter question"
              className="mb-2"
            />
            {questionType === "essay" ? (
              <div className="mb-4">
                <Textarea
                  value={correctAnswer}
                  onChange={(e) => setCorrectAnswer(e.target.value)}
                  placeholder="Correct answer for essay"
                  className="mb-2"
                />
              </div>
            ) : (
              <div className="mb-4">
                <div className="flex mb-2">
                  <TextInput
                    value={newOptionKey}
                    onChange={(e) => setNewOptionKey(e.target.value)}
                    placeholder="Option key (e.g., A)"
                    className="mr-2"
                  />
                  <TextInput
                    value={newOptionValue}
                    onChange={(e) => setNewOptionValue(e.target.value)}
                    placeholder="Option value"
                    className="mr-2"
                  />
                  <Button onClick={handleAddOption}>Add Option</Button>
                </div>
                {Object.entries(newOptions).map(([key, value]) => (
                  <div key={key} className="mb-2">
                    <span className="font-semibold">{key}:</span> {value}
                  </div>
                ))}
              </div>
            )}
            <TextInput
              value={questionType === "essay" ? "" : correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              placeholder={
                questionType === "essay"
                  ? "Not applicable"
                  : "Correct answer key"
              }
              className="mb-2"
              disabled={questionType === "essay"}
            />
            <Button onClick={handleAddQuestion}>
              {isEditing ? "Update Question" : "Add Question"}
            </Button>
          </div>

          <h2 className="pb-6 text-3xl font-semibold text-blue-500">Latihan</h2>
          {questionsData.length === 0 ? (
            <p>Loading questions...</p>
          ) : (
            questionsData.map((q, index) => (
              <div
                key={index}
                className="mb-6 p-4 shadow-md rounded-lg bg-white"
              >
                <h3 className="mb-4 font-semibold text-gray-900">
                  {index + 1}. {q.question}
                </h3>
                {q.is_essay ? (
                  <div className="mb-4">
                    <Textarea
                      value={studentAnswers[index] || ""}
                      onChange={(e) =>
                        handleEssayAnswerChange(index, e.target.value)
                      }
                      placeholder="Your answer here..."
                    />
                  </div>
                ) : (
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
                )}
                <div className="flex justify-end mt-2">
                  <Button
                    onClick={() => handleEditQuestion(index)}
                    className="mr-2"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteQuestion(index)}
                    color="red"
                  >
                    Delete
                  </Button>
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
              Kamu akan diarahkan ke halaman sertifikat dalam {timeLeft} detik
            </p>
          </div>
        )}

        <div className="flex justify-end pt-5">
          <Button
            onClick={handleFinish}
            disabled={questionsData.some(
              (q) =>
                !q.is_essay && selectedOptions[questionsData.indexOf(q)] === ""
            )}
          >
            Selesai
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEditQuestion;
