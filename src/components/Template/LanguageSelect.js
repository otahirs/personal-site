import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  // const selected = localStorage.getItem('i18nextLng') || 'cs';
  // const { t } = useTranslation();
  const selectedStyle = { fontWeight: 'bold', color: '#3c3b3b' };
  const csStyle = i18n.language === 'cs' ? selectedStyle : {};
  const enStyle = i18n.language === 'en' ? selectedStyle : {};

  return (
    <div className="language-select">
      <span style={csStyle} onClick={() => { i18n.changeLanguage('cs'); }}>CZ</span>
      <span style={enStyle} onClick={() => { i18n.changeLanguage('en'); }}>ENG</span>
    </div>
  );
};

export default LanguageSelect;
