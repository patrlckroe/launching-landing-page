import { promises as fs } from 'fs';
import path from 'path';

async function getLandingData() {
  const filePath = path.join(process.cwd(), 'content', 'landing.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export default async function Home() {
  const { title, description } = await getLandingData();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="mt-4 text-xl">{description}</p>
    </main>
  );
}
