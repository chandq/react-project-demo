import antdEn from 'antd/lib/locale-provider/en_US';
import appLocaleData from 'react-intl/locale-data/en';
import enMessages from '../../locales/en.json';

const en_US = {
  messages: {
    ...enMessages,
  },
  antd: antdEn,
  locale: 'en',
  data: appLocaleData,
};
export default en_US;