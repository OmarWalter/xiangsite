import HeroHome from "./home/Hero-home";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white flex items-center justify-center w-full flex-col px-4 relative">
      <main> 
        <div>
          <HeroHome />
        </div>
      </main>
    </div>
  );
}