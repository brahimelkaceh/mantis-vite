export const tableHeaders = [
  {
    parent: ' ',
    class: '',
    children: [{ key: 'isWeek', title: ' ' }]
  },
  {
    parent: 'Calendrier',
    class: 'calendrie',
    children: [
      { key: 'semCivil', title: 'Semaine Civile' },
      { key: 'date', title: 'Date' },
      { key: 'age', title: 'Age(sem)' }
      // { key: 'age_j', title: 'Age(jour)' }
    ]
  },
  {
    parent: 'Ambiance',
    class: 'ambiance',
    children: [
      { key: 'lumiere', title: 'Lumiére' },
      { key: 'flash', title: 'Flash' },
      // { key: 'humidity', title: 'Humidité' },
      { key: 'intensite', title: 'intensité' },
      { key: 'temperature', title: 'Temp °C' }
    ]
  },
  {
    parent: 'Viabilité',
    class: 'viability',
    children: [
      {
        key: 'effectif',
        title: 'Effectif présent'
      },
      {
        key: 'homog',
        title: 'Homogénéité'
      },
      {
        key: 'poid_vif',
        title: 'P.corporel (g)'
      },
      {
        key: 'viabilite',
        title: 'Viabilité(%)'
      },
      {
        key: 'mort_sem',
        title: 'Mort (%)'
      },
      {
        key: 'mort_cuml',
        title: '∑ mort (%)'
      }
    ]
  },
  {
    parent: 'Consommation',
    class: 'consommation',
    children: [
      { key: 'eau_dist', title: 'Eau (m³)' },
      { key: 'alt_dist', title: 'Aliment (t)' },
      { key: 'eps', title: 'EPS(ml)' },
      { key: 'aps', title: 'APS(g)' },
      { key: 'alt_cuml', title: '∑ APS(kg)' },
      { key: 'ratio', title: 'Ratio E/A' },
      { key: 'ref', title: 'Réf.Alt' }
    ]
  },
  {
    parent: 'Production',
    class: 'production',
    children: [
      { key: 'ponte', title: 'Ponte' },
      { key: 'ponte_percentage', title: 'Ponte (%)' },
      { key: 'pmo', title: 'PMO (g)', 'data-title': "Poid moyen d'œuf (g)" },
      { key: 'noppp', title: 'NOPPP', 'data-title': "Nombre d'œuf par poule présente" },
      { key: 'noppp_cumulative', title: '∑ NOPPP', 'data-title': "Nombre d'œuf par poule présente cumulée" },
      { key: 'noppd', title: 'NOPPD', 'data-title': "Nombre d'œuf par poule départ", class: 'border-right' },
      { key: 'noppd_cumulative', title: '∑ NOPPD', 'data-title': "Nombre d'œuf par poule départ cumulé" },
      { key: 'declasse', title: 'Déclasse', class: 'border-right' }
    ]
  },
  {
    parent: 'Mass OEUF',
    class: 'mass-oeuf',
    children: [
      {
        key: 'moppp_sem',
        title: 'MOPPP/sem (g)',
        'data-title': "masse d'œuf par poule présente par semaine (g)"
      },
      {
        key: 'moppp_cumulative',
        title: '∑ MOPPP (kg)',
        'data-title': "masse d'œuf par poule présente cumulé (kg)"
      },
      {
        key: 'moppd_sem',
        title: 'MOPPD/sem (g)',
        'data-title': "masse d'œuf par poule départ par semaine(g)",
        class: 'border-right'
      },
      {
        key: 'moppd_cumulative',
        title: '∑ MOPPD (kg)',
        'data-title': "masse d'œuf par poule départ cumulé(kg)",
        class: 'border-right'
      }
    ]
  },
  {
    parent: 'Indice de conversion',
    class: 'ic-header',
    children: [
      { key: 'ic', title: 'IC' },
      { key: 'apo', title: 'APO (g)' },
      { key: 'apo_cuml', title: '∑ APO (g)' }
    ]
  }
  // Prophylaxie
  // {
  //   parent: 'Prophylaxie',
  //   class: 'prohylaxie-header',
  //   children: [
  //     { key: 'proph_intervention', title: 'Intervention' },
  //     { key: 'proph_mode_admin', title: "Mode d'administration" },
  //     { key: 'proph_dose', title: 'Dose' },
  //     { key: 'proph_nbr_flacons', title: 'Nombre flacons' },
  //     { key: 'proph_eff_vaccine', title: 'Effectif vacciné' },
  //     { key: 'proph_moy_flacon', title: 'Moyen / flacon' },
  //     { key: 'proph_nbr_equipe', title: 'Nbr Équipe' },
  //     { key: 'proph_equipe', title: 'Équipe' }
  //   ]
  // },
  // Observation
  // {
  //   parent: 'Observation',
  //   class: 'observ-header',
  //   children: [{ key: 'observ', title: '--' }]
  // }
];
