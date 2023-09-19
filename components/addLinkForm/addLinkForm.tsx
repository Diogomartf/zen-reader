"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

const formSchema = z.object({
  link: z.string().url({ message: "Invalid url" }),
});

export function AddLinkForm({
  linkList,
  setLinkList,
}: {
  linkList: string[];
  setLinkList: Dispatch<SetStateAction<string[]>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    let newLinkList = linkList.concat(values.link);
    setLinkList(newLinkList);
    form.resetField("link");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-2 items-baseline"
      >
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem className="col-span-10">
              <FormControl>
                <Input placeholder="https://diogo.xyz/" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="col-span-2 mt-1" type="submit">
          Save for later
        </Button>
      </form>
    </Form>
  );
}
