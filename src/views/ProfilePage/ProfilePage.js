/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import WorkIcon from '@material-ui/icons/Work';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

//Fotos Usadas
import profilePicture from "assets/img/faces/Diego.jpg";
import coverPicture  from  "assets/img/examples/Code.jpg";
import project1 from "assets/img/projects/project1.jpg";
import project2 from "assets/img/projects/project2.jpg";
import project3 from "assets/img/projects/project3.jpg";


import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

import Joke from "components/jokes.js";
import { card } from "assets/jss/material-kit-pro-react";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax
        image={coverPicture}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profilePicture} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Diego Arevalo</h3>
                  <h6>Software Enginner</h6>
                  <Button
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.margin5}
                    href = "https://www.linkedin.com/in/diego-arevalo-31b643119/"
                    target = "_blank"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    className={classes.margin5}
                    href = "https://twitter.com/arevalo_97"
                    target = "_blank"
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="github"
                    className={classes.margin5}
                    href = "https://github.com/daag2197"
                    target = "_blank"
                  >
                    <i className={classes.socials + " fab fa-github"} />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              Motivated Computer Engineer seeking employment as part of dynamic 
              software development team.Fluent in WLanguage, SQL, C# and JavaScript programming 
              languages.
            </p>
          </div>

          {/* Aqui Termina la informacion personal */}

          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="info"
              tabs={[
                {
                  tabButton: "Projects",
                  tabIcon: WorkIcon,
                  tabContent: (
                    <div>
                      {/* Inicia la primera Fila */}
                      <GridContainer justify="center">
                        {/* Primer Proyecto */}
                        <GridItem
                          xs={12}
                          sm={12}
                          md={4}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={project1} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + project1 + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    React Application
                                  </h4>
                                  <Muted>
                                    <h6>WEBSITE</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Wep app development in react.js
                                    <p><a href ="https://github.com/daag2197/Portfolio" target = "_blank">Check More</a></p>
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        {/* Segundo Proyecto */}
                        <GridItem
                          xs={12}
                          sm={12}
                          md={4}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={project2} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + project2 + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    API with node.js
                                  </h4>
                                  <Muted>
                                    <h6>Api's</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Api{"'"}s development in node.js.
                                    <p><a href ="https://github.com/daag2197/Soccer-Field-Manager" target = "_blank">Check More</a></p>
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        {/* Tercer Proyecto */}
                        <GridItem
                          xs={12}
                          sm={12}
                          md={4}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={project3} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + project3 + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Finger Reader
                                  </h4>
                                  <Muted>
                                    <h6>dll library C#</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Library to read fingerprint with c#
                                    <p><a href ="https://github.com/daag2197/LectorHuellasConsola" target = "_blank">Check More</a></p>
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  )
                },
                {
                  tabButton: "Jokes",
                  tabIcon: FavoriteBorderIcon,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={7}>
                          <Card profile Plain>
                            <h4 className={classes.cardTitle}>Random Joke</h4>
                            <Joke/>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.center}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              by{" "}
              Diego Arevalo
            </div>
          </div>
        }
      />
    </div>
  );
}
