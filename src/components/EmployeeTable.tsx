import React from 'react';
import type { Employee } from '../types/Employee';
import { formatDate, formatPhone } from '../utils/formatters';
import { getEmployeePhoto } from '../utils/photoMapper';

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <div className="employee-table">
      <table className="employee-table__table">
        <thead className="employee-table__header">
          <tr>
            <th className="employee-table__header-cell">
              FOTO
            </th>
            <th className="employee-table__header-cell">
              NOME
            </th>
            <th className="employee-table__header-cell">
              CARGO
            </th>
            <th className="employee-table__header-cell">
              DATA DE ADMISSÃO
            </th>
            <th className="employee-table__header-cell">
              TELEFONE
            </th>
          </tr>
        </thead>
        <tbody className="employee-table__body">
          {employees.map((employee) => (
            <tr key={employee.id} className="employee-table__row">
              <td className="employee-table__cell">
                <img
                  src={getEmployeePhoto(employee.id)}
                  alt={employee.name}
                  className="employee-table__photo"
                />
              </td>
              <td className="employee-table__cell employee-table__cell--name">
                {employee.name}
              </td>
              <td className="employee-table__cell employee-table__cell--data">
                {employee.job}
              </td>
              <td className="employee-table__cell employee-table__cell--data">
                {formatDate(employee.admission_date)}
              </td>
              <td className="employee-table__cell employee-table__cell--data">
                {formatPhone(employee.phone)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {employees.length === 0 && (
        <div className="employee-table__no-results">
          Nenhum funcionário encontrado.
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;