import { Metadata } from "next";
import Contributing from "@/components/Contributing";

export const metadata: Metadata = {
  title: "Contributing - Makinari",
  description: "Learn how to contribute to Makinari, understand our AGPL-3.0 license, and join our open source community.",
};

export default function ContributingPage() {
  return (
    <div className="pt-16">
      <Contributing />
    </div>
  );
}
