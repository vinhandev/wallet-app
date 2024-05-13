import { Animated, View, UIManager, Platform } from 'react-native';
import { styles } from './TinderSwipe.styles';
import { NoCard } from './components/NoCard';
import { useDeckViewController } from './hooks';
import { Card } from './components';
import constant from './constant';
import utils from './utils';

utils.configLayoutAnimation();

export default function Deck() {
  const { cards, index, panResponder, getCardStyle, onAddMoreCard } =
    useDeckViewController();

  if (index >= cards.length) {
    return <NoCard title="No more card." onAddMoreCard={onAddMoreCard} />;
  }

  return (
    <View style={[styles.container, styles.cards]}>
      {cards
        .map((item, cardIndex) => {
          if (cardIndex < index) return null;

          if (cardIndex === index) {
            return (
              <Animated.View
                key={cardIndex}
                style={[getCardStyle(), styles.cardWrapper]}
                {...panResponder.panHandlers}
              >
                <Card key={cardIndex} item={item} />
              </Animated.View>
            );
          }

          return (
            <Animated.View
              key={cardIndex}
              style={[
                styles.cardWrapper,
                {
                  // moreAddedTop: each card will be visible "moreAddedTop" pixels at bottom
                  // cardIndex - index: The more index is behind, the more top pixels added to be able to see behind
                  top: constant.moreAddedTop * (cardIndex - index),
                },
              ]}
            >
              <Card key={cardIndex} item={item} />
            </Animated.View>
          );
        })
        .reverse()}
    </View>
  );
}
