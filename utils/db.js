import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon("postgresql://ai%20mock%20interview_owner:aQ7GxFrR2qHj@ep-quiet-hat-a5sn0e5z.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require");
export const db = drizzle(sql,{schema});
