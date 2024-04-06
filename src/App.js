import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Users from './Components/Users/Users';
import Products from './Components/Products/Products';
import UserDetials from './Components/UserDetials/UserDetials';
import ProductDetials from './Components/ProductDetials/ProductDetials';

function App() {
  const router=createBrowserRouter([{
      path: "/",
      element: <Main></Main>,
      children:[
      {path:'/Home',element:<Home></Home>},
      {path:'/About',element:<About></About>},
      {path:'/Users',
      loader:async()=>{
        return fetch("https://jsonplaceholder.typicode.com/users")
      },element:<Users></Users>},
      {
        path:"/user/:userId",loader:async({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        },element:<UserDetials></UserDetials>
      },
      {path:'/Products',
      loader:async()=>{
        return fetch('https://jsonplaceholder.typicode.com/posts')
      },element:<Products></Products>},
      {
        path:'/product/:productId',loader:async({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.productId}`)
        },element:<ProductDetials></ProductDetials>
      }
      
      ]
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
