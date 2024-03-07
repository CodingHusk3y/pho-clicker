import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const upgrades = [
    { name: 'Double Stuffed 👯‍♀️', description: '2x per click', cost: 10 },
    { name: 'Party Pack 🎉', description: '5x per click', cost: 100 },
    { name: 'Full Feast 👩🏽‍🍳', description: '10x per click', cost: 1000 },
  ];

  function updateCount() {
    setCount(count + 1 * multiplier);
  }

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10); // Deduct the cost from the count
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100); // Deduct the cost from the count
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000); // Deduct the cost from the count
    }
  }

  const buyUpgrade = (cost) => {
    switch(cost) {
      case 10:
        buyDoubleStuffed();
        break;
      case 100:
        buyPartyPack();
        break;
      case 1000:
        buyFullFeast();
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Pho Selector</h1>
        <h2>Count: {count}</h2>
        <img className="pho" src="https://waytovietnam.com/storage/images/QZRG2hy54m010hiXrTz6OhlaThO4WI2gJK4PncP1.jpeg" alt="Pho" onClick={updateCount}/>
      </div>
      <div className="container">
        {upgrades.map((upgrade, index) => (
          <div className="upgrade" key={index}>
            <h3>{upgrade.name}</h3>
            <p>{upgrade.description}</p>
            <button onClick={() => buyUpgrade(upgrade.cost)}>{`Cost: ${upgrade.cost} pho`}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App