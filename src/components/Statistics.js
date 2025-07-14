import React from 'react';

const Statistics = ({ statistics }) => {
  const stats = [
    {
      title: 'Total des inscriptions',
      value: statistics.total,
      icon: '📊',
      color: 'blue',
      description: 'Nombre total d\'étudiants inscrits'
    },
    {
      title: 'En attente',
      value: statistics.pending,
      icon: '⏳',
      color: 'orange',
      description: 'Demandes en attente de validation'
    },
    {
      title: 'Acceptés',
      value: statistics.accepted,
      icon: '✅',
      color: 'green',
      description: 'Étudiants acceptés'
    },
    {
      title: 'Refusés',
      value: statistics.rejected,
      icon: '❌',
      color: 'red',
      description: 'Demandes refusées'
    }
  ];

  const getPercentage = (value, total) => {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
  };

  return (
    <div className="statistics">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div className="stat-header">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
            <div className="stat-content">
              <h4 className="stat-title">{stat.title}</h4>
              <p className="stat-description">{stat.description}</p>
              {statistics.total > 0 && (
                <div className="stat-percentage">
                  {getPercentage(stat.value, statistics.total)}% du total
                </div>
              )}
            </div>
            <div className="stat-progress">
              <div 
                className="stat-progress-bar"
                style={{ 
                  width: `${statistics.total > 0 ? getPercentage(stat.value, statistics.total) : 0}%` 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;