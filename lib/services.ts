// src/api/services.ts
import { StrapiCommonResponse } from "@/types/strapi";
import { apiFetch } from "./apiConfig";

export async function getCommonData() {
  return apiFetch<StrapiCommonResponse>(
    "/common?populate[0]=logoSmall&populate[1]=logoLarge&populate[2]=headerMenu&populate[3]=footerMenu&populate[4]=contactList&populate[5]=socialLinks"
  );
}
