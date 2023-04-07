import styled from "styled-components";
import Pricing from "./Pricing";

const Index=() =>{
    return (
      <MainContainer>
        <div className="pricing-component">
          <Pricing
            data={[
              { text: "Can Ask 5 Questions anytime", value: true },
              { text: "Can have 1 interactive session with any mentor", value: true },
            ]}
            price={10}
            duration="y"
            currency="$"
            buttonContent="Get Started"
            subTitle="Great for starters"
            priceText="Buy 10 credits."
            headerText="Beginners"
          />
        </div>
        <div className="pricing-component">
          <Pricing
            data={[
              { text: "Can ask 50 new questions anytime anywhere", value: true },
              { text: "Can have 10 interactive sessions with any mentor", value: true },
            ]}
            price={12}
            duration="y"
            background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
            shadow="#ffb199"
            currency="$"
            buttonContent="Get Started"
            subTitle="For Prodessional Use"
            priceText="Buy 100 credits."
            headerText="Pro"
          />
        </div>
      </MainContainer>
    );
  }
  
  const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: linear-gradient(
      #ffe1bc 29.63%,
    );;
  
    @media screen and (max-width: 970px) {
      height: 100%;
      flex-direction: column;
      .pricing-component {
        margin: 2rem 0;
      }
    }
  `;
  
  export default Index;