interface Page {
  image: any;
  title: string;
  subtitle: string;
}

export const onboardingPages: Page[] = [
  {
    image: require('../../assests/onboarding-1.png'),
    title: 'Best Stylist For You',
    subtitle: 'Styling your appearance according to your lifestyle',
  },
  {
    image: require('../../assests/onboarding-2.png'),
    title: 'Meet Our Specialists',
    subtitle: 'There are many best stylists from all the best salons ever',
  },
  {
    image: require('../../assests/onboarding-3.png'),
    title: 'Find The Best Service',
    subtitle: 'There are various services from the best salons.',
  },
];
