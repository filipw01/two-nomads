import React from 'react';
import Masonry from 'react-masonry-component';
import { PageProps, graphql } from 'gatsby';
import GatsbyImage, { FixedObject, FluidObject } from 'gatsby-image';
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
  file: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
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
      <div style={{ backgroundColor: '#2A2A2A', paddingBottom: '6rem' }}>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            backgroundImage:
              'linear-gradient(180deg, rgba(42, 42, 42, 0) 50%, #2A2A2A 100%)',
          }}
        />
        <GatsbyImage
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: 1,
            filter: 'brightness(0.55)',
          }}
          fluid={data.file.childImageSharp.fluid}
        />
        <Container style={{ position: 'relative', zIndex: 2 }}>
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
            style={{ margin: '0 auto', maxWidth: '100%', padding: '2rem 0' }}
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
            <SecondaryTextColor>
              <LinkButton text="Czytaj więcej" to="/blog" />
            </SecondaryTextColor>
          </Align>
        </Container>
      </div>
      <section>
        <Container size="small" style={{ textAlign: 'center' }}>
          <Heading level={2}>O nas</Heading>
          <p style={{ marginBottom: '1.5rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            laoreet maximus nibh in consectetur. Aliquam mi augue... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Maecenas laoreet
            maximus nibh in consectetur. Aliquam mi augue...
          </p>
          <LinkButton text="O nas" to="/about" />
        </Container>
      </section>
      ;
      <div style={{ backgroundColor: '#F6F6F6' }}>
        <section style={{ overflow: 'hidden' }}>
          <Container>
            <Heading style={{ textAlign: 'center' }} level={2}>
              Co udało nam się zwiedzić?
            </Heading>
          </Container>

          <div style={{ position: 'relative', marginTop: '2rem' }}>
            <Map style={{ position: 'relative', zIndex: 1 }} active />
            <Map
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '135%',
                opacity: '0.05',
              }}
            />
          </div>
        </section>
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
      ;
    </main>
  </>
);
export default Home;

export const query = graphql`
  query {
    file(name: { eq: "background" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
