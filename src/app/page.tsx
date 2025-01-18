import { promises as fs } from "fs";
import path from "path";

async function getLandingData() {
  const filePath = path.join(process.cwd(), "content", "landing.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export default async function Home() {
  const { title, description, backgroundImage } = await getLandingData();

  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-xl">{description}</p>
      </div>
    </main>
  );
}
