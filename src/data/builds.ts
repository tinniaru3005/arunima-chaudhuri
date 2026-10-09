import type { CardItem } from '../types';

export const builds: CardItem[] = [
  { title: 'AegisAI', body: 'A secure enterprise RAG platform: permission-aware retrieval, SSO and RBAC, Qdrant search and citation-grounded streaming chat.', tag: 'FastAPI · Next.js', href: 'https://github.com/DebRC/AegisAI', cta: 'GitHub' },
  { title: 'Logos Capability Discovery PoC', body: "A Go proof of concept for a new service-discovery protocol built on libp2p's Kademlia DHT.", tag: 'Go · libp2p', href: 'https://github.com/vacp2p/logos-capability-discovery-poc', cta: 'GitHub' },
  { title: 'BlobTx Suffix Miner', body: 'Mines blob transactions until their hashes end in every possible 4-bit suffix, for downstream protocol research.', tag: 'Go · EIP-4844', href: 'https://github.com/tinniaru3005/blobtx-suffix-miner', cta: 'GitHub' },
  { title: 'pyzeta', body: 'Python SDK for a Solana derivatives exchange, handling wallets, signing and order settlement.', tag: 'Python · Solana', href: 'https://github.com/tinniaru3005/pyzeta', cta: 'GitHub' },
  { title: 'WiEP website', body: 'The Women in Ethereum Protocol program site, built in React with modular components.', tag: 'React', href: 'https://www.wiep.info/', cta: 'wiep.info' },
  { title: 'WiEP Cohort 4 curriculum', body: 'A 10-week Ethereum protocol curriculum, from consensus to the networking layer.', tag: 'Teaching', href: 'https://github.com/wiepteam/studygroup/tree/main/Cohort%204', cta: 'GitHub' },
];
