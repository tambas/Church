import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
          Church&nbsp;
          <code className={styles.code}>O App feito para te deixar proximo a Deus</code>
        </p>
        <div className={styles.miniLogo}>
          <a
            href="http://dofusfuture.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/Church_of_God_Emblem.svg.png"
              alt="church Logo"
              className={styles.vercelLogo}
              width={35}
              height={42}
              priority
            />
          </a>
        </div>
      </div>


      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/church-of-god.svg"
          alt="church Logo"
          width={680}
          height={120}
          priority
        />
      </div>

      <div className={styles.grid}>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Cultos
          </h2>
          <p>Veja aqui, os dias de culto na sua Igreja</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Biblia
          </h2>
          <p>Veja aqui sua melhor versao da Biblia Sagrada.</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Estudos
          </h2>
          <p>
            Aqui você encontra estudos dos melhores Pastores!
          </p>
        </a>
      </div>
    </main>
    
  )
}



