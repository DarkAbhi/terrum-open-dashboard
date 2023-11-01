import { LandingHeader } from "@/components/home-page-header";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BASE_API_URL } from "@/constants/constants";
import { DASHBOARD_HOME_ENDPOINT } from "@/constants/routes";

export default async function Home() {
  const dashboardHomeApiResponse = await fetch(
    `${BASE_API_URL}${DASHBOARD_HOME_ENDPOINT}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const dashboardHomeResponse = await dashboardHomeApiResponse.json();

  return (
    <div className="flex flex-col my-6 mx-12">
      <div className="font-bold text-4xl">Dashboard</div>
      <blockquote className="space-y-2 my-4">
        <p className="text-lg">
          Welcome to Terrum&apos;s Open Dashboard, your go-to resource for
          sustainability and climate action. Here, we are diligently building a
          comprehensive database, encompassing companies, brands, videos,
          audios, and more, all dedicated to furthering sustainability efforts.
        </p>
      </blockquote>
      <div className="grid grid-cols-4 gap-4">
        <Link href={"brands"}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Sustainable Brands
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardHomeResponse.brands} Brands
              </div>
              <p className="text-xs text-[#008000] text-muted-foreground">
                {dashboardHomeResponse.new_brands_last_week} added last week
              </p>
              <Link href={"/brands/new-submission"}>
                <Button className="mt-4">Make a submission</Button>
              </Link>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
