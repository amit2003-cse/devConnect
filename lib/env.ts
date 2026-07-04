import {z} from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url("DATABASE_URL must be a valid PostgreSQL connection string"),
    AUTH_SECRET: z.string().min(15,"NEXTAUTH_SECRET must be at least 15 characters long"),
    NODE_ENV: z.enum(["development","production","test"]).default("development"),
});

const parsedEnv = envSchema.safeParse(process.env);

if(!parsedEnv.success) {
    console.error("❌ Invalid environment variables:",
        parsedEnv.error.format());
        throw new Error("Invalid enviroment variables");
}

export const env = parsedEnv.data;