import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { RemoveRedEye, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProductData = ({ product }) => {

  const { id, title, image, price, category } = product;

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/product/${id}`} className="">
          <RemoveRedEye />
        </Link>
        <CardMedia component="img" height="194" image={image} alt="image" />

        <CardContent>
          <Link to={`/product/${id}`} className="">
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to cart">
            <ShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductData;
