import React, {useState, useEffect} from 'react';
import './components/App.css';
import backgroundimage from './assets/background.jpg';
import Header from './components/Header';
import api from './services/api';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('email').then(response => {
      setProjects(response.data);
    });
  },[]);

  async function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    //setProjects([... projects,`Novo projeto ${Date.now()}`]);//imutabilidade
    const response = await api.post('email',{
      email: 'galileu7@teste.com.br',
      password: '123'
    })

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header />
      <img width={400} src={backgroundimage}/>
      <ul>
        {projects.map(project =><li key={project.id}>{project.email}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
