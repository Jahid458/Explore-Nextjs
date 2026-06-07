import { getServices } from "@/lib/data";
import React from "react";


const team = async() => {

  await getServices();

  return (
    <div className="border-2 border-blue-500 p-10">
      <h1>This is a Parallel Route Page. Team</h1>
    </div>
  );
};

export default team;
