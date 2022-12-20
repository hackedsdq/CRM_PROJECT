
import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
  });


  const BillTo = (props) => (
    
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To:</Text>
        <Text>Société: {props.nom}</Text>
        <Text>Adresse:{props.adresse}</Text>
        <Text>Téléphone: {props.tel}</Text>
        
    </View>
  );
  
  export default BillTo