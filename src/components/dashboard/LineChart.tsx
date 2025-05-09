import React, { useEffect, useState } from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Button } from '@/components/ui/button';

interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface LineChartProps {
  title: string;
  data: DataPoint[];
  lines: Array<{
    key: string;
    color: string;
    name: string;
  }>;
  timeRanges?: string[];
  loading?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({ 
  title,
  data,
  lines,
  timeRanges = ['24h', '7d', '30d', '1y'],
  loading = false
}) => {
  const [activeRange, setActiveRange] = useState(timeRanges[0]);
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  
  // Simulate fetching different data based on time range
  useEffect(() => {
    const fetchData = () => {
      // In a real app, you'd fetch data here based on the activeRange
      // For demo purposes, we'll just modify the existing data
      
      // Simulate loading
      setTimeout(() => {
        if (activeRange === '24h') {
          setChartData(data.slice(-24));
        } else if (activeRange === '7d') {
          setChartData(data.slice(-7));
        } else if (activeRange === '30d') {
          setChartData(data.slice(-30));
        } else {
          setChartData(data);
        }
      }, 500);
    };
    
    fetchData();
  }, [activeRange, data]);

  return (
    <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="flex space-x-2">
          {timeRanges.map((range) => (
            <Button
              key={range}
              variant={activeRange === range ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse-gentle text-muted-foreground">
              Loading data...
            </div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
              data={chartData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis 
                dataKey="name"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Legend iconType="circle" />
              {lines.map((line) => (
                <Line
                  key={line.key}
                  type="monotone"
                  dataKey={line.key}
                  name={line.name}
                  stroke={line.color}
                  strokeWidth={2}
                  dot={{ r: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              ))}
            </RechartsLineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default LineChart;
