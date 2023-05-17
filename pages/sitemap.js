import fs from 'fs';

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
  const sitemap = fs.readFileSync('./public/mysitemap.xml', 'utf-8');

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
