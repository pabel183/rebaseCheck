import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    try{
        const {movieId}=req.query;
        
        if(typeof movieId !== "string"){
            throw new Error("Invalid ID");
        }

        if(!movieId){
            throw new Error("Invalid ID");
        }

        const movie=await prismadb.movie.findUnique({
            where:{
                id:movieId
            }
        });

        if(!movie){
            throw new Error("Invalid ID");
        }

        return res.status(200).json(movie);
    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}