import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  // const selected = localStorage.getItem('i18nextLng') || 'cs';
  // const { t } = useTranslation();
  const csBorder = i18n.language === 'cs' ? {} : { boxShadow: 'none' };
  const enBorder = i18n.language === 'en' ? {} : { boxShadow: 'none' };

  return (
    <div>
      <button style={csBorder} type="button" onClick={() => { i18n.changeLanguage('cs'); }}>CZ</button>
      <button style={enBorder} type="button" onClick={() => { i18n.changeLanguage('en'); }}>ENG</button>
    </div>
  );
};

export default LanguageSelect;
