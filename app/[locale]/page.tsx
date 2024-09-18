import React from 'react';
import initTranslation from '../i18n';
import TranslationsProvider from '@/components/providers/translation-provider';
import Navbar from '@/components/layout/navbar';


interface HomeProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ['default', 'auth'];

export default async function Home({ params: { locale } }: HomeProps) {
  const { t, resources } = await initTranslation(locale, i18nNamespaces);


  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <main >
        <Navbar/>
      </main>
    </TranslationsProvider>
  );
}
