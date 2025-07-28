export const mockData = {
  financial: {
    total: 617,
    breakdown: [
      { name: "BOAD", value: 339, color: "#ef4444" },
      { name: "Autres financ.", value: 139, color: "#f97316" },
      { name: "Partenaires", value: 139, color: "#22c55e" },
    ],
  },

  statusCards: [
    {
      title: "Status",
      value: "30%",
      icon: "building",
      color: "blue",
    },
    {
      title: "Alertes",
      value: "15",
      icon: "warning",
      color: "yellow",
    },
  ],

  environmentalCategory: {
    title: "Catégorie environementale",
    value: "Catégorie B",
    icon: "tree", // Custom icon
    tooltip: "Moderate risks - localized, limited impacts",
  },

  missions: {
    total: 5,
    breakdown: [
      { name: "Evaluation", value: 2, color: "#a855f7" },
      { name: "Supervision", value: 4, color: "#f59e0b" },
      { name: "Post-Evaluation", value: 1, color: "#8b5cf6" },
    ],
  },

  projectDetails: {
    amount: "200000",
    status: "En cours de décaissement",
    type: "Étude d'exécution/Ingénierie",
    operationAmount: "200 M",
    entryDateLimit: "01 Fev 2023",
    realEntryDate: "01 Fev 2023",
    drawDateLimit: "01 Fev 2024",
    progress: 50,
  },

  procurementProgress: {
    title: "Passation des marchés",
    items: [
      {
        name: "Appels d'offres",
        values: [40, 15, 15, 30],
        total: 100, // Sum of values
        colors: ["#ef4444", "#f59e0b", "#3b82f6", "#22c55e"],
      },
      {
        name: "Contrats",
        values: [40, 15, 30, 30],
        total: 115,
        colors: ["#d1d5db", "#60a5fa", "#eab308", "#22c55e"],
      },
    ],
  },

  projectList: [
    {
      id: "100001",
      type: "Prêt / Banque",
      status: "Authorisée",
      amount: "200 M FCFA",
      progress: 25,
      statusColor: "green",
    },
    {
      id: "200001",
      type: "Étude / FAC",
      status: "Confirmée",
      amount: "200 M FCFA",
      progress: 25,
      statusColor: "blue",
    },
    {
      id: "300001",
      type: "PP / Banque",
      status: "En Attente d'acceptation",
      amount: "200 M FCFA",
      progress: 25,
      statusColor: "gray",
    },
    {
      id: "400001",
      type: "Arrangement",
      status: "Arrêté",
      amount: "200 M FCFA",
      progress: 0,
      statusColor: "red",
    },
    {
      id: "100001",
      type: "Prêt / Fond Vert",
      status: "Authorisée",
      amount: "200 M FCFA",
      progress: 25,
      statusColor: "green",
    },
    {
      id: "600001",
      type: "Garantie / Banque",
      status: "Décaissé Complètement",
      amount: "200 M FCFA",
      progress: 25,
      statusColor: "blue",
    },
    {
      id: "900001",
      type: "Don / FDC",
      status: "Annulé",
      amount: "200 M FCFA",
      progress: 25,
      statusColor: "red",
    },
    {
      id: "500001",
      type: "Conseil",
      status: "Restructuration effectuée",
      amount: "200 M FCFA",
      progress: 0,
      statusColor: "violet",
    },
  ],

  timeline: [
    {
      title: "Achevé",
      subtitle: "03 Feb 2025",
      id: "1",
      status: "achieved",
      color: "#22c55e",
    },
    {
      title: "Archivage",
      subtitle: "02 Feb 2025",
      id: "2",
      status: "milestone",
      color: "#3b82f6",
    },
    {
      title: "Approbation RFE/BOAD",
      subtitle: "13 Jan 2025",
      id: "3",
      status: "milestone",
      color: "#3b82f6",
    },
    {
      title: "Fin d'exécution",
      subtitle: "23 Dec 2024 - 12 Jan 2025",
      id: "4",
      status: "end",
      color: "#a5b4fc",
    },
    {
      title: "En Exécution",
      subtitle: "02 Dec 2024",
      id: "5",
      status: "in_progress",
      color: "#3b82f6",
    },
    {
      title: "Dernier décaissement",
      subtitle: "01 Dec 2024",
      id: "6",
      status: "milestone",
      color: "#3b82f6",
    },
    {
      title: "1 er décaissement",
      subtitle: "11 Nov 2024",
      id: "7",
      status: "milestone",
      color: "#3b82f6",
    },
  ],

  disbursementChart: {
    data: [
      {
        month: "Jan",
        planifie: 80000,
        reel: null,
        decaissements: 0,
        autorisations: 0,
      },
      {
        month: "Fev",
        planifie: 40000,
        reel: 30000,
        decaissements: 30000,
        autorisations: 40000,
      },
      {
        month: "Mars",
        planifie: 60000,
        reel: 50000,
        decaissements: 80000,
        autorisations: 100000,
      },
      {
        month: "Avr",
        planifie: 0,
        reel: 0,
        decaissements: 80000,
        autorisations: 100000,
      },
      {
        month: "Mai",
        planifie: 110000,
        reel: 60000,
        decaissements: 140000,
        autorisations: 210000,
      },
      {
        month: "Juin",
        planifie: 0,
        reel: 0,
        decaissements: 140000,
        autorisations: 210000,
      },
      {
        month: "Juil",
        planifie: 0,
        reel: 0,
        decaissements: 140000,
        autorisations: 210000,
      },
      {
        month: "Aoû",
        planifie: 0,
        reel: 0,
        decaissements: 140000,
        autorisations: 210000,
      },
      {
        month: "Sept",
        planifie: 0,
        reel: 0,
        decaissements: 140000,
        autorisations: 210000,
      },
      {
        month: "Oct",
        planifie: 0,
        reel: 0,
        decaissements: 140000,
        autorisations: 210000,
      },
      {
        month: "Nov",
        planifie: 0,
        reel: 0,
        decaissements: 140000,
        autorisations: 210000,
      },
      {
        month: "Déc",
        planifie: 0,
        reel: 0,
        decaissements: 140000,
        autorisations: 210000,
      },
    ],
  },
};
