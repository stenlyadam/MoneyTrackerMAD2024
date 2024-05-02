import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  Button,
  Gap,
  PageHeader,
  TextInput,
  TransactionCard,
} from '../../components';

const AddTransaction = ({navigation, route}) => {
  const {title} = route.params;
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
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={17} />
        <TextInput label="Type" placeholder="Debit / Kredit" />
        <Gap height={17} />
        <Button label="Save" />
        <Gap height={17} />
        <Text style={styles.subTitle}>Last 3 Transactions</Text>
        <TransactionCard
          date="17 April 2024"
          desc="Water, Food"
          price="-Rp. 400.000"
          type="debit"
        />
        <TransactionCard
          date="17 April 2024"
          desc="Office supplies"
          price="-Rp. 400.000"
          type="debit"
        />
        <TransactionCard
          date="17 April 2024"
          desc="Top Up"
          price="Rp. 400.000"
          type="credit"
        />
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
