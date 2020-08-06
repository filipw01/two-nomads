import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Heading from './base/Heading';
import LinkButton from './base/LinkButton';
// import Img from 'gatsby-image';

const Card = styled.article`
  border-radius: 0.5rem;
  overflow: hidden;
  color: #000;
  width: 400px;
  max-width: 100%;
  margin: 1rem;
  @media (min-width: 768px) {
    max-width: calc(50% - 2rem);
  }
  @media (min-width: 1366px) {
    max-width: calc(33% - 2rem);
  }
  :hover {
    .offsetBottom {
      transition: transform 0.3s ease-out;
      transform: translateY(-4.5rem);
    }
  }
`;

type Date = { day: number; month: number; year: number };

interface Props {
  title: string;
  image: string;
  imageAlt: string;
  text: string;
  date: Date;
  readTime: number;
}

const BlogTile: React.FC<Props> = ({
  title,
  text,
  date,
  readTime,
  image,
  imageAlt,
}) => {
  const { year, month, day } = date;
  const formattedDate = new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, month, day));

  return (
    <Card>
      <Link to="/test" style={{ position: 'relative', display: 'block' }}>
        <img src={image} alt={imageAlt} />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundImage:
              'linear-gradient(180deg, rgba(0, 0, 0, 0) calc(100% - 40px), rgba(0, 0, 0, 0.6) 100%)',
          }}
        />
        <div
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '0.75rem',
            margin: '0 1.5rem',
            display: 'flex',
            width: 'auto',
            color: '#fff',
            justifyContent: 'space-between',
          }}
        >
          <time dateTime={`${year}-${month}-${day}`}>{formattedDate}</time>
          <span>{readTime} min read</span>
        </div>
      </Link>
      <div
        className="offsetBottom"
        style={{
          padding: '1.5rem 2rem',
          marginBottom: '-4.5rem',
          background: '#fff',
        }}
      >
        <Link to="/test">
          <Heading level={3}>{title}</Heading>
        </Link>
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: '1.4',
            marginBottom: '1rem',
          }}
        >
          {text}
        </p>
        <LinkButton to="/test" text="Read more" />
      </div>
    </Card>
  );
};

export default BlogTile;
