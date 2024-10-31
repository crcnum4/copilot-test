import { NextApiRequest, NextApiResponse } from 'next';

const tweets = [
  { username: 'user1', content: 'Hello World!' },
  { username: 'user2', content: 'Next.js is awesome!' },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(tweets);
};