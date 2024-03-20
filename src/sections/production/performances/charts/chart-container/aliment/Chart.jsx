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
  AreaSeries
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { useTheme } from '@mui/material';
import { deepOrange, green, orange } from '@mui/material/colors';
import { ThemeMode } from 'config';

const AltChart = ({ data, show }) => {
  const theme = useTheme();

  const legendSettings = {
    visible: true,
    textStyle: { color: theme.palette.text.primary }
  };
  return (
    <ChartComponent
      id={`chart_alt`}
      primaryxAxis={{
        valueType: 'Double',
        title: 'Overs',
        labelFormat: 'age'
      }}
      // load={load.bind(this)}
      primaryYAxis={{
        title: 'APO (g)',
        rangePadding: 'None',
        minimum: null,
        maximum: null,
        interval: null,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: {
          width: show ? 0 : 1,
          color: theme.palette.divider
        },
        minorTickLines: { width: 0, color: '#6B240C' },
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
      height={'100%'}
      // title={`Aliment / Oeufs`}
      titleStyle={{
        textAlignment: 'Center',
        size: '15px',
        fontWeight: '600',
        color: 'rgb(131, 53, 0)'
      }}

      // loaded={onChartLoad.bind(this)}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip, Highlight, DataLabel, SplineAreaSeries, AreaSeries]} />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisA"
          opposedPosition={true}
          title=""
          titleStyle={{
            textAlignment: 'Center',
            size: '12px',
            fontWeight: '400'
          }}
          labelStyle={{
            color: 'transparent'
          }}
          majorGridLines={{ width: 1, color: theme.palette.divider }}
          minorTickLines={{ width: 1, color: theme.palette.divider }}
          lineStyle={{ width: 1, color: theme.palette.divider }}
          minimum={0}
          maximum={100}
          interval={2.5}
          visible={show}
        ></AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data?.guide}
          xName="age"
          yName={'altOeufCuml'}
          name={show ? 'Guide: ∑ APO (g)' : ' '}
          width={3.5}
          fill={ThemeMode.DARK == 'light' ? orange[200] : orange[500]}
          opacity={0.5}
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.guide}
          xName="age"
          yName={'altOeufSem'}
          name={show ? 'Guide: APO (g)' : ' '}
          fill={ThemeMode.DARK == 'light' ? green[200] : green[200]}
          width={3.5}
          opacity={0.7}
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.reel}
          xName="age"
          yName={'altOeufCuml'}
          name={show ? '∑ APO (g)' : ' '}
          width={3.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          fill="#FFA447"
          opacity={0.5}
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.reel}
          xName="age"
          yName={'altOeufSem'}
          name={show ? 'APO (g)' : ' '}
          width={3.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          fill="red"
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.guide}
          xName="age"
          yName="y"
          name=""
          width={1.5}
          type="Line"
          yAxisName="yAxisA"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default AltChart;
