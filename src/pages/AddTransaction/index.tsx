import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput, TransactionCard} from '../../components/molecules';

const AddTransaction = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header
        title="Add Transaction"
        backButton
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentWrapper}>
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={17} />
        <TextInput label="Type" placeholder="Debit / Kredit" />
        <Gap height={17} />
        <TextInput label="Amount" placeholder="Amount" />
        <Gap height={17} />
        <Button label="Save" />
        <Gap height={17} />
        <Text style={styles.subTitle}>Last 3 Transactions</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TransactionCard
            date="27 June 2024"
            desc="Beli makan"
            price="20.000"
            type="Kredit"
          />
          <TransactionCard
            date="27 June 2024"
            desc="Beli Pulsa"
            price="200.000"
            type="Kredit"
          />
          <TransactionCard
            date="27 June 2024"
            desc="Transfer dari orang tua"
            price="250.000"
            type="Debit"
          />
          <TransactionCard
            date="27 June 2024"
            desc="Transfer dari teman"
            price="Rp. 200.000"
            type="Debit"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 18,
    flex: 1,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
    marginVertical: 12,
  },
});
