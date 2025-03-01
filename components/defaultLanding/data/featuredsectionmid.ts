import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon, BanknotesIcon  } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';

export const featuredSectionData = { 
  heading: "Deploy faster",
  title: "Everything you need to deploy your app",
  description: "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
  features: [
    {
      title: "Push to deploy",
      description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      icon: BanknotesIcon
    ,
    },
    {
      title: "SSL certificates",
      description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: LockClosedIcon,
    },
    {
      title: "Simple queues",
      description: "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
      icon: ArrowPathIcon,
    },
    {
      title: "Advanced security",
      description: "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
      icon: FingerPrintIcon,
    },
  ],
};