import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
	return (
		<ThemeProvider>
			<div className='App min-h-dvh relative'>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/product/:productId' element={<ProductDetails />} />
					<Route path='/adminDashboard' element={<AdminDashboard />} />
					<Route path='/adminDashboard/addProduct' element={<AddProduct />} />
					<Route
						path='/adminDashboard/edit/:productId'
						element={<EditProduct />}
					/>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
