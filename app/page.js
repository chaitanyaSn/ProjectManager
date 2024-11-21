import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, WorkflowIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import faqs from "@/data/faqs.json";
import { Card, CardContent } from "@/components/ui/card";
import CompanyCrousal from "@/components/CompanyCrousal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const features = [
  {
    title: "Intitutive kanban Boards",
    decription:
      "Visualize your workflow and optimize team productivity with our easy-to-use kanban boards",
    icon: <WorkflowIcon />,
  },
  {
    title: "Intitutive kanban Boards",
    decription:
      "Visualize your workflow and optimize team productivity with our easy-to-use kanban boards",
    icon: <WorkflowIcon />,
  },
  {
    title: "Intitutive kanban Boards",
    decription:
      "Visualize your workflow and optimize team productivity with our easy-to-use kanban boards",
    icon: <WorkflowIcon />,
  },
];
export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Stramline Your WorkFlow
          <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with{" "}
            <Image
              src={"/logoipsum-311.svg"}
              alt="logo"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower our tem with solution
        </p>
        <Link href="/onbording/t">
          <Button size="lg" className="mr-2">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href="/features">
          <Button size="lg" className="mr-4" variant="outline">
            Learn more <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
      </section>

      <section id="features" className="bg-gray-900 py-20 px-5 ">
        <div className="container mx-auto">
          <h3 className="mb-12 font-bold text-2xl text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <Card key={index} className="bg-gray-800 p-2">
                  <CardContent>
                    <span className="h-12 w-12 mb-4 text-blue-300">
                      {feature.icon}
                    </span>
                    <h4 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300">{feature.decription}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section className=" py-20 px-5 ">
        <div className="container mx-auto">
          <h3 className="mb-12 font-bold text-2xl text-center">
            Trusted by industry leader
          </h3>
          <CompanyCrousal />
        </div>
      </section>
      <section className="bg-gray-900 py-20 px-5 ">
        <div className="container mx-auto">
          <h3 className="mb-12 font-bold text-2xl text-center">
            Frequently asked Question
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, id) => (
              <AccordionItem value={`item-${id}`} key={id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className=" py-20 px-5 text-center ">
        <div className="container mx-auto">
          <h3 className="mb-12 font-bold text-2xl text-center">
            Ready to transfrom your WorkFlow
          </h3>
          <p className="text-xl mb-12">
            Join thousand of teams already using Scrum to streamline their projects and boost productivity
          </p>
          <Link href="/onboarding"><Button className="animate-bounce">Start for Free <ArrowRight className="ml-2 h-5 w-5"/></Button></Link>
         
        </div>
      </section>
    </div>
  );
}
