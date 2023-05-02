import React from 'react'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

console.log(AlexaImage);
console.log(SiriImage);


function App () {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" handle="@alex99"/>
      <ProfileCard title="Cortana" handle="@cortana32"/>
      <ProfileCard title="Siri" handle="@siri01"/>
    </div>
  );
}

export default App;
