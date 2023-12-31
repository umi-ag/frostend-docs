module.exports = {
  myAutogeneratedSidebar: [
    {
      type: "doc",
      id: "Home",
    },
    {
      type: "doc",
      id: "Introduction",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "Roadmap",
    },
    {
      type: "category",
      label: "Protocol Mechanics",
      items: [
        { type: "category",
        label: "Yield Tokenization",
        items: [
          { type: "doc", id: "ProtocolMechanics/YieldTokenization/SY" },
          { type: "doc", id: "ProtocolMechanics/YieldTokenization/Minting" },
          { type: "doc", id: "ProtocolMechanics/YieldTokenization/PT" },
          { type: "doc", id: "ProtocolMechanics/YieldTokenization/YT" },
          // { type: "doc", id: "tutorial-basics/congratulations" },
        ]
        },
        { type: "doc", id: "ProtocolMechanics/AMM" },
      ],
    },
    {
      type: "category",
      label: "App Guide",
      items: [
        { type: "doc", id: "AppGuide/Earn" },
        {
          type: "category",
          label: "FrostEnd Trade",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Guides",
              collapsed: true,
              items: [
                { type: "doc", id: "AppGuide/Trade/Guides/UsingTrade" },
                { type: "doc", id: "AppGuide/Trade/Guides/Mint" },
                { type: "doc", id: "AppGuide/Trade/Guides/Swap" },
                { type: "doc", id: "AppGuide/Trade/Guides/Pool" },
                { type: "doc", id: "AppGuide/Trade/Guides/Claim" },
                { type: "doc", id: "AppGuide/Trade/Guides/Dashboard" },
                { type: "doc", id: "AppGuide/Trade/Guides/Leaderboard" },
              ],
            },
            { type: "doc", id: "AppGuide/Trade/Calculator" },
            { type: "doc", id: "AppGuide/Trade/Pools" },
          ],
        },
      ],
    },
    {
      type: "link",
      label: "Github",
      href: 'https://github.com/umi-ag/frostend',
    },
  ],
};
