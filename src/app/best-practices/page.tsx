import { Metadata } from "next";
import BestPractices from "@/components/BestPractices";

export const metadata: Metadata = {
  title: "Best Practices - Makinari",
  description: "Development best practices, coding standards, testing guidelines, and workflow recommendations for the Makinari platform.",
};

export default function BestPracticesPage() {
  return (
    <div className="pt-16">
      <BestPractices />
    </div>
  );
}
