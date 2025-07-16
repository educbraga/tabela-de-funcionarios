import React, { useState } from "react";
import type { Employee } from "../types/Employee";
import { formatDate, formatPhone } from "../utils/formatters";
import { getEmployeePhoto } from "../utils/photoMapper";
import chevronDown from "../assets/icons/charm_chevron-down.svg";

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="employee-card">
      <div
        className="employee-card__header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="employee-card__info">
          <img
            src={getEmployeePhoto(employee.id)}
            alt={employee.name}
            className="employee-card__photo"
          />
          <div>
            <h3 className="employee-card__name">{employee.name}</h3>
          </div>
        </div>
        <div className="employee-card__chevron-container">
          <img
            src={chevronDown}
            alt={isExpanded ? "Recolher" : "Expandir"}
            className={`employee-card__chevron ${
              isExpanded ? "employee-card__chevron--expanded" : ""
            }`}
          />
        </div>
      </div>

      {isExpanded && (
        <div className="employee-card__details">
          <div className="employee-card__details-content">
            <div className="employee-card__detail-row">
              <span className="employee-card__detail-label">Cargo:</span>
              <span className="employee-card__detail-value">{employee.job}</span>
            </div>
            <div className="employee-card__detail-row">
              <span className="employee-card__detail-label">
                Data de admissão:
              </span>
              <span className="employee-card__detail-value">
                {formatDate(employee.admission_date)}
              </span>
            </div>
            <div className="employee-card__detail-row">
              <span className="employee-card__detail-label">
                Telefone:
              </span>
              <span className="employee-card__detail-value">
                {formatPhone(employee.phone)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
