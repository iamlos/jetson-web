interface ReviewCardData {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export const reviews: ReviewCardData[] = [
  {
    name: "Alex Johnson",
    role: "College Athlete",
    content: "This platform completely transformed my recruiting journey. I received multiple offers within weeks of creating my profile."
  },
  {
    name: "Sarah Williams",
    role: "High School Coach",
    content: "As a coach, I've seen my athletes get significantly more exposure through this platform than through traditional recruiting methods."
  },
  {
    name: "Michael Rodriguez",
    role: "Parent",
    content: "The process was seamless and the support team was incredibly helpful. My daughter is now playing at her dream school!"
  }
];