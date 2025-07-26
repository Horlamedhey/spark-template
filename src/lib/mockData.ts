export const mockData = {
  financial: {
    total: 617,
    breakdown: [
      { name: "BOAD", value: 339, color: "#ef4444" },
      { name: "Autres financ.", value: 139, color: "#f97316" },
      { name: "Partenaires", value: 139, color: "#22c55e" }
    ]
  },
  
  statusCards: [
    { 
      title: "Status", 
      value: "30%", 
      icon: "calendar",
      color: "blue"
    },
    { 
      title: "Alertes", 
      value: "15", 
      icon: "warning",
      color: "yellow"
    },
    { 
      title: "Processus en cours", 
      value: "2", 
      icon: "arrow-right",
      color: "blue"
    }
  ],

  projectDetails: {
    amount: "200000",
    status: "En cours de décaissement",
    type: "Étude d'exécution/Ingénierie",
    operationAmount: "200 M",
    entryDateLimit: "01 Fev 2023",
    realEntryDate: "01 Fev 2023",
    drawDateLimit: "01 Fev 2024",
    progress: 50
  },

  procurementProgress: {
    title: "Passation des marchés",
    items: [
      { name: "Appels d'offres", values: [15, 15, 30], colors: ["#22c55e", "#ef4444", "#f97316", "#22c55e"] },
      { name: "Contrats", values: [40, 15, 20, 30], colors: ["#22c55e", "#ef4444", "#f97316", "#22c55e"] }
    ]
  },

  timeline: [
    {
      title: "Achevé",
      subtitle: "Créé le 05 Juin 2025 par",
      id: "324233",
      status: "completed",
      color: "#22c55e"
    },
    {
      title: "En exécution",
      subtitle: "Créé le 05 Avr 2025 par",
      id: "324233",
      status: "active",
      color: "#3b82f6"
    },
    {
      title: "Accord de prêt signé",
      subtitle: "Créé le 02 Mai 2025 par",
      id: "324233",
      status: "completed",
      color: "#3b82f6"
    },
    {
      title: "Approuvé",
      subtitle: "Créé le 20 Déc 2024 par",
      id: "324233",
      status: "completed",
      color: "#3b82f6"
    },
    {
      title: "En évaluation",
      subtitle: "Créé le 12 Déc 2024 par",
      id: "324233",
      status: "pending",
      color: "#6b7280"
    },
    {
      title: "En portefeuille",
      subtitle: "Créé le 12 Nov 2024 par",
      id: "324233",
      status: "pending",
      color: "#6b7280"
    },
    {
      title: "Admission en portefeuille",
      subtitle: "Créé le 05 Avr 2022",
      id: "Archivé le 10 Avr 2024 par 324233",
      status: "archived",
      color: "#6b7280"
    },
    {
      title: "En identification",
      subtitle: "Créé le 12 Oct 2023 par",
      id: "324233",
      status: "pending",
      color: "#6b7280"
    },
    {
      title: "Identification",
      subtitle: "Créé le 05 Avr 2023",
      id: "Archivé le 10 Avr 2024 par 324233",
      status: "archived",
      color: "#6b7280"
    }
  ],

  disbursementChart: {
    data: [
      { month: "Jan", planned: 10000, actual: 8000, cumulativePlanned: 10000, cumulativeActual: 8000 },
      { month: "Fev", planned: 15000, actual: 12000, cumulativePlanned: 25000, cumulativeActual: 20000 },
      { month: "Mars", planned: 20000, actual: 18000, cumulativePlanned: 45000, cumulativeActual: 38000 },
      { month: "Avr", planned: 25000, actual: 22000, cumulativePlanned: 70000, cumulativeActual: 60000 },
      { month: "Mai", planned: 30000, actual: 28000, cumulativePlanned: 100000, cumulativeActual: 88000 },
      { month: "Juin", planned: 35000, actual: 32000, cumulativePlanned: 135000, cumulativeActual: 120000 },
      { month: "Juil", planned: 40000, actual: null, cumulativePlanned: 175000, cumulativeActual: 120000 },
      { month: "Aoû", planned: 45000, actual: null, cumulativePlanned: 220000, cumulativeActual: 120000 },
      { month: "Sept", planned: 50000, actual: null, cumulativePlanned: 270000, cumulativeActual: 120000 },
      { month: "Oct", planned: 55000, actual: null, cumulativePlanned: 325000, cumulativeActual: 120000 },
      { month: "Nov", planned: 60000, actual: null, cumulativePlanned: 385000, cumulativeActual: 120000 },
      { month: "Déc", planned: 65000, actual: null, cumulativePlanned: 450000, cumulativeActual: 120000 }
    ]
  }
};