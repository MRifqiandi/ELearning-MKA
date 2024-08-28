import Aside from "/src/components/Aside";
import { Label, TextInput, Button } from "flowbite-react";

function FeedbackToMentor() {
  return (
    <div>
      <div className="h-screen flex flex-col md:flex-row">
        <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

        <div className="flex flex-col flex-1">
          <div className="flex flex-col gap-5 p-4 md:pl-72">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 lg:justify-between">
              <div className="flex flex-col gap-4 pl-3 justify-center lg:justify-between w-full lg:w-auto">
                <h1 className="font-bold text-blue-800 text-3xl">Feedback</h1>
                <h3 className="font-bold text-blue-900 pl-3 text-xl">
                  Silahkan berikan feedback untuk materi yang diberikan oleh
                  mentor!
                </h3>
              </div>
            </div>

            <div className="flex max-w-lg justify-center lg:pl-10  flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Apakah materi yang diberikan relevan?"
                  />
                </div>
                <TextInput
                  id="small"
                  type="text"
                  sizing="md"
                  placeholder="example : Materi sangat relevan"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="base"
                    value="Apakah penulisan yang digunakan mudah dipahami?"
                  />
                </div>
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="example : Mudah dipahami"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="understand"
                    value="Apakah kamu paham dengan materi yang diberikan?"
                  />
                </div>
                <TextInput
                  id="understand"
                  type="text"
                  sizing="md"
                  placeholder="example : Saya Paham"
                />
              </div>
              <div className="flex justify-center items-center">
                <Button>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackToMentor;
