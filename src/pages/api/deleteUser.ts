import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id, requestor } = req.query;
    console.log('requestor', requestor);
   
    
    const user = await prisma.user.delete({
        where: {
        id: id as string,
        },
    });
    
    res.json({ user });
};

export default deleteUser;