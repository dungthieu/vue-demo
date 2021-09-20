import VueI18n from 'vue-i18n';
import  Vi from '@/locales/vi.json'
const messages = {
    'en': {},
    'vi': Vi
};

const i18n = new VueI18n({
    locale: 'vi', // set locale
    fallbackLocale: 'vi', // set fallback locale
    messages, // set locale messages
});
export default i18n;