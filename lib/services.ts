// src/api/services.ts
import { StrapiCommonResponse } from "@/types/strapi";
import { apiFetch } from "./apiConfig";

export async function getCommonData() {
  const populateFields = [
    "logoSmall",
    "logoLarge",
    "headerMenu",
    "footerMenu",
    "contactList.icon",
    "socialLinks.icon",
  ]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  return apiFetch<StrapiCommonResponse>(`/common?${populateFields}`);
}

export async function getHomePage() {
  const populateFields = [
    "heroBGVideo",
    "heroCTAList",
    "statisticsCounters",
    "sliderTabs",
    "aboutSectionImage",
    "clientsLogoList",
  ]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  console.log(populateFields);

  return apiFetch<StrapiCommonResponse>(`/home?${populateFields}`);
}
