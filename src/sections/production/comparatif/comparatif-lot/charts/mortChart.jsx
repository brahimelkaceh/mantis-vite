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
  ColumnSeries,
  Logarithmic
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { useTheme } from '@mui/material';
import { ThemeMode } from 'config';
import { green, indigo, orange, pink, purple, red } from '@mui/material/colors';

const MortChart = ({ code, i, show }) => {
  const theme = useTheme();
  const legendSettings = {
    visible: true,
    textStyle: { color: theme.palette.text.primary }
  };

  return (
    <ChartComponent
      id={`chart${i}`}
      legendSettings={legendSettings}
      primaryXAxis={{
        labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
        labelRotation: Browser.isDevice ? -45 : 0,
        title: '',
        interval: 5,
        majorGridLines: { width: 1 },
        majorTickLines: { width: 1 },
        rangePadding: 'None',
        valueType: 'Double'
      }}
      primaryYAxis={{
        title: '∑ % Mortalité PD',
        labelFormat: `{value}%`,
        // rangePadding: "None",
        opposedPosition: true,
        minimum: null,
        maximum: null,
        interval: null,
        lineStyle: { width: 1, color: theme.palette.divider },
        majorTickLines: { width: 1 },
        majorGridLines: {
          width: 0
        },
        minorTickLines: { width: 0, color: '#79AC78' },
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
      width={Browser.isDevice ? '100%' : '100%'}
    >
      <Inject
        services={[LineSeries, DateTime, Legend, Tooltip, Highlight, DataLabel, SplineAreaSeries, AreaSeries, ColumnSeries, Logarithmic]}
      />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisB"
          opposedPosition={false}
          title="Mortalité / Semaine (%)"
          titleStyle={{
            textAlignment: 'Center',
            size: '12px',
            fontWeight: 'bold',
            color: theme.palette.text.primary
          }}
          majorGridLines={{
            width: show ? 0 : 1,
            color: theme.palette.divider
          }}
          minorTickLines={{
            width: 1,
            color: theme.palette.divider
          }}
          lineStyle={{
            width: 1,
            color: theme.palette.divider
          }}
          majorTickLines={{
            width: 1,
            color: theme.palette.divider
          }}
          minimum={null}
          maximum={null}
          interval={null}
          // visible={show}
          labelFormat="n2"
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisA"
          opposedPosition={true}
          title=""
          titleStyle={{
            textAlignment: 'Center',
            size: '12px',
            fontWeight: 'bold',
            color: theme.palette.text.primary
          }}
          labelStyle={{
            color: 'transparent'
          }}
          majorGridLines={{ width: 2, color: theme.palette.divider }}
          minorTickLines={{ width: 2, color: theme.palette.divider }}
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
          yName={'g_mortCuml'}
          name={show ? 'Guide: ∑ % Mortalité PD' : ' '}
          width={show ? 5.5 : 2.5}
          fill={theme.palette.mode == 'light' ? green[600] : green[400]}
          opacity={0.5}
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.mort_sem}
          xName="age"
          yName={'mort_sem'}
          name={show ? '% Mortalité / Semaine' : ' '}
          width={3.5}
          fill={theme.palette.mode == 'light' ? pink[100] : indigo[400]}
          type="Column"
          yAxisName="yAxisB"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.mort_cuml}
          xName="age"
          yName={'mort_sem'}
          name={show ? '∑ % Mortalité PD' : ' '}
          width={show ? 5.5 : 2.5}
          fill={theme.palette.mode == 'light' ? green[600] : green[400]}
          type="Line"
        ></SeriesDirective>
        <SeriesDirective dataSource={code?.ages} xName="age" yName="y" name="" type="Line" columnSpacing={0.1}></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default MortChart;
