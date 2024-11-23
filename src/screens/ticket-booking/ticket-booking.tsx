import {Button, Header, ScreenWrapper} from '@components';

import {BackIcon, ScreenIcon, Seat} from '@assets';
import {Rows} from '@constants';
import {hp, wp} from '@helper';
import {useAppNavigation} from '@hooks';
import {FlatList, Pressable, Text, View} from 'react-native';
import {useStyles} from './style';

export const TicketBooking = () => {
  const navigation = useAppNavigation();

  const {styles, iconSize} = useStyles();
  return (
    <ScreenWrapper>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon width={iconSize} height={iconSize} />
        </Pressable>
        <View style={styles.screenTitle}>
          <Text style={styles.title}>The King's Man</Text>
          <Text style={styles.subTitle}>In theaters december 22, 2021</Text>
        </View>
      </View>
      <View style={styles.contentView}>
        <View style={styles.upperContent}>
          <View style={styles.numList}>
            <FlatList
              contentContainerStyle={styles.numberListContainer}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={({item}) => (
                <Text style={styles.priceLabel}>{item.toString()}</Text>
              )}
              ItemSeparatorComponent={() => <View style={{height: 10}} />}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{flex: 1}}>
            <ScreenIcon width={wp(80)} height={hp(40)} />
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
            ItemSeparatorComponent={() => <View style={{height: 20}} />}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.rowDetails}>
            <Text style={[styles.priceText]}>
              4 <Text style={styles.numTexts}>/3 row</Text>
            </Text>
            <Text style={styles.crossText}>&times;</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.payView}>
          <Text style={styles.priceLabel}>Total Price</Text>
          <Text style={styles.priceText}>{'$ 50'}</Text>
        </View>
        <Pressable style={styles.selectSeatBtn}>
          <Text style={styles.btnText}>Proceed to pay</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};
