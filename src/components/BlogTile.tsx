import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import Heading from './base/Heading';

const Card = styled.article`
  border-radius: 0.5rem;
  overflow: hidden;
  color: #000;
  width: 400px;
  max-width: 100%;
  margin: 1rem;
  box-shadow: 2px 3px 6px rgba(180, 180, 180, 0.16),
    2px 12px 14px rgba(180, 180, 180, 0.17),
    0px 2px 4px rgba(180, 180, 180, 0.2);
  @media (min-width: 768px) {
    max-width: calc(50% - 2rem);
  }
  @media (min-width: 1366px) {
    max-width: calc(33% - 2rem);
  }
  .link {
    display: block;
    margin-top: 1.5rem;
  }
  .image-overlay,
  .image,
  .link,
  .tileText {
    transition: transform 0.2s ease-out;
  }
  .image-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) calc(100% - 40px),
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(
        45deg,
        rgba(255, 255, 255, 0) 35%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 65%
      );
    background-size: auto, 2000px 2000px;
    background-repeat: no-repeat;
    background-position: 0, 0px -1000px;
  }

  :hover {
    .image {
      transform: scale(1.1);
    }
    .image-overlay,
    .tileText {
      transform: translateY(-1.5rem);
      transition: background-position 0.5s ease-out, transform 0.2s ease-out;
    }
    .image-overlay {
      background-position: 0, -1000px 0px;
    }
    .link {
      transform: translateY(-1rem);
      display: block;
    }
  }
`;

type Date = { day: number; month: number; year: number };

interface Props {
  title: string;
  image: FixedObject;
  imageAlt: string;
  imageSize: number;
  text: string;
  date: Date;
  readTime: number;
  path: string;
}

const BlogTile: React.FC<Props> = ({
  title,
  text,
  date,
  readTime,
  image,
  imageSize,
  imageAlt,
  path,
}) => {
  const { year, month, day } = date;
  const formattedDate = new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, month, day));

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { name: { in: ["calendar", "text", "arrow"] } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          publicURL
        }
      }
    }
  `);

  const { nodes } = data.allFile;
  const arrowIcon = nodes[0].publicURL;
  const calendarIcon = nodes[1].publicURL;
  const textIcon = nodes[2].publicURL;

  return (
    <Card>
      <Link to={path} style={{ position: 'relative', display: 'block' }}>
        <Img
          className="image"
          fixed={image}
          alt={imageAlt}
          style={{ display: 'block', width: 'auto', height: `${imageSize}px` }}
        />
        <div className="image-overlay">
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
              lineHeight: '1',
            }}
          >
            <time
              style={{ display: 'flex', alignItems: 'center' }}
              dateTime={`${year}-${month}-${day}`}
            >
              <img
                style={{ height: '10px', marginRight: '5px' }}
                src={calendarIcon}
                alt=""
              />
              {formattedDate}
            </time>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {readTime} min read
              <img
                style={{ height: '8px', marginLeft: '5px' }}
                src={textIcon}
                alt=""
              />
            </span>
          </div>
        </div>
      </Link>
      <div
        className="tileText"
        style={{
          padding: '1.5rem 2rem 0.5rem 2rem',
          marginBottom: '-1.5rem',
          background: '#fff',
        }}
      >
        <Link to={path}>
          <Heading level={3}>{title}</Heading>
        </Link>
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: '1.4',
            marginBottom: '0.5rem',
          }}
        >
          {text}
        </p>
        <Link
          className="link"
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
          }}
          to={path}
        >
          Read more
          <img
            style={{ width: '16px', marginLeft: '6px' }}
            src={arrowIcon}
            alt=""
          />
        </Link>
      </div>
    </Card>
  );
};

export default BlogTile;
