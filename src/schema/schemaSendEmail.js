import { Phone } from "lucide-react";
import z, { string } from "zod";

export const schemaSendEmail = z.object({
    name:z.string().min(3,"Name must be at least 2 characters").max(20,"Name must be at most 20 characters"),
    email:z.string().email("Invalid email address"),
    Phone:z.string().optional(),
    message:z.string().min(10,"Message must be at least 10 characters").max(150,'Message must be at most 20 characters')
});