import { PageProps, graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import Align from '@/components/base/Align';
import { SecondaryTextColor } from '@/components/base/Colors';
import Container from '@/components/base/Container';
import Heading from '@/components/base/Heading';
import LinkButton from '@/components/base/LinkButton';
import BlogTile from '@/components/BlogTile';
import Navigation from '@/components/Navigation';
import React from 'react';
import Masonry from 'react-masonry-component';
import getThumbnailSize from '@/utils/getThumbnailSize';

interface Query {
  allMdx: {
    nodes: {
      frontmatter: {
        author: string;
        country: string;
        date: string;
        image: { childImageSharp: { fixed: FixedObject } };
        imageSize: string;
        title: string;
        path: string;
      };
      timeToRead: number;
      excerpt: string;
    }[];
  };
}

interface HomepageProps extends PageProps {
  data: Query;
}
const Home: React.FC<HomepageProps> = ({ data }) => (
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
          {data.allMdx.nodes.map(({ excerpt, frontmatter, timeToRead }) => {
            const { title, date, image, imageSize, path } = frontmatter;
            const dateArray = date.split('-');
            const dateObject = {
              day: Number(dateArray[2]),
              month: Number(dateArray[1]),
              year: Number(dateArray[0]),
            };

            return (
              <BlogTile
                key={title}
                title={title}
                date={dateObject}
                path={path}
                image={image.childImageSharp.fixed}
                imageSize={getThumbnailSize(imageSize)}
                imageAlt=""
                text={excerpt}
                readTime={timeToRead}
              />
            );
          })}
        </Masonry>
      </Container>
    </main>
  </>
);

export default Home;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 6) {
      nodes {
        frontmatter {
          author
          country
          date
          path
          imageSize
          image {
            childImageSharp {
              fixed(width: 350, height: 350) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
        }
        timeToRead
        excerpt
      }
    }
  }
`;
