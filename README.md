# LilSwap Website

This is the promotional website for [LilSwap](https://lilswap.xyz), a high-performance, non-custodial interface built for managing decentralized lending positions on Aave v3. It acts as a lean execution layer designed to bypass heavy protocol adapter fees and optimize transaction routing.

**App URL:** [app.lilswap.xyz](https://app.lilswap.xyz)
**App Repository:** [github.com/InkCrypto/LilSwap](https://github.com/InkCrypto/LilSwap)


## Core Advantages
* **0% Execution Fees on Debt Swaps:** We eliminated the standard ~0.05% fee, meaning you only pay network gas.
* **Up to 67% Max Savings:** Highly efficient routing for collateral swaps compared to standard UI adapters.
* **Direct Smart Contract Execution:** Interact directly with Aave V3 smart contracts—no middlemen, no custodial risk.
* **Zero TVL:** Your assets remain securely within the audited Aave ecosystem at all times.

## Tech Stack
* Frontend Framework: **React 19**
* Build Tool: **Vite**
* Styling: **Tailwind CSS v4** + Custom CSS Variables
* Deployment: **GitHub Actions** (to VPS Server)

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Dev Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Roadmap
* **Phase 1 (Complete):** Foundations, Multi-Chain support, and Debt Swaps.
* **Phase 2 (In Progress):** Collateral Swaps implementation and expansion to all Aave V3 networks.
* **Phase 3 (Ongoing):** CoW Protocol integration for MEV protection and Advanced Analytics.


