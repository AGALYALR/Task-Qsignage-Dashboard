// Mock data for QSignage Dashboard

// Screens data with random online/offline status
export const screensData = [
  {
    id: "SCREEN-001",
    location: "Times Square, NYC",
    status: Math.random() > 0.3 ? "Online" : "Offline",
    health: ["Good", "Warning", "Critical"][Math.floor(Math.random() * 3)],
    lastSeen: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    resolution: "4K",
    brightness: Math.floor(Math.random() * 100) + 50
  },
  {
    id: "SCREEN-002",
    location: "Piccadilly Circus, London",
    status: Math.random() > 0.3 ? "Online" : "Offline",
    health: ["Good", "Warning", "Critical"][Math.floor(Math.random() * 3)],
    lastSeen: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    resolution: "4K",
    brightness: Math.floor(Math.random() * 100) + 50
  },
  {
    id: "SCREEN-003",
    location: "Shibuya Crossing, Tokyo",
    status: Math.random() > 0.3 ? "Online" : "Offline",
    health: ["Good", "Warning", "Critical"][Math.floor(Math.random() * 3)],
    lastSeen: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    resolution: "4K",
    brightness: Math.floor(Math.random() * 100) + 50
  },
  {
    id: "SCREEN-004",
    location: "Champs-Élysées, Paris",
    status: Math.random() > 0.3 ? "Online" : "Offline",
    health: ["Good", "Warning", "Critical"][Math.floor(Math.random() * 3)],
    lastSeen: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    resolution: "4K",
    brightness: Math.floor(Math.random() * 100) + 50
  },
  {
    id: "SCREEN-005",
    location: "Las Vegas Strip, NV",
    status: Math.random() > 0.3 ? "Online" : "Offline",
    health: ["Good", "Warning", "Critical"][Math.floor(Math.random() * 3)],
    lastSeen: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    resolution: "4K",
    brightness: Math.floor(Math.random() * 100) + 50
  },
  {
    id: "SCREEN-006",
    location: "Dubai Mall, UAE",
    status: Math.random() > 0.3 ? "Online" : "Offline",
    health: ["Good", "Warning", "Critical"][Math.floor(Math.random() * 3)],
    lastSeen: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    resolution: "4K",
    brightness: Math.floor(Math.random() * 100) + 50
  },
  {
    id: "SCREEN-007",
    location: "Orchard Road, Singapore",
    status: Math.random() > 0.3 ? "Online" : "Offline",
    health: ["Good", "Warning", "Critical"][Math.floor(Math.random() * 3)],
    lastSeen: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    resolution: "4K",
    brightness: Math.floor(Math.random() * 100) + 50
  },
  {
    id: "SCREEN-008",
    location: "Bondi Beach, Sydney",
    status: Math.random() > 0.3 ? "Online" : "Offline",
    health: ["Good", "Warning", "Critical"][Math.floor(Math.random() * 3)],
    lastSeen: new Date(Date.now() - Math.random() * 86400000).toISOString(),
    resolution: "4K",
    brightness: Math.floor(Math.random() * 100) + 50
  }
];

// Sample media files for campaigns
export const sampleMedia = [
  {
    id: "media-001",
    name: "Dashboard Overview",
    type: "image",
    url: "/media/dashboard-overview.svg",
    duration: "Static",
    size: "2.1 MB"
  },
  {
    id: "media-002",
    name: "Smart Billing",
    type: "image",
    url: "/media/smart-billing.svg",
    duration: "Static",
    size: "2.4 MB"
  },
  {
    id: "media-003",
    name: "Smart Scheduling",
    type: "image",
    url: "/media/smart-scheduling.svg",
    duration: "Static",
    size: "2.0 MB"
  },
  {
    id: "media-004",
    name: "Audience Analytics",
    type: "image",
    url: "/media/audience-analytics.svg",
    duration: "Static",
    size: "2.3 MB"
  },
  {
    id: "media-005",
    name: "Map-based Targeting",
    type: "image",
    url: "/media/map-targeting.svg",
    duration: "Static",
    size: "2.2 MB"
  }
];

// Analytics data
export const analyticsData = {
  uptime: 98.7,
  campaignsDelivered: 1247,
  totalImpressions: 2847500,
  revenue: 125000,
  activeScreens: screensData.filter(screen => screen.status === "Online").length,
  totalScreens: screensData.length,
  performanceData: [
    { month: "Jan", impressions: 450000, revenue: 18000 },
    { month: "Feb", impressions: 520000, revenue: 21000 },
    { month: "Mar", impressions: 480000, revenue: 19500 },
    { month: "Apr", impressions: 610000, revenue: 24500 },
    { month: "May", impressions: 580000, revenue: 23200 },
    { month: "Jun", impressions: 650000, revenue: 26000 }
  ],
  mediaTypeDistribution: [
    { type: "Video", percentage: 65 },
    { type: "Image", percentage: 30 },
    { type: "Interactive", percentage: 5 }
  ],
  topCampaigns: [
    { name: "Smart Billing Promo", impressions: 450000, engagement: 12.5 },
    { name: "Smart Scheduling Launch", impressions: 380000, engagement: 8.9 },
    { name: "Dashboard Upgrade", impressions: 320000, engagement: 15.2 },
    { name: "DOOH Awareness", impressions: 280000, engagement: 6.8 },
    { name: "Rural Outreach", impressions: 250000, engagement: 18.3 }
  ]
};

// Campaign statuses
export const campaignStatuses = ["Active", "Scheduled", "Paused", "Completed", "Draft"];

// Health statuses with colors
export const healthStatuses = {
  Good: { color: "#10b981", bgColor: "#d1fae5" },
  Warning: { color: "#f59e0b", bgColor: "#fef3c7" },
  Critical: { color: "#dc2626", bgColor: "#fee2e2" }
};
