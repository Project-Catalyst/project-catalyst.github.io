# What is Catalyst Fund3

Catalyst Fund3 is the (experimental) stage of a decentralized funding mechanism for the Cardano ecosystem which is next to the Catalyst Fund2 stage. It is a fund filled up by a portion of Cardano epoch rewards, and can be spent to implement different proposals. The decision how to distribute the fund is made by Cardano stakeholders participating in the Catalyst project through a decentralized voting procedure. There is no voting privacy in the current version of protocol yet.

There are several main types of participants in Fund3. _Proposers_ are those who request funding from the treasury by submitting proposals. _Voters_ are registered stakeholders who decide on proposals. _Community advisers_ are reputable community members who initially evaluate proposals before providing them to voters. _Referrers_ are those who give recommendations to proposers what kind of proposal it is better to submit.

Fund3 lasts around 1.5 month (from 2021-Feb-17 till 2021-Apr-02).

The funding volume is \$500,000 worth of ADA (according to ada market value on a day funding is distributed). There are measures to prevent risks based on price fluctuation\: proposals will be paid the $ value they requested in ADA according to ADA valuation at reward distribution date (April 2th).
Fund intention is to engage people to submit proposals addressing the fund challenge
**&quot;How can we encourage developers and entrepreneurs to build Dapps and businesses on top of Cardano in the next 6 months?&quot;**

## How to submit a proposal?

Using the Ideascale innovation platform, everyone can submit a proposal for free for further discussion. For the convenience of users, templates of proposals will be presented on Ideascale, and a [proposal guideline is provided](https://docs.google.com/document/d/1oE_cnP0gksdAanXV4w5DYaDNp_tbYEvyHhTUG4HYZ3Q/edit). A proposal should contain comprehensive information about the proposed project: ideas, deadlines and required funding. Proposals further are reviewed and filtered by community advisers according to impact, feasibility and auditability ([See community advisor guideline](https://docs.google.com/document/d/13GDOj2vuxZzQttagfgnS3hbnP65xsSsWbf_6TURLI_U/edit#)). Thoughts of advisers (compliance of the required funding with the declared spending goals, etc.) are represented as proposal metadata and provided for proposal registration on the Catalyst blockchain.

## Proposal lifecycle

After a proposal is submitted to Ideascale, it is evaluated by community advisers who must be real people with verified and transparent identities (with valid accounts in social media with Cardano participation history, like Cardano ambassadors) registered and approved on Ideascale two weeks before the voting.

The proposal submission (moving from Ideascale to the blockchain) is called a registration (pre-voting) stage and starts on 2021-Feb-17. It lasts till 2021-Mar-03 when the snapshot is done.

Then on 2021-Mar-05 the voting stage starts (it lasts 19 days, till 2021-Mar-24) and Cardano holders submit their ballots.

The winners are selected using a _fuzzy threshold voting_. This is a Yes-No-Abstain voting system with a specific feature: the voting procedure depends not only on the score of candidates but also on the amount of funds requested by each proposal that allows obtaining more accurate results.

Based on the voting, proposals are ranked by sum of votes and funded in order of community support: _Yes voted stake_ - _No voted stake_. If the amount requested by a proposal is larger then the remaining fund amount, it is skipped. A proposal must have 15% more Yes votes than No votes (measured in Fund3 participation stake) to be eligible for funding. E.g. a proposal receiving 10 Yes votes and more than 8.5 No votes would not receive funding. A high level of participation in the voting is expected, so 15% of community approval is quite reasonable value for the threshold.

During a tally (post voting) stage (it lasts 9 days, till 2021-Apr-02) votes are counted and the results are published. The winning proposals get the required funding right after that (without special control of proposals execution and additional payments on proposals). It is assumed that large payments are made only to well-established teams; projects requiring long-term funding are consistently supported in Fund3, Fund4, etc., with a discussion in the community about how well the previous phase was completed.

## How to vote for proposals?

To be able to vote, a Cardano stakeholder must have at least 2950 ADA (or $1000 on 2021-Jan-15) (_voting stake threshold_) and voluntarily hold them for a predefined period of time (till the end of the voting stage). That is required to define the precise number of voters in the system (and incentivize them to vote responsibly), as well as to calculate the voting power of each participant and the corresponding rewards for voters.

The minimal voting stake threshold is partly defined so that to have a reasonable maximal expected number of voters to keep effectiveness of the voting procedure. Taking the voting stake threshold of 2950 ADA along with the assumptions that voters are rewarded with 14% of the total treasury fund and interest rate for cryptocurrency investors is around 10%, in the rational participation model we obtain that the maximal expected number of voters is 28,589 voters (that allows the voting protocol to operate normally). The detailed explanation of how this value is calculated can be found [here](https://docs.google.com/document/d/10DoE5oJ1J90spVNt__v8KRUScwkFjar22qfd38pIZL0/edit).

The voting is done through the Catalyst Voting Application. Voters mark proposals in the ballot as Yes, No or Abstain. The voter&#39;s power of vote for each proposal is proportional to the voting stake held by the voter. It does not matter how many proposals are voted (one, several or all proposals), each voted proposal is supported/rejected by the whole voter&#39;s stake (if the proposal is not voted, it is automatically marked as Abstain).

The marked ballot should be submitted to the blockchain till the end of the voting stage (to be counted in tally). A fee on the ballot submission and resubmission is 1 voting token (needed for DoS protection). A voting token is the token generated on the blockchain to signify voting power. For every 1 ada you use for registration, you will automatically receive 1 voting token on the Catalyst blockchain that is only valid for Fund3 voting period (these tokens can be used on the Catalyst blockchain for voting in Fund3 and nowhere else).

## Incentives

_Voters incentive_

14% of the treasury fund goes to voters&#39; reward. The value is chosen as a trade-off between treasury efficiency (the volume of funded projects) and security (the volume of the honest rational fund involved in the voting). The voter&#39;s reward is proportional to the voting power: reward\_i = (stake\_i / stake\_total) \* (ADA worth of $70,000).

The detailed explanation of how voter&#39;s reward is calculated can be found [here](https://docs.google.com/document/d/1Z2qLzGbLQxLgfDKqnTZFTL3IM28V8uUykptng0p5jbE/edit).

_Community advisers incentive_

Community advisers are incentivised to prepare high quality evaluation and review the maximum number of proposals by paying rewards. 4% of the treasury fund goes to community advisers&#39; reward.

We assume that every adviser is invited to review any proposal and can see how many reviews are already submitted. Community advisers are rewarded at the end of the evaluation process through a lottery: 3 winners among reviewers are randomly selected for each proposal and given equal amounts of tokens (note that low-quality proposals are excluded from the lottery).

_Referral reward_

1% of the treasury fund goes to referrers (equal amount distributed between all referrers who referred to a funded proposal per funded proposal).

_Reviewing reviewers reward_

1% of the treasury fund goes to reward veteran community advisors who evaluate reviews (equal amount distributed between all of them).

\*\*\*

Fund3 assumes the voting process is open to community members. During this phase we aim to test behaviour of independent users participating in the voting, explore the social dynamics of the community and receive feedback on the voting experience.

## Glossary

_Proposers_ - those who request funding from the treasury by submitting proposals.

_Voters_ - registered stakeholders who decide on proposals.

_Community advisers_ - reputable community members (real people with transparent identities) who initially evaluate proposals before providing them to voters.

_Referrers_ - those who give recommendations to proposers what kind of proposal it is better to submit.

_Ideascale_ - a platform where participants can submit proposals for further discussion.

_Fuzzy threshold voting_ - a modified Yes-No-Abstain voting system (the voting procedure also takes into account the amount of funds requested by each proposal).

_Voting stake threshold_ - a minimum amount of ADA a voter must have and voluntarily hold till the end of the voting stage.

_Voting token_ - a token generated on the blockchain at voter&#39;s registration to signify voting power and used by the voter for paying fees on the ballot submission and resubmission.
