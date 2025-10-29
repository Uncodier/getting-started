import { Metadata } from "next";
import Dependencies from "@/components/Dependencies";

export const metadata: Metadata = {
  title: "Dependencies & Services - Makinari",
  description: "Required external services, API keys, and third-party integrations needed to run Makinari platform.",
};

export default function DependenciesPage() {
  return (
    <div className="pt-16">
      <Dependencies />
    </div>
  );
}
