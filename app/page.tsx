import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
      <Image
          className="light:invert"
          src="/meshcore-logo.png"
          alt="MeshCore logo"
          width={350}
          height={48}
          priority
        />
        <div className="list-inside list-decimal text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
            Üdvözlünk a magyar MeshCore közösség weboldalán.
        </div>

        <div className="list-inside list-decimal text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
          Frekvencia: 869.525 MHz (a többi beállítás az alapértelmezett)
          </div>

        <a href="https://t.me/+63o5qlHPrl1iNjc0" target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-500 text-white font-bold py-4 px-4 rounded">
            Telegram csoport
          </button>
        </a>

        <a href="https://www.facebook.com/groups/421299027712536" target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded">
            Facebook csoport
          </button>
        </a>

        

       
      </main>



      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
