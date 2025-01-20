import { promises as fs } from "fs";
import path from "path";

async function getLandingPageContent() {
  const filePath = path.join(process.cwd(), "content", "landing.json");
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}

export default async function Home() {
  const { title, description, backgroundImage, email } = await getLandingPageContent();

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-xl">{description}</p>
        <p className="text-md">
          For inquiries, contact us at:{" "}
          <a
            href={`mailto:${email}`}
            className="text-blue-500 hover:underline"
          >
            {email}
          </a>
        </p>
      </div>
    </main>
  );
}
