import type { CardItem } from '../types';

export const now = {
  badge: 'Founder · Sept 2026 – now',
  company: 'Invaris Labs',
  companyHref: 'https://github.com/invarislabs',
  title: 'Security infrastructure for autonomous AI agents',
  body: "Teams are shipping agents that call tools, hold secrets and talk to other agents. I'm building the open-source layer that keeps them honest: catch the attacks before launch, and give every agent a scoped identity once it's live.",
  projects: [
    {
      title: 'AgentSec',
      body: 'An adversarial test framework that hunts for prompt injection, tool misuse, secret leakage, memory poisoning and MCP vulnerabilities. OWASP-mapped, with a GitHub Action and SARIF output.',
      tag: 'Security',
      href: 'https://github.com/invarislabs/invaris-agentsec',
      cta: 'GitHub',
    },
    {
      title: 'AgentAuth',
      body: 'Identity and delegation for agents: scoped, time-bound credentials, per-tool authorization and audit trails, so agents in a multi-agent system can trust each other.',
      tag: 'Identity',
      href: 'https://github.com/invarislabs/agent-auth',
      cta: 'GitHub',
    },
  ] satisfies CardItem[],
};
