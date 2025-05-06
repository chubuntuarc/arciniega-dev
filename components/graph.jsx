import React, { useEffect, useRef } from 'react';
import { createChart, BaselineSeries } from 'lightweight-charts';

const Graph = ({ data, current_rate }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = { layout: { textColor: '#FFFFFF', background: { type: 'solid', color: 'black' } } };
    const width = chartRef.current.clientWidth;
    const height = 400;
    const chart = createChart(chartRef.current, { width, height, ...chartOptions });
    const baselineSeries = chart.addSeries(BaselineSeries, { 
      baseValue: { type: 'price', price: current_rate },
      topLineColor: '#00FFC4',
      topFillColor1: 'rgba( 38, 166, 154, 0.28)',
      topFillColor2: 'rgba( 38, 166, 154, 0.05)',
      bottomLineColor: '#E53E3E',
      bottomFillColor1: 'rgba( 239, 83, 80, 0.05)',
      bottomFillColor2: 'rgba( 239, 83, 80, 0.28)' });

    const graph_data = data.map((item) => ({
      value: item.close,
      time: Math.floor(new Date(item.date).getTime() / 1000)
    })).sort((a, b) => a.time - b.time);

    baselineSeries.setData(graph_data);

    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [data, current_rate]);

  return <div ref={chartRef} style={{ marginTop: '1rem' }} />;
};

export default Graph;
