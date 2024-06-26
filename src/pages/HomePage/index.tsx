import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {DummyPhoto} from '../../assets/icons';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.containerWithPhoto}>
        <View>
          <Text style={styles.appTitle}>Money Tracker</Text>
          <Text style={styles.appSubTitle}>Hi, John Doe</Text>
        </View>
        <Image source={DummyPhoto} style={styles.avatar} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.subTitle}>Your Balance</Text>
        <Text style={styles.totalBalance}>Rp. 10.000.000</Text>
        <View style={styles.line} />
        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Cash On Hand</Text>
          <Text style={styles.subTotal}>Rp. 10.000.000</Text>
        </View>
        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Cash On Bank</Text>
          <Text style={styles.subTotal}>Rp. 10.000.000</Text>
        </View>
        <Text style={styles.subTitle}>Add Transaction</Text>
        <Button
          label="Cash On Hand"
          onPress={() => navigation.navigate('AddTransaction')}
        />
        <Gap height={10} />
        <Button
          label="Cash On Bank"
          onPress={() => navigation.navigate('AddTransaction')}
        />
      </View>
    </View>
  );
};

export default HomePage;

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
    marginVertical: 12,
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
  containerWithPhoto: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
