import './app-info.css';

const AppInfo = ({employees,increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников  компаний N</h1>
            <h2>Общее число сотрулников:{employees}</h2>
            <h2>Премию получать:{increased}</h2>
        </div>
        )
}

export default AppInfo;