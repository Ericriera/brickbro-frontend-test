import Image from "next/image";
import styles from "@/page.module.css";
import Search from "@/components/search";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/logo_brickbro.png"
          alt="Brickbro Logo"
          width={270}
          height={70}
          priority
        />
      </div>
      <div className={styles.search}>
        <Search placeholder="Address" link={true}/>
      </div>
    </main>
  );
}
