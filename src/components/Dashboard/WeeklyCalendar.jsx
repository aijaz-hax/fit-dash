import { weekData } from '../../utils/constant';
import './Dashboard.css'; 


const WeeklyCalendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="calendar-nav">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      <div className="calendar-grid">
        {weekData.map((day, index) => (
          <div className="calendar-day" key={index}>
            <div className={`day-name ${day.selected ? 'selected' : ''}`}>{day.day}</div>
            <div className={`day-date ${day.selected ? 'selected' : ''}`}>{day.date}</div>
            <div className="time-list">
              {day.times.length > 0 ? (
                day.times.map((time, i) => (
                  <div
                    key={i}
                    className={`time-slot ${time === day.selected ? 'selected-time' : ''}`}
                  >
                    {time}
                  </div>
                ))
              ) : (
                <div className="time-slot empty">—</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
