"use client"
import React, { useRef, RefObject, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"


const FormSchema = z.object({
    name: z.string().min(3, {
        message: "must be at least 3 characters",
    }),
    email: z.string().email({
        message: "must be a valid email address"
    }),
    message: z.string().min(3, {
        message: "must be at least 3 characters",
    }),
})

export function ContactForm() {
    const formRef: RefObject<HTMLFormElement | null> = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    })
    const { toast } = useToast()

    function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true);
        const { name, email, message } = data;

        emailjs
            .send(
                'service_vowpen6', // Replace with your EmailJS service ID
                'template_xlzsszh', // Replace with your EmailJS template ID
                {
                    user_name: name,
                    user_email: email,
                    message: message,
                },
                'SSaI3y3C4vgq25byH' // Replace with your EmailJS public key
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast({
                        title: "Thank you for reaching out!",
                        description: (
                            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                                <p>Your message has been submitted!</p>
                            </pre>
                        ),
                    });
                    form.reset(); // Clear the form
                    setIsLoading(false);
                },
                (error) => {
                    console.error('FAILED...', error);
                    toast({
                        title: "Error",
                        description: (
                            <pre className="mt-2 w-[340px] rounded-md bg-red-400 p-4 text-offwhite">
                                <p>Please try again...</p>
                            </pre>
                        ),
                    });
                    setIsLoading(false);
                }


            );
    }






    return (
        <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-9/12 space-y-6 text-dark rounded-2xl ">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>name</FormLabel>
                            <FormControl>
                                <Input placeholder="your name" {...field} />
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
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="your email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="your message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="secondary" disabled={isLoading}>
                    {isLoading &&
                        <Loader2 className="animate-spin" />
                    }
                    Submit
                </Button>
            </form>
        </Form>
    )
}
