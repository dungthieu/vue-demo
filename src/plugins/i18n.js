import { createI18n } from "vue-i18n";

import vi from "@/locales/vi.json";

const messages = {
  vn: vi,
};

export default createI18n({
  locale: "vn", // set locale
  messages,
  fallbackLocale: "vn",
});
