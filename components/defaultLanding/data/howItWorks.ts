export interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  metrics?: {
    icon: string;
    label: string;
  }[];
  stats?: {
    value: string;
    label: string;
  }[];
  image?: string;
}

export const howItWorksData = {
  mainTitle: "Here's How Jetson Ai Works!",
  highlight: "Effortlessly Get Recruited in 3 easy 3 Steps",
  steps: [
    {
      id: 1,
      title: "Create Your Athletic Profile",
      subtitle: "Complete profiles see up to 250% more connections on our AI platform",
      description: "Upload your academic and athletic stats, Share your game footage, and Showcase your athletic achievements.",
      metrics: [
        { icon: "dollar", label: "NILs" },
        { icon: "phone", label: "Calls" },
        { icon: "envelope", label: "Emails" },
        { icon: "arrows", label: "Connect" }
      ]
    },
    {
      id: 2,
      title: "Let AI Find Your Perfect Match",
      subtitle: "Together with your preferred choices in mind, our AI will find the fit for yo.",
      description: "Advanced algorithms analyze your profile, Instant matching with compatible college programs, Real-time opportunities based on your evolving performance",
      stats: [
        { value: "68%", label: "Better matches than competing platforms!" }
      ]
    },
    {
      id: 3,
      title: "Automated Outreach ...",
      subtitle: "Making meaningful connections is easy with AI.",
      description: "Personalized email campaigns to coaches, Smart follow-up communication, In-platform messaging with college programs",
      image: "/dashboard/athleteCollegeSearchAutofill.png"
      // image: "bg/"
    }
  ]
};