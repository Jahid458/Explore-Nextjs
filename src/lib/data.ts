export type Service = {
  id: string;
  name: string;
  status: "Operational" | "Degraded" | "Down";
  latency: string;
  uptime: string;
  request: string;
  errorRate: string;
};

export type LogEntry = {
  id: string;
  timesStamp: string;
  service: string;
  level: "info" | "warning" | "error";
  message: string;
};

export type AnalyticData = {
  totalRequests: number;
  avgLatency: string;
  errorRate: string;
  activeService: number;
};

//Mock service Data Here
export const SERVICES: Service[] = [
  {
    id: "1",
    name: "Global Edge CDN",
    status: "Operational",
    latency: "45ms",
    uptime: "99.99%",
    request: "0/hr",
    errorRate: "0.05%",
  },
  {
    id: "2",
    name: "Auth Cluster",
    status: "Degraded",
    latency: "450ms",
    uptime: "98.72%",
    request: "9/hr",
    errorRate: "1.2%",
  },
  {
    id: "3",
    name: "Database Primary",
    status: "Down",
    latency: "N/A",
    uptime: "95.40%",
    request: "2.5M/day",
    errorRate: "8.7%",
  },
  {
    id: "4",
    name: "API Gateway",
    status: "Operational",
    latency: "78ms",
    uptime: "99.95%",
    request: "300k/hr",
    errorRate: "0.12%",
  },
  {
    id: "5",
    name: "Payment Processor",
    status: "Operational",
    latency: "120ms",
    uptime: "99.90%",
    request: "320K/day",
    errorRate: "0.18%",
  },
  {
    id: "6",
    name: "Notification Service",
    status: "Operational",
    latency: "65ms",
    uptime: "99.85%",
    request: "1.1M/day",
    errorRate: "0.09%",
  },
  {
    id: "7",
    name: "Search Engine",
    status: "Degraded",
    latency: "310ms",
    uptime: "97.80%",
    request: "900K/day",
    errorRate: "1.8%",
  },
  {
    id: "8",
    name: "Analytics Pipeline",
    status: "Operational",
    latency: "95ms",
    uptime: "99.70%",
    request: "650K/day",
    errorRate: "0.25%",
  },
];


//Mock Logs Data Here
const SAMPLE_LOGS: LogEntry[] = [
  {
    id: "1",
    timesStamp: new Date().toISOString(),
    service: "GLobal Edge CDN",
    level: "info",
    message: "CAtch HIt rate: 92.4%",
  },
  {
    id: "2",
    timesStamp: new Date(Date.now() - 30000).toISOString(),
    service: "Auth Cluster",
    level: "warning",
    message: "High latency detected : 450ms",
  },
  {
    id: "3",
    timesStamp: new Date(Date.now() - 60000).toISOString(),
    service: "Database Primary",
    level: "error",
    message: "Connecting Pool exhausted, failed to connect to database",
  },
  {
    id: "4",
    timesStamp: new Date(Date.now() - 9000).toISOString(),
    service: "APi Gateway",
    level: "info",
    message: "Rate limit Applied to ip 192.168.1.100",
  },
];

export async function getServices(delay = 2000): Promise<Service[]> {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return SERVICES;
}

export async function getServiceById(
  id: string,
  delay = 1500,
): Promise<Service> {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    throw new Error("Service not found in registry");
  }

  // trick : ID "3" alaways fail
  if (id === "3") {
    throw new Error("Database  Primary is currently unreachable!");
  }
  return service;
}

export async function getLogs(delay = 800): Promise<LogEntry[]> {
  await new Promise((resolve) => setTimeout(resolve, delay));
  //generating "live" logs with current timestamp
  return SAMPLE_LOGS.map((log, index) => ({
    ...log,
    id: `log-${Date.now()}-${index}`,
    timesStamp: new Date(Date.now() - index * 3000).toISOString(),
  }));
}

export async function getAnalytics(delay = 800): Promise<AnalyticData> {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return {
    totalRequests: 454000,
    avgLatency: "87ms",
    errorRate: "0.3%",
    activeService: 4,
  };
}

export async function getSystemInfo() {
  return {
    version: "2.4.1",
    uptime: "47 days",
    regiion: "us-east-1",
    environment: "production",
    lastDeployed: "2024-06-15T12:00:00Z",
  };
}
