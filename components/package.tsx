import * as React from "react"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export interface PackageProps {
    title: string,
    content: string,
    footer: string,
}

export default function Package(props: PackageProps) {
    const {title,content,footer} = props;
    return (
        <Card className="!bg-transparent !border-gold mb-8 md:mb-0">
            <CardHeader>
                <CardTitle className="font-poiret text-xl">{title}</CardTitle>
                <CardDescription>{content}</CardDescription>
            </CardHeader>

            <CardFooter>
                <p className="text-offwhitedarker text-lg"><span className="text-gold">{footer}</span> + cost of alcohol</p>
            </CardFooter>
        </Card>
    )
}