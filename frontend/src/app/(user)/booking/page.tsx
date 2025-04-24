"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ListGroup, ListGroupItem } from "reactstrap";


type BookingProps = {
  tour: {
    id: number;
    title: string;
    price: number;
    location: string;
    description: string;
    image: string;
    reviews?: any[];
  };
  avgRating: number;
  totalReviews: number;
};

// 1. Form validation schema
const bookingSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contactNumber: z
    .string()
    .min(7, { message: "Contact Number is too short" })
    .max(15, { message: "Contact Number is too long" }),
  date: z.string().min(1, { message: "Please select a date" }),
  guestSize: z.coerce.number().min(1, { message: "At least 1 guest required" }),
  specialRequest: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const Booking = ({ tour, avgRating, totalReviews }: BookingProps) => {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      date: "",
      guestSize: 1,
      specialRequest: "",
    },
  });

  const router = useRouter();

  if (!tour) {
    return (
      <div className="text-center text-red-500 font-bold p-10 mt-52">
        No tour selected yet.
      </div>
    );
  }

  const handleBookingSubmit = (values: BookingFormValues) => {
    console.log("Booking Data:", values);

    // Show success toast
    toast.success("Booking submitted successfully! 📅");

    // Redirect to thankyou page after a small delay
    setTimeout(() => {
      router.push("/thankyou");
    }, 1000);

    form.reset();
  };

  return (
    <div>
      {/* Toaster for showing toast messages */}
      <Toaster position="top-center" reverseOrder={false} />

      <Card className="bg-white p-6 w-xl rounded-2xl shadow-lg ">
        <CardContent className="space-y-6 ">
          {/* Tour Summary */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Book this Tour 📅
            </h2>
            <p className="text-gray-700 text-lg">🏝️ {tour.title}</p>
            <p className="text-green-600 font-semibold text-lg">
              💵 ${tour.price} per person
            </p>
            <p className="text-yellow-500 text-lg">
              ⭐{" "}
              {avgRating && !isNaN(avgRating)
                ? avgRating.toFixed(1)
                : "Not rated yet"}{" "}
              ({totalReviews} reviews)
            </p>
          </div>

          {/* Booking Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleBookingSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Your Contact Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="guestSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guest Size</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        max={7}
                        placeholder="Number of Guests"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialRequest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Request</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any special requests?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Booking Summary */}
              <ListGroup className="space-y-2">
                <ListGroupItem className="flex justify-between items-center border-0 px-0">
                  <h4 className="flex items-center gap-1 text-base font-medium">
                    ${tour.price} <span className="text-gray-500">×</span>{" "}
                    {form.watch("guestSize")} person(s)
                  </h4>
                  <span className="text-base font-semibold">
                    ${tour.price * form.watch("guestSize")}
                  </span>
                </ListGroupItem>

                <ListGroupItem className="flex justify-between items-center border-0 px-0">
                  <h4 className="text-base font-medium">Service Charge</h4>
                  <span className="text-base font-semibold">$10</span>
                </ListGroupItem>

                <ListGroupItem className="flex justify-between items-center border-0 px-0">
                  <h4 className="text-base font-bold">Total</h4>
                  <span className="text-base font-bold">
                    ${tour.price * form.watch("guestSize") + 10}
                  </span>
                </ListGroupItem>
              </ListGroup>

              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 transition duration-300"
              >
                Booking Now
              </Button>
            </form>
          </Form>
        </CardContent>
       
      </Card>
      
    </div>
  );
};

export default Booking;
