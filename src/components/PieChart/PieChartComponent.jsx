import {PieChart, Pie, Cell, Tooltip, Label, ResponsiveContainer} from 'recharts'

function PieChartComponent(props) {

    const renderCustomizedLabel = ({ cx, cy }) => {
 
        return (
            <>
                <text x={cx-24} y={cy-2} style={{fontSize: "1.2rem", fontWeight: "700" }}>
                    {(props.label.num)/1000}K
                </text>
                <text x={cx-40} y={cy+12}>
                    {props.label.title}
                </text>
            </>
        );
    };

    const COLORS = ['#F6288F', '#0A3B52 ', '#45A0B5'];

  return (
    <ResponsiveContainer width="48%" height={170}>
        <PieChart >
            <Pie
                data={props.data}
                labelLine={false}
                dataKey="sims"
                outerRadius={80}
                innerRadius={65}
                paddingAngle={0}
                label={renderCustomizedLabel}
                style={{ cursor: 'pointer', outline: 'none' }}
            >
                {props.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartComponent