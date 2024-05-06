import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Button,
  Gap,
  PageHeader,
  TextInput,
  TransactionCard,
} from '../../components';
import moment from 'moment';
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  onValue,
  query,
  limitToLast,
  orderByChild,
  equalTo,
} from 'firebase/database';
import {showMessage} from 'react-native-flash-message';

const AddTransaction = ({navigation, route}) => {
  const {title, uid} = route.params;
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const db = getDatabase();
  useEffect(() => {
    const transactionsRef = query(
      ref(db, `transactions/${uid}`),
      orderByChild('category'),
      equalTo(title),
      limitToLast(3),
    );
    onValue(transactionsRef, snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const transactionsArray = [];
        Object.keys(data).map(key => {
          transactionsArray.push(data[key]);
        });
        setTransactions(transactionsArray.reverse());
      }
    });
  }, []);

  const onSubmit = () => {
    const data = {
      dateTime: moment().format('LLL'),
      description: description,
      type: type,
      amount: amount,
      category: title,
    };

    const transationRef = ref(db, `transactions/${uid}`);
    const newTransactionRef = push(transationRef);
    set(newTransactionRef, data);

    //Update balance
    const userBalanceRef = ref(db, `users/${uid}/balance`);
    get(userBalanceRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          let {total, cashOnBank, cashOnHand} = snapshot.val();
          if (type === 'Debit') {
            if (title === 'Cash On Bank') {
              cashOnBank = cashOnBank + Number(amount);
            } else {
              cashOnHand = cashOnHand + Number(amount);
            }
            total = total + Number(amount);
          } else {
            if (title === 'Cash On Bank') {
              cashOnBank = cashOnBank - Number(amount);
            } else {
              cashOnHand = cashOnHand - Number(amount);
            }
            total = total - Number(amount);
          }
          const newBalance = {
            total: total,
            cashOnBank: cashOnBank,
            cashOnHand: cashOnHand,
          };
          const userRef = ref(db, `users/${uid}/balance`);
          set(userRef, newBalance);
          //Clear text input
          setDescription('');
          setType('');
          setAmount('');

          showMessage({
            message: 'Transaksi berhasil ditambahkan',
            type: 'success',
          });
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
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
            date={item.dateTime}
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
