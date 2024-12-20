import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MovieDetail, SeatSelection, TicketBooking, Trailer} from '@screens';
import {BottomTab} from './bottom-tab';
import {RootStackParamList} from '@types';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="tabNavigation" component={BottomTab} />
        <Stack.Screen name="movie-detail" component={MovieDetail} />
        <Stack.Screen name="trailer" component={Trailer} />
        <Stack.Screen name="seat-selection" component={SeatSelection} />
        <Stack.Screen name="ticket-booking" component={TicketBooking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
