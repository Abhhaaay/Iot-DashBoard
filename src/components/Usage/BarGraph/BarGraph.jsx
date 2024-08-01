
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer
} from "recharts";

function BarGraph(props) {

  const renderCustomizedLabel = ({ x, y, value }) => {
    return (
      <text
        x={x+10}
        y={y}
        dx={0}
        dy={-10}
        fontSize="0.8rem"
        fill="#999798"
        textAnchor="middle"
      >
        {value}
      </text>
    );
  };
  

  return (
    <ResponsiveContainer width="80%" height={260}>
      <BarChart data={props.data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
        <Bar dataKey="students" fill="#F6288F" barSize={20} radius={5} label={renderCustomizedLabel}>
        </Bar>
        <XAxis dataKey="day" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarGraph