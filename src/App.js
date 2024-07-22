import UserList from "./UserList";

function App() {

    return (
        <div style={{backgroundColor: 'white', width: '300px', margin: '100px auto', border: '1px solid rgba(0, 0, 0, 0.4)'}}>
            <h3 style={{textAlign: 'center', textDecoration: 'underline'}}>LISTE DES UTILISATEURS</h3>
            <UserList />
        </div>
    );
};

export default App