import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./ItemList.css";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div className="tarjetas">
      <Card sx={{ maxWidth: 345, margin: "20px" }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://res.cloudinary.com/dyei4kwm7/image/upload/v1681274555/reloj5_ee6as1.jpg"
          title="Lige"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lige
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descubrí la amplia variedad de relojes de Tommy Hilfiger. Modelos
            clásicos, versátiles y atemporales con estilo renovado para hombres
            y mujeres de espíritu joven y moderno.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, margin: "20px" }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://res.cloudinary.com/dyei4kwm7/image/upload/v1681399064/reloj8_ivvct9.jpg"
          title="Yazole"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Geneva
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descubrí la amplia variedad de relojes de Tommy Hilfiger. Modelos
            clásicos, versátiles y atemporales con estilo renovado para hombres
            y mujeres de espíritu joven y moderno.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, margin: "20px" }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://res.cloudinary.com/dyei4kwm7/image/upload/v1681274324/reloj6_ucuknl.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Yazole
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descubrí la amplia variedad de relojes de Tommy Hilfiger. Modelos
            clásicos, versátiles y atemporales con estilo renovado para hombres
            y mujeres de espíritu joven y moderno.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default ItemList;
