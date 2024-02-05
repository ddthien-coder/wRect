import React, { useEffect, useState } from "react"
import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react"
import axios from 'axios';
import ProductCard from "../components/ProductCard"

const ProductScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
             .then((response) => {
                setData(response.data.products)
             })
             .catch((error) => {
                console.error('Error Fetching Data:', error);
             });
    }, []);
    return (
        <>
			{data.length > 1 && (
                <Box>
                    <Wrap spacing='30px' justify='center' minHeight='80vh' mx={{ base: '12', md: '20', lg: '32' }}>
                    {data.map((product) => (
                                <WrapItem key={product._id}>
                                    <Center w='250px' h='450px'>
                                        <ProductCard product={product} loading={false} />
                                    </Center>
                                </WrapItem>
                            ))}
                    </Wrap>
                </Box>
            )}
        </>

    )
}

export default ProductScreen