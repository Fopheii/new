import fs from 'fs';

const robots = () => {};

export async function getServerSideProps({ res }) {
  const robots = fs.readFileSync('./public/myrobots.txt', 'utf-8');

  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
}

export default robots;
