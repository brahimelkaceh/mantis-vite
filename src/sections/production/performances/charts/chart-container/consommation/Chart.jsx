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
import { ThemeMode } from 'config';
import { green } from '@mui/material/colors';

const ConsoChart = ({ data, show }) => {
  const theme = useTheme();

  const legendSettings = {
    visible: true,
    textStyle: { color: theme.palette.text.primary }
  };
  return (
    <ChartComponent
      id={`chart_conso`}
      primaryxAxis={{
        valueType: 'Double',
        title: 'Overs',
        labelFormat: 'age'
      }}
      // load={load.bind(this)}
      primaryYAxis={{
        title: 'Eau Consommée (ml/j)',
        rangePadding: 'None',
        minimum: 0,
        maximum: 280,
        interval: 25,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: {
          width: show ? 0 : 1,
          color: theme.palette.divider
        },
        minorTickLines: { width: 0, color: '#86A7FC' },
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
      // title={`Consommation (Aliment & Eau)`}
      titleStyle={{
        textAlignment: 'Center',
        size: '15px',
        fontWeight: '600',
        color: '#50623A'
      }}

      // loaded={onChartLoad.bind(this)}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip, Highlight, DataLabel, SplineAreaSeries, AreaSeries]} />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisB"
          opposedPosition={false}
          title="Aliment / sujet"
          titleStyle={{
            textAlignment: 'Center',
            size: '12px',
            fontWeight: '500',
            color: theme.palette.text.primary
          }}
          labelStyle={{
            color: theme.palette.text.secondary,
            size: show ? '12px' : '10px'
          }}
          majorGridLines={{ width: 0, color: theme.palette.divider }}
          minorTickLines={{ width: 1, color: theme.palette.divider }}
          lineStyle={{ width: 1, color: theme.palette.divider }}
          minimum={0}
          maximum={180}
          interval={20}
          visible={show}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisC"
          opposedPosition={true}
          title="∑ Aliment consommée (kg)"
          titleStyle={{
            textAlignment: 'Center',
            size: '12px',
            fontWeight: '500',
            color: theme.palette.text.primary
          }}
          labelStyle={{
            color: theme.palette.text.secondary,
            size: show ? '12px' : '10px'
          }}
          majorGridLines={{ width: 0, color: theme.palette.divider }}
          minorTickLines={{ width: 1, color: theme.palette.divider }}
          lineStyle={{ width: 1, color: theme.palette.divider }}
          minimum={0}
          maximum={70}
          interval={10}
          // visible={show}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisD"
          opposedPosition={true}
          title="Ratio (Eau/alt)"
          titleStyle={{
            textAlignment: 'Center',
            size: '12px',
            fontWeight: '500',
            color: theme.palette.text.primary
          }}
          labelStyle={{
            color: theme.palette.text.secondary,
            size: show ? '12px' : '10px'
          }}
          majorGridLines={{ width: 0, color: theme.palette.divider }}
          minorTickLines={{ width: 1, color: theme.palette.divider }}
          lineStyle={{ width: 1, color: theme.palette.divider }}
          minimum={0}
          maximum={10}
          interval={1}
          visible={show}
        ></AxisDirective>
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
          lineStyle={{
            width: 0
          }}
          majorTickLines={{ width: 0 }}
          minimum={0}
          maximum={280}
          interval={5}
          visible={show}
        ></AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data?.reel}
          xName="age"
          yName={'ratio'}
          name={show ? 'Ratio' : ' '}
          width={3.5}
          dashArray="5,5"
          border={{ width: 1, color: '#B4D4FF' }}
          fill="#B4D4FF"
          opacity={0.7}
          type="Area"
          yAxisName="yAxisD"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.reel}
          xName="age"
          yName={'eps'}
          name={show ? 'Eau' : ' '}
          width={show ? 3.5 : 2.5}
          dashArray={show ? '8,5' : '4,4'}
          fill="#86A7FC"
          type="Line"
          yAxisName="yAxisA"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.reel}
          xName="age"
          yName={'aps'}
          name={show ? 'Aliment / sujet' : ' '}
          width={3.5}
          // fill="#557C55"
          fill={ThemeMode.DARK == 'light' ? green[400] : green[700]}
          type="Line"
          yAxisName="yAxisB"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.guide}
          xName="G_age"
          yName={'G_aps'}
          name={show ? 'Guide: Aliment / sujet' : ' '}
          width={3.5}
          fill={ThemeMode.DARK == 'light' ? green[400] : green[700]}
          opacity={0.6}
          type="Line"
          yAxisName="yAxisB"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.reel}
          xName="age"
          yName={'apsCuml'}
          name={show ? '∑ Aliment / sujet' : ' '}
          width={3.5}
          fill={ThemeMode.DARK == 'light' ? green[400] : green[300]}
          type="Line"
          yAxisName="yAxisC"
        ></SeriesDirective>

        <SeriesDirective
          dataSource={data?.guide}
          xName="G_age"
          yName={'G_altCumlPD'}
          name={show ? 'Guide: ∑ Aliment / sujet' : ' '}
          width={3.5}
          fill={ThemeMode.DARK == 'light' ? green[400] : green[300]}
          opacity={0.5}
          type="Line"
          yAxisName="yAxisC"
        ></SeriesDirective>

        <SeriesDirective
          dataSource={data?.guide}
          xName="G_age"
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
export default ConsoChart;
