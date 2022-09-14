import type { NextApiRequest, NextApiResponse } from 'next';
import { ServiceStatus } from '$types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServiceStatus>
) {
  res.status(200).json(ServiceStatus.OK);
}
