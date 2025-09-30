'use server';

import { i } from "framer-motion/client";
import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const term = formData.get("term");
  if (typeof term !== "string" || !term) {
    return;
  }
  redirect(`/search?term=${term}`);
}