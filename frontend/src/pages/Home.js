import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NikonPic from './pexels-photo-1250282.jpg';
import './App.css';
import bridge from './bridge-picture.jpg'
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    maxWidth: 350,
    margin: '0 50px',
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <br></br>
      <div style={{ backgroundImage: `url(${bridge})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '800px' }}>
        <div >
          <div style={{
            textAlign: "center",
            color: "white",
            fontSize: '30px'
          }}>Thierry Cohnen
        <p >Junior Web Developer</p>
            <p >I develop Web Solutions</p>
            <a >Hire Me</a>
            <br></br>
            <a style={{ color: "white" }} href="https://thierrycohnen.github.io/portfolio/pdf/Thierry%20Cohnen%20developer%20cv%202020-09-01.pdf"
              target="_blank">CV</a>
            <br></br>
            <a >Portfolio</a>
          </div>
        </div>
      </div>
      <br></br>
      <Card className={classes.root} variant="outlined">
        <CardContent >
          <div style={{
            marginLeft: '20px',
          }}><Typography className={classes.title} color="textSecondary" gutterBottom>
              <div>
                About
              </div>
            </Typography>
            <p>Bonjour! Je m'appelle Thierry Cohnen. Web App Developer.</p>
            <p>Mon expérience en industrie m'a formé à trouver les solutions de façon analytique, précise et efficace.</p>
            <p>Je combine celà avec un intérêt marqué pour les technologies innovantes.</p>
          </div>
          <div >
            <div >
              <div>
                <div >Basic Information</div>
                <div >
                  <div >Age:</div>
                  <div >46</div>
                </div>
                <div >
                  <div >Email:</div>
                  <div ></div><a href="mailto:thierry.cohnen.developer@gmail.com">thierry.cohnen.developer@gmail.com</a></div>
              </div>
              <div >
                <div >Téléphone:</div>
                <div >+32 486 83 18 90</div>
              </div>
              <div >
                <div >Addresse:</div>
                <div >12, rue de Géloury, 4050 Chaudfontaine, Belgium</div>
              </div>
              <div >
                <div >Langues:</div>
                <div >français, anglais</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <br></br>
      <div style={{
        textAlign: "center"
      }}>
        <a ><img width="240" height="135" src="https://www.logosurfer.com/wp-content/uploads/2018/03/manchester-united-logo_0.jpg" alt="Manchester United Logo" /></a>&nbsp;
        <iframe src="https://giphy.com/embed/1yLEsc4IF2Akm4InqA" width="240" height="135" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a ></a>&nbsp;
        <a><img width="240" height="135" src={NikonPic} /></a>
      </div>
    </div >
  );
}
