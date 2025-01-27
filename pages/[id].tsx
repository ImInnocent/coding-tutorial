"use client";

import { useParams } from "next/navigation";
import { reactProblems } from "@/reactProblems";

const ProblemPage = () => {
  const params = useParams();
  const reactProblem = reactProblems[params?.id];

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      {reactProblem}
    </div>
  );
};

export default ProblemPage;
