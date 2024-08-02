"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, PencilIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Dispatch, SetStateAction } from "react";
import { AdBanner } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import Image from "next/image";
import { Button } from "./ui/button";

const bannerSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(5),
  image: z.string(),
  cta: z.string().min(1),
});

const images = ["/ad1.webp", "/ad2.webp", "/ad3.webp", "/ad4.webp"];

const EditBannerTemplate = ({
  banner,
  setBanners,
  index,
}: {
  banner: AdBanner;
  setBanners: Dispatch<SetStateAction<AdBanner[]>>;
  index: number;
}) => {
  const form = useForm<z.infer<typeof bannerSchema>>({
    resolver: zodResolver(bannerSchema),
    defaultValues: {
      title: banner.title,
      description: banner.description,
      cta: banner.cta,
      image: banner.image,
    },
  });

  function onSubmit(values: z.infer<typeof bannerSchema>) {
    setBanners((banners) => {
      const newBanners = [...banners];
      newBanners[index] = {
        ...newBanners[index],
        ...values,
      };
      return newBanners;
    });
  }

  return (
    <Dialog>
      <DialogTrigger>
        <PencilIcon className="text-stone-400 absolute top-2 right-2 size-5" />
      </DialogTrigger>
      <DialogContent className="w-[450px]">
        <DialogHeader>
          <DialogTitle>Edit Banner</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-between">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          onClick={() => field.onChange(image)}
                          className="relative flex items-center justify-center cursor-pointer"
                        >
                          <Image
                            src={image}
                            alt={`Ad ${index + 1}`}
                            width={80}
                            height={80}
                            className={`w-20 h-20 object-cover rounded-full ${
                              field.value === image
                                ? "ring-4 ring-green-500"
                                : ""
                            }`}
                          />
                          {field.value === image && (
                            <CheckIcon className="absolute text-green-500" />
                          )}
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Call to Action</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the Call to action" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full mt-2 bg-green-800 hover:bg-green-900"
            >
              Save
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBannerTemplate;
