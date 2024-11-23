import {Button, Header, ScreenWrapper, SeatsCard} from '@components';

import {DummySlots, dates} from '@constants';
import {useAppNavigation} from '@hooks';
import React, {useState} from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {useStyles} from './style';
import {BackIcon} from '@assets';

export const SeatSelection = () => {
  const navigation = useAppNavigation();

  const {styles, iconSize, conditionalBgColor} = useStyles();
  const [selected, setSelected] = useState(5);

  const DatesList = () => {
    const RenderDates = ({item}: {item: number}) => {
      const isActive = selected == item;
      return (
        <TouchableOpacity
          style={[
            styles.roundView,
            conditionalBgColor(isActive).bgColor,
            isActive && styles.shadow,
          ]}
          onPress={() => setSelected(item)}>
          <Text
            style={[
              styles.itemText,
              {
                color: selected == item ? '#F6F6FA' : 'black',
              },
            ]}>{`${item} Mar`}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <Text style={styles.dateText}>Date</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dates}
          renderItem={RenderDates}
          contentContainerStyle={{gap: 10}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  const SeatsList = () => {
    const [activeCard, setActiveCard] = useState(DummySlots[0].id);

    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DummySlots}
          contentContainerStyle={{gap: 20}}
          renderItem={({item}) => {
            return (
              <SeatsCard
                item={item}
                activeCard={activeCard}
                onChangeSelection={(id: number) => setActiveCard(id)}
              />
            );
          }}
          keyExtractor={(item, index) => index?.toString()}
        />
      </View>
    );
  };

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
        <DatesList />
        <View style={styles.spacer} />
        <SeatsList />
        <View style={styles.footer}>
          <Pressable
            style={styles.selectSeatBtn}
            onPress={() => navigation.navigate('ticket-booking')}>
            <Text style={styles.btnText}>Select Seats</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};
