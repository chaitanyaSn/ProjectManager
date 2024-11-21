import { PrismaClient } from "@prisma/client";

export const db=globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV!=="production"){
    globalThis.prisma=db;
}


//globalTis.prisma :this global variable ensures that the prisma client instance
//is reused across hot reloads during devlopment .without this,each time your application reloads,
//a new instance of the prisma Client would be createDefineEnv,potentially leading to connection IssueStatus.