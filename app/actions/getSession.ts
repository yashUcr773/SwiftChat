import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/config";

export default async function getSession() {
    return await getServerSession(authOptions);
}