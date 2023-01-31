// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import database from '@/lib/search/database.json';
import { ISearchData } from '@/lib/search/types';
import type { NextApiRequest, NextApiResponse } from 'next';

interface IApiSearchRequest extends NextApiRequest {
  body: { searchTerm?: string };
}

export type IApiSearchResponseData = ISearchData[];

export default function handler(
  req: IApiSearchRequest,
  res: NextApiResponse<IApiSearchResponseData>
) {
  const {
    body: { searchTerm },
  } = req;

  //const searchTerm = req.body.searchTerm
  if (req.method === 'POST' && searchTerm && searchTerm.length > 0) {
    const searchPattern = new RegExp(searchTerm, 'i');

    const filteredResult = database.filter((result) => {
      return (
        searchPattern.test(result.title) || searchPattern.test(result.text)
      );
    });
    res.status(200).json(filteredResult);
  } else {
    res.status(400).json([]);
  }
}
