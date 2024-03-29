import { ChakraProvider } from '@chakra-ui/react';
import ProductsScreen from './screens/ProductsScreen';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingScreen from './screens/LandingScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import EmailVerificationScreen from './screens/EmailVerificationScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import axios from 'axios';
import { VStack, Spinner } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import BlogScreen from './screens/BlogScreens';
import ContactScreen from './screens/ContactScreens';
import ServiceScreens from './screens/ServiceScreens';
import AdminConsoleScreen from './screens/AdminConsole/AdminConsoleScreen';

function App() {
	const [googleClient, setGoogleClient] = useState(null);
	useEffect(() => {
		const googleKey = async () => {
			const { data: googleId } = await axios.get('/api/config/google');
			setGoogleClient(googleId);
		};
		googleKey();
	}, [googleClient]);

	return (
		<ChakraProvider>
			{!googleClient ? (
				<VStack pt='37vh'>
					<Spinner mt='20' thickness='2px' speed='0.65s' emptyColor='gray.200' color='cyan.500' size='xl' />
				</VStack>
			) : (
				<GoogleOAuthProvider clientId={googleClient}>
					<Router>
						<Header />
						<main>
							<Routes>
								<Route path='/products' element={<ProductsScreen />} />
								<Route path='/' element={<LandingScreen />} />
								<Route path='/product/:id' element={<ProductScreen />} />
								<Route path='/cart' element={<CartScreen />} />
								<Route path='/login' element={<LoginScreen />} />
								<Route path='/registration' element={<RegistrationScreen />} />
								<Route path='/email-verify/:token' element={<EmailVerificationScreen />} />
								<Route path='/password-reset/:token' element={<PasswordResetScreen />} />
								<Route path='/blog' element={<BlogScreen />} />
								<Route path='/contact' element={<ContactScreen />} />
								<Route path='/service' element={<ServiceScreens />} />
								<Route path='/admin-console' element={<AdminConsoleScreen />} />
							</Routes>
						</main>
						<Footer />
					</Router>
				</GoogleOAuthProvider>
			)}
		</ChakraProvider>
	);
}


export default App;