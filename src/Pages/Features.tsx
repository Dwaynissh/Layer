import styled from 'styled-components'
import abtpix from "../assets/about-4.png"

const Features = () => {
  return (
    <div>
        <FeaturesSection>
            <FeaturesSectionWrap>
                <LayerWelcome>
                    <LayerWelcomeWrap>
                    <h1>WELCOME TO <span>LAYER</span> </h1>
                    <Straightline>  </Straightline>
                    <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit <br /> amet, consectetur adipiscing elit.</p>
                    </LayerWelcomeWrap>   
                </LayerWelcome>
                <LayerFlexx>
                    <FlexxLeft>
                        <Info>
                        <TextInfo>
                            <Boot>
                                <h3>BOOTSTRAP 3.2 </h3>
                            </Boot>
                            <Para>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  <br /> <span>tempor incididunt ut labore et dolore aliqua.</span></p>
                            </Para>
                        </TextInfo>
                        <DivInfo bc='rgb(190,22,220)'>

                        </DivInfo>
                        </Info>
                        <Info>
                        <TextInfo>
                            <Boot>
                                <h3>CREATIVE DESIGN</h3>
                            </Boot>
                            <Para>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  <br /> <span>tempor incididunt ut labore et dolore aliqua.</span></p>
                            </Para>
                        </TextInfo>
                        <DivInfo bc='rgb(255,131,54)'>

                        </DivInfo>
                        </Info>
                        <Info>
                        <TextInfo>
                            <Boot>
                                <h3>EASY TO USE</h3>
                            </Boot>
                            <Para>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  <br /> <span>tempor incididunt ut labore et dolore aliqua.</span></p>
                            </Para>
                        </TextInfo>
                        <DivInfo bc='rgb(251,98,83)'>

                        </DivInfo>
                        </Info>
                    </FlexxLeft>
                    <FlexxRight>
                        <img src={abtpix} alt="" />
                    </FlexxRight>
                </LayerFlexx>
            </FeaturesSectionWrap>
        </FeaturesSection>
    </div>
  )
}

export default Features

const DivInfo = styled.div<{bc: string,}>`
height: 80px;
width: 80px;
border-radius: 100%;
background-color: ${({ bc }) => bc};
`;
const Para = styled.div`
display: flex;
justify-content: flex-end;
span {
    padding-left:200px;
}
`;
const Boot = styled.div`
display: flex;
justify-content: flex-end;
`;
const TextInfo = styled.div`
margin-right: 30px;
`;
const Info = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
const FlexxRight = styled.div`
width: 46%;
`;

const FlexxLeft = styled.div`
width: 50%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
`;

const LayerFlexx = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Straightline = styled.div`
height: 3px;
width: 160px;
border-radius:10px;
background-color: red;
margin-left: 200px;
`;
const LayerWelcomeWrap = styled.div`
h1 {
    color: black;
    text-align: center;
}
span{
    color: #e74c3c;
}
p{
    text-align: center;
}
`;
const LayerWelcome = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const FeaturesSectionWrap = styled.div`
height: 100%;
width: 80%;
padding-top: 50px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const FeaturesSection = styled.div`
height: 100%;
width: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;