import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function ButtonComp() {
  return (
    <div>
      <Link to="/cda">
        <Button className="flex justify-center items-center bg-btn-card h-8 md:w-28 md:h-9">
          Details
        </Button>
      </Link>
    </div>
  );
}

export default ButtonComp;
