import Align from '@/components/base/Align';
import { SecondaryTextColor } from '@/components/base/Colors';
import Container from '@/components/base/Container';
import Heading from '@/components/base/Heading';
import LinkButton from '@/components/base/LinkButton';
import BlogTile from '@/components/BlogTile';
import Navigation from '@/components/Navigation';
import { PageProps } from 'gatsby';
import React from 'react';
import Masonry from 'react-masonry-component';

const blogPosts = [
  {
    title: 'Pierwszy lot samolotem',
    date: { day: 2, month: 6, year: 2020 },
    image:
      'https://images.unsplash.com/photo-1503152394-c571994fd383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    imageAlt: '',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lectus iaculis ut amet, consequat. Iaculis vivamus pharetra fringilla sit. Vitae est.',
    wordsCount: 120,
  },
  {
    title: 'Drugi lot samolotem',
    date: { day: 1, month: 2, year: 2020 },
    image:
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
    imageAlt: 'alt',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lectus iaculis ut amet, consequat. Iaculis vivamus pharetra fringilla sit. Vitae est.',
    wordsCount: 240,
  },
  {
    title: 'Trzeci lot samolotem',
    date: { day: 12, month: 1, year: 2020 },
    image:
      'https://images.unsplash.com/photo-1590746197887-4420dda1e540?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
    imageAlt: 'alt',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lectus iaculis ut amet, consequat. Iaculis vivamus pharetra fringilla sit. Vitae est.',
    wordsCount: 20,
  },
  {
    title: 'Czwarty lot samolotem',
    date: { day: 1, month: 1, year: 2020 },
    image:
      'https://images.unsplash.com/photo-1579019689750-670379352ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2732&q=80',
    imageAlt: 'alt',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lectus iaculis ut amet, consequat. Iaculis vivamus pharetra fringilla sit. Vitae est.',
    wordsCount: 480,
  },
  {
    title: 'Piąty lot samolotem',
    date: { day: 2, month: 6, year: 2020 },
    image:
      'https://images.unsplash.com/photo-1503152394-c571994fd383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    imageAlt: '',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lectus iaculis ut amet, consequat. Iaculis vivamus pharetra fringilla sit. Vitae est.',
    wordsCount: 120,
  },
  {
    title: 'Szósty lot samolotem',
    date: { day: 1, month: 2, year: 2020 },
    image:
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
    imageAlt: 'alt',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lectus iaculis ut amet, consequat. Iaculis vivamus pharetra fringilla sit. Vitae est.',
    wordsCount: 240,
  },
  {
    title: 'Siódmy lot samolotem',
    date: { day: 12, month: 1, year: 2020 },
    image:
      'https://images.unsplash.com/photo-1590746197887-4420dda1e540?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
    imageAlt: 'alt',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lectus iaculis ut amet, consequat. Iaculis vivamus pharetra fringilla sit. Vitae est.',
    wordsCount: 20,
  },
  {
    title: 'ósmy lot samolotem',
    date: { day: 1, month: 1, year: 2020 },
    image:
      'https://images.unsplash.com/photo-1579019689750-670379352ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2732&q=80',
    imageAlt: 'alt',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lectus iaculis ut amet, consequat. Iaculis vivamus pharetra fringilla sit. Vitae est.',
    wordsCount: 480,
  },
];
const Home: React.FC<PageProps> = () => (
  <>
    <Navigation />
    <main>
      <Container>
        <SecondaryTextColor>
          <Align horizontal="center" text="center">
            <Heading>Podróżowanie z wygodą</Heading>
            <p style={{ marginBottom: '1em', maxWidth: '40rem' }}>
              Jedzenie śniadań, ograniczenie spożycia produktów
              wysoko-przetworzonych i soli. Jedzenie śniadań, ograniczenie
              spożycia produktów wysoko-przetworzonych i soli.
            </p>
            <LinkButton to="test" text="Poznaj nas" />
          </Align>
        </SecondaryTextColor>
        <Masonry>
          {blogPosts.map(
            ({ title, date, image, imageAlt, text, wordsCount }) => (
              <BlogTile
                title={title}
                date={date}
                image={image}
                imageAlt={imageAlt}
                text={text}
                readTime={Math.ceil(wordsCount / 100)}
              />
            )
          )}
        </Masonry>
      </Container>
    </main>
  </>
);

export default Home;
