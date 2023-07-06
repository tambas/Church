import React from "react";
import styles from "../styles/Home.module.css";

const Cadastro = () => {
    return (
        <div className={styles.bodyCadastro}>

            <div className={styles.containerCadastro}>
                <h2 className={styles.h2Cadastro}>
                    Cadastro
                </h2>
                <p className={styles.pCadastro}>Crie sua conta aqui.</p>
                <form className={styles.formCadastro}>
                    <input className={styles.inputCadastro} type="text" placeholder="Nome" />
                    <input className={styles.inputCadastro} type="email" placeholder="E-mail" />
                    <input className={styles.inputCadastro} type="password" placeholder="Senha" />
                </form>
                <button className={styles.buttonCadastro} type="submit">Enviar</button>
            </div>
        </div>
    );
};

export default Cadastro;
