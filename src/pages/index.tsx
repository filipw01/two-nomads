import React from 'react';
import { PageProps } from 'gatsby';
import LinkButton from '@/components/LinkButton';
import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';

const Home: React.FC<PageProps> = () => (
  <>
    <Navigation />
    <main>
      <Container>
        <Heading>Podróżowanie z wygodą</Heading>
        <p>
          Jedzenie śniadań, ograniczenie spożycia produktów
          wysoko-przetworzonych i soli.
        </p>
        <Heading level={3}>Tytuł</Heading>
        <Heading level={4}>Tytuł</Heading>
        <LinkButton to="test">test</LinkButton>
      </Container>
    </main>
  </>
);

export default Home;
