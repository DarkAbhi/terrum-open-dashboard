"use client";

import { brandFormSchema } from "@/lib/validations/brand";
import { Input } from "../ui/input";
import * as z from "zod";
import * as React from "react";
import { useToast } from "../ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { brandService } from "@/services/brand.service";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";
import { ShoppingCategory } from "@/types/shopping-category";

type FormData = z.infer<typeof brandFormSchema>;

interface SubmitBrandFormProps {
  shoppingCategories: ShoppingCategory[];
}

export default function SubmitBrandForm({
  shoppingCategories,
}: SubmitBrandFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof brandFormSchema>>({
    resolver: zodResolver(brandFormSchema),
    defaultValues: {
      categories: [],
    },
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    const apiResponse = await brandService.makeSubmission(
      data.name,
      data.website,
      data.categories,
      data.whyReason
    );
    setIsLoading(false);
    if (!apiResponse.error) {
      router.push("/brands");
      router.refresh();
    } else {
      toast({
        variant: "destructive",
        title: "An unexpected error occured.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-2 py-8 flex w-full flex-col space-y-6 sm:w-[350px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Brand name" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="Brand website" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select categories</FormLabel>
              <MultiSelect
                selected={field.value}
                options={shoppingCategories.map((item) => ({
                  label: item.name,
                  value: item.id.toString(),
                }))}
                {...field}
                className="sm:w-[360px]"
              />
              <FormDescription>
                To propose a new category, please reach out to{" "}
                <a href="mailto:abhishek@terrum.in" className="t text-blue-500">
                  abhishek@terrum.in
                </a>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="whyReason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your reasons for wanting this brand included in our sustainable list"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="w-1/2">
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
