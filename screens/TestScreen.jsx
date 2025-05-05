import { View } from 'react-native'
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/layout/Layout';
import WarningCard from '../components/WarningCard';
import Logo from '../components/Logo';

const TestScreen = () => {
	const { theme } = useTheme();

    // Dummy sensordata for so long
    const sensorData = {
        temperature: 28,
        steps: 6200,
        heartRate: 85,
        gasLevel: 2,
        noiseLevel: 85,
      };
    
      // Starts as an empty list
      const notifications = [];

      // Lägger till våra "fasta varningar" - vill bara visa dem tillfälligt
      notifications.push("default"); 
      notifications.push("warning"); 
    
      // Rules for when alerts should appear
      if (sensorData.temperature > 26) notifications.push("heat");
      if (sensorData.steps > 6000) notifications.push("steps");
      if (sensorData.heartRate > 125) notifications.push("heartrate");
      if (sensorData.noiseLevel > 70) notifications.push("noise");
      if (sensorData.gasLevel >= 2) notifications.push("gas");
      if (notifications.length === 0) notifications.push('default');

      /* (Ovan skulle kunna vara en for-loop istället för flera if-satser?)
      Default pushas aldrig in i notifications-listan.
      Bara om ett sensorvärde är över en viss gräns så lägger vi till t.ex. "heat", "steps", "noise", osv.
      Så länge inget pushar in "default", kommer inget kort med type="default" att skapas. 
      Om vi vill visa ett default-kort när inga andra varningar finns, kan vi lägga till:
      if (notifications.length === 0) notifications.push('default'); */
    
      return (
        <Layout scrollable>

          <View style={{ alignItems: 'left', marginBottom: 16 }}>
            <Logo width={140} height={34} />
          </View>

          <View> 
            {notifications.map((type, index) => (
              <WarningCard key={index} type={type} />
            ))}
          </View>
        </Layout>
      );
    };

export default TestScreen

/* Advantages:
We separate logic from presentation.
We are prepared for API data – just replace sensorData with fetched data.
We have central threshold logic that is easy to adjust.
All cards/notices use the same reusable components.
*/

/* Hur fungerar denna kod? 
sensorData är en samling testvärden för olika sensorer: temperatur, steg, hjärtfrekvens, gasnivå och bullernivå.

notifications börjar som en tom lista []
Vi kollar varje sensor:
Om temperaturen är hög (>26°C) →-lägg till "heat".
Om stegen är fler än 6000 - lägg till "steps".
Om hjärtfrekvensen är över 80 - lägg till "heartrate".
Osv.

För varje värde i notifications, skapas en WarningCard:
Vi skickar in type som prop till varje WarningCard.
WarningCard slår upp rätt varning i warningTypes-objektet baserat på type.
Om inget matchar, använder den default.

notifications = ["heat", "steps", "heartrate", "noise", "gas"]
Därför behövs inte default – det finns redan riktiga varningar att visa.

*/
