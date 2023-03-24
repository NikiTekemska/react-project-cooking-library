import './App.css';
import * as recipeService from './services/recipeService';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import { Recipes } from './components/Recipes/Recipes';
import { Category } from './components/Category/Category';
import { useState, useEffect } from 'react';
import { Details } from './components/Details/Details';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe';

import { AuthContext } from './components/contexts/AuthContext';
import * as authService from './services/authService';


function App() {
  const navigate = useNavigate();
  // const [recipes, setRecipes] = useState([]);
  // useEffect(()=>{
  //     recipeService.getAll()
  //       .then(result => {
  //         setRecipes(result);
  //       })
  // },[]);
  const [auth, setAuth] = useState({});

  const onCreateSubmit = async (data) => {
    const newRecipe = await recipeService.create(data);

    //set the new recipe to the state
    //navigate to the recipesCatalog
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
    } catch (error) {
      console.log(`Failed to login`);
    }
    navigate('/home');

  };


  const context = {
    onLoginSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated:!!auth.accessToken
    
  }; 

  return (
    <AuthContext.Provider value={context}>
      <div>

        < Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/create' element={<CreateRecipe onCreateSubmit={onCreateSubmit} />} />
            <Route path='/recipes/:category/' element={<Category />} />
            <Route path='/recipes/:category/*' element={<Details />} />
          </Routes>
        </main>

      </div>
    </AuthContext.Provider>
  );
}

export default App;
