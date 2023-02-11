import type { NextApiRequest, NextApiResponse } from 'next'

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {

  res.status(200).end();
};


export default getProjects;