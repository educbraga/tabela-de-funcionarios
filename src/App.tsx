import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeCard from "./components/EmployeeCard";
import type { Employee } from "./types/Employee";
import { fetchEmployees } from "./services/employeeService";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (err) {
        setError(
          "Erro ao carregar funcionários. Verifique se o json-server está rodando."
        );
        console.error("Erro ao carregar funcionários:", err);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  const filteredEmployees = useMemo(() => {
    if (!searchTerm) return employees;

    const term = searchTerm.toLowerCase();
    return employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(term) ||
        employee.job.toLowerCase().includes(term) ||
        employee.phone.includes(term)
    );
  }, [employees, searchTerm]);

  if (loading) {
    return (
      <div className="app__loading">
        <Header />
        <div className="container app__content">
          <div className="app__loading-content">
            <div className="app__loading-text">Carregando funcionários...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app__error">
        <Header />
        <div className="container app__content">
          <div className="app__error-content">
            <div className="app__error-message">
              <p>{error}</p>
              <p className="app__error-help">
                Execute:{" "}
                <code className="app__error-code">
                  json-server --watch db.json
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <div className="container app__content">
        {/* Seção de Título e Busca */}
        <div className="app__section">
          <h1 className="app__title">
            Funcionários
          </h1>
          <div className="app__search-container">
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Pesquisar"
            />
          </div>
        </div>

        {/* Visualização da Tabela Desktop */}
        <EmployeeTable employees={filteredEmployees} />

        {/* Visualização de Cards Mobile */}
        <div className="app__mobile-header">
          <div className="app__mobile-header-labels">
            <span className="app__mobile-header-label">FOTO</span>
            <span className="app__mobile-header-label">NOME</span>
          </div>
          <div className="app__mobile-header-icon">•</div>
        </div>

        {/* Cards Mobile */}
        <div className="app__mobile-cards">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))
          ) : (
            <div className="app__no-results">
              Nenhum funcionário encontrado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
