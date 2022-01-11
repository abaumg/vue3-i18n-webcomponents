import { defineCustomElement } from 'vue'
import App from './App.vue'

customElements.define("test-project", defineCustomElement(App));
