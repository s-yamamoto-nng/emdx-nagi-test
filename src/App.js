import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "./App.css";
import Slider from "react-slick";
import CardMedia from "@material-ui/core/CardMedia";
// import CardActionArea from "@material-ui/core/CardActionArea";
import RoomIcon from "@material-ui/icons/Room";
// import Container from "@material-ui/core/Container";
import HeaderImg from "./images/headerImage.png";
import Doctor from "./images/doctor.png";
import Case from "./images/case.png";
import Treatment from "./images/treatment.png";
import mouse from "./images/mouse.png";
import part from "./images/part.png";
import adult from "./images/adult.png";
import child from "./images/child.png";
import guide from "./images/guide.png";
import notice from "./images/notice.png";
import borderLogo from "./images/borderLogo.png";
import storeLogo from "./images/storeLogo.png";
import HumburgerMenu from "./HamburgerMenu";
import AccessImg from "./images/AccessImg.png";

const useStyles = makeStyles((theme) => ({
  App: {
    margin: 0,
    padding: 0,
  },
  headerContainer: {
    position: "fixed",
    top: 0,
    zIndex: "1",
    backgroundColor: "white",
    width: "100%",
    height: "80px",
  },
  borderLogo: {
    marginLeft: "1%",
  },
  storeLogo: {
    marginLeft: "5%",
  },
  mainContainer: {
    marginTop: "80px",
    height: "100vh",
  },
  headerFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  dateFont: {
    transform: "translate(0, 20%)",
    fontFamily: "ArialMT",
    fontWeight: "normal",
    textAlign: "center",
    fontSize: "2vmax",
    color: "#fff",
  },
  timeFontSize: {
    fontSize: "3vmax",
  },
  footerContainer: {
    position: "fixed",
    bottom: 0,
    backgroundColor: "#add8e6",
    width: "100%",
    height: "80px",
  },
  headerImgWidth: {
    width: "100%",
    zIndex: "0",
  },
  headerUnderContainer: {
    position: "relative",
    marginBottom: "10%",
    height: "30vh",
    background: "linear-gradient(#ff2d79 0%, #ffb96c 100%)",
    opacity: "0.9",
  },
  reservationContainer: {
    display: "absolute",
    transform: "translate(5%, 5%)",
    width: "90%",
    height: "45vmin",
    background: "#fff",
    filter: "drop-shadow(0px 0px 5px rgba(190, 187, 187, 0.17))",
    borderRadius: "20px",
  },
  reservationContainerFirstFont: {
    fontFamily: "Hiragino Sans",
    paddingTop: "5%",
    marginBottom: "-2%",
    fontWeight: "normal",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.7vmax",
    color: "#f80",
  },
  reservationContainerSecondFont: {
    fontFamily: "Hiragino Sans",
    fontWeight: "normal",
    marginBottom: "-2%",
    textAlign: "center",
    fontSize: "1.7vmax",
    fontWeight: "bold",
    color: "#575957",
  },
  reservationContainerThirdFont: {
    textAlign: "center",
    fontSize: "2.3vmax",
    color: "#575957",
  },
  reservationContainerButtom: {
    background:
      "linear-gradient(#ffb96c 0%, #ffab4e 16.95%, #ff9c2c 40.44%, #ff9114 62.75%, #ff8a05 83.18%, #f80 100%)",
    fontFamily: "Hiragino Sans",
    fontWeight: "normal",
    fontSize: "2vmax",
    marginLeft: "26%",
    padding: "2% 10% 2% 10%",
    borderRadius: "30px",
    color: "#fff",
  },
  registrationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15vh",
    padding: "0 5% 0 5%",
    borderRadius: "20px",
    marginLeft: "5%",
    marginRight: "5%",
    background: "#fff",
    filter: "drop-shadow(0px 0px 5px rgba(190, 187, 187, 0.17))",
  },
  registrationFirstFont: {
    fontFamily: "Hiragino Sans",
    fontWeight: "bold",
    fontSize: "1.7vmax",
    lineHeight: "0",
    color: "#f80",
  },
  registrationSecondFont: {
    fontFamily: "Hiragino Sans",
    fontWeight: "normal",
    lineHeight: "0",
    fontSize: "1.7vmax",
    color: "#575957",
  },
  registrationThirdFont: {
    fontFamily: "Hiragino Sans",
    fontWeight: "normal",
    fontSize: "1.5vmax",
    height: "50%",
    borderRadius: "30px",
    textAlign: "left",
    color: "#868180",
  },
  registrationFont: {
    fontFamily: "Hiragino Sans",
    fontWeight: "normal",
    textAlign: "left",
    color: "#f80",
  },
  accessContainer: {
    display: "flex",
  },
  accessFontColor: {
    fontFamily: "Montserrat-Bold",
    fontWeight: "normal",
    color: "#f80",
  },
  accessCardMove: {
    height: "40vh",
    borderRadius: "20px",
    width: "90%",
    background: "#fff",
    filter: "drop-shadow(0px 0px 5px rgba(190, 187, 187, 0.17))",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  accessFont: {
    fontSize: "1.5vmin",
    width: "40%",
    padding: "2%",
    color: "gray",
    fontFamily: "Hiragino Sans",
    fontWeight: "normal",
  },
  accessOmiyaFont: {
    fontFamily: "Hiragino Sans",
    fontWeight: "bold",
    color: "#575957",
  },
  accessImgSize: {
    height: "40vh",
  },
  accessMapIcon: {
    borderRadius: "30px",
    width: "100%",
    height: "13%",
    whiteSpace: "nowrap",
    color: "gray",
  },
  headerUnderGrid: {
    marginTop: "5vh",
    marginBottom: "10vh",
  },
  sliderFirstCard: {
    width: "100%",
  },
  sliderSecondCard: {
    width: "96%",
    height: "93%",
  },
  OrthodonticFontColor: {
    marginLeft: "3%",
    fontFamily: "Hiragino Kaku Gothic Std",
    fontWeight: "normal",
    color: "#575957",
    fontSize: "2vmax",
  },
  orthodonticCard: {
    padding: "5%",
  },
  OrthodonticCardUnderColor: {
    fontFamily: "Hiragino Kaku Gothic Std",
    fontWeight: "bold",
    color: "#f80",
  },
  OrthodonticfontMove: {
    marginLeft: "2%",
  },
  OrthodonticFontSize: {
    fontSize: "2vmax",
  },
  orthodonticTreatment: {
    marginTop: "10%",
    marginLeft: "2%",
    fontSize: "2vmax",
    color: "black",
    fontWeight: "bold",
  },
  clinicCardFirstFlex: {
    display: "flex",
    marginLeft: "10%",
  },
  clinicCardSecondFlex: {
    display: "flex",
    marginLeft: "10%",
    marginBottom: "25%",
  },
  clinicCardFontSize: {
    fontSize: '1.5vmin',
    whiteSpace: "nowrap",
  },
  clinicCard: {
    width: "40%",
  },
  clinicCardTop: {
    marginTop: "8%",
    width: "100%",
  },
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      {/* <Container maxWidth="md"> */}
      {/* <div className={classes.headerContainer}>
        <div className={classes.headerFlex}>
          <img src={borderLogo} className={classes.borderLogo} />
          <img src={storeLogo} className={classes.storeLogo} />
          <HumburgerMenu />
        </div>
      </div> */}
      {/* </Container> */}
      <div className={classes.mainContainer}>
        <Slider {...settings} className={classes.headerImgWidth}>
          <img src={HeaderImg} />
          <img src={HeaderImg} />
        </Slider>
        <Grid container className={classes.headerUnderGrid}>
          <Grid item xs={12} md={6}>
            <div className={classes.headerUnderContainer}>
              <div className={classes.dateFont}>
                <span className={classes.timeFontSize}>2021</span>年
                <span className={classes.timeFontSize}>6</span>月
                <span className={classes.timeFontSize}>10</span>日 (木) 20:39
              </div>
              <div className={classes.reservationContainer}>
                <h4 className={classes.reservationContainerFirstFont}>
                  次回予約が未定となっております。
                </h4>
                <h4 className={classes.reservationContainerSecondFont}>
                  次回ご来院していただきたい時期
                </h4>
                <h4 className={classes.reservationContainerThirdFont}>
                  3ヶ月後の2021年4月下旬-5月上旬頃
                </h4>
                <Button className={classes.reservationContainerButtom}>
                  予約へすすむ
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.registrationContainer}>
              <div className={classes.registrationFirstFont}>
                <h6>お名前</h6>
                <h6>診察券番号</h6>
              </div>
              <div className={classes.registrationSecondFont}>
                <h6>名前が入ります</h6>
                <h6>12345678</h6>
              </div>
              <div>
                <Button
                  variant="outlined"
                  className={classes.registrationThirdFont}
                >
                  登録情報の確認
                </Button>
              </div>
            </div>
            <Card className={classes.accessCardMove}>
              <div className={classes.accessContainer}>
                <div className={classes.accessFont}>
                  <div className={classes.accessFontColor}>
                    <h3>Access</h3>
                  </div>
                  <h3>埼玉県さいたま市</h3>
                  <h3>大宮区桜木町1丁目</h3>
                  <h3>1-12 NYビル 3F</h3>
                  <div className={classes.accessOmiyaFont}>
                    <h3>JR大宮駅</h3>
                  </div>
                  <h3>夜8時まで営業</h3>
                  <h3>土日も診療</h3>
                  <Button variant="outlined" className={classes.accessMapIcon}>
                    <RoomIcon />
                    Google Map
                  </Button>
                </div>
                <div>
                  <CardMedia
                    component="img"
                    image={AccessImg}
                    className={classes.accessImgSize}
                  />
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
        <div className={classes.OrthodonticFontColor}>
          <h4>当院の矯正治療について</h4>
          <h4>私たちは、歯列矯正専門医院です。患者様が健康で</h4>
          <h4>心からの笑顔を手に入れられるようサポートをします。</h4>
        </div>
        <Slider {...settings}>
          <div className={classes.OrthodonticFontSize}>
            <img src={Doctor} className={classes.sliderFirstCard} />
            <div className={classes.OrthodonticfontMove}>
              <div className={classes.OrthodonticCardUnderColor}>
                <h4>当医院のドクター紹介</h4>
              </div>
              <div>
                <h4>歯学部卒業後、大学病院の矯正科に所属し、</h4>
                <h4>12年間研鑽を積んだ治療技術を有しています。</h4>
              </div>
            </div>
          </div>
          <div className={classes.OrthodonticFontSize}>
            <img src={Case} className={classes.sliderFirstCard} />
            <div className={classes.OrthodonticfontMove}>
              <div className={classes.OrthodonticCardUnderColor}>
                <h4>あなたにあった症例は？</h4>
              </div>
              <h4>最短で初診カウンセリング</h4>
              <h4>予約可能な日時はこちらです。</h4>
            </div>
          </div>
          <div className={classes.OrthodonticFontSize}>
            <img src={Treatment} className={classes.sliderFirstCard} />
            <div className={classes.OrthodonticfontMove}>
              <div className={classes.OrthodonticCardUnderColor}>
                <h4>治療の詳しい情報はこちら</h4>
              </div>
              <h4>当院でできる矯正治療の</h4>
              <h4>詳しい情報</h4>
            </div>
          </div>
        </Slider>
        <div className={classes.orthodonticTreatment}>
          <h4>矯正治療について</h4>
        </div>
        <Grid container className={classes.orthodonticCard}>
          <Grid xs={6} sm={6} md={3}>
            <img src={adult} className={classes.sliderSecondCard} />
          </Grid>
          <Grid xs={6} sm={6} md={3}>
            <img src={child} className={classes.sliderSecondCard} />
          </Grid>
          <Grid xs={6} sm={6} md={3}>
            <img src={mouse} className={classes.sliderSecondCard} />
          </Grid>
          <Grid xs={6} sm={6} md={3}>
            <img src={part} className={classes.sliderSecondCard} />
          </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.clinicCardTop}>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.clinicCardFirstFlex}>
              <CardMedia
                className={classes.clinicCard}
                component="img"
                image={guide}
                title="Live from space album cover"
              />
              <CardContent className={classes.clinicCardFontSize}>
                <h4>大宮SHIN矯正歯科の医院案内はこちら</h4>
                <h4>医院案内</h4>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.clinicCardSecondFlex}>
              <CardMedia
                className={classes.clinicCard}
                image={notice}
                component="img"
                title="Live from space album cover"
              />
              <CardContent className={classes.clinicCardFontSize}>
                <h4>医院からのお知らせ一覧</h4>
                <h4>お知らせ</h4>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div className={classes.footerContainer}>
        <Typography component="div" />
      </div>
    </div>
  );
}

export default App;
