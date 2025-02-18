// src/api/services.ts
import {
  IServicePageResponse,
  StrapiCommonResponse,
  StrapiHomeResponse,
} from "@/types/strapi";
import { apiFetch } from "./apiConfig";
import { ServiceResponse, TeamMembersResponse } from "@/types/services";
import { BlogListing, BlogListingResponse } from "@/types/blogs";

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
    "heroBGSlider.desktopImage",
    "heroBGSlider.mobileImage",
    "heroCTAList",
    "statisticsCounters",
    "sliderTabs",
    "aboutSectionImage",
    "clientsLogoList",
  ]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  return apiFetch<StrapiHomeResponse>(`/home?${populateFields}`);
}

export async function getTeamMembers() {
  const populateFields = ["image"]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  return apiFetch<TeamMembersResponse>(`/team-members?${populateFields}`);
}

export async function getServices() {
  const populateFields = ["highlightImage", "icon", "tableOfContent"]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  return apiFetch<ServiceResponse>(`/services?${populateFields}`);
}

export async function getServicePage() {
  const populateFields = [
    "clientsLogoList",
    "slider",
    "camoServices.logoList",
    "camoServices.image",
    "recordReview.highlightImage",
    "recordReview.leftImage",
    "recordDigitization.highlightImage",
    "recordDigitization.leftImage",
    "recordDigitization.logoList",
    "aerobox.leftImage",
    "aeroops.rightImage",
    "aerooil.rightImage",
    "engineStand.rightImage",
  ]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  return apiFetch<IServicePageResponse>(`/service-page?${populateFields}`);
}

export async function getBlogsList() {
  const populate = ["highlightImage"]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  return apiFetch<BlogListingResponse>(`/blogs?${populate}`);
}

export async function getBlogBySlug(slug: string): Promise<BlogListing | null> {
  const populate = ["highlightImage"]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await apiFetch<any>(
      `/blogs?filters[slug]=${slug}&${populate}`
    );

    if (response.data && response.data.length > 0) {
      return response.data[0];
    }

    return null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
