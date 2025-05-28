import {
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { data } from '../../utils/constant';
import "./Dashboard.css";



const ActivityChart = () => {
  return (
    <div className="activity-style">
    <div className='actv-btwn'>
      <div className="text-activity">
        Activity
      </div>
      <div className='text-lite-activity'>
        3 appointment on this week
      </div>
    </div>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data} barGap={5}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="light" stackId="a" fill="#E0E0E0" barSize={6} />
          <Bar dataKey="medium" stackId="a" fill="#50E3C2" barSize={6} />
          <Bar dataKey="heavy" stackId="a" fill="#5C6AC4" barSize={6} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
