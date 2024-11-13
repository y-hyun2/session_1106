import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f9fc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
  margin: 0;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

const ToggleButton = styled.button`
  padding: 8px 16px;
  font-size: 0.9em;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &.active {
    background-color: #0056b3;
  }
`;

const CoinsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;


interface RouteParms {
  coinId: string;
}

interface RouteState{
  name: string;
  rank: number;
}

function Coin() {
  const [loading,setLoading] = useState(true);
  const { coinId } = useParams<RouteParms>();
  const {state} = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title> 코인 {coinId} 
          <br/>
          이름 : {state?.name || "loading"}
          <br/>
          순위: {state?.rank || "loading"}
        </Title>
      </Header>
      {loading ? "Loading" : null }
    </Container>
  );
}
export default Coin;
