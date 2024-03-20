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
        key: 'cent_mort_sem',
        title: 'Mort (%)'
      },
      {
        key: 'cent_mort_cuml',
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
      { key: 'formule_ep', title: 'Réf.Alt' }
    ]
  },
  {
    parent: 'Production',
    class: 'production',
    children: [
      { key: 'ponte', title: 'Ponte' },
      { key: 'ponte_cent', title: 'Ponte (%)' },
      { key: 'pmo', title: 'PMO (g)', 'data-title': "Poid moyen d'œuf (g)" },
      { key: 'noppp', title: 'NOPPP', 'data-title': "Nombre d'œuf par poule présente" },
      { key: 'noppp_cuml_sem', title: '∑ NOPPP', 'data-title': "Nombre d'œuf par poule présente cumulée" },
      { key: 'noppd', title: 'NOPPD', 'data-title': "Nombre d'œuf par poule départ", class: 'border-right' },
      { key: 'noppd_cuml_sem', title: '∑ NOPPD', 'data-title': "Nombre d'œuf par poule départ cumulé" },
      { key: 'declassed', title: 'Déclasse', class: 'border-right' }
    ]
  },
  {
    parent: 'Mass OEUF',
    class: 'mass-oeuf',
    children: [
      {
        key: 'mass_oeuf_pp',
        title: 'MOPPP/sem (g)',
        'data-title': "masse d'œuf par poule présente par semaine (g)"
      },
      {
        key: 'mass_oeuf_sem_pp',
        title: '∑ MOPPP (kg)',
        'data-title': "masse d'œuf par poule présente cumulé (kg)"
      },
      {
        key: 'mass_oeuf_pd',
        title: 'MOPPD/sem (g)',
        'data-title': "masse d'œuf par poule départ par semaine(g)",
        class: 'border-right'
      },
      {
        key: 'mass_oeuf_sem_pd',
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
      { key: 'ic_cuml', title: 'IC' },
      { key: 'alt_oeuf', title: 'APO (g)' },
      { key: 'alt_oeuf_cuml', title: '∑ APO (g)' }
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
