---
title: Usage and billing
id: usage-billing
description: Learn how billing works across Prophecy editions and how to manage usage and costs
tags: []
---

import Mermaid from '@theme/Mermaid';

Prophecy billing is determined by edition. Self-serve billing is available for Free and Professional Editions. Express and Enterprise Editions are managed through external purchase channels.

| Edition      | Billing           |
| ------------ | ----------------- |
| Free         | Stripe            |
| Professional | Stripe            |
| Express      | Cloud Marketplace |
| Enterprise   | Purchase Order    |

## Free and Professional Editions

Free and Professional Editions use a credit-based billing model managed through Stripe.

- **Free Edition**: 5 credits/month.
- **Professional Edition**: base credits included; extra usage pay-as-you-go.

### Plan management

Each plan is tied to a specific team in Prophecy. A single user may belong to multiple teams, and teams can contain multiple users. Team admins can manage billing for their teams.

The diagram below demonstrates what happens when a user on the Professional Edition invites a new user to their team.

<Mermaid
value={`graph TD
%% Users and their teams
UserA[👤 User A] --> |becomes team admin|TeamA[Team A<br/>Professional Edition Plan<br/>2 users]
UserA -->|invites| UserB
UserB[User B] --> |becomes standard user|TeamA
UserB --> |becomes team admin|TeamB[Team B<br/>Free Edition Plan<br/>1 user]

    %% Each team has a fabric
    TeamA -->|auto-provisions| FabricA[Fabric A]
    TeamB -->|auto-provisions| FabricB[Fabric B]

    %% Styling
    classDef user fill:#e1f5fe,stroke:#bdbdbd,stroke-width:1px
    classDef team fill:#f3e5f5,stroke:#bdbdbd,stroke-width:1px
    classDef other fill:#f5f5f5,stroke:#bdbdbd,stroke-width:1px

    class UserA,UserB user
    class TeamA,TeamB team
    class FabricA,FabricB other

`}
/>

### Usage & Billing dashboard

The **Usage & Billing** dashboard displays plan information, usage, and credit consumption. Because each plan is scoped to a team, switching teams updates the view to show billing details for that team.

To access the dashboard:

1. Log in to Prophecy and open the **Settings** page.
2. Select the **Usage & Billing** tab.
3. Use the team toggle to view usage for different teams.

From the dashboard, team administrators can:

- Monitor credit usage.
- Set seat limits.
- Configure alerts and budgets.
- Update payment method.

:::info
For information about how credits are consumed, see [Credits](docs/administration/usage-billing/credits.md).  
:::

### Manage monthly spending

To set up monthly spending alerts and limits:

1. Go to **Settings → Usage & Billing**.
1. Under **Additional Usage**, click **Manage**. Alternatively, click the **Manage monthly spending** button on the page.

   - **Set a user seat limit**: Maximum number of users allowed for the team corresponding to the plan.
   - **Set a usage alert**: Usage amount in dollars that triggers an alert and email.
   - **Set a usage budget**: Usage amount in dollars at which services are suspended.

1. Change the values and click **Save**.

:::tip
Review the default values when you first upgrade to the Professional Edition, and update if needed.
:::

### Update payment method

To update your payment method:

1. Go to **Settings → Usage & Billing**.
1. Under **Payment method**, click **Manage**.
1. Follow the instructions in Stripe to update your payment method.

### Upgrade plans

To upgrade from the Free Edition to the Professional Edition:

1. Go to **Settings → Usage & Billing**.
1. Selected the correct team to upgrade in the team toggle.
1. Scroll to the bottom of the page to view the different editions.
1. In the **Pro** tile, select **Upgrade Now**.

You will be taken to Stripe for payment.

## Express Edition

Express Edition is billed through the cloud marketplace (AWS or Azure) where the deployment was initialized. Billing and invoicing are handled by the marketplace provider, and details are available through their respective dashboards.

## Enterprise Edition

Enterprise Edition is billed through purchase orders. Invoicing, contracts, and terms are managed directly between Prophecy and your organization. Billing information is not available in the Prophecy UI.

:::note
To upgrade to the Enterprise Edition, you must [contact us](https://www.prophecy.io/contact-us). You won't be able to upgrade independently.
:::
