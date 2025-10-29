import { Metadata } from "next";
import DeploymentWizard from "@/components/DeploymentWizard";

export const metadata: Metadata = {
  title: "Deployment Guide - Makinari",
  description: "Step-by-step deployment guides for all Makinari repositories including environment setup, configuration, and best practices.",
};

export default function DeploymentPage() {
  return (
    <div className="pt-16">
      <DeploymentWizard />
    </div>
  );
}
