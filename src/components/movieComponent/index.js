import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';


export default function MovieCard({movie}) {
    const {title, poster, director, rating,description, duration, genre} = movie;
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={poster}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <b>Director:</b> {director} 
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <b>Genre: </b>
        {   
            genre?.length > 0 && genre.map(gen => <span>{gen} </span>)
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <b>Rating: </b>{rating}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size='small' sx={{textTransform : 'none', color : 'black'}}>
        {duration}mins
        </Button>
      </CardActions>
    </Card>
  );
}
