import React from 'react';
import { Helmet } from 'react-helmet';

interface PageProps {
  children: React.ReactNode;
  title: string;
}

function Page(props: PageProps) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      {props.children}
    </React.Fragment>
  );
}

export default Page;
