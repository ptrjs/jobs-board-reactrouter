import { JobCard } from "~/components/JobCard";
import type { Route } from "./+types/home";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function loader({}: Route.LoaderArgs) {
  const jobs = await prisma.job.findMany();
  return jobs;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs Board" },
    { name: "description", content: "Find your dream job here!" },
  ];
}

export default function Home({loaderData}: Route.ComponentProps) {
  const jobs = loaderData;
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Available Jobs</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
