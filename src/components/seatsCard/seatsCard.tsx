import {SeatsIcon} from '@assets';
import {Card} from '@layouts';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';

import {useStyles} from './styles';

import {lazy, Suspense, useState} from 'react';

type Item = {
  range1: string;
  range2: string;
  hall: string;
  id: number;
  time: string;
};

export type SeatsCardProps = {
  item: Item;
  activeCard: number;
  onChangeSelection: (value: number) => void;
};

export const SeatsCard = ({
  item,
  activeCard,
  onChangeSelection,
}: SeatsCardProps) => {
  const {styles, seatsSize, conditionalBorderColor} = useStyles();
  const LazySeatsIcon = lazy(() => import('@assets/svgs/SeatsIcon.svg'));

  return (
    <View style={styles.cardContainer}>
      <View style={styles.timeNHallContainer}>
        <Text style={styles.itemTime}>{item?.time}</Text>
        <Text style={styles.itemHall}>{item?.hall}</Text>
      </View>
      <Pressable
        onPress={() => onChangeSelection(item.id)}
        style={[
          styles.card,
          conditionalBorderColor(activeCard === item.id).borderColor,
        ]}>
        <Suspense fallback={<ActivityIndicator size="small" />}>
          <LazySeatsIcon width={seatsSize} height={seatsSize} />
        </Suspense>
      </Pressable>

      <View style={styles.priceContainer}>
        <Text style={styles.itemHall}>From</Text>
        <Text style={styles.boldText}> {item?.range1} </Text>
        <Text style={styles.itemHall}>or</Text>
        <Text style={styles.boldText}> {item?.range2} </Text>
        <Text style={styles.itemHall}> Bonus</Text>
      </View>
    </View>
  );
};
