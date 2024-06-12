import { AddCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { FC } from "react";
export type Products = {
  products: Product[];
};

type Product = {
  prodName: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
  prodImg: string;
  status: string;
};
const Product: FC<Products> = ({ products }) => {
  return (
    <Box
      mt={5}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)", // 1 column on small screens
          sm: "repeat(2, 1fr)", // 1 column on small screens
          md: "repeat(2, 1fr)", // 6 columns on medium screens
          lg: "repeat(3, 1fr)", // 5 columns on large screens
        },

        gap: {
          xs: 2, // gap of 4 units on small screens
          sm: 1,
          md: 5,
          lg: 5, // gap of 8 units on large screens
        },
        mx: "auto", // horizontal centering
      }}
    >
      {products.map((product, index) => (
        <Card
          key={index}
          sx={{
            position: "relative",
            backgroundColor: "white",
            p: 1,
            display: "flex",
            justifyContent: "space-between",
            borderRadius: 3,
            boxShadow: 3, // This adds a shadow border
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h6" fontWeight={"bold"}>
              {product?.prodName}
            </Typography>
            <Typography variant="body2" color="black" mt={2}>
              {product?.description}
            </Typography>

            <Typography variant="body1" color="black" fontWeight="bold" mt={2}>
              ${product?.price}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={product.prodImg}
            alt="product"
            sx={{
              width: { xs: 150, md: 250, lg: 250, xl: 300 },
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
          <CardActions
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              backgroundColor: "#FFF",
              borderRadius: "10px 0 0 0",
              opacity: 0.8,
            }}
          >
            <IconButton naria-label="delete" size="large">
              <AddCircle sx={{ color: "black" }} fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Product;
