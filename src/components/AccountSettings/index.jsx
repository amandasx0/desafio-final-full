import { useState } from "react";
import { Layout } from "../Layout";
import IconPin from "../../assets/pin.png";
import IconEmail from "../../assets/e-mail.png";
import IconCalendar from "../../assets/calendar.png";

import styles from "./style.module.scss";

const AccountSettingsComp = () => {
  const [user] = useState(() => {
    try {
      const userStorage = localStorage.getItem("@user");
      return userStorage ? JSON.parse(userStorage) : null;
    } catch {
      return null;
    }
  });

  const memberSince = new Date(user.createdAt).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <Layout>
      <section className={styles.containerAccount}>
        <img
          src={user.image}
          alt="Foto de perfil"
          className={styles.imageAccount}
        />

        <div>
          <h6 className={styles.titleAccount}>{user.name}</h6>
          <p className={styles.subtitleAccount}>Voluntário ativo</p>
          <p>{user.description}</p>
          <section className={styles.boxInformationAccount}>
            <div>
              <img src={IconPin} alt="Icone localização" />
              <p className={styles.textInfos}>{user.country}</p>
            </div>
            <div>
              <img src={IconEmail} alt="Icone email" />
              <p className={styles.textInfos}>{user.email}</p>
            </div>
            <div>
              <img src={IconCalendar} alt="Icone calendário" />
              <p className={styles.textInfos}>Membro desde de {memberSince}</p>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default AccountSettingsComp;
