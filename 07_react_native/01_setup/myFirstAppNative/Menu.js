import React, { Component } from "react";
// import { connect } from "react-redux";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './css';

function getMenu(props) {
  if (props.menuText === "Menu 1 text") {return (
    <ScrollView>
      <View style={styles.body}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> My dream </Text>
          <Image source={require('./montagne.png')} style={{
            width: 251,
            height: 351,
            resizeMode: Image.resizeMode.contain
            }} />
        <Text style={{margin: 10, textAlign: 'justify'}}>
                      J'habite à La Tzoumaz, un petit coin de paradis où l'on trouve tout ce qu'il nous faut pour s'amuser.
              Je suis un grand passionné de ski d'alpinisme et de grimpe c'est pourquoi j ai choisis de devenir guide.
              Je me ferais un plaisir de vous faire découvrir mon univers.

              Jeune, motivé, je m'adapte à tous les niveaux.

              N'hésitez pas à me contacter pour réaliser l'un de vos rêves !`
        </Text>
      </View>
    </ScrollView>
    )
  } else if (props.menuText === "Menu 2 text") {
    return (
      <ScrollView>
        <View style={styles.body}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> A table </Text>
          <Image source={require('./welsh.png')} style={{
            width: 251,
            height: 351,
            resizeMode: Image.resizeMode.contain
            }} />
          <Text style={{margin: 10, textAlign: 'justify'}}>
          Originaire du Pays de Galles, le welsh est désormais un plat typique proposé dans le Nord de la France. Cette recette traditionnelle est une variante du croque-monsieur, une tranche de pain garnie de jambon et cuite dans un plat à gratin, nappée d’une sauce au cheddar fondu , à la bière et à la moutarde. Le plus souvent, le welsh complet est surmonté d’un œuf au plat et proposé avec des frites. Facile à préparer et délicieusement gourmande, testez dès à présent cette recette hivernale et réconfortante par excellence !
          Originaire du Pays de Galles, le welsh est désormais un plat typique proposé dans le Nord de!
          </Text>
        </View>
      </ScrollView>
    )
  } else {
    return (<View style={styles.body}>
      <Text > {props.menuText} </Text>
    </View>
    )
  }
}

export default getMenu;
