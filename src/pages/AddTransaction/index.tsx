import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Gap,
  PageHeader,
  TextInput,
  TransactionCard,
} from '../../components';
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  child,
  onValue,
  orderByKey,
  query,
  limitToLast,
  equalTo,
  orderByChild,
} from 'firebase/database';
import moment from 'moment';
import {showMessage} from 'react-native-flash-message';

const AddTransaction = ({navigation, route}) => {
  const {title, uid} = route.params;
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactions, setTransaction] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    const transactionRef = query(
      ref(db, 'transactions/' + uid),
      orderByChild('category'),
      equalTo(title),
      limitToLast(3),
    );
    onValue(transactionRef, snapshot => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        const transactionsArray = [];
        Object.keys(data).map(key => {
          transactionsArray.push(data[key]);
        });
        setTransaction(transactionsArray.reverse());
      }
    });
  }, []);

  const updateBalance = () => {
    const userRef = ref(db, 'users/' + uid);
    get(child(userRef, '/balance/'))
      .then(snapshot => {
        if (snapshot.exists()) {
          let {total, cashOnHand, cashOnBank} = snapshot.val();

          if (title === 'Cash On Hand') {
            if (type === 'Debit') {
              total = total + Number(amount);
              cashOnHand = cashOnHand + Number(amount);
            } else {
              total = total - Number(amount);
              cashOnHand = cashOnHand - Number(amount);
            }
            set(child(userRef, '/balance/total'), total);
            set(child(userRef, '/balance/cashOnHand'), cashOnHand);
          } else {
            if (type === 'Debit') {
              total = total + Number(amount);
              cashOnBank = cashOnBank + Number(amount);
            } else {
              total = total - Number(amount);
              cashOnBank = cashOnBank - Number(amount);
            }
            set(child(userRef, '/balance/total'), total);
            set(child(userRef, '/balance/cashOnBank'), cashOnBank);
          }
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onSubmit = () => {
    const data = {
      date: moment().format('LLL'),
      description: description,
      type: type,
      amount: amount,
      category: title,
    };
    const transactionRef = ref(db, 'transactions/' + uid);
    const newTranscationRef = push(transactionRef);
    set(newTranscationRef, data);

    updateBalance();
    showMessage({
      message: 'Transaksi berhasil ditambahkan',
      type: 'success',
    });
  };

  return (
    <ScrollView
      style={styles.pageContainer}
      showsVerticalScrollIndicato={false}>
      <PageHeader
        label={title}
        backButton
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentWrapper}>
        <TextInput
          label="Description"
          placeholder="Add the description"
          value={description}
          onChangeText={value => setDescription(value)}
        />
        <Gap height={17} />
        <TextInput
          label="Type"
          placeholder="Debit / Kredit"
          value={type}
          onChangeText={value => setType(value)}
        />
        <Gap height={17} />
        <TextInput
          label="Amount"
          placeholder="Amount"
          value={amount}
          onChangeText={value => setAmount(value)}
        />
        <Gap height={17} />
        <Button label="Save" onPress={onSubmit} />
        <Gap height={17} />
        <Text style={styles.subTitle}>Last 3 Transactions</Text>
        {transactions.map(item => (
          <TransactionCard
            date={item.date}
            desc={item.description}
            price={item.amount}
            type={item.type}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
    marginVertical: 12,
  },
});
