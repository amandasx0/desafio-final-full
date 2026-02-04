import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../Layout";
import Button from "../Button";
import Image from "../../assets/banner.png";
import styles from "./style.module.scss";

const RegisterComp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    password: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      ...form,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("@user", JSON.stringify(userData));

    navigate("/entrar");
  };

  const handleRemoveImage = () => {
    setForm((prev) => ({
      ...prev,
      image: "",
    }));
  };

  return (
    <Layout>
      <section className={styles.containerRegister}>
        <div className={styles.imageRegister}>
          <img
            src={Image}
            alt="Imagem ilustrativa de login"
            className={styles.imageArea}
          />
        </div>
        <div className={styles.registerBox}>
          <h2>Criar conta</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>Nome</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Cidade - Estado</label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label>Senha</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Descreva um pouco sobre você</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>

            <div className={styles.field}>
              <label>Imagem de perfil</label>

              {form.image ? (
                <div
                  className={styles.previewWrapper}
                  onClick={handleRemoveImage}
                >
                  <img
                    src={form.image}
                    alt="Preview"
                    className={styles.preview}
                  />
                  <span className={styles.removeIcon}>×</span>
                </div>
              ) : (
                <label htmlFor="image" className={styles.uploadButton}>
                  Escolher imagem
                </label>
              )}

              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImage}
                className={styles.inputImage}
              />
            </div>

            <Button type="submit">Cadastrar</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterComp;
