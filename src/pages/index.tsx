import React from 'react';
import Masonry from 'react-masonry-component';
import { PageProps, graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import getThumbnailSize from '@/utils/getThumbnailSize';
import Align from '@/components/base/Align';
import { SecondaryTextColor } from '@/components/base/Colors';
import Container from '@/components/base/Container';
import Heading from '@/components/base/Heading';
import LinkButton from '@/components/base/LinkButton';
import BlogTile from '@/components/BlogTile';
import Navigation from '@/components/Navigation';
import Map from '@/components/Map';

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
        <Masonry
          options={{ fitWidth: true }}
          style={{ margin: '0 auto', maxWidth: '100%' }}
        >
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
        <Align horizontal="center">
          <LinkButton text="Czytaj więcej" to="/blog" />
        </Align>
      </Container>
      <div>
        <Container>
          <Heading level={2}>O nas</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            laoreet maximus nibh in consectetur. Aliquam mi augue... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Maecenas laoreet
            maximus nibh in consectetur. Aliquam mi augue
          </p>
          <LinkButton text="O nas" to="/about" />
        </Container>
      </div>
      <div style={{ backgroundColor: '#F6F6F6' }}>
        <div style={{ overflow: 'hidden' }}>
          <Container>
            <Heading style={{ textAlign: 'center' }} level={2}>
              Co udało nam się zwiedzić?
            </Heading>
          </Container>

          <div style={{ position: 'relative' }}>
            <Map style={{ position: 'relative', zIndex: 1 }} active />
            <Map
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150%',
                opacity: '0.1',
              }}
            />
          </div>
        </div>
        <Container>
          <Heading level={2}>Nasze social media</Heading>
          <p>
            Wstawiamy zdjęcia odwiedzonych miejsc i opowiadamay historie ze
            świata. Codziennie możesz usłyszeć od nas coś nowego
          </p>
          <a rel="noreferrer noopener" target="_blank" href="yt">
            YouTube
            {/* <YouTubeIcon/> */}
          </a>
          <a rel="noreferrer noopener" target="_blank" href="in">
            Instagram
            {/* <InstagramIcon/> */}
          </a>
          <a rel="noreferrer noopener" target="_blank" href="li">
            LinkedIn
            {/* <LinkedInIcon/> */}
          </a>
        </Container>
      </div>
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
