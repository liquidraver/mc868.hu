import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="light:invert"
          src="/meshcore-logo.png"
          alt="MeshCore logo"
          width={450}
          height={48}
          priority
        />

        <div className="list-inside list-decimal text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
            Üdvözlünk a magyar MeshCore közösség weboldalán.
        </div>

        <div className="list-inside max-w-3xl  list-decimal text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
          Általunk használt frekvencia: EU/UK (Narrow) - 869.618Mhz / SF8 / BW62.5 / CR8
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

          <a href="https://github.com/meshcore-dev/MeshCore" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
              GitHub
            </button>
          </a>

          <a href="https://map.mc868.hu/" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
              Magyar "élő" mesh térkép
            </button>
          </a>

          <a href="https://meshcore.co.uk/map.html" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
              Hivatalos térkép
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
              <strong>Repeater (Bázisállomás)</strong> – A hálózat alapvető eleme, amely az üzeneteket fogadja és továbbítja. Legalább egy repeater szükséges a MeshCore hálózat működéséhez. Csak a Repeaterek (és a Repeater módba kapcsolt Room Server) formálnak mesh hálózatot.
            </li>

            <li>
              <strong>Room Server</strong> – Egy opcionális működési mód, amely az alap feladatköre mellett repeaterként is működhet. Eltárolja az utolsó 16 üzenetet, és azokat elküldi minden újonnan csatlakozó Companion eszköznek.
            </li>
           </ul>
        </div>

        <div className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-4">
          <h2 className="text-lg font-bold">Hogy tudom használni?</h2>
          <p className="mt-2">
          A legtöbb felhasználó egy mobilos appot használ ahhoz, hogy csevegjen a hálózaton. Léteznek önálló eszközök (pl. T-Deck), de ezek drágábbak, mint az úgynevezett Companion eszközök. Companionra azért van szükség, mert a mobiltelefonokban nincs LoRa-modul. Ezekhez Bluetooth-on lehet csatlakozni a telefonnal. Számítógép is használható; ilyenkor a Companion vagy Wi-Fi-n keresztül csatlakozik, vagy USB-vel a gépre.          </p>
          
          <h3 className="mt-4 font-bold">Szükséges lépések:</h3>

          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>MeshCore kompatibilis eszköz beszerzése</strong> (pl. Heltec v3, SeeedStudio T1000-E, RAK WisMesh), a támogatott eszközök a MeshCore hivatalos oldalán találhatók a Web Flasher menüpont alatt.
            </li>

            <li>
              <strong>MeshCore telepítése</strong> a hivatalos oldalon található Web Flasher segítségével. (BT companion kell a telefonos használathoz)
            </li>

            <li>
              <strong>A telefonos alkalmazás telepítése</strong>, ami elérhető a Google Play Store-ban és az Apple App Store-ban is.
            </li>

            <li>
              <strong>A rádió paramétereinek beállítása</strong>, név, opcionálisan a hely, és a legfontosabb: a frekvencia, Spreading Factor és a Coding Rate. Ezek valószínűleg még változni fognak, ahogy kísérletezünk. A weboldalon mindig kint lesz a jelenlegi.
            </li>

            <li>
              <strong>Advert</strong>: ahhoz, hogy mások megtudják, hogy a hálózaton vagy, küldeni kell egy Flood Router és egy Zero-Hop advertet is. Ez egy olyan üzenet, ami mindenkihez eljut (ha van olyan repeater, amit a rádiód elér) és jelzi, hogy a hálózaton vagy.
            </li>

            <li>
              <strong>Várni</strong> kell, mert a legtöbb repeater 1-3 óránként küld csak advertet és addig nem fog senki látszódni.
            </li>

            <li>
              <strong>Csatlakozni</strong> hozzánk Telegramon vagy Facebookon és zaklatni minket, hogy segítsünk.
            </li>
          </ul>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
