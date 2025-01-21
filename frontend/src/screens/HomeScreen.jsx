import { Row, Col } from "react-bootstrap";
import Loading from "../components/Loading";
import Product from "../components/Product";
import { useGetProductQuery } from "../slices/productApiSlice";
import Message from "../components/Message";

const HomeScreen = () => {
	const { data: products, isLoading, error } = useGetProductQuery();

	return (
		<>
			{isLoading ? (
				<Loading />
			) : error ? (
				<Message variant="danger">
					{error?.data?.message || error.error}
				</Message>
			) : (
				<>
					<h1>Latest Products</h1>
					<Row>
						{products.map((prod) => (
							<Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={prod} />
							</Col>
						))}
					</Row>
				</>
			)}
		</>
	);
};

export default HomeScreen;
