import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Button";

import styles from "./style.module.scss";

const User = ({ isMobile = false, closeMenu }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);

  const [user] = useState(() => {
    try {
      const userStorage = localStorage.getItem("@user");
      return userStorage ? JSON.parse(userStorage) : null;
    } catch {
      return null;
    }
  });

  const [logged] = useState(() => {
    try {
      const loggedStorage = localStorage.getItem("@logged");
      return loggedStorage ? JSON.parse(loggedStorage) : null;
    } catch {
      return null;
    }
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = () => {
    navigate("/entrar");
  };

  console.log(isMobile);

  const handleRegister = () => {
    navigate("/cadastrar");
  };

   const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  const firstTwoNames = user?.name.split(" ").slice(0, 2).join(" ");

  return (
    <section>
      {user && logged ? (
        <>
          {!isMobile ? (
            <div className={styles.userArea} ref={dropdownRef}>
              <img
                src={user.image}
                alt="Imagem do usuário"
                className={styles.avatar}
                onClick={() => setOpenDropdown((prev) => !prev)}
              />

              {openDropdown && (
                <div className={styles.dropdown}>
                  <strong>{firstTwoNames}</strong>

                  <ul>
                    <li>Voluntariados</li>
                    <Link onClick={handleCloseDropdown} to={"/configurar-conta"}><li>Configurações de conta</li></Link>
                    <li
                      className={styles.logout}
                      onClick={() => {
                        localStorage.removeItem("@logged");
                        setOpenDropdown(false);
                        window.location.reload();
                      }}
                    >
                      Sair
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.boxInfoMobile}>
              <div className={styles.userInfo}>
                <img src={user.image} alt="User" className={styles.avatar} />
                <strong>{firstTwoNames}</strong>
              </div>

              <ul>
                <li>Voluntariados</li>
                <Link onClick={handleCloseDropdown} to={"/configurar-conta"}><li>Configurações de conta</li></Link>
                <li
                  className={styles.logout}
                  onClick={() => {
                    localStorage.removeItem("@logged");
                    setOpenDropdown(false);
                    window.location.reload();
                  }}
                >
                  Sair
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <div
          className={
            isMobile ? styles.containerButtonMobile : styles.containerButton
          }
        >
          <Button
            isMobile={isMobile}
            onClick={() => {
              handleLogin();
              closeMenu?.();
            }}
          >
            Entrar
          </Button>
          <Button
            isMobile={isMobile}
            variant="outlined"
            onClick={() => {
              handleRegister();
              closeMenu?.();
            }}
          >
            Cadastrar
          </Button>
        </div>
      )}
    </section>
  );
};

export default User;
