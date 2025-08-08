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
    "sliderTabs.image",
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
    "slider.image",
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
    "engineStand.leftImage",
  ]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  return apiFetch<IServicePageResponse>(`/service-page?${populateFields}`);
}

export async function getBlogsList() {
  const populate = ["highlightImage"]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  // Add caching configuration for Next.js
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337/api"
    }/blogs?${populate}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN || ""}`,
      },
      next: {
        revalidate: 3600, // Cache for 1 hour
        tags: ["blogs"], // Add cache tags for targeted revalidation
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.message || "An error occurred while fetching blogs");
  }

  return response.json() as Promise<BlogListingResponse>;
}

export async function getBlogBySlug(slug: string): Promise<BlogListing | null> {
  const populate = ["highlightImage"]
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");

  try {
    // Add caching configuration for Next.js
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337/api"
      }/blogs?filters[slug]=${slug}&${populate}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN || ""}`,
        },
        next: {
          revalidate: 3600, // Cache for 1 hour
          tags: ["blog", `blog-${slug}`], // Add cache tags for targeted revalidation
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        error?.message || "An error occurred while fetching blog"
      );
    }

    const data = await response.json();

    if (data.data && data.data.length > 0) {
      return data.data[0];
    }

    return null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
