/**
 * Sample for Line Series
 */
import * as React from 'react';
import { useEffect } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  Legend,
  DateTime,
  Tooltip,
  Highlight,
  Double,
  DataLabel,
  AxesDirective,
  AxisDirective,
  SplineSeries,
  SplineAreaSeries,
  AreaSeries,
  ColumnSeries
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { useTheme } from '@mui/material';
import { brown } from '@mui/material/colors';

const MasseOeufChart = ({ code, i, show }) => {
  const lines = { width: 1 };
  const theme = useTheme();
  const legendSettings = {
    visible: true,
    textStyle: { color: theme.palette.text.primary }
  };

  return (
    <ChartComponent
      id={`chart${i}`}
      primaryxAxis={{
        valueType: 'Double',
        title: 'Overs',
        labelFormat: 'age'
      }}
      // load={load.bind(this)}
      primaryYAxis={{
        title: "∑ Massse d'œuf (kg)",
        rangePadding: 'None',
        minimum: 0,
        maximum: 40,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: {
          width: 2,
          color: theme.palette.divider
        },
        minorTickLines: { width: 0, color: '#E5890A' },
        titleStyle: {
          textAlignment: 'Center',
          size: '12px',
          fontWeight: 'bold',
          color: theme.palette.text.primary
        },
        labelStyle: {
          color: theme.palette.text.secondary,
          size: show ? '12px' : '10px'
        }
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{
        enable: true,
        shared: true,
        fill: theme.palette.background.paper,
        color: '#000',
        textStyle: {
          color: theme.palette.text.primary
        },
        border: {
          width: 1,
          color: 'black'
        },
        opacity: 0.7
      }}
      legendSettings={legendSettings}
      width={Browser.isDevice ? '100%' : '100%'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip, Highlight, DataLabel, SplineAreaSeries, AreaSeries, ColumnSeries]} />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisC"
          opposedPosition={true}
          title="Massse d'œuf hebdomadaire(g)"
          titleStyle={{
            textAlignment: 'Center',
            size: '12px',
            fontWeight: 'bold',
            color: theme.palette.text.primary
          }}
          labelStyle={{
            color: theme.palette.text.secondary,
            size: show ? '12px' : '10px'
          }}
          majorGridLines={{ width: 0, color: '#000' }}
          minorTickLines={{ width: 0, color: '#994D1C' }}
          lineStyle={{ width: 1, color: theme.palette.divider }}
          minimum={0}
          maximum={500}
          interval={50}
          // visible={show}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisA"
          opposedPosition={true}
          labelStyle={{
            color: 'transparent'
          }}
          majorGridLines={{
            width: 1,
            color: theme.palette.divider
          }}
          minorTickLines={{
            width: 1,
            color: theme.palette.divider
          }}
          lineStyle={{
            width: 0
          }}
          majorTickLines={{
            width: 0
          }}
          minimum={0}
          maximum={10}
          interval={0.25}
          visible={show}
        ></AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={code?.ages}
          xName="age"
          yName={'g_masse_sem'}
          name={show ? "Guide: Massse d'œuf" : ' '}
          width={3.5}
          fill={theme.palette.mode == 'light' ? brown[700] : '#ff784e'}
          opacity={0.4}
          type="Line"
          yAxisName="yAxisC"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.massSem}
          xName="age"
          yName={'massSem'}
          name={show ? "Massse d'œuf" : ' '}
          width={3.5}
          fill={theme.palette.mode == 'light' ? brown[500] : '#b23c17'}
          type="Line"
          yAxisName="yAxisC"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.ages}
          xName="age"
          yName={'g_masse_cuml'}
          name={show ? "Guide: ∑ Massse d'œuf" : ' '}
          width={3.5}
          fill="#F5CCA0"
          opacity={0.5}
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.massCuml}
          xName="age"
          yName={'massCuml'}
          name={show ? "∑ Massse d'œuf" : ' '}
          width={3.5}
          fill="#E5890A"
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.ages}
          xName="age"
          yName="y"
          name=""
          width={1.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          type="Line"
          yAxisName="yAxisA"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default MasseOeufChart;
