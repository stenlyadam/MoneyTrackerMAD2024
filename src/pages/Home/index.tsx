import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader} from '../../components';

const Home = () => {
  return (
    <View style={styles.pageContainer}>
      <PageHeader type="withPhoto" />
      <View style={styles.contentWrapper}>
        <Text style={styles.subTitle}>Your Balance</Text>
        <Text style={styles.totalBalance}>Rp. 10.000.000</Text>
        <View style={styles.line} />
        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Cash On Hand</Text>
          <Text style={styles.subTotal}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Cash On Bank</Text>
          <Text style={styles.subTotal}>Rp. 6.000.000</Text>
        </View>
        <Text style={styles.subTitle}>Add Transaction</Text>
        <Button label="Cash On Hand" />
        <Gap height={10} />
        <Button label="Cash On Bank" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    flex: 1,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
    marginTop: 12,
  },
  totalBalance: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 18,
  },
  subTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTotal: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
});
