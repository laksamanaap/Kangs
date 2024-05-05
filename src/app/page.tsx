import Image from "next/image";
import "@/styles/globals.scss";

export default function Home() {
  return (
    <main className="background-example">
      <div >
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>


    </main>
  );
}
