import React from 'react';
import { PageProps } from 'gatsby';
import LinkButton from '@/components/LinkButton';
import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';

const Home: React.FC<PageProps> = () => (
  <>
    <Navigation />
    <main>
      <Heading>Podróżowanie z wygodą</Heading>
      <p>
        Jedzenie śniadań, ograniczenie spożycia produktów wysoko-przetworzonych
        i soli.
      </p>
      <Heading level={3}>Tytuł</Heading>
      <Heading level={4}>Tytuł</Heading>
      <LinkButton to="test">test</LinkButton>
    </main>
  </>
);

export default Home;
