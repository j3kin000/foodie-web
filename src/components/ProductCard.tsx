import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

export type ProductCardProps = {
  product: Product;
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
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
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
        <Typography variant="body2" color="black" mt={2}>
          {product?.category}
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
        <IconButton aria-label="delete" size="large">
          <AddCircle sx={{ color: "black" }} fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
