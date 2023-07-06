import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Header() {
    return (
        <main className={styles.bodyHeader} id="body">
        <div className={styles.headerHeader} class="header" id="header">
          <button className={styles.btn_icon_header} onclick="toggleSidebar()" class="btn_icon_header">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <a href='/' >
          <Image
            src="/Church_of_God_Emblem.svg.png"
            alt="church Logo"
            
            className={styles.vercelLogo}
            width={35}
            height={42}
            priority
          />
          </a>
          <input className={styles.inputHeader} placeholder='pesquisa..' />
          <div className={styles.navigation_header} class="navigation_header" id="navigation_header">
            <a className={styles.a} href="#" class="active">Sobre nós</a>
            <a className={styles.a} href="#">Contato</a>
            <a className={styles.a} href="#">Login</a>
            <a className={styles.a} href="/cadastro" >Cadastro</a>
          </div>
        </div>
      </main>
    )
}