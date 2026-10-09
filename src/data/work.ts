import type { Job } from '../types';

const DAS_PRS = 'https://gist.github.com/tinniaru3005/c8c7450506ce881eee11ace681487eef';

export const work: Job[] = [
  {
    role: 'Research Engineer, P2P Networking',
    org: 'Status',
    when: 'Jun 2025 – Aug 2026',
    points: [
      ['Wrote the ', { text: 'RFC', href: 'https://gist.github.com/tinniaru3005/ffc97841bec35b9e7a08012688c1cb68' }, ' and shipped a ', { text: 'Go proof of concept', href: 'https://github.com/vacp2p/logos-capability-discovery-poc' }, " for Logos Capability Discovery, a new discovery protocol on libp2p's Kademlia DHT that makes smaller services much quicker to find."],
      ['Maintained nim-libp2p, designed its ', { text: 'automated integration tests', href: 'https://gist.github.com/tinniaru3005/04dc0a8cb672176b7665904bcbcea823' }, ' for capability discovery, and reviewed and landed core PRs in production.'],
      ['Ran nodes on the live Logos Delivery network and ', { text: 'wrote up how discovery behaved', href: 'https://forum.research.logos.co/t/service-discovery-network-simulation/689/3' }, '.'],
      ['Built a Go discv5 crawler that finds and logs active Ethereum mainnet nodes.'],
    ],
  },
  {
    role: 'Research Engineer, Ethereum Protocols',
    org: 'Status',
    when: 'Jul 2024 – May 2025',
    points: [
      ['Built the ', { text: 'BlobTx Suffix Miner', href: 'https://github.com/tinniaru3005/blobtx-suffix-miner' }, ' in Go: it pulls post-EIP-4844 blob transactions from mainnet and tweaks GasTipCap to produce all 16 possible 4-bit hash endings.'],
      ['Crawled 295K Type 3 transactions across 7K post-Pectra epochs and ', { text: 'published the blob-activity trends on ethresear.ch', href: 'https://ethresear.ch/t/the-state-of-type-3-transactions-after-pectra-one-month-of-blob-data-activity/22667' }, '.'],
      ['Simulated vertical block dissemination across 10K+ nodes and showed faster propagation than builder broadcast (', { text: 'PRs', href: DAS_PRS }, ').'],
    ],
  },
  {
    role: 'SWE Intern, AI & Full Stack',
    org: 'Netradyne',
    when: 'Jan 2025 – Jul 2025',
    points: [
      ['Built an end-to-end RAG pipeline (containerized ingestion, object storage, PGVector, an LLM endpoint) behind a semantic document chatbot.'],
      ['Shipped AngularJS + Spring Boot features used by 3K+ enterprise clients, with integration tests and Jenkins CI/CD.'],
    ],
  },
  {
    role: 'Research Engineering Intern',
    org: 'Status',
    when: 'Jan 2024 – Jun 2024',
    points: [
      ['Built a Python simulator for Data Availability Sampling on a 10K+ node network, with malicious peers, gossip and correlated failures (', { text: 'PRs', href: DAS_PRS }, ').'],
      ['Tested sampling under Byzantine and adaptive adversaries to improve latency, bandwidth and reconstruction.'],
    ],
  },
  {
    role: 'LFX Mentee, AI & Open Source PM',
    org: 'Hyperledger Foundation',
    when: 'Jun 2023 – Nov 2023',
    points: [
      ['Led the Documentation Task Force across 13 project teams and founded the AI Task Force, rolling out LLM workflows that saved contributors real time.'],
    ],
  },
  {
    role: 'MLH Fellow, DeFi',
    org: 'Solana Labs',
    when: 'Sep 2022 – Dec 2022',
    points: [
      ['Built ', { text: 'pyzeta', href: 'https://github.com/tinniaru3005/pyzeta' }, ', an open-source Python SDK for the Zeta derivatives exchange on Solana.'],
    ],
  },
];
