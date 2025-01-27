import Head from "next/head";
import { reactProblems } from "@/reactProblems";

export default function Home() {
  return (
    <>
      <Head>
        <title>이노의 스파게티 코딩교육</title>
      </Head>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "200px",
          width: "100vw",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2>이노의 스파게티 코딩교육</h2>

          <ul>
            {Object.keys(reactProblems).map((key) => (
              <li key={key}>
                <a href={`/${key}`}>{key}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
