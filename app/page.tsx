import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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


                <div className="grid grid-cols-2 gap-4">
          <a href="https://t.me/+63o5qlHPrl1iNjc0" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-500 text-white font-bold py-4 px-4 rounded w-full">
              Telegram csoport
            </button>
          </a>

          <a href="https://www.facebook.com/groups/421299027712536" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-500 text-white font-bold py-4 px-4 rounded w-full">
              Facebook csoport
            </button>
          </a>

          <a href="https://meshcore.co.uk" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
              Hivatalos oldal
            </button>
          </a>

          <a href="https://github.com/ripplebiz/MeshCore" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
              GitHub
            </button>
          </a>
        </div>

        <div className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-4">
          <h2 className="text-lg font-bold">Mi az a MeshCore?</h2>
          <p className="mt-2">
            A <strong>MeshCore</strong> egy nyílt forráskódú, LoRa-alapú decentralizált kommunikációs rendszer, amely lehetővé teszi az internetkapcsolat nélküli üzenetküldést.
            A rendszer bázisállomásokon (Repeater) keresztül működik, és ideális olyan helyzetekben, ahol nincs hagyományos hálózati infrastruktúra, például túrázás, katasztrófaelhárítás vagy közösségi mesh hálózatok kiépítése esetén.
          </p>
          
          <h3 className="mt-4 font-bold">MeshCore üzemmódjai:</h3>

          <ul className="list-disc pl-5 space-y-4">
          <li>
              <strong>Companion (Kliens)</strong> – Egy kliens módú eszköz, amely önmagában nem továbbítja az üzeneteket a hálózatba. Csak azokhoz az eszközökhöz tud üzenetet küldeni, amelyeket közvetlenül elér (például egy másik Companionhoz vagy egy Repeaterhez). Ez a szerepkör hasonló a Meshtastic <em>CLIENT_MUTE</em> módjához. Az útválasztásnak köszönhetően nagy (akár 64 hop) hálozatok is létrehozhatók.
            </li>

            <li>
              <strong>Repeater (Bázisállomás)</strong> – A hálózat alapvető eleme, amely az üzeneteket fogadja és továbbítja. Legalább egy repeater szükséges a MeshCore hálózat működéséhez.
            </li>

            <li>
              <strong>Room Server</strong> – Egy opcionális működési mód, amely az alap feladatköre mellett repeaterként is működhet. Eltárolja az utolsó 16 üzenetet, és azokat elküldi minden újonnan csatlakozó Companion eszköznek.
            </li>
          </ul>

        </div>


      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
