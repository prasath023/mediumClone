import { createClient, createCurrentUserHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "oe9ae5x1",
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production",
}
export const sanityClient = createClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const useCurrentUser = createCurrentUserHook(config)