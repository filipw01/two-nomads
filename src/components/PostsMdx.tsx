import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const shortcodes = {};

const Layout: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);

export default Layout;
