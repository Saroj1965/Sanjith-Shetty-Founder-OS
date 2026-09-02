const DEFAULT_FOUNDER_DATA = {
  founder: {
    name: "Sanjith Shetty",
    title: "Founder & CEO",
    tagline: "Clarity. Focus. Decisions. Execution.",
    currentDate: "Wednesday, September 2, 2026",
    briefing: {
      headline: "Good morning, Sanjith. Miror community reached 95,000+ women today with 3 critical strategic actions pending.",
      text: "Miror's month-on-month D2C revenue is up +28.4% with strong adoption of Miror MD (our proprietary Perimenopause AI Guidance Engine) and Miror Bliss clinical nutraceutical kits. 2 strategic decisions (Series A Term Sheet clause & Corporate Menopause Sensitization pilot with Infosys) are awaiting your sign-off before 4:00 PM. Your schedule includes 5 high-impact sessions today."
    },
    vitals: {
      businessHealth: { score: 88, status: "Healthy", trend: "Miror Community: 95K+ Women", state: "green" },
      revenueGrowth: { score: "₹1.42 Cr / mo", status: "+24.8% YoY", trend: "On Target (94%)", state: "green" },
      cashRunway: { score: "18.5 Months", status: "₹8.65 Cr Reserves", trend: "Burn ₹46.8L/mo", state: "green" },
      teamHealth: { score: "84% eNPS", status: "Needs Attention", trend: "2 Tech Hires Pending", state: "amber" },
      customerHealth: { score: "NPS +74", status: "Healthy", trend: "Miror MD CSAT 4.85/5", state: "green" },
      marketingBrand: { score: "CAC ₹840", status: "Healthy", trend: "ROAS 3.85x", state: "green" },
      workload: { score: "High (8.5h mtgs)", status: "Caution", trend: "Deep Work: 2.5h", state: "amber" }
    },
    personalMetrics: {
      meetingHours: 26.5,
      deepWorkHours: 14.0,
      strategicWorkPct: 55,
      operationalWorkPct: 30,
      delegatedTasksPct: 15,
      timeAllocation: [
        { label: "Strategic Growth & Board", pct: 35, color: "#6366f1" },
        { label: "Product & Miror MD Clinical AI", pct: 25, color: "#ec4899" },
        { label: "Operations & Problem Solving", pct: 20, color: "#3b82f6" },
        { label: "People & Key Talent", pct: 12, color: "#10b981" },
        { label: "Investor Relations & Network", pct: 8, color: "#f59e0b" }
      ]
    }
  },

  todayPriorities: [
    {
      id: "prio-1",
      title: "Review & Sign Series A Term Sheet Covenants",
      company: "Miror Health",
      badge: "Miror",
      deadline: "Today, 4:00 PM",
      importance: "Critical",
      status: "In Progress",
      owner: "Sanjith Shetty",
      risk: "High",
      completed: false
    },
    {
      id: "prio-2",
      title: "Greenlight Infosys Corporate Menopause Wellness Pilot (5,000 Seats)",
      company: "Miror B2B",
      badge: "Miror",
      deadline: "Today, 1:00 PM",
      importance: "High",
      status: "Pending Decision",
      owner: "Sanjith + VP Enterprise",
      risk: "Medium",
      completed: false
    },
    {
      id: "prio-3",
      title: "Quarterly Strategy Review with Board Advisors",
      company: "Shetty Capital",
      badge: "Shetty Capital",
      deadline: "Today, 5:30 PM",
      importance: "High",
      status: "Scheduled",
      owner: "Sanjith Shetty",
      risk: "Low",
      completed: false
    }
  ],

  miror: {
    tagline: "India's dedicated platform for perimenopause and menopause care",
    website: "https://miror.in/",
    pillars: {
      communitySize: "95,000+ Women",
      aiEngine: "Miror MD (AI-Powered Menopause Guidance)",
      leadProduct: "Miror Bliss (18 Active Herbal & Vitamin Nutrients)",
      clinicalSpecialties: "Gynaecology, HRT (Hormone Replacement Therapy), Nutrition, Pelvic & Mental Health"
    },
    overview: {
      monthlyRevenue: "₹68.4 Lakhs",
      revenueGrowth: "+28.4%",
      activeCustomers: "14,820",
      newCustomersMonth: "2,460",
      retentionRate: "86.4%",
      conversionRate: "4.82%"
    },
    funnel: [
      { stage: "Miror Community & Awareness Reach", count: "340,000", conv: "100%", drop: "0%" },
      { stage: "Website & Symptom Quiz Visitors", count: "92,500", conv: "27.2%", drop: "72.8%" },
      { stage: "Miror MD AI Personalized Assessments", count: "21,800", conv: "23.6%", drop: "76.4%" },
      { stage: "Doctor & Gynaecologist Consultations", count: "5,420", conv: "24.9%", drop: "75.1%" },
      { stage: "Miror Bliss Kits & Care Plan Orders", count: "2,460", conv: "45.4%", drop: "54.6%" },
      { stage: "Repeat Monthly Auto-Renewals (Nutraceuticals + Care)", count: "1,890", conv: "76.8%", drop: "23.2%" }
    ],
    offerings: [
      {
        name: "Miror MD (AI Health Engine)",
        category: "Digital Intelligence",
        badge: "AI Powered",
        desc: "Personalized menopause journey navigator trained on clinical guidelines to analyze individual symptom clusters and recommend medical/lifestyle pathways.",
        stats: "21.8K Monthly Chats • 94% Accuracy"
      },
      {
        name: "Miror Bliss Nutraceutical Formulations",
        category: "Clinical Supplements",
        badge: "D2C Hero SKU",
        desc: "18 scientifically selected active ingredients (Shatavari, Ashwagandha, Magnesium Glycinate, Vitamin D3, Black Cohosh) for hot flashes, sleep, & mood swings.",
        stats: "12.4K Units Dispatched • 88% Reorder"
      },
      {
        name: "Expert-Led Menopause Clinical Consults",
        category: "Telehealth Care",
        badge: "Doctor Network",
        desc: "1-on-1 private video consults with certified menopause doctors, gynaecologists, clinical psychologists, and functional nutritionists.",
        stats: "5.4K Consults/mo • 4.9/5 Rating"
      },
      {
        name: "Evidence-Based HRT Protocols",
        category: "Medical Guidance",
        badge: "Medical Intelligence",
        desc: "Comprehensive diagnostic evaluation, blood panel biomarker interpretation, and supervised Hormone Replacement Therapy plans.",
        stats: "1,850 Active HRT Patients"
      }
    ],
    marketing: {
      monthlyVisitors: "92.5K",
      instagramFollowers: "128K (+14% MoM)",
      cpl: "₹185 (Target <₹220)",
      topChannel: "Meta Retargeting + Doctor Podcast Partnerships",
      monthlyTrend: [
        { month: "Apr", revenue: 42.0, spend: 12.5, leads: 14200 },
        { month: "May", revenue: 47.5, spend: 13.8, leads: 15800 },
        { month: "Jun", revenue: 53.0, spend: 14.2, leads: 17400 },
        { month: "Jul", revenue: 58.2, spend: 15.0, leads: 18900 },
        { month: "Aug", revenue: 64.0, spend: 16.5, leads: 20400 },
        { month: "Sep (Proj)", revenue: 68.4, spend: 17.2, leads: 21800 }
      ]
    },
    insights: {
      nps: 74,
      csat: "4.85 / 5.0",
      topConcerns: ["Hot Flashes & Night Sweats", "Hormonal Brain Fog & Fatigue", "Sleep Fragmentation & Insomnia", "Anxiety & Mood Fluctuations", "Joint Pain & Weight Metabolism"],
      requestedServices: ["Supervised HRT Consultations", "Miror Bliss Custom Subscription Packs", "Workplace Menopause Sensitization Workshops"]
    },
    initiatives: [
      { name: "Miror MD 2.0 AI LLM Diagnostic Calibration", owner: "Rohan V. (Product Lead)", status: "On Track", progress: 92, deadline: "Sep 20, 2026", risk: "Low" },
      { name: "Miror Bliss Phase-2 Clinical Biomarker Study", owner: "Dr. Deepa M. (Head of Clinical)", status: "On Track", progress: 85, deadline: "Oct 15, 2026", risk: "Low" },
      { name: "Corporate B2B Menopause Wellness Portal (Infosys/Wipro)", owner: "Priya S. (Enterprise Lead)", status: "In Progress", progress: 70, deadline: "Nov 01, 2026", risk: "Medium" },
      { name: "Omnichannel Modern Retail Rollout (Apollo Pharmacy & Nature's Basket)", owner: "Retail Team", status: "Delayed", progress: 42, deadline: "Oct 30, 2026", risk: "High" }
    ]
  },

  ventures: [
    {
      id: "v-miror",
      name: "Miror Health (miror.in)",
      category: "India's Largest Menopause & Longevity Care Community",
      role: "Founder & Managing Director",
      healthScore: 92,
      status: "Rapid Scaling (95K+ Community)",
      revenue: "₹68.4L / mo",
      growth: "+28.4% MoM",
      keyPriority: "Series A Closing & Enterprise B2B Launch",
      majorRisk: "Omnichannel inventory distributor packaging delay",
      nextMilestone: "₹1 Cr monthly revenue run-rate (Q4)",
      badgeColor: "#ec4899",
      icon: "fa-heart-pulse"
    },
    {
      id: "v-shetty-inn",
      name: "Shetty Capital & Venture Studio",
      category: "HealthTech, BioTech & Longevity Investments",
      role: "Strategic Board Member & Principal Investor",
      healthScore: 82,
      status: "Active Deployment",
      revenue: "₹45.0L / mo",
      growth: "+14.2% YoY",
      keyPriority: "Deploy ₹15 Cr HealthTech Innovation Tranche",
      majorRisk: "Regulatory clearance pace for 2 clinical diagnostics startups",
      nextMilestone: "Launch Cohort 4 of 10 BioTech Ventures",
      badgeColor: "#3b82f6",
      icon: "fa-seedling"
    },
    {
      id: "v-proptech",
      name: "Urban Living & PropTech Assets",
      category: "Commercial Real Estate & Premium Co-Living",
      role: "Principal Investor & Director",
      healthScore: 78,
      status: "Cash Cow",
      revenue: "₹28.5L / mo",
      growth: "+8.5% YoY",
      keyPriority: "98% Occupancy on Bengaluru Central Assets",
      majorRisk: "Municipal zoning revision on Phase 2 expansion",
      nextMilestone: "Refinancing term debt at 7.8% interest",
      badgeColor: "#10b981",
      icon: "fa-building-columns"
    }
  ],

  tasks: [
    { id: "t-1", title: "Review final cap table with legal counsel for Miror Series A", company: "Miror", priority: "Critical", owner: "Sanjith Shetty", deadline: "Today, 4:00 PM", status: "todo", category: "TODAY" },
    { id: "t-2", title: "Approve ₹18L Q4 Meta & Miror MD AI Growth Ad Budget", company: "Miror", priority: "High", owner: "Sanjith Shetty", deadline: "Today, 6:00 PM", status: "in-progress", category: "TODAY" },
    { id: "t-3", title: "Review Miror Bliss Clinical Study Whitepaper with Dr. Deepa", company: "Miror", priority: "High", owner: "Dr. Deepa / Sanjith", deadline: "Tomorrow, 11:30 AM", status: "todo", category: "THIS WEEK" },
    { id: "t-4", title: "Audit Q2 Financial Statements with Auditors", company: "Portfolio", priority: "Medium", owner: "CFO & Finance Team", deadline: "Sep 10, 2026", status: "waiting", category: "THIS WEEK" },
    { id: "t-5", title: "Interview finalist for Head of Growth / CMO position (Ex-Nykaa)", company: "Miror", priority: "Critical", owner: "Sanjith + HR Lead", deadline: "Sep 08, 2026", status: "in-progress", category: "THIS WEEK" },
    { id: "t-6", title: "Draft shareholder quarterly memo for Venture Studio", company: "Shetty Capital", priority: "Medium", owner: "Sanjith Shetty", deadline: "Sep 15, 2026", status: "todo", category: "THIS MONTH" },
    { id: "t-7", title: "Vendor SLA approval for Miror Bliss packaging reprint", company: "Miror", priority: "Low", owner: "Operations VP", deadline: "Sep 18, 2026", status: "completed", category: "DELEGATED" }
  ],

  meetings: [
    {
      id: "m-1",
      time: "09:30 AM - 10:15 AM",
      title: "Daily Miror Executive Standup & Miror MD AI Review",
      company: "Miror Leadership",
      participants: "Priya (COO), Rohan (Product), Dr. Deepa",
      importance: "High",
      type: "Operations",
      location: "Miror HQ / Boardroom"
    },
    {
      id: "m-2",
      time: "11:00 AM - 12:00 PM",
      title: "Infosys HR & Benefits Leadership: 5K Seat Menopause Care Pilot",
      company: "Miror B2B",
      participants: "Sanjith Shetty, VP HR Infosys, Corporate Sales",
      importance: "Critical",
      type: "Strategic Deal",
      location: "Zoom Video / Hybrid"
    },
    {
      id: "m-3",
      time: "02:30 PM - 03:30 PM",
      title: "Series A Investment Committee & Due Diligence",
      company: "Miror / Peak XV",
      participants: "Managing Partner (Peak XV), Sanjith, Finance Lead",
      importance: "Critical",
      type: "Fundraising",
      location: "Four Seasons Bengaluru / Private Dining"
    },
    {
      id: "m-4",
      time: "04:30 PM - 05:15 PM",
      title: "1-on-1 Mentorship & Miror MD Engineering Sync",
      company: "Miror",
      participants: "Rohan V. (Product Lead)",
      importance: "Medium",
      type: "People & Team",
      location: "Founder Office"
    },
    {
      id: "m-5",
      time: "05:30 PM - 06:30 PM",
      title: "Shetty Capital & Venture Studio Strategy Review",
      company: "Shetty Capital",
      participants: "Board Advisors & Partners",
      importance: "High",
      type: "Governance",
      location: "Executive Boardroom / UB City Hub"
    }
  ],

  decisions: [
    {
      id: "dec-1",
      title: "Approve Lead Investor Liquidation Preference & Pro-Rata Rights",
      company: "Miror Health",
      background: "Lead investor requests 1x non-participating liquidation preference and 15% ESOP pool expansion before Series A close.",
      options: "Option A: Accept 1x non-participating with 12% ESOP (Recommended) | Option B: Push back to 10% ESOP",
      financialImpact: "₹3.5 Cr Equity Dilution Buffer",
      riskLevel: "Critical",
      recommendedAction: "Approve 12% compromise covenant with legal counsel sign-off today.",
      deadline: "Today, 4:00 PM",
      status: "Pending",
      overdue: false
    },
    {
      id: "dec-2",
      title: "Authorize B2B Corporate Menopause Wellness Enterprise Pricing",
      company: "Miror B2B",
      background: "Infosys and Wipro require an annual per-seat subscription price of ₹1,800/employee (down from standard ₹2,400) for Miror MD + Bliss Kits.",
      options: "Option A: Approve discounted pricing with 2-year lock-in (Recommended) | Option B: Hold standard ₹2,400 rate",
      financialImpact: "₹90 Lakhs Guaranteed Annual Recurring Revenue (ARR)",
      riskLevel: "Medium",
      recommendedAction: "Approve discounted rate on condition of 24-month upfront enterprise commitment.",
      deadline: "Today, 1:00 PM",
      status: "Pending",
      overdue: false
    },
    {
      id: "dec-3",
      title: "Miror Bliss Modern Retail Distribution: Apollo vs Guardian",
      company: "Miror D2C",
      background: "Apollo offers 250 top tier metro store placements for Miror Bliss with 32% margin; Guardian offers 180 stores at 28% margin.",
      options: "Option A: Exclusively partner with Apollo for 6 months | Option B: Dual non-exclusive launch",
      financialImpact: "₹45 Lakhs Inventory Working Capital",
      riskLevel: "High",
      recommendedAction: "Execute exclusive 6-month metro pilot with Apollo for prime endcap shelf space.",
      deadline: "Sep 05, 2026",
      status: "Under Review",
      overdue: false
    }
  ],

  people: {
    totalTeam: 48,
    newHiresThisQuarter: 7,
    openPositions: 4,
    attritionRate: "4.2% (Industry benchmark 12%)",
    teamEngagement: "88% Positive",
    criticalAttention: [
      { name: "Rohan V.", role: "Lead Product Designer / Miror MD PM", company: "Miror", issue: "Sprint burnout risk; needs Sr. UI hire to offload wireframing", action: "Conduct 1-on-1 at 4:30 PM & accelerate Sr. Product Designer offer" },
      { name: "Head of Growth (Candidate)", role: "Ex-Cult.fit / Nykaa", company: "Miror", issue: "Competing offer in hand; requires founder closing call today", action: "Founder closing call at 6:45 PM" },
      { name: "Clinical Content Team", role: "3 Medical Writers", company: "Miror", issue: "Content velocity for HRT educational guides blocked by medical review", action: "Retain 2 external gynaecologist advisors on retainer" }
    ],
    openHiring: [
      { role: "VP of Enterprise Sales (Corporate Wellness)", dept: "B2B Sales", company: "Miror", priority: "Critical", applicants: 18 },
      { role: "Sr. Full Stack AI Engineer (Miror MD Engine)", dept: "Engineering", company: "Miror", priority: "High", applicants: 34 },
      { role: "Performance Marketing Manager", dept: "Growth", company: "Miror", priority: "High", applicants: 22 },
      { role: "Clinical Nutritionist & Gynaecologist Onboarding Lead", dept: "Medical", company: "Miror", priority: "Medium", applicants: 14 }
    ]
  },

  finance: {
    totalPortfolioRevenue: "₹1.42 Cr / mo",
    monthlyBurn: "₹46.8 Lakhs",
    cashRunwayMonths: "18.5 Months",
    totalCashReserves: "₹8.65 Cr",
    accountsReceivable: "₹34.2 Lakhs (Avg DSO 24 days)",
    upcomingMajorPayments: [
      { item: "Bulk Miror Bliss Active Formulation (Shatavari, Ashwagandha & Magnesium)", amount: "₹28.5L", due: "Sep 15, 2026" },
      { item: "Quarterly Statutory Taxes & Advance Tax", amount: "₹14.2L", due: "Sep 15, 2026" },
      { item: "Office Lease Renewal (Bengaluru Tech Park Hub)", amount: "₹8.0L", due: "Sep 30, 2026" }
    ],
    monthlyTrend: [
      { month: "Apr", rev: 110, exp: 42, net: 68 },
      { month: "May", rev: 118, exp: 44, net: 74 },
      { month: "Jun", rev: 125, exp: 45, net: 80 },
      { month: "Jul", rev: 132, exp: 46, net: 86 },
      { month: "Aug", rev: 138, exp: 46, net: 92 },
      { month: "Sep", rev: 142, exp: 46.8, net: 95.2 }
    ]
  },

  salesPipeline: {
    totalPipelineValue: "₹3.85 Cr",
    conversionRate: "22.4%",
    closedThisQuarter: "₹1.15 Cr",
    forecastNextQuarter: "₹2.20 Cr",
    stages: [
      { stage: "Lead Inbound (Corporate HR Benefits)", count: 48, valueCr: 1.45 },
      { stage: "Discovery & Qualification", count: 26, valueCr: 0.95 },
      { stage: "Custom Menopause Wellness Proposal", count: 12, valueCr: 0.75 },
      { stage: "Security & Legal Review", count: 6, valueCr: 0.45 },
      { stage: "Verbal Agreement / Closing", count: 3, valueCr: 0.25 }
    ]
  },

  brandMarketing: {
    websiteTraffic: "92,500 monthly unique on miror.in",
    linkedinFollowers: "34,200 (+2,400 this month)",
    instagramReach: "480,000 monthly impressions (@miror.health)",
    brandMentions: "42 Press & Medical Journal features (Express Pharma, YourStory)",
    contentCalendar: [
      { date: "Sep 03", platform: "LinkedIn / Founder Post", topic: "The Multi-Billion Dollar Workplace Taboo: Menopause in Corporate India", status: "Ready for Approval", owner: "Sanjith Shetty" },
      { date: "Sep 05", platform: "Instagram / Video Series", topic: "Gynaecologist Mythbusting: Estrogen, Miror Bliss Formulations & Sleep", status: "In Production", owner: "Dr. Deepa + Studio" },
      { date: "Sep 08", platform: "YourStory / Press Release", topic: "Miror Surpasses 95,000 Women on India's Largest Menopause Care Platform", status: "Drafting", owner: "PR Agency" },
      { date: "Sep 12", platform: "Podcast Feature", topic: "Longevity & Preventive Women's Healthcare with Dr. Marcus", status: "Scheduled", owner: "Sanjith Shetty" }
    ]
  },

  projects: [
    { name: "Miror Series A Term Sheet & Due Diligence", company: "Miror Health", owner: "Sanjith Shetty", progress: 90, budget: "₹25 Cr Valuation Target", status: "In Progress", risk: "Critical" },
    { name: "Enterprise Menopause Program for 3 Top IT Giants", company: "Miror B2B", owner: "Priya S. (COO)", progress: 65, budget: "₹1.5 Cr Target ARR", status: "In Progress", risk: "Medium" },
    { name: "Miror Bliss Modern Retail Rollout (Apollo)", company: "Miror D2C", owner: "Rohan V.", progress: 38, budget: "₹45L Working Cap", status: "Delayed / Bottleneck", risk: "High" },
    { name: "BioTech Accelerator Cohort 4 Deployment", company: "Shetty Capital", owner: "Venture Lead", progress: 80, budget: "₹5 Cr Seed Tranche", status: "In Progress", risk: "Low" },
    { name: "Miror MD Proprietary AI Model IP Filing", company: "Miror IP", owner: "Legal Counsel", progress: 95, budget: "₹12L Legal Cap", status: "Near Completion", risk: "Low" }
  ],

  relationships: [
    { name: "Rajan Anandan", org: "Peak XV Partners", category: "Investor", lastInteraction: "3 days ago", nextFollowUp: "Today, 2:30 PM", status: "Active Lead", notes: "Discussing lead terms for Miror Series A" },
    { name: "Dr. Arvind Rao", org: "Clinical Advisory Board", category: "Advisor & Partner", lastInteraction: "Yesterday", nextFollowUp: "Today, 5:30 PM", status: "Strong", notes: "Strategic alignment on HRT clinical protocols" },
    { name: "Richard Lobo", org: "Corporate HR Advisory / Ex-Infosys", category: "Strategic Partner", lastInteraction: "Aug 28, 2026", nextFollowUp: "Sep 04, 2026", status: "Warm", notes: "Structuring the enterprise menopause care rollout" },
    { name: "Shradha Sharma", org: "YourStory Media", category: "Media & PR", lastInteraction: "2 weeks ago", nextFollowUp: "Sep 07, 2026", status: "Follow-up Due", notes: "Exclusive feature interview on Women Longevity Tech" },
    { name: "Kiran Mazumdar-Shaw", org: "Biocon / Industry Leader", category: "Advisor & Mentor", lastInteraction: "1 month ago", nextFollowUp: "Overdue (>30 days)", status: "Attention Required", notes: "Bi-annual founder update memo" }
  ],

  weeklyReview: {
    week: "Week 36 – September 2026",
    wins: "• Miror community surpassed 95,000+ women, solidifying position as India's largest menopause care platform.\n• Miror Bliss supplement sales hit record monthly high of ₹68.4 Lakhs (+28.4% growth).\n• Received Series A Term Sheet from top-tier institutional venture fund.\n• Secured verbal approval for 5,000 employee pilot with leading tech enterprise.",
    challenges: "• Retail distribution partner delayed physical stocking in metro stores by 2 weeks due to barcode packaging compliance.\n• 2 critical senior tech positions (Miror MD Lead AI Engineer & Fullstack) taking longer than 45 days to close.",
    decisionsMade: "• Approved 15% ESOP pool reallocation for leadership hires.\n• Finalized formulation vendor contract for second-generation Miror Bliss sleep & hormone balance kits.",
    nextWeekPriorities: "1. Close and wire Series A definitive agreement.\n2. Sign Infosys 5K seat contract.\n3. Make binding offers to finalist AI Lead Engineer and Growth Lead."
  }
};
