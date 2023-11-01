import { BASE_API_URL } from "@/constants/constants";
import { SUBMIT_BRAND_ENDPOINT } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const brandService = {
  makeSubmission,
};

const BRANDS_URL = `${BASE_API_URL}${SUBMIT_BRAND_ENDPOINT}`;

async function makeSubmission(
  name: string,
  website: string,
  categories: string[],
  whyReason: string
) {
  return await fetchWrapper.post(`${BRANDS_URL}`, {
    name: name,
    website: website,
    categories: categories,
    why_reason: whyReason,
  });
}
