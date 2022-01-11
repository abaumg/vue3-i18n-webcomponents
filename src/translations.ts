import { createI18n } from "vue-i18n";

const messages = {
    de: {
        imTheSecond: "Ich bin die zweite Komponente.",
        myNameIs: "Mein Name ist <strong>{name}</strong>, und meine Lieblingsfarbe ist {color}."
    },
    en: {
        imTheSecond: "I'm the second component.",
        myNameIs: "My name is <strong>{name}</strong> and my favorite color is {color}."
    }
}

export default createI18n({
    legacy: false,
    locale: "de",
    fallbackLocale: "de",
    messages,
});