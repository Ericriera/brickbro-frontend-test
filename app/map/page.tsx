import Image from "next/image";
import Link from "next/link";
import styles from "@/page.module.css";
import Search from "@/components/search";
import Map from "@/components/map";
import History from "@/components/history";

export default function MapPage() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Link href={{ pathname: "/" }}>
          <Image
            src="/logo_brickbro.png"
            alt="Brickbro Logo"
            width={216}
            height={56}
            priority
          />
        </Link>
      </div>
      <div className={styles.center}>
        <Search placeholder="Address" />
      </div>
      <div className={styles.center}>
        <Map />
      </div>
      <div className={styles.center}>
        <History />
      </div>
    </main>
  );
}
