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
import { color } from 'framer-motion';

const ProductionChart = ({ code, i, show }) => {
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
        title: 'Ponte %',
        labelFormat: '{value}%',
        rangePadding: 'None',
        minimum: 0,
        maximum: 110,
        interval: 10,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: {
          width: show ? 0 : 1,
          color: theme.palette.divider
        },
        minorTickLines: { width: 0, color: '#834218' },
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
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip, Highlight, DataLabel, SplineAreaSeries, AreaSeries]} />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisB"
          opposedPosition={true}
          title="∑ NOPPD"
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
          minorTickLines={{ width: 1, color: theme.palette.divider }}
          lineStyle={{ width: 1, color: theme.palette.divider }}
          majorGridLines={{ width: 0, color: '#E48F45' }}
          minimum={null}
          maximum={null}
          interval={null}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisC"
          opposedPosition={true}
          title="Déclassées"
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
          majorGridLines={{ width: 0, color: '#F39F5A' }}
          minorTickLines={{ width: 1, color: theme.palette.divider }}
          lineStyle={{ width: 1, color: theme.palette.divider }}
          minimum={0}
          maximum={15}
          interval={1.5}
          visible={show}
          labelFormat="{value}%"
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
            color: 'red'
          }}
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
          minorGridLines={{
            width: 10
          }}
          minimum={0}
          maximum={100}
          interval={2.5}
          labelFormat="{value}g"
          visible={show}
        ></AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={code?.ages}
          xName="age"
          yName={'g_ponte'}
          name={show ? 'Guide: Ponte (%)' : ' '}
          width={3.5}
          fill="#FFA447"
          opacity={0.5}
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.ponte}
          xName="age"
          yName={'ponte'}
          name={show ? 'Ponte (%)' : ' '}
          width={3.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          fill="#834218"
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.ages}
          xName="age"
          yName={'g_pmo'}
          name={show ? 'Guide: PMO (g)' : ' '}
          width={3.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          fill="#C7B7A3"
          opacity={0.8}
          type="Line"
          yAxisName="yAxisA"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.pmo}
          xName="age"
          yName={'pmo'}
          name={show ? 'PMO (g)' : ' '}
          width={3.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          fill="#D3A41C"
          type="Line"
          yAxisName="yAxisA"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.ages}
          xName="age"
          yName={'g_nopppcuml'}
          name={show ? 'Guide: ∑ NOPPD' : ' '}
          width={3.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          fill="#F0DBAF"
          opacity={0.8}
          type="Line"
          yAxisName="yAxisB"
        ></SeriesDirective>

        <SeriesDirective
          dataSource={code?.noppd_cuml}
          xName="age"
          yName={'noppd_cuml'}
          name={show ? '∑ NOPPD' : ' '}
          width={3.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          fill="#E48F45"
          type="Line"
          yAxisName="yAxisB"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.declass}
          xName="age"
          yName={'declasse'}
          name={show ? 'Déclassées (%)' : ' '}
          width={1}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          fill="#F39F5A"
          border={{
            width: 2,
            color: '#F39F5A'
          }}
          opacity={0.3}
          type="Area"
          yAxisName="yAxisC"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.blancs}
          xName="age"
          yName={'blanc'}
          name={show ? 'Blancs (%)' : ' '}
          width={1}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: 'Circle',
            isFilled: true
          }}
          fill="#F39F5A"
          type="Area"
          yAxisName={'yAxisC'}
        ></SeriesDirective>
        <SeriesDirective dataSource={code?.guide} xName="age" yName="y" width={1.5} type="Line" yAxisName="yAxisA"></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default ProductionChart;
