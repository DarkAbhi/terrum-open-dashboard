import { DashboardHeader } from "@/components/header";
import { Metadata } from "next";
import { BASE_API_URL } from "@/constants/constants";
import { ALL_SHOPPING_CATEGORIES_ENDPOINT } from "@/constants/routes";
import SubmitBrandForm from "@/components/brand/submit-brand-form";

export const metadata: Metadata = {
  title: "Create brand",
};

export default async function CreateBrandPage() {
  const apiResponse = await fetch(
    `${BASE_API_URL}${ALL_SHOPPING_CATEGORIES_ENDPOINT}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const shoppingCategories = await apiResponse.json();

  return (
    <div className="mx-12 mt-4">
      <DashboardHeader
        heading="Suggest a Sustainable Brand"
        text="Help us grow our eco-friendly community by submitting your favorite sustainable brand."
      ></DashboardHeader>
      <SubmitBrandForm shoppingCategories={shoppingCategories} />
    </div>
  );
}
