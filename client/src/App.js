import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import { RecipesCategory } from './components/Catalog/RecipesCategory/RecipesCategory';
import { Category } from './components/Catalog/Category/Category';
import { Details } from './components/Details/Details';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe';
import { Logout } from './components/Logout';
import { Edit } from './components/Edit/Edit';
import { MyRecipes } from './components/MyRecipes/MyRecipes';
import { SearchedRecipes } from './components/Header/SearchedRecipes';

import { AuthProvider } from './contexts/AuthContext';
import { RecipeProvider } from './contexts/RecipesContext'
import { RouteGuard } from './components/RouteGuard/RouteGuard';



function App() {

  return (
    <AuthProvider >
      <RecipeProvider>
        <div>

          < Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/register' element={<Register />} />
              <Route path='/recipes' element={<RecipesCategory />} />
              <Route path='/search' element={<SearchedRecipes/>} />
              <Route path='/myRecipes' element={<MyRecipes />} />
              <Route path='/myRecipes/:recipeId' element={<Details />} />
              <Route path='/recipes/:category' element={<Category />} />

              <Route element={<RouteGuard />}>
                <Route path='/create' element={<CreateRecipe />} />
                <Route path='/recipes/:category/:recipeId' element={<Details />} />
                <Route path='/recipes/:category/:recipeId/edit' element={<Edit />} />
              </Route>
              
              
            </Routes>
          </main>

        </div>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;

