import React from "react";
import { Alert } from "flowbite-react";

function AlertFunc() {
  return (
    <div>
      <Alert color="info">
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </Alert>
    </div>
  );
}

export default AlertFunc;
