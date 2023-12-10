"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface DashboardCardProps {
  data: DashboardResponse;
}

export default function DashboardCard({ data }: DashboardCardProps) {
  const router = useRouter();
  return (
    <Card
      onClick={(e) => {
        e.stopPropagation();
        router.push("/brands");
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Sustainable Brands
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.brands} Brands</div>
        <p className="text-xs text-[#008000] text-muted-foreground">
          {data.new_brands_last_week} added last week
        </p>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push("/brands/new-submission");
          }}
          className="mt-4"
        >
          Make a submission
        </Button>
      </CardContent>
    </Card>
  );
}
