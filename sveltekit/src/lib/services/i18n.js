import {
    dictionary,
    locale,
    _
  } from 'svelte-i18n';

  
import es from './../lang/es.js'
import en from './../lang/en.js'

  function setupI18n({
    withLocale: _locale
  } = {
    withLocale: 'en'
  }) {
    dictionary.set({
		en: en,
		es: es
	});
    locale.set(_locale);
  }
  export {
    _,
    setupI18n
  };