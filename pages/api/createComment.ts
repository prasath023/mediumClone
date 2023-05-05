// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient  from '@sanity/client'
const config={
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "oe9ae5x1",
    useCdn: process.env.NODE_ENV === "production",
    token:"sk2XYhR76IsM3rU3Dr10W53KzT4DUjCC06SgdzON4aCf8ZSnRFErFC0Zipv2q5IMyiFepz0tY1hWnXVSsiZQFcXot36ZyDMTWTMKReCXXArCqA6NUYqNF5PhLrVgSl36MnGoTNI0C6bfIpBBvUpbG49oX6o17cbqB5JA87LvWcsh9AG0Dhew"
}

const client=sanityClient(config)

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
 const {_id,name,email,comment}=JSON.parse(req.body)

 try{
  await client.create({
    _type:"comment",
    post:{
      _type:"reference",
      _ref:_id,
    },
    name,
    email,
    comment,
  });

 }catch(err){
  console.log(err);
  
      return res.status(500).json({message:"Couldn't submit comment",err})
 }
 console.log("ssss");
 
 return res.status(300).json({message:"Comment submitted"})
}