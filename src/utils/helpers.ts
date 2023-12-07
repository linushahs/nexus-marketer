import { Blog } from "@/utils/interface";
import sanityClient from "@/utils/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

export function convertDateFormat(inputDate: string) {
  // Parse the input date string
  const dateObject = new Date(inputDate);

  // Extract the components of the date
  const year = dateObject.getUTCFullYear();
  const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = dateObject.getUTCDate().toString().padStart(2, "0");

  // Create the new date string in the desired format
  const formattedDate = `${year}.${month}.${day}`;

  return formattedDate;
}

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: string) {
  return builder.image(source);
}

//validate email
export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
