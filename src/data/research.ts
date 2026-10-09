import type { CardItem } from '../types';

export const researchIntro =
  'Both papers ask the same question: can a network be sure the data exists when it only checks small samples of it, and some peers are lying?';

export const papers: CardItem[] = [
  {
    title: 'Enhanced Efficient Fast Data Availability Sampling under Majority Dishonest Byzantine Attacks',
    body: 'Keeping data availability sampling fast and reliable even when most of the network is adversarial.',
    tag: 'IEEE BCCA · 2025',
    href: 'https://www.researchgate.net/publication/397633889_Enhanced_Efficient_Fast_Data_Availability_Sampling_under_Majority_Dishonest_Byzantine_Attacks',
    cta: 'Read',
  },
  {
    title: "On the Design of Ethereum's Data Availability Sampling: A Comprehensive Simulation Study",
    body: "A large-scale simulation of how DAS design choices play out on Ethereum's network.",
    tag: 'IEEE BRAINS · 2024',
    href: 'https://arxiv.org/abs/2407.18085',
    cta: 'arXiv',
  },
];
