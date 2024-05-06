import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Gap, PageHeader} from '../../components';
import {getDatabase, ref, child, get, onValue} from 'firebase/database';

const Home = ({navigation, route}) => {
  const [user, setUser] = useState({});
  const [totalBalance, setTotalBalance] = useState(0);
  const [cashOnHand, setCashOnHand] = useState(0);
  const [cashOnBank, setCashOnBank] = useState(0);

  const {uid} = route.params;
  const db = getDatabase();
  useEffect(() => {
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      setUser(data);
      setTotalBalance(data.balance.total);
      setCashOnHand(data.balance.cashOnHand);
      setCashOnBank(data.balance.cashOnBank);
    });
  }, []);

  return (
    <View style={styles.pageContainer}>
      <PageHeader
        type="withPhoto"
        source={{uri: user.photo}}
        userName={user.fullName}
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.subTitle}>Your Balance</Text>
        <Text style={styles.totalBalance}>Rp. {totalBalance}</Text>
        <View style={styles.line} />
        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Cash On Hand</Text>
          <Text style={styles.subTotal}>Rp. {cashOnHand}</Text>
        </View>
        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Cash On Bank</Text>
          <Text style={styles.subTotal}>Rp. {cashOnBank}</Text>
        </View>
        <Text style={styles.subTitle}>Add Transaction</Text>
        <Button
          label="Cash On Hand"
          onPress={() =>
            navigation.navigate('AddTransaction', {title: 'Cash On Hand'})
          }
        />
        <Gap height={10} />
        <Button
          label="Cash On Bank"
          onPress={() =>
            navigation.navigate('AddTransaction', {title: 'Cash On Bank'})
          }
        />
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
});
