import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../Layout";
import Button from "../Button";
import Image from "../../assets/banner.png";

import styles from "./style.module.scss";

const LoginComp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useState(() => {
    try {
      const userStorage = localStorage.getItem("@user");
      return userStorage ? JSON.parse(userStorage) : null;
    } catch {
      return null;
    }
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      setError("Nenhum usuário cadastrado");
      return;
    }

    if (email === user.email && password === user.password) {
      localStorage.setItem("@logged", "true");
      navigate("/");
    } else if (email !== user.email && password !== user.password) {
      setError("E-mail e senha inválidos.")
    } else if (password !== user.password) {
      setError("Senha inválida.")
    } else {
      setError("E-mail inválido.");
    }
  };

  return (
    <Layout>
      <section className={styles.containerLogin}>
        <div className={styles.formArea}>
          <h2>Entrar</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label value="email">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className={styles.field}>
              <label value="password">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <Button type="submit">Entrar</Button>
          </form>
        </div>

        <div className={styles.imageArea}>
          <img src={Image} alt="Imagem ilustrativa de login" />
        </div>
      </section>
    </Layout>
  );
};

export default LoginComp;
