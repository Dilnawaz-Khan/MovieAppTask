import {Button, Header, ScreenWrapper} from '@components';

import {ScreenIcon, Seat} from '@assets';
import {Rows} from '@constants';
import {hp, wp} from '@helper';
import {useAppNavigation} from '@hooks';
import {FlatList, Text, View} from 'react-native';
import {useStyles} from './style';

export const TicketBooking = () => {
  const navigation = useAppNavigation();

  const {styles} = useStyles();
  return (
    <ScreenWrapper>
      <Header
        onPress={() => navigation.goBack()}
        title={"The King's Man"}
        subtitle={'Mar 5,2021, 12.30 1'}
      />
      <View style={styles.contentView}>
        <View style={styles.upperContent}>
          <View style={styles.numList}>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={({item}) => (
                <Text style={[styles.priceLabel, {lineHeight: hp(4.1)}]}>
                  {item.toString()}
                </Text>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{flex: 0.9, justifyContent: 'center'}}>
            <ScreenIcon width={wp(40)} height={hp(60)} />
          </View>
        </View>
        <View style={styles.footerContentView}>
          <FlatList
            numColumns={2}
            data={Rows}
            renderItem={({item}) => (
              <View style={styles.seatItem}>
                <Seat color={item.color} />
                <Text style={[styles.seatItemText]}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.rowDetails}>
            <Text style={[styles.priceText]}>
              4 <Text style={styles.numTexts}>/3 row</Text>
            </Text>

            <Text style={styles.crossText}>X</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.payView}>
            <Text style={styles.priceLabel}>Total Price</Text>
            <Text style={styles.priceText}>{'$ 50'}</Text>
          </View>
          <Button
            onPress={() => navigation.goBack()}
            title={'Proceed to pay'}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};