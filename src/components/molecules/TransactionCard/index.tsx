import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TransactionCard = ({date, desc, price, type}) => {
  return (
    <View style={styles.cardTransaction}>
      <View>
        <Text style={styles.textDate}>{date}</Text>
        <Text style={styles.textDescription}>{desc}</Text>
      </View>
      {type === 'debit' && <Text style={styles.textPriceDebit}>{price}</Text>}
      {type === 'credit' && <Text style={styles.textPriceCredit}>{price}</Text>}
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  cardTransaction: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  textDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  textDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  textPriceDebit: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#D9435E',
  },
  textPriceCredit: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#1ABC9C',
  },
});
