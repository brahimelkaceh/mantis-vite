let base_url = 'https://farmdriver.savas.ma/api/';

const api = {
  //! Production Chart
  getProductionChartData: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}table-prod-chart-new/?lotId=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(response);
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  // ! Aliment / oeuf Chart
  getAlimentChartData: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}table-altoeuf-chart-new/?lotId=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(response);
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  // ! Consommation Chart
  getConsommationChartData: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}table-conso-chart-new/?lotId=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(response);
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  // !  Poids corporel & Homogénéité Chart
  getPvHomogChartData: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}homog-pv-chart-new/?lotId=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(response);
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  // !  Mortalité Chart
  getMortaliteChartData: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}table-mort-chart-new/?lotId=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(response);
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  // !  Masse d'œufs Chart
  getMasseOeufChartData: async (id) => {
    if (!id) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}table-massoeuf-chart-new/?lotId=${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(response);
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  },
  // ! GET COMPAR CHARTS
  getComparCharts: async (lot, courbeId) => {
    if (!lot || (courbeId !== 0 && !courbeId)) {
      return;
    }
    try {
      const accessToken = window.localStorage.getItem('serviceToken');

      const response = await fetch(`${base_url}compare-multi-charts/?lots=${JSON.stringify(lot)}&courbe=${courbeId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      console.error(error);
    }
  }
};

export default api;

// const fetchLotData = async (id) => {
//   try {
//     setLoading(true);
//     const result = await api.getLotTitles(id);
//     console.log(result);
//     setLotData(result);
//   } catch (error) {
//     setError("failed to fetch");
//   } finally {
//     setLoading(false);
//   }
// };
