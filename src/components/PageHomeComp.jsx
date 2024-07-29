"use client";

import { Button } from "flowbite-react";

function PageHomeComp() {
  return (
    <Button.Group>
      <Button color="info">Home</Button>
      <Button color="gray">All Recommendation</Button>
      <Button color="gray">Programming</Button>
      <div className="hidden lg:flex">
        <Button color="gray">Design</Button>
        <Button color="gray">Back end</Button>
      </div>
      <div className="hidden xl:flex">
        <Button color="gray">Front end</Button>
        <Button color="gray">Marketing</Button>
        <Button color="gray">Data Scientist</Button>
      </div>
    </Button.Group>
  );
}

export default PageHomeComp;
