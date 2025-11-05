import React from 'react';
import '../Styles/Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <p>{t("footer")}</p>
    </footer>
  );
}

export default Footer;