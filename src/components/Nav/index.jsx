import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Layout } from "../Layout";
import User from "../User";
import styles from "./style.module.scss";
import IconMenu from "../../assets/menu.png";
import IconClose from "../../assets/close.png";

const LinksMenu = ({ isMobile, closeMenu }) => {
  return (
    <nav className={isMobile && styles.boxMenu}>
      {isMobile && (
        <>
          <User isMobile={true} closeMenu={closeMenu} />
          <div className={styles.division} />
        </>
      )}
      <Link to="/doacao" className={styles.link} onClick={closeMenu}>
        Doação
      </Link>
      <Link to="/voluntarios" className={styles.link} onClick={closeMenu}>
        Voluntariado
      </Link>
      <Link to="/mentoria" className={styles.link} onClick={closeMenu}>
        Mentoria
      </Link>
      <Link
        to="/eventos-e-palestras"
        className={styles.link}
        onClick={closeMenu}
      >
        Eventos & Palestras
      </Link>
    </nav>
  );
};

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

   const openMenuRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (openMenuRef.current && !openMenuRef.current.contains(event.target)) {
          setOpenMenu(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setOpenMenu(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <section className={styles.containerHeader}>
      <Layout noPaddingTopAndBottom>
        <header>
          <Link to="/">
            <img src={Logo} alt="Logo do site" />
          </Link>

          {!isMobile && <LinksMenu />}

          {!isMobile && <User />}

          {isMobile && (
            <div className={styles.containerMenu} ref={openMenuRef}>
              <img
                src={openMenu ? IconClose : IconMenu}
                alt="Icone Menu"
                className={styles.iconMenu}
                onClick={() => setOpenMenu(!openMenu)}
              />

              {openMenu && (
                <LinksMenu isMobile={isMobile} closeMenu={handleCloseMenu} />
              )}
            </div>
          )}
        </header>
      </Layout>
    </section>
  );
};

export default Nav;
