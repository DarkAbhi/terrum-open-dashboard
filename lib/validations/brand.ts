import * as z from "zod";

export const brandFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Brand name should be minimum 2 characters" }),
  website: z.string().url({ message: "Enter a valid URL" }),
  categories: z.array(z.string().nonempty("A string cannot be empty")),
  whyReason: z
    .string()
    .min(10, {
      message: "We would like to know why you want this brand listed.",
    }),
});
