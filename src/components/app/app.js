import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employess-add-form/employees-add-form';



import './app.css'

const data = [
    {name:"Alex", salary: 1000, increase: false, id: 1 },
    {name:"john", salary: 2000, increase: true, id: 2},
    {name:"Nick", salary: 1950, increase: false, id: 3},
    {name:"Tedd", salary: 3022, increase: false, id: 4}
];

function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>

            </div>
            <EmployeesList data = {data}/>
            <EmployeesAddForm/>
            
        </div>
        );
}

export default App;